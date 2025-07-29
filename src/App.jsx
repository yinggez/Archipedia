
import { supabase } from './supabaseClient'
import './result_table.css';
import { useState } from 'react'
import './components/query.css'
import ProjectFilters from './components/ProjectFilters';
import SideBar from './components/SideBar';
import ColumnSelector from './components/ColumnSelector';

function App() {
  const [project_filters, setProject_filters] = useState({
    continent: '',
    PR_year: '',
    ownership_form: '',
    project_id: '',
    name: '',
    city: '',
    country: '',
    ownership: '',
    project_type: '',
    status: '',
    budget: '',
    keywords: '',
    link_primary: '',
    link_secondary: '',
    link_origin: '',
    num_images: '',
    num_texts: '',
    num_videos: '',
    state: '',
    firm: '',
    visualizer: '',
    area_builtup: '',
    area_site: '',
    notes: ''
  })

  const [media_filters, setMedia_filters] = useState({
    source_type: '',
    media_name: '',
    project_id: '',
    filename: '',
    folder_path: '',
    type: '',
    source_link: '',
    notes_on_sourcetype: ''
  })

  const [analysis_filters, setAnalysis_filters] = useState({
    veg_coverage_on_buildings: '',
    animals: '',
    document_name: '',
    type_of_visualization: '',
    color_hues: '',
    method_of_visualization: '',
    human_presence: '',
    seasonal_context: '',
    time_of_day: '',
    weather: '',
    mood: '',
    water: '',
    veg_coverage_in_img: '',
    super_interesting: ''
  })

  const [columns, setColumns] = useState({
    continent: false,
    PR_year: false,
    ownership_form: false,
    project_id: false,
    name: true,
    city: false,
    country: false,
    ownership: false,
    project_type: false,
    status: false,
    budget: false,
    keywords: false,
    link_primary: false,
    link_secondary: false,
    link_origin: false,
    num_images: false,
    num_texts: false,
    num_videos: false,
    state: false,
    firm: false,
    visualizer: false,
    area_builtup: false,
    area_site: false,
    notes: false
    //TO-DO: change columns to true as needed
  })

  const [media_columns, setMedia_columns] = useState({
    source_type: false,
    media_name: false,
    project_id: false,
    filename: false,
    folder_path: false,
    type: false,
    source_link: false,
    notes_on_sourcetype: false
  })

  const [analysis_columns, setAnalysis_columns] = useState({
    veg_coverage_on_buildings: false,
    animals: false,
    document_name: false,
    type_of_visualization: false,
    color_hues: false,
    method_of_visualization: false,
    human_presence: false,
    seasonal_context: false,
    time_of_day: false,
    weather: false,
    mood: false,
    water: false,
    veg_coverage_in_img: false,
    super_interesting: false
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(analysis_filters);
    handleQuery({ project_filters, media_filters, analysis_filters, columns, media_columns, analysis_columns })
  }
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const getImageUrl = (path) => {
    const { data } = supabase.storage.from('mediafiles').getPublicUrl(path);

    return data.publicUrl;
  };
  

  const handleQuery = async ({ project_filters, media_filters, analysis_filters, columns, media_columns, analysis_columns }) => {
    setLoading(true)

    try {

      const joinMedia = Object.values(media_columns).some(val => val !== false);
      const joinAnalysis = Object.values(analysis_columns).some(val => val !== false);
      const filterMedia = Object.values(media_filters).some(val => val !== '');
      const filterAnalysis = Object.values(analysis_filters).some(val => val !== '');
      console.log(analysis_filters);
      const selectedProjectCols = Object.entries(columns)
      .filter(([_, isChecked]) => isChecked)
      .map(([col]) => col);
      const mediaCols = Object.entries(media_columns)
        .filter(([_, isChecked]) => isChecked)
        .map(([col]) => col);
      const analysisCols = Object.entries(analysis_columns)
        .filter(([_, isChecked]) => isChecked)
        .map(([col]) => col);

    const projectSelect = selectedProjectCols.length > 0 ? selectedProjectCols.join(', ') : '*';
    let selectClause = projectSelect + `, mediafiles!inner(analysis!inner(${analysisCols.join(', ')}))`;

    if (joinAnalysis && joinMedia) {
      selectClause = projectSelect + `, mediafiles!inner(${mediaCols.join(', ')}, analysis!inner(${analysisCols.join(', ')}))`
    } else if (joinAnalysis){
      selectClause = projectSelect + `, mediafiles!inner(analysis!inner(${analysisCols.join(', ')}))`
    } else if (joinMedia) {
      selectClause = projectSelect + `, mediafiles!inner(${mediaCols.join(', ')}, analysis!inner())`;
    }
        
    let query = supabase.from('projects').select(selectClause);
        Object.entries(project_filters).forEach(([key, value]) => {
          if (value) query = query.eq(key, value)
        })
    
        if (filterMedia) {
          Object.entries(media_filters).forEach(([key, value]) => {
            if (value) query = query.eq(`mediafiles.${key}`, value)
          })
        }
        if (filterAnalysis) {
          Object.entries(analysis_filters).forEach(([key, value]) => {
            if (Array.isArray(value) && value.length > 0) {
              // Apply OR logic for multiple values
              query = query.in(`mediafiles.analysis.${key}`, value);
            } else if (value) {
              // Regular single filter
              query = query.eq(`mediafiles.analysis.${key}`, value);
            }
          });
        }
    
        const { data, error } = await query;
    
        if (error) {
          console.error('Supabase error:', error)
          alert('Query failed. Check console for details.')
        } else {
          setResults(data);
          console.log(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err)
      }

    setLoading(false)
  }

  return (
    <div className="app-container">
      
      <h1 className="text-2xl font-bold mb-4">ArchiPedia</h1>
      <form onSubmit={handleSubmit} className="query-form">
        <header className="sticky-header">
        <legend>Filter based on Project Information</legend>
            <ProjectFilters filters={project_filters} setFilters={setProject_filters} />
            <button type="submit" className="submit-btn">Run Query</button>
        </header>

        <div className="query-main">
        <aside className="sidebar">
          <SideBar
            media_filters={media_filters}
            setMedia_filters={setMedia_filters}
            analysis_filters={analysis_filters}
            setAnalysis_filters={setAnalysis_filters}
          />
        </aside>
        <section className="main-content">
          <ColumnSelector
            columns={columns}
            setColumns={setColumns}
            media_columns={media_columns}
            setMedia_columns={setMedia_columns}
            analysis_columns={analysis_columns}
            setAnalysis_columns={setAnalysis_columns}
          />
          
        
      <h2>Results</h2>
        {loading && <p>Loading...</p>}

        {!loading && results.length > 0 && (
          <table className="table-auto border-collapse border mt-6 w-full">
            <thead>
              <tr>
                {Object.keys(results[0]).map((key) => (
                  <th key={key} className="border p-2 bg-gray-100">{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((row, idx) => (
                <tr key={idx}>
                  {Object.entries(row).map(([key, val], i) => {

                    // Case 1: Handle 'mediafiles' array
                    if (key === 'mediafiles' && Array.isArray(val)) {
                      return (
                        <td key={i} className="border p-2">
                          {val.map((media, j) => {
                            const path = `${media.folder_path}/${media.filename}`;
                            const imageUrl = getImageUrl(path);
                            return (
                              <div key={j} className="mb-4">
                                <a href={imageUrl} target='_blank' rel="noopener noreferrer"><img src={imageUrl} alt={media.media_name} width="150" /></a>
                                <p className="text-sm font-semibold mt-1">{media.media_name}</p>
                                <p className="text-xs text-gray-600">Filename: {media.filename}</p>
                                {media.analysis && typeof media.analysis === 'object' && (
                          <div className="mt-1 text-xs text-green-700">
                            {Object.entries(media.analysis).map(([k, v], idx) => (
                              <p key={idx}>
                                {k.replace(/_/g, ' ')}: {v}
                              </p>
                            ))}
                          </div>
                        )}
                              </div>
                            );
                          })}
                        </td>
                      );
                    }

                    // Case 2: Other nested objects
                    if (typeof val === 'object' && val !== null) {
                      return (
                        <td key={i} className="border p-2">
                          <pre className="whitespace-pre-wrap text-xs">{JSON.stringify(val, null, 2)}</pre>
                        </td>
                      );
                    }

                    // Case 3: Simple fields
                    return (
                      <td key={i} className="border p-2">{val}</td>
                    );
                  })}
                </tr>
              ))}
            </tbody>

          </table>
        )}

        {!loading && results.length === 0 && (
          <p className="mt-4 text-gray-500">No results found.</p>
        )}
        </section>
        </div>

</form>
    </div>
  )
}

export default App

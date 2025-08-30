import { supabase } from './supabaseClient';
import { Link } from "react-router-dom";
import { useState, useRef } from 'react';

import './query.css';
import './result_table.css';

import ProjectFilters from './components/ProjectFilters';
import SideBar from './components/SideBar';
import ColumnSelector from './components/ColumnSelector';

function QueryPage() {
    const wrapFields = [
        "ownership",
        "firm",
        "keywords",
        "project_type",
        "status",
        "link_primary",
        "link_secondary",
        "link_origin",
        "notes"
      ];
    const collapseRef = useRef(null);
    const [project_filters, setProject_filters] = useState({
      name: '',
      project_id: '',
      city: '',
      country: '',
      continent: '',
      PR_year: '', 
      ownership_form: '',
      firm: '',
      visualizer: '',
      keywords: '',
    })
  
    const [media_filters, setMedia_filters] = useState({
      filename: '',
      folder_path: '',
      type: '',
      source_type: '',
    })
  
    const [analysis_filters, setAnalysis_filters] = useState({
      human_presence: '',
      animals: '',
      veg_coverage_in_img: '',
      veg_coverage_on_buildings: '',
      water: '',
      seasonal_context: '',
      time_of_day: '',
      weather: '',
      mood: '',
      type_of_visualization: '',
      method_of_visualization: '',
      color_hues: '',
      super_interesting: ''
    })
  
    const [columns, setColumns] = useState({
      name: false,
      project_id: false,
      city: false,
      country: false,
      continent: false,
      PR_year: false,
      ownership_form: false,
      ownership: false,
      firm: false,
      visualizer: false,
      num_images: false,
      num_texts: false,
      num_videos: false,
      keywords: false,
      project_type: false,
      status: false,
      budget: false, 
      state: false,
      area_builtup: false,
      area_site: false,
      link_primary: false,
      link_secondary: false,
      link_origin: false,
      notes: false
      
    })
  
    const [media_columns, setMedia_columns] = useState({
      source_type: false,
      filename: false,
      folder_path: false,
      type: false,
      notes_on_sourcetype: false,
      source_link: false,
    })
  
    const [analysis_columns, setAnalysis_columns] = useState({
      human_presence: false,
      animals: false,
      water: false,
      veg_coverage_in_img: false,
      veg_coverage_on_buildings: false,
      seasonal_context: false,
      time_of_day: false,
      weather: false,
      type_of_visualization: false,
      method_of_visualization: false,
      color_hues: false,
      mood: false,
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
      setLoading(true);
      if (collapseRef.current) {
        collapseRef.current.open = false;
      }
      try {
        console.log(project_filters);
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
            if (value === "NULL") {
              query = query.is(key, null); 
            } else if (value) {
              query = query.eq(key, value);
            }
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
        <Link to="/">
        <h3 className="text-2xl font-bold mb-4">ArchiPedia</h3>
      </Link>
        
        <form onSubmit={handleSubmit} className="query-form">
          <header className="sticky-header">
          <fieldset className="filter-fieldset">
              <legend>Filter based on Project Information</legend>
              <ProjectFilters filters={project_filters} setFilters={setProject_filters} />
              <button type="submit">Run Query</button>
              </fieldset>
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
              collapseRef={collapseRef}
            />
            
          
        <h2>Results</h2>
          {loading && <p>Loading...</p>}
  
          {!loading && results.length > 0 && (
            
            <div>
              <p>{results.length} {results.length === 1 ? 'project' : 'projects'} found {' — '}
        {results.reduce((acc, row) => {
          if (Array.isArray(row.mediafiles)) {
            return acc + row.mediafiles.length;
          }
          return acc;
        }, 0)}{' '}
        {results.reduce((acc, row) => Array.isArray(row.mediafiles) ? acc + row.mediafiles.length : acc, 0) === 1 ? 'image' : 'images'} found</p>
        <div className='scrollable'>
        <div className="mask">
            <table className="border-collapse border w-full text-xs">
              <thead>
                <tr>
                  {Object.keys(results[0]).map((key) => (
                            <th key={key} className={`border p-2 bg-gray-100 ${wrapFields.includes(key) ? "wrap-col" : "nowrap-col"}`}>{key}</th>
                          ))}
                </tr>
              </thead>
              <tbody>
  {results.map((row, idx) => (
    <tr key={idx}>
      {Object.entries(row).map(([key, val], i) => {
        
        if (key === 'mediafiles' && Array.isArray(val)) {
          return (
            <td key={i} className="border p-2">
              <table className="border-collapse border w-full text-xs">
                <thead>
                  <tr>
                    <th className="border p-1">Image</th>
                    {/* media files header */}
                    {Object.keys(val[0] || {})
                    .filter((field) => field !== "analysis" && field !== "folder_path" && field !== "filename")
                    .map((field) => (
                        <th key={field} className="border p-1">
                        {field.replace(/_/g, " ")}
                        </th>
                    ))}
                    {/* analysis header */}
                    {val[0]?.analysis &&
                      Object.keys(val[0].analysis).map((field) => (
                        <th key={field} className="border p-1">
                          {field.replace(/_/g, " ")}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {val.map((media, j) => {
                    const path = `${media.folder_path}/${media.filename}`;
                    const imageUrl = getImageUrl(path);

                    return (
                      <tr key={j}>
                        <td className="border p-1">
                          <a
                            href={imageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={imageUrl}
                              alt={media.media_name}
                              width="100"
                            />
                          </a>
                        </td>
                        
                        {/* mediafile fields */}
                        {Object.keys(media)
                        .filter((field) => field !== "analysis" && field !== "folder_path" && field !== "filename")
                        .map((field) => (
                            <td key={field} className="border p-1 mafields">
                            {media[field]}
                            </td>
                        ))}

                        {/* analysis fields */}
                        {media.analysis &&
                          Object.entries(media.analysis).map(([k, v]) => (
                            <td key={k} className="border p-1 mafields">
                              {v}
                            </td>
                          ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </td>
          );
        }

        if (typeof val === "object" && val !== null) {
          return (
            <td key={i} className="border p-2">
              <pre className="whitespace-pre-wrap text-xs">
                {JSON.stringify(val, null, 2)}
              </pre>
            </td>
          );
        }

        return (
          <td key={i} className={`border p-2 ${wrapFields.includes(key) ? "wrap-col" : "nowrap-col"}`}>
            {val}
          </td>
        );
      })}
    </tr>
  ))}
</tbody>

            </table>
            </div>
            </div>
          </div>
          
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

export default QueryPage;
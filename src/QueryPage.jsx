import { supabase } from './supabaseClient';
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';

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
      ];//This is for wrapping text in the result text boxes

    const collapseRef = useRef(null);
    //dropdown boxes for filtering based on project info
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
 
    //column selector for project columns, dynamically updating according to the database
    const [columns, setColumns] = useState({});

    useEffect(() => {
      async function loadColumns() {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .limit(1);
    
        if (error) {
          console.error("Column fetch error:", error);
          return;
        }
    
        if (data && data.length > 0) {
          const colNames = Object.keys(data[0]);
    
          // Ignore columns you don’t want
          const excluded = ["created_at", "updated_at"];//these are dummy values, can be replaced
          const filtered = colNames.filter(col => !excluded.includes(col));
    

          const dynamicColumns = filtered.reduce((acc, col) => {
            acc[col] = true; // default: all checked
            return acc;
          }, {});
    
          setColumns(dynamicColumns);
        }
      }
    
      loadColumns();
    }, []);
  
    //media columns are constant
    const [media_columns, setMedia_columns] = useState({
      source_type: false,
      filename: false,
      folder_path: false,
      type: false,
      notes_on_sourcetype: false,
      source_link: false,
    })
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      handleQuery({ project_filters, media_filters, columns, media_columns })
    }
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
  
    const getImageUrl = (path) => {
      const { data } = supabase.storage.from('mediafiles').getPublicUrl(path);
  
      return data.publicUrl;
    };
    
    //handling run query
    const handleQuery = async ({ project_filters, media_filters, columns, media_columns }) => {
      setLoading(true);
      if (collapseRef.current) {
        collapseRef.current.open = false;
      }
      try {
        console.log(project_filters);
        const joinMedia = Object.values(media_columns).some(val => val !== false);
        
        const filterMedia = Object.values(media_filters).some(val => val !== '');
        
        const selectedProjectCols = Object.entries(columns)
        .filter(([_, isChecked]) => isChecked)
        .map(([col]) => col);
        const mediaCols = Object.entries(media_columns)
          .filter(([_, isChecked]) => isChecked)
          .map(([col]) => col);
        
  
        const projectSelect = selectedProjectCols.length > 0 ? selectedProjectCols.join(', ') : '*';
        let selectClause = projectSelect;

        if (joinMedia) {
          selectClause += `, mediafiles (${mediaCols.join(", ")})`;
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
              
            />
          </aside>
          <section className="main-content">         
              <ColumnSelector
                columns={columns}
                setColumns={setColumns}
                media_columns={media_columns}
                setMedia_columns={setMedia_columns}
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
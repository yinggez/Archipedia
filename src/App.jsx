// import { useState } from 'react';
// import { supabase } from './supabaseClient';

// export default function ProjectMediaSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [mediaFiles, setMediaFiles] = useState([]);

//   const handleSearch = async () => {
//     // Step 1: Find project_id from projects table
//     const { data: projectData, error: projectError } = await supabase
//       .from('Projects')
//       .select('project_id')
//       .ilike('name', `%${searchTerm}%`);

//     if (projectError || !projectData || projectData.length === 0) {
//       console.error('Project not found:', projectError);
//       setMediaFiles([]);
//       return;
//     }
    
//     const projectId = projectData[0].project_id;
//     console.log(projectId);
//     // Step 2: Find media files using project_id
//     const { data: mediaData, error: mediaError } = await supabase
//       .from('Media Files')
//       .select('filename, folder_path')
//       .ilike('project_id', projectId);
//     if (mediaError) {
//       console.error('Media fetch error:', mediaError);
//     } else {
//       console.log(mediaData);
//       setMediaFiles(mediaData);
//     }
//   };

//   const getImageUrl = (path) => {
//     console.log(path);
//     const { data } = supabase.storage.from('mediafiles').getPublicUrl(path);
//     console.log(data);
//     return data.publicUrl;
//   };

//   return (
//     <div>
//       <h2>Search Project Media</h2>
//       <input
//         type="text"
//         placeholder="Enter project name"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
//         {mediaFiles.map((file, idx) => (
//           <div key={idx}>
//             <p>{file.filename}</p>
//             <img src={getImageUrl(file.folder_path + '/'+file.filename)} alt={file.image_name} width="200" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useState } from 'react'
import QueryForm from './components/QueryForm'
import { supabase } from './supabaseClient'

function App() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const getImageUrl = (path) => {
    const { data } = supabase.storage.from('mediafiles').getPublicUrl(path);
    console.log(data);
    return data.publicUrl;
  };
  

  const handleQuery = async ({ project_filters, media_filters, analysis_filters, columns, media_columns, analysis_columns }) => {
    setLoading(true)

    try {

      const joinMedia = Object.values(media_columns).some(val => val !== false);
      const joinAnalysis = Object.values(analysis_columns).some(val => val !== false);
      const filterMedia = Object.values(media_filters).some(val => val !== '');
      const filterAnalysis = Object.values(analysis_filters).some(val => val !== '');
      console.log(media_filters);
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
            if (value) query = query.eq(`mediafiles.analysis.${key}`, value)
            console.log(query);
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
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Project Query Interface</h1>
      <QueryForm onSubmit={handleQuery} />

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

        // Case 1: 'Media Files' nested data with image info
        if (key === 'mediafiles' && Array.isArray(val)) {
          return (
            <td key={i} className="border p-2">
              {val.map((media, j) => {
                const path = `${media.folder_path}/${media.filename}`;
                const imageUrl = getImageUrl(path);
                return (
                  <div key={j} className="mb-2">
                    <img src={imageUrl} alt={media.media_name} width="150" />
                    <p className="text-xs">{media.filename}</p>
                  </div>
                );
              })}
            </td>
          );
        }

        // Case 2: Other nested objects (like Analysis)
        if (typeof val === 'object' && val !== null) {
          return (
            <td key={i} className="border p-2">
              <pre className="whitespace-pre-wrap text-xs">{JSON.stringify(val, null, 2)}</pre>
            </td>
          );
        }

        // Case 3: Simple values
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
    </div>
  )
}

export default App

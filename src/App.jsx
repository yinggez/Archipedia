import { useState } from 'react';
import { supabase } from './supabaseClient';

export default function ProjectMediaSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mediaFiles, setMediaFiles] = useState([]);

  const handleSearch = async () => {
    // Step 1: Find project_id from projects table
    const { data: projectData, error: projectError } = await supabase
      .from('Projects')
      .select('project_id')
      .ilike('name', `%${searchTerm}%`);

    if (projectError || !projectData || projectData.length === 0) {
      console.error('Project not found:', projectError);
      setMediaFiles([]);
      return;
    }
    
    const projectId = projectData[0].project_id;
    console.log(projectId);
    // Step 2: Find media files using project_id
    const { data: mediaData, error: mediaError } = await supabase
      .from('Media Files')
      .select('filename, folder_path')
      .ilike('project_id', projectId);
    if (mediaError) {
      console.error('Media fetch error:', mediaError);
    } else {
      console.log(mediaData);
      setMediaFiles(mediaData);
    }
  };

  const getImageUrl = (path) => {
    console.log(path);
    const { data } = supabase.storage.from('mediafiles').getPublicUrl(path);
    console.log(data);
    return data.publicUrl;
  };

  return (
    <div>
      <h2>Search Project Media</h2>
      <input
        type="text"
        placeholder="Enter project name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        {mediaFiles.map((file, idx) => (
          <div key={idx}>
            <p>{file.filename}</p>
            <img src={getImageUrl(file.folder_path + '/'+file.filename)} alt={file.image_name} width="200" />
          </div>
        ))}
      </div>
    </div>
  );
}

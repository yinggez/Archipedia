import { useState } from 'react'

const QueryForm = ({ onSubmit }) => {
  const [project_filters, setProject_filters] = useState({
    continent: '',
    PR_year: '',
    ownership_form: ''
    // TODO: add all other columns from project
  })

  //no need to change
  const [media_filters, setMedia_filters] = useState({
    source_type: '',
  })

  const [analysis_filters, setAnalysis_filters] = useState({
    veg_coverage_on_buildings: '',
    animals: '',
    // TODO: add all other tags from analysis
  })

  const [columns, setColumns] = useState({
    name: true,
    PR_year: true,
    num_images: false,
    num_videos: false,
    num_texts: false,
    city: false,
    state: false,
    country: false,
    continent: false
    //add more from the projects columns
    
  })

  const [media_columns, setMedia_columns] = useState({
    filename: false,
    folder_path: false,
    media_name: false,
    //add more media columns
  })

  //These don't need to be changed at the moment
  const [analysis_columns, setAnalysis_columns] = useState({
    veg_coverage_on_buildings: false,
  })

  const handleProjectChange = (e) => {
    setProject_filters({ ...project_filters, [e.target.name]: e.target.value })
  }
  const handleMediaChange = (e) => {
    setMedia_filters({ ...media_filters, [e.target.name]: e.target.value })
  }
  const handleAnalysisChange = (e) => {
    setAnalysis_filters({ ...analysis_filters, [e.target.name]: e.target.value })
  }
  
  const handleCheckboxChange = (e) => {
    setColumns({ ...columns, [e.target.name]: e.target.checked })
  }
  const handleCheckboxMedia = (e) => {
    setMedia_columns({ ...media_columns, [e.target.name]: e.target.checked })
  }

  const handleCheckboxAnalysis = (e) => {
    setAnalysis_columns({ ...analysis_columns, [e.target.name]: e.target.checked })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ project_filters, media_filters, analysis_filters, columns, media_columns, analysis_columns })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Dropdown Continent */}
      <label>
        Continent:
        <select name="continent" onChange={handleProjectChange}>
            <option value="">All</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Australia">Australia</option>
            <option value="Antarctica">Antarctica</option>
        </select>
      </label>
      {/* Ownership form */}
      <label>
        Ownership Type:
        <select name="ownership_form" onChange={handleProjectChange}>
            <option value="">All</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
            <option value="Public–Private Partnership">Public–Private Partnership</option>
        </select>
      </label>

    {/*  TODO: Add the corresponding columns of the project table here in the same format as above, change the name, value and text 
    with onChange={handleProjectChange}
    
    */}






















      {/* Visualizer form */}
      <label>
        Visualizer Type:
        <select name="source_type" onChange={handleMediaChange}>
            <option value="">All</option>
            <option value="Design Firm / Architectural Firm Website">Design Firm / Architectural Firm Website</option>
            <option value="Project Website">Project Website</option>
            <option value="Architectural Media">Architectural Media</option>
            <option value="Project Owner Website">Project Owner Website</option>
            <option value="Visualization Firm Website">Visualization Firm Website</option>
        </select>
      </label>

      {/* Tags */} 
      <label>
        Vegetation coverage on buildings:
        <select name="veg_coverage_on_buildings" onChange={handleAnalysisChange}>
            <option value="">/</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
        </select>
      </label>
      <label>
        Animals:
        <select name="animals" onChange={handleAnalysisChange}>
            <option value="">/</option>
            <option value="None">None</option>
            <option value="Pets">Pets</option>
            <option value="Birds">Birds</option>
            <option value="Wildlife">Wildlife</option>
            <option value="Mixture of Animals">Mixture of Animals</option>
            <option value="Other">Other</option>
        </select>
      </label>

      {/* TODO: Add the corresponding columns of the analysis table here in the same format as above, change the name, value and text 
       with onChange={handleAnalysisChange}
      
      */}


















      {/* Text input */}
      <label>
        Name of Project
        <input
            type="text"
            name="name"
            placeholder="Name of Project"
            onChange={handleProjectChange}
            className="border p-2"
        />
      </label>
      {/*  TODO: Add more text input fields */}

      {/* Checkbox group */}
      <div className="grid grid-cols-2 gap-2">
        <label>
          <input
            type="checkbox"
            name="name"
            checked={columns.name}
            onChange={handleCheckboxChange}
          />
          Project Name
        </label>

        <label>
          <input
            type="checkbox"
            name="PR_year"
            checked={columns.PR_year}
            onChange={handleCheckboxChange}
          />
          Year of first Press Release
        </label>
        {/*  TODO:  Add more check boxes with onChange={handleCheckboxChange} */}













        <label>
          <input
            type="checkbox"
            checked={media_columns.folder_path}
            onChange={(e) => {
                const checked = e.target.checked;
                setMedia_columns((prev) => ({
                  ...prev,
                  filename: checked,
                  folder_path: checked
                }));
              }}
          />
          Show images
        </label>
        
        <label>
          <input
            type="checkbox"
            name="media_name"
            checked={media_columns.name}
            onChange={handleCheckboxMedia}
          />
          Media Name
        </label>
        {/*  TODO:  Add more check boxes with onChange={handleCheckboxMedia} */}




        <label>
          <input
            type="checkbox"
            name="veg_coverage_on_buildings"
            checked={analysis_columns.veg_coverage_on_buildings}
            onChange={handleCheckboxAnalysis}
          />
          veg_coverage_on_buildings
        </label>
       {/*  TODO:  Add more check boxes with onChange={handleCheckboxAnalysis} */}







      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Run Query
      </button>
    </form>
  )
}

export default QueryForm

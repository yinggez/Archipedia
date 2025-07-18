import { useState } from 'react'

const QueryForm = ({ onSubmit }) => {
  const [filters, setFilters] = useState({
    continent: '',
    PR_year: '',
    ownership_form: '',
    media_source_type: '',
    veg_coverage_on_buildings: ''
    //add all other tags
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
    continet: false
    //add more from the projects columns maybe keep a separate variable for columns of media files
    
  })

  const handleInputChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  const handleCheckboxChange = (e) => {
    setColumns({ ...columns, [e.target.name]: e.target.checked })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ filters, columns })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Dropdown example */}
      <select name="Continent" onChange={handleInputChange}>
        <option value="">None</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Europe">Australia</option>
        <option value="Antarctica">Antarctica</option>
      </select>

      <select name="Type of Ownership" onChange={handleInputChange}>
        <option value="">None</option>
        <option value="Private">Private</option>
        <option value="Public">Public</option>
        <option value="Public–Private Partnership">Public–Private Partnership</option>
      </select>
      {/* Add more dropdowns */}

      {/* Text input */}
      <input
        type="text"
        name="name"
        placeholder="Name of Project"
        onChange={handleInputChange}
        className="border p-2"
      />
      {/* Add more text input fields */}

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
        {/* Change and Add more check boxes */}
        <label>
          <input
            type="checkbox"
            name="image_path"
            checked={columns.image_path}
            onChange={handleCheckboxChange}
          />
          Image Path
        </label>

        <label>
          <input
            type="checkbox"
            name="sentiment_score"
            checked={columns.sentiment_score}
            onChange={handleCheckboxChange}
          />
          Sentiment Score
        </label>
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Run Query
      </button>
    </form>
  )
}

export default QueryForm

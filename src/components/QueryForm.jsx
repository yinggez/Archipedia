import { useState } from 'react'
import './query.css'

const QueryForm = ({ onSubmit }) => {
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
    name: false,
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
    //TO-DO: change columns to true as needed
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
    //TO-DO: change columns to true as needed
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
    <form onSubmit={handleSubmit} className="query-form">
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
      {/* Project ID */}
      <label>
        Project ID:
        <select name="project_id" onChange={handleProjectChange}>
            <option value="">All</option>
            <option value="2019001">2019001</option>
            <option value="2019002">2019002</option>
            <option value="2019003">2019003</option>
            <option value="2019004">2019004</option>
            <option value="2019005">2019005</option>
            <option value="2019006">2019006</option>
            <option value="2019007">2019007</option>
            <option value="2020001">2020001</option>
            <option value="2020002">2020002</option>
            <option value="2020003">2020003</option>
            <option value="2020004">2020004</option>
            <option value="2020005">2020005</option>
            <option value="2020006">2020006</option>
            <option value="2020007">2020007</option>
            <option value="2021001">2021001</option>
            <option value="2021002">2021002</option>
            <option value="2021003">2021003</option>
            <option value="2021004">2021004</option>
            <option value="2021005">2021005</option>
            <option value="2021006">2021006</option>
            <option value="2021007">2021007</option>
            <option value="2022001">2022001</option>
            <option value="2022002">2022002</option>
            <option value="2022003">2022003</option>
            <option value="2022004">2022004</option>
            <option value="2022005">2022005</option>
            <option value="2022007">2022007</option>
            <option value="2022008">2022008</option>
            <option value="2022009">2022009</option>
            <option value="2023001">2023001</option>
            <option value="2023002">2023002</option>
            <option value="2023003">2023003</option>
            <option value="2023004">2023004</option>
            <option value="2023005">2023005</option>
            <option value="2023006">2023006</option>
            <option value="2023007">2023007</option>
            <option value="2023008">2023008</option>
            <option value="2023009">2023009</option>
            <option value="2023010">2023010</option>
            <option value="2023011">2023011</option>
            <option value="2023013">2023013</option>
            <option value="2023014">2023014</option>
            <option value="2023016">2023016</option>
            <option value="2024001">2024001</option>
            <option value="2024002">2024002</option>
            <option value="2024003">2024003</option>
            <option value="2024006">2024006</option>
            <option value="2024007">2024007</option>
            <option value="2024008">2024008</option>
            <option value="2024009">2024009</option>
            <option value="2024010">2024010</option>
            <option value="2024011">2024011</option>
            <option value="2024012">2024012</option>
            <option value="2024013">2024013</option>
            <option value="2024014">2024014</option>
        </select>
      </label>
      {/* Project name */}
      <label>
        Project Name:
        <select name="name" onChange={handleProjectChange}>
            <option value="">All</option>
            <option value="Bokor Mountain Resort">Bokor Mountain Resort</option>
            <option value="One Bangkok">One Bangkok</option>
            <option value="Sidewalk Toronto">Sidewalk Toronto</option>
            <option value="Viinikanlahti">Viinikanlahti</option>
            <option value="Werksviertel">Werksviertel</option>
            <option value="Azabudai Hills">Azabudai Hills</option>
            <option value="New Harry Jerome Community Recreation Centre">New Harry Jerome Community Recreation Centre</option>
            <option value="Sino-Singapore Guangzhou Knowledge City (SSGKC)">Sino-Singapore Guangzhou Knowledge City (SSGKC)</option>
            <option value="North Hanoi Smart City">North Hanoi Smart City</option>
            <option value="Meishan California Smart Town (MCSC)">Meishan California Smart Town (MCSC)</option>
            <option value="Little India">Little India</option>
            <option value="Colombo Port City">Colombo Port City</option>
            <option value="Capital Gardens Master Plan">Capital Gardens Master Plan</option>
            <option value="Toyota Woven City">Toyota Woven City</option>
            <option value="Jeddah Central">Jeddah Central</option>
            <option value="Feyenoord City">Feyenoord City</option>
            <option value="Letterkenny 2040 Regeneration Strategy">Letterkenny 2040 Regeneration Strategy</option>
            <option value="Ravi Riverfront Urban Development Project">Ravi Riverfront Urban Development Project</option>
            <option value="The One Beverly Hills">The One Beverly Hills</option>
            <option value="Telosa">Telosa</option>
            <option value="Berlin TXL ">Berlin TXL </option>
            <option value="LRT City Jatibening">LRT City Jatibening</option>
            <option value="Kota Baru Parahyangan ">Kota Baru Parahyangan </option>
            <option value="Sycamore CapitaLand">Sycamore CapitaLand</option>
            <option value="South Yards by Anthem">South Yards by Anthem</option>
            <option value="The York Central Partnership">The York Central Partnership</option>
            <option value="Nusantara">Nusantara</option>
            <option value="Blue Loop">Blue Loop</option>
            <option value="The Global City">The Global City</option>
            <option value="Southwark Grounds">Southwark Grounds</option>
            <option value="Lloyd Center Redevelopment">Lloyd Center Redevelopment</option>
            <option value="New Tashkent">New Tashkent</option>
            <option value="Yuzhno-Sakhalinsk Agglomeration">Yuzhno-Sakhalinsk Agglomeration</option>
            <option value="Northwood Village">Northwood Village</option>
            <option value="West Palm Beach Downtown Master Plan">West Palm Beach Downtown Master Plan</option>
            <option value="Sydney Aerotropolis">Sydney Aerotropolis</option>
            <option value="Fishers District Expansion">Fishers District Expansion</option>
            <option value="Bally's Casino Chicago">Bally's Casino Chicago</option>
            <option value="Aghdam Reconstruction">Aghdam Reconstruction</option>
            <option value="The Heights">The Heights</option>
            <option value="On the Dot">On the Dot</option>
            <option value="FCU New Campus">FCU New Campus</option>
            <option value="Gelephu Mindfulness City">Gelephu Mindfulness City</option>
            <option value="The Line">The Line</option>
            <option value="New Administrative Capital">New Administrative Capital</option>
            <option value="Palm Jebel Ali">Palm Jebel Ali</option>
            <option value="Amaravati">Amaravati</option>
            <option value="Hongqiao Qianwan Area">Hongqiao Qianwan Area</option>
            <option value="Quartier Molson">Quartier Molson</option>
            <option value="Kau Yi Chau Artificial Islands">Kau Yi Chau Artificial Islands</option>
            <option value="Bradfield City Centre">Bradfield City Centre</option>
            <option value="Pier 42">Pier 42</option>
            <option value="Urban Cubes 71">Urban Cubes 71</option>
            <option value="South Drive">South Drive</option>
            <option value="Califonia Forever">Califonia Forever</option>
        </select>
      </label>
      {/* City */}
      <label>
        City:
        <select name="city" onChange={handleProjectChange}>
            <option value="">All</option>
            <option value="Not Applicable">Not Applicable</option>
            <option value="Bangkok">Bangkok</option>
            <option value="Toronto">Toronto</option>
            <option value="Tampere">Tampere</option>
            <option value="Munich">Munich</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Vancouver">Vancouver</option>
            <option value="Guangzhou">Guangzhou</option>
            <option value="Hanoi">Hanoi</option>
            <option value="Meishan">Meishan</option>
            <option value="Duqm">Duqm</option>
            <option value="Colombo">Colombo</option>
            <option value="Cairo">Cairo</option>
            <option value="Susono">Susono</option>
            <option value="Jeddah">Jeddah</option>
            <option value="Rotterdam">Rotterdam</option>
            <option value="Letterkenny">Letterkenny</option>
            <option value="Lahore">Lahore</option>
            <option value="Beverly Hills">Beverly Hills</option>
            <option value="Berlin">Berlin</option>
            <option value="Bekasi">Bekasi</option>
            <option value="Padalarang">Padalarang</option>
            <option value="Ho Chi Minh City">Ho Chi Minh City</option>
            <option value="Brentwood">Brentwood</option>
            <option value="York">York</option>
            <option value="Shanghai">Shanghai</option>
            <option value="Adelaide">Adelaide</option>
            <option value="Portland">Portland</option>
            <option value="Tashkent">Tashkent</option>
            <option value="Yuzhno-Sakhalinsk">Yuzhno-Sakhalinsk</option>
            <option value="West Palm Beach">West Palm Beach</option>
            <option value="Sydney">Sydney</option>
            <option value="Fishers">Fishers</option>
            <option value="Chicago">Chicago</option>
            <option value="Aghdam">Aghdam</option>
            <option value="Saint Paul">Saint Paul</option>
            <option value="Boston">Boston</option>
            <option value="Gelephu">Gelephu</option>
            <option value="Dubai">Dubai</option>
            <option value="Montréal">Montréal</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="New York City">New York City</option>
            <option value="Gurugram">Gurugram</option>
        </select>
      </label>
      {/* Country */}
      <label>
        Country:
        <select name="country" onChange={handleProjectChange}>
            <option value="">All</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Thailand">Thailand</option>
            <option value="Canada">Canada</option>
            <option value="Finland">Finland</option>
            <option value="Germany">Germany</option>
            <option value="Japan">Japan</option>
            <option value="China">China</option>
            <option value="Australia">Australia</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Egypt">Egypt</option>
            <option value="England">England</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Ireland">Ireland</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Russia">Russia</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sultanate of Oman">Sultanate of Oman</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United States of America">United States of America</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vietnam">Vietnam</option>
        </select>
      </label>
      
    {/*  TODO: Add the corresponding columns of the project table here in the same format as above, change the name, value and text 
    with onChange={handleProjectChange}, also maybe alphanumerically sort the menu?
    
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
      {/* Project Table */}
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

        <label>
          <input
            type="checkbox"
            name="project_id"
            checked={columns.project_id}
            onChange={handleCheckboxChange}
          />
          Project ID
        </label>

        <label>
          <input
            type="checkbox"
            name="city"
            checked={columns.city}
            onChange={handleCheckboxChange}
          />
          City
        </label>

        <label>
          <input
            type="checkbox"
            name="country"
            checked={columns.country}
            onChange={handleCheckboxChange}
          />
          Country
        </label>

        <label>
          <input
            type="checkbox"
            name="continent"
            checked={columns.continent}
            onChange={handleCheckboxChange}
          />
          Continent
        </label>

        <label>
          <input
            type="checkbox"
            name="ownership"
            checked={columns.ownership}
            onChange={handleCheckboxChange}
          />
          Ownership of Project
        </label>

        <label>
          <input
            type="checkbox"
            name="project_type"
            checked={columns.project_type}
            onChange={handleCheckboxChange}
          />
          Project Type
        </label>

        <label>
          <input
            type="checkbox"
            name="status"
            checked={columns.status}
            onChange={handleCheckboxChange}
          />
          Project Status
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

        <label>
          <input
            type="checkbox"
            name="budget"
            checked={columns.budget}
            onChange={handleCheckboxChange}
          />
          Project Budget
        </label>

        <label>
          <input
            type="checkbox"
            name="keywords"
            checked={columns.keywords}
            onChange={handleCheckboxChange}
          />
          Keywords used to Identify the Project
        </label>

        <label>
          <input
            type="checkbox"
            name="link_primary"
            checked={columns.link_primary}
            onChange={handleCheckboxChange}
          />
          Primary Project Link
        </label>

        <label>
          <input
            type="checkbox"
            name="link_secondary"
            checked={columns.link_secondary}
            onChange={handleCheckboxChange}
          />
          Secondary Project Link
        </label>

        <label>
          <input
            type="checkbox"
            name="link_origin"
            checked={columns.link_origin}
            onChange={handleCheckboxChange}
          />
          Nexis Uni Link
        </label>

        <label>
          <input
            type="checkbox"
            name="num_images"
            checked={columns.num_images}
            onChange={handleCheckboxChange}
          />
          Number of Images
        </label>

        <label>
          <input
            type="checkbox"
            name="num_texts"
            checked={columns.num_texts}
            onChange={handleCheckboxChange}
          />
          Number of Texts
        </label>

        <label>
          <input
            type="checkbox"
            name="num_videos"
            checked={columns.num_videos}
            onChange={handleCheckboxChange}
          />
          Number of Videos
        </label>

        <label>
          <input
            type="checkbox"
            name="firm"
            checked={columns.firm}
            onChange={handleCheckboxChange}
          />
          Project Firm
        </label>

        <label>
          <input
            type="checkbox"
            name="state"
            checked={columns.state}
            onChange={handleCheckboxChange}
          />
          Project States (as of Summer 25 IDP)
        </label>

        <label>
          <input
            type="checkbox"
            name="visualizer"
            checked={columns.visualizer}
            onChange={handleCheckboxChange}
          />
          Project Visualizer
        </label>

        <label>
          <input
            type="checkbox"
            name="ownership_form"
            checked={columns.ownership_form}
            onChange={handleCheckboxChange}
          />
          Ownership Form
        </label>

        <label>
          <input
            type="checkbox"
            name="area_builtup"
            checked={columns.area_builtup}
            onChange={handleCheckboxChange}
          />
          Builtup Area Size
        </label>

        <label>
          <input
            type="checkbox"
            name="area_site"
            checked={columns.area_site}
            onChange={handleCheckboxChange}
          />
          Site Area Size
        </label>

        <label>
          <input
            type="checkbox"
            name="notes"
            checked={columns.notes}
            onChange={handleCheckboxChange}
          />
          Notes
        </label>

        {/* Media Table */}
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
            checked={media_columns.media_name}
            onChange={handleCheckboxMedia}
          />
          Media Name
        </label>

        <label>
          <input
            type="checkbox"
            name="project_id"
            checked={media_columns.project_id}
            onChange={handleCheckboxMedia}
          />
          Project ID
        </label>

        <label>
          <input
            type="checkbox"
            name="filename"
            checked={media_columns.filename}
            onChange={handleCheckboxMedia}
          />
          Media Name
        </label>

        <label>
          <input
            type="checkbox"
            name="folder_path"
            checked={media_columns.folder_path}
            onChange={handleCheckboxMedia}
          />
          Folder of Media
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

        <label>
          <input
            type="checkbox"
            name="type"
            checked={media_columns.type}
            onChange={handleCheckboxMedia}
          />
          Media Type
        </label>

        <label>
          <input
            type="checkbox"
            name="source_type"
            checked={media_columns.source_type}
            onChange={handleCheckboxMedia}
          />
          Media Source Type
        </label>

        <label>
          <input
            type="checkbox"
            name="source_link"
            checked={media_columns.source_link}
            onChange={handleCheckboxMedia}
          />
          Media Source Link
        </label>

        <label>
          <input
            type="checkbox"
            name="notes_on_sourcetype"
            checked={media_columns.notes_on_sourcetype}
            onChange={handleCheckboxMedia}
          />
          Notes on Media Source Type
        </label>

        {/* Analysis Table */}
        <label>
          <input
            type="checkbox"
            name="veg_coverage_on_buildings"
            checked={analysis_columns.veg_coverage_on_buildings}
            onChange={handleCheckboxAnalysis}
          />
          Vegetation Coverage on Buildings
        </label>

        <label>
          <input
            type="checkbox"
            name="document_name"
            checked={analysis_columns.document_name}
            onChange={handleCheckboxAnalysis}
          />
          Document Name
        </label>

        <label>
          <input
            type="checkbox"
            name="type_of_visualization"
            checked={analysis_columns.type_of_visualization}
            onChange={handleCheckboxAnalysis}
          />
          Visualization Type
        </label>

        <label>
          <input
            type="checkbox"
            name="color_hues"
            checked={analysis_columns.color_hues}
            onChange={handleCheckboxAnalysis}
          />
          Color Hues
        </label>

        <label>
          <input
            type="checkbox"
            name="method_of_visualization"
            checked={analysis_columns.method_of_visualization}
            onChange={handleCheckboxAnalysis}
          />
          Visualization Method
        </label>

        <label>
          <input
            type="checkbox"
            name="human_presence"
            checked={analysis_columns.human_presence}
            onChange={handleCheckboxAnalysis}
          />
          Human Presence
        </label>

        <label>
          <input
            type="checkbox"
            name="seasonal_context"
            checked={analysis_columns.seasonal_context}
            onChange={handleCheckboxAnalysis}
          />
          Seasonal Context
        </label>

        <label>
          <input
            type="checkbox"
            name="time_of_day"
            checked={analysis_columns.time_of_day}
            onChange={handleCheckboxAnalysis}
          />
          Time of Day
        </label>

        <label>
          <input
            type="checkbox"
            name="weather"
            checked={analysis_columns.weather}
            onChange={handleCheckboxAnalysis}
          />
          Weather
        </label>

        <label>
          <input
            type="checkbox"
            name="mood"
            checked={analysis_columns.mood}
            onChange={handleCheckboxAnalysis}
          />
          Mood
        </label>

        <label>
          <input
            type="checkbox"
            name="water"
            checked={analysis_columns.water}
            onChange={handleCheckboxAnalysis}
          />
          Water
        </label>

        <label>
          <input
            type="checkbox"
            name="veg_coverage_in_img"
            checked={analysis_columns.veg_coverage_in_img}
            onChange={handleCheckboxAnalysis}
          />
          Vegetation Coverage in Image
        </label>

        <label>
          <input
            type="checkbox"
            name="animals"
            checked={analysis_columns.animals}
            onChange={handleCheckboxAnalysis}
          />
          Animals
        </label>

        <label>
          <input
            type="checkbox"
            name="super_interesting"
            checked={analysis_columns.super_interesting}
            onChange={handleCheckboxAnalysis}
          />
          Super Interesting
        </label>
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Run Query
      </button>
    </form>
  )
}

export default QueryForm

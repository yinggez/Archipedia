import { useState } from 'react'
import './query.css'
import ProjectFilters from './ProjectFilters';
import SideBar from './SideBar';
import ColumnSelector from './ColumnSelector';

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
    onSubmit({ project_filters, media_filters, analysis_filters, columns, media_columns, analysis_columns })
  }

  return (
    <form onSubmit={handleSubmit} className="query-form">
        <header className="sticky-header">
            Filter for Project Information
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
          </section>
        </div>

    </form>
  )
}

export default QueryForm

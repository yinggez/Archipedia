import tags from './tags.json';

const SidebarFilters = ({ media_filters, setMedia_filters, analysis_filters, setAnalysis_filters }) => {
    const handleMediaChange = (e) => {
      setMedia_filters({ ...media_filters, [e.target.name]: e.target.value });
    };
  
    const handleAnalysisChange = (e) => {
        const { name, value } = e.target;

        if (name === "human_presence" && value === "Yes") {
          const allOptions = tags["human_presence"];

          const filteredOptions = allOptions.filter(
            opt => opt !== "Yes" && opt !== "No" && opt !== "/"
          );
      
          setAnalysis_filters({
              ...analysis_filters,
              [name]: filteredOptions 
            });
        } else {
          setAnalysis_filters({
              ...analysis_filters,
              [name]: value
            });
        }
    };

    return (
        <div className="sidebar-filters">
          <fieldset>
            <legend>Filter for Media Information</legend>
            <label>
                Source of Images:
                <select name="source_type" onChange={handleMediaChange}>
                    <option value="">All</option>
                    <option value="Design Firm / Architectural Firm Website">Design Firm / Architectural Firm Website</option>
                    <option value="Project Website">Project Website</option>
                    <option value="Architectural Media">Architectural Media</option>
                    <option value="Project Owner Website">Project Owner Website</option>
                    <option value="Visualization Firm Website">Visualization Firm Website</option>
                </select>
            </label>
          </fieldset>
    
          <fieldset>
            <legend>Analysis Filters</legend>
            {/* Tags */} 
      
            {Object.entries(tags).map(([fieldName, options]) => (
                <label key={fieldName}>
                    {fieldName.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}:
                    <select name={fieldName} onChange={handleAnalysisChange}>
                    <option value="">/</option>
                    {options.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                    ))}
                    </select>
                </label>
                ))}
          </fieldset>
        </div>
      );
    };
    
    export default SidebarFilters;
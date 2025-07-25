const ColumnSelector = ({ columns, setColumns, media_columns, setMedia_columns, analysis_columns, setAnalysis_columns }) => {
  const handleCheckboxChange = (e, setState) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  return (
    <details open>
      <summary>Select Columns</summary>
      <fieldset>
        <legend>Project Columns</legend>
        {Object.entries(columns).map(([key, val]) => (
          <label key={key}>
            <input
              type="checkbox"
              name={key}
              checked={val}
              onChange={(e) => handleCheckboxChange(e, setColumns)}
            />
            {key}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Media Columns</legend>
        <label>
          <input
            type="checkbox"
            checked={media_columns.folder_path && media_columns.filename}
            onChange={(e) => {
              const checked = e.target.checked;
              setMedia_columns((prev) => ({
                ...prev,
                folder_path: checked,
                filename: checked
              }));
            }}
          />
          Show Images
        </label>

        {Object.entries(media_columns).map(([key, val]) => (
          key !== 'folder_path' && key !== 'filename' && (
            <label key={key}>
              <input
                type="checkbox"
                name={key}
                checked={val}
                onChange={(e) => handleCheckboxChange(e, setMedia_columns)}
              />
              {key}
            </label>
          )
        ))}
      </fieldset>

      <fieldset>
        <legend>Analysis Columns</legend>
        {Object.entries(analysis_columns).map(([key, val]) => (
          <label key={key}>
            <input
              type="checkbox"
              name={key}
              checked={val}
              onChange={(e) => handleCheckboxChange(e, setAnalysis_columns)}
            />
            {key}
          </label>
        ))}
      </fieldset>
    </details>
  );
};

export default ColumnSelector;

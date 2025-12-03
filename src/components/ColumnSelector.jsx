import './column.css'
import { useEffect, useState, useRef } from 'react'

const ColumnSelector = ({ columns, setColumns, media_columns, setMedia_columns, collapseRef }) => {
  const [showAll, setShowAll] = useState(true); // default selected

  // Update all columns when showAll changes
  useEffect(() => {
    const toggleAll = (obj, checked) => {
      const newObj = {};
      for (const key in obj) {
        newObj[key] = checked;
      }
      return newObj;
    };

    setColumns(prev => toggleAll(prev, showAll));
    setMedia_columns(prev => toggleAll(prev, showAll));

  }, [showAll]);
  const handleCheckboxChange = (e, setState) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  return (
    <details open ref={collapseRef}>
      
      <summary>Select Columns</summary>

      <label style={{ display: 'block', marginBottom: '1em' }}>
        <input
          type="checkbox"
          checked={showAll}
          onChange={(e) => setShowAll(e.target.checked)}
        />
        <strong>Show All Info</strong>
      </label>

      <div className="fieldsets-container">
      <fieldset className="border p-4 w-1/2">
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

      <fieldset className="border p-4 w-1/2">
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
          <strong>Show Images</strong>
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

      
      </div>
    </details>
  );
};

export default ColumnSelector;

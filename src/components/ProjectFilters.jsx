import './header.css'
import { supabase } from '../supabaseClient';

import { useState, useEffect } from 'react';
const ProjectFilters = ({ filters, setFilters }) => {
    const handleChange = (e) => {
      setFilters({ ...filters, [e.target.name]: e.target.value });
    };
    const dropdown_filters = [
      "name",
      "project_id",
      "city",
      "country",
      "continent",
      "PR_year",
      "ownership_form",
      "firm",
      "visualizer",
      "keywords"
    ];

    const [dropdownValues, setDropdownValues] = useState({
      name: [],
      project_id: [],
      city: [],
      country: [],
      continent: [],
      PR_year: [],
      ownership_form: [],
      firm: [],
      visualizer: [],
      keywords: []
    });
    
    async function fetchDropdownValues(columnName) {
      const { data, error } = await supabase
        .from("projects")
        .select(columnName);
    
      if (error) return [];
    
      const values = [...new Set(
        data
          .map(r => r[columnName])
          .filter(v => v !== null && v !== "")
      )];

      return values.sort();
    }
    
    useEffect(() => {
      const loadDropdowns = async () => {
        const updates = {};
    
        for (const field of dropdown_filters) {
          updates[field] = await fetchDropdownValues(field);
        }
        setDropdownValues(updates);
      };
    
      loadDropdowns();
    }, []);

    return (
        <div className="header-filters">
          {dropdown_filters.map((field) => (
            <label key={field}>
              {(field.charAt(0).toUpperCase()+field.slice(1)).replace(/_/g," ")}:
              <select name={field} onChange={handleChange}>
                <option value="">All</option>
                {dropdownValues[field].map((val) => (
                  <option key={val} value={val}>{val}</option>
                ))}
              </select>
            </label>
        ))}
        </div>
   
      );
    };
    
    export default ProjectFilters;

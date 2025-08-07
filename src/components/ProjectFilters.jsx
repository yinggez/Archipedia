import './header.css'
const ProjectFilters = ({ filters, setFilters }) => {
    const handleChange = (e) => {
      setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div className="header-filters">
          {/* Project name */}
      <label>
        Project Name:
        <select name="name" onChange={handleChange}>
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
          <label>
        Continent:
        <select name="continent" onChange={handleChange}>
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
      {/* Country */}
      <label>
        Country:
        <select name="country" onChange={handleChange}>
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
      {/* City */}
      <label>
        City:
        <select name="city" onChange={handleChange}>
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
      
      {/* Ownership form */}
      <label>
        Ownership Type:
        <select name="ownership_form" onChange={handleChange}>
            <option value="">All</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
            <option value="Public–Private Partnership">Public–Private Partnership</option>
        </select>
      </label>
      {/* PR Year */}
      <label>
        Year of First PR:
        <select name="PR_year" onChange={handleChange}>
            <option value="">All</option>
            <option value="2003">2003</option>
            <option value="2006">2006</option>
            <option value="2009">2009</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="Null">No Information</option>
        </select>
      </label>
    
      {/* Keywords Used */}
      <label>
        Keywords Used:
        <select name="keywords" onChange={handleChange}>
            <option value="">All</option>
            <option value="Keywords used in Nexis Uni: Masterplan AND Urban AND City AND Construction AND Development AND Project AND Land">Keywords used in Nexis Uni: Masterplan AND Urban AND City AND Construction AND Development AND Project AND Land</option>
            <option value="Keywords used in Nexis Uni: New City AND Architecture">Keywords used in Nexis Uni: New City AND Architecture</option>
            <option value="Keywords used in Nexis Uni: New City AND Utopia">Keywords used in Nexis Uni: New City AND Utopia</option>
        </select>
      </label>
      {/* Project ID */}
      <label>
        Project ID:
        <select name="project_id" onChange={handleChange}>
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
      {/* Architecture Firm */}
      <label>
        Architecture Firm:
        <select name="firm" onChange={handleChange}>
            <option value="">All</option>
            <option value="AECOM & TfNSW">AECOM & TfNSW</option>
            <option value="Allies and Morrison (lead masterplan)">Allies and Morrison (lead masterplan)</option>
            <option value="Anthem Properties (master plan)">Anthem Properties (master plan)</option>
            <option value="A‑Seven Corporation">A‑Seven Corporation</option>
            <option value="Baku State Design Institute">Baku State Design Institute</option>
            <option value="Biastekno (design of residential buildings)">Biastekno (design of residential buildings)</option>
            <option value="Bjarke Ingels Group">Bjarke Ingels Group</option>
            <option value="Bjarke Ingels Group (BIG)">Bjarke Ingels Group (BIG)</option>
            <option value="Bradfield Development Authority">Bradfield Development Authority</option>
            <option value="Breathe Architects">Breathe Architects</option>
            <option value="California Forever">California Forever</option>
            <option value="CapitaLand Group,  UOA Group">CapitaLand Group,  UOA Group</option>
            <option value="Central Landscape Architecture (masterplan), AECOM (consultant)">Central Landscape Architecture (masterplan), AECOM (consultant)</option>
            <option value="commissioned by Donegal County Council, led by the Regeneration and Development Team and is funded by the Urban Regeneration and Development Fund (URDF)">commissioned by Donegal County Council, led by the Regeneration and Development Team and is funded by the Urban Regeneration and Development Fund (URDF)</option>
            <option value="Cross Works">Cross Works</option>
            <option value="Distance Studio Consultants (DSC)">Distance Studio Consultants (DSC)</option>
            <option value="DP Architects (master plan), DP Green, DP Urban">DP Architects (master plan), DP Green, DP Urban</option>
            <option value="DP Architects (masterplan), Ramboll (mobility masterplan), SOM (108‑story Financial Tower design)">DP Architects (masterplan), Ramboll (mobility masterplan), SOM (108‑story Financial Tower design)</option>
            <option value="Foster + Partners">Foster + Partners</option>
            <option value="Foster and Partners">Foster and Partners</option>
            <option value="HCMA Architecture + Design (lead), structural by Fast + Epp">HCMA Architecture + Design (lead), structural by Fast + Epp</option>
            <option value="HKS Architects">HKS Architects</option>
            <option value="Hong Kong Civil Engineering & Development Department (CEDD)">Hong Kong Civil Engineering & Development Department (CEDD)</option>
            <option value="IND Architects & Knight Frank">IND Architects & Knight Frank</option>
            <option value="In-house Aarize Group design team">In-house Aarize Group design team</option>
            <option value="Jeddah Central Development Company">Jeddah Central Development Company</option>
            <option value="Kimley-Horn">Kimley-Horn</option>
            <option value="LW Design Group">LW Design Group</option>
            <option value="Mathews Nielsen Landscape Architects">Mathews Nielsen Landscape Architects</option>
            <option value="Meinhardt Group">Meinhardt Group</option>
            <option value="Multiple: Steidle Architekten (works such as Werk3, Werk4), MVRDV (Werk12), Chapman Taylor (Plaza), Nieto Sobejano (Optineo), KAAN Architecten (iCampus), OS A Ochs Schmidhuber (Atlas Tower)">Multiple: Steidle Architekten (works such as Werk3, Werk4), MVRDV (Werk12), Chapman Taylor (Plaza), Nieto Sobejano (Optineo), KAAN Architecten (iCampus), OS A Ochs Schmidhuber (Atlas Tower)</option>
            <option value="NEOM Development Company with DMAA (urban designer for Phase 1); architects include David Adjaye, Norman Foster (initially), Gensler, Delugan Meissl, UN Studios, LAVA & more">NEOM Development Company with DMAA (urban designer for Phase 1); architects include David Adjaye, Norman Foster (initially), Gensler, Delugan Meissl, UN Studios, LAVA & more</option>
            <option value="NODE Studio">NODE Studio</option>
            <option value="Office for Metropolitan Architecture (OMA), with LOLA Landscape Architects">Office for Metropolitan Architecture (OMA), with LOLA Landscape Architects</option>
            <option value="Pelli Clarke & Partners (skyscrapers), Heatherwick Studio (public realm & low-rise), Sou Fujimoto Architects, Yabu Pushelberg, Marco Costanzi Architects, SCDA Architects">Pelli Clarke & Partners (skyscrapers), Heatherwick Studio (public realm & low-rise), Sou Fujimoto Architects, Yabu Pushelberg, Marco Costanzi Architects, SCDA Architects</option>
            <option value="Pininfarina Architecture (masterplan)">Pininfarina Architecture (masterplan)</option>
            <option value="PK Das & Associates (masterplan/architecture)">PK Das & Associates (masterplan/architecture)</option>
            <option value="Saint Paul Port Authority">Saint Paul Port Authority</option>
            <option value="Sid Lee Architecture">Sid Lee Architecture</option>
            <option value="Sidewalk Labs (subsidiary of Alphabet/Google); Waterfront Toronto as planning partner ">Sidewalk Labs (subsidiary of Alphabet/Google); Waterfront Toronto as planning partner </option>
            <option value="Skidmore, Owings & Merrill">Skidmore, Owings & Merrill</option>
            <option value="Skidmore, Owings & Merrill (lead), Architects 49, Plan Associates">Skidmore, Owings & Merrill (lead), Architects 49, Plan Associates</option>
            <option value="Stantec">Stantec</option>
            <option value="Studio G Architects">Studio G Architects</option>
            <option value="Tegel Projekt GmbH">Tegel Projekt GmbH</option>
            <option value="Thompson Thrift">Thompson Thrift</option>
            <option value="TLS Landscape Architecture, Tianhua Architecture Planning & Engineering Ltd">TLS Landscape Architecture, Tianhua Architecture Planning & Engineering Ltd</option>
            <option value="Townland (Phase 2 masterplan); Hadi Vincent Architect (residential architecture)">Townland (Phase 2 masterplan); Hadi Vincent Architect (residential architecture)</option>
            <option value="Urban+">Urban+</option>
            <option value="Whiteland Corporation">Whiteland Corporation</option>
            <option value="ZGF Architects">ZGF Architects</option>
            <option value="Zyscovich Architects">Zyscovich Architects</option>
        </select>
      </label>
      {/* Visualization Agency */}
      <label>
        Visualization Agency:
        <select name="visualizer" onChange={handleChange}>
            <option value="">All</option>
            <option value="Beauty & The Bit">Beauty & The Bit</option>
            <option value="Beauty & The Bit (image production)">Beauty & The Bit (image production)</option>
            <option value="Brick Visual / Atchain">Brick Visual / Atchain</option>
            <option value="Greenspace">Greenspace</option>
            <option value="In-house renderings">In-house renderings</option>
            <option value="NOAN Architects">NOAN Architects</option>
            <option value="Not available">Not available</option>
            <option value="Part of in-house NEOM design team">Part of in-house NEOM design team</option>
            <option value="SNT Visual">SNT Visual</option>
        </select>
      </label>
      
        </div>
   
      );
    };
    
    export default ProjectFilters;

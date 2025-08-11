import { Link } from "react-router-dom";
import './home.css'
export default function Homepage() {
  return (
    <div className="homepage">
      <h1>Welcome to ArchiPedia</h1>
      <h2>-presented to you by Kemal and Yingge</h2>
      <p className="maintext">The ArchiPedia database currently consists of <strong>55</strong> urban future projects and <strong>704</strong>images. All information is gathered through a keyword search on <i>Nexis Uni</i>, from press releases published between <strong>2019 to 2024</strong>.* Images were mainly retrieved from the project websites, but if unavailable, a secondary website was used. Analysis of the media files was done using <i>MAXQDA</i>, where we grouped images with a list of "tags" that best describe them.</p>
      <p className="maintext">Supervised and led by Dr. Nadia Alaily-Mattar, certain resources are provided by our university, TUM.<br></br>
      ArchiPedia serves as a pilot project for a future database of a similar nature, on a larger scale. </p>
      <Link to="/query" className="btn">
        <span>Go to Query Tool</span>
      </Link>

        <p className="footnote">*Note that we looked for projects that had a press release within these years, the project itself could be older than 2019, in the database we have a "Year of First PR" column that indicates the year of the earliest press release we could find of the project.</p>
    </div>
  );
}
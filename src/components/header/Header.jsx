import "./Header.css";
import backgroundImage from "../../assets/1_00001.jpg";

function Header() {
  return (
    <section
      id="Home"
      className="head-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "flex-start", // <-- Align Left
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div className="content-box">
        <h1 className="headline">
          Ready to Build Lifestyle Villa Plots @ Balanagar, Shadnagar
        </h1>
        <p className="subheadline">1 km from National Highway </p>
        <p className="subheadline1">
          100-Acre Residential Community under HMDA Limits
        </p>
        <p className="details">
          60 Acres &nbsp;|&nbsp; 800 Plots &nbsp;|&nbsp; 20+ Amenities
          &nbsp;|&nbsp; 165 - 400 sq. yds
        </p>
      </div>
    </section>
  );
}

export default Header;

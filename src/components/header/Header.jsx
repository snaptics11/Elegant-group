import "./Header.css";
import backgroundImage from "../../assets/background1.jpg";

function Header() {
  return (
    <div
      id="Home"
      className="head-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        padding: "20px",
      }}
    >
      <div className="content-box">
        <h1>
          Ready to Build Lifestyle Villa Plots @ Balanagar, Shadnagar
1km from National Highway | 100-Acre Residential Community Under HMDA Limits
60 Acres | 800 Plots | 20+ Amenities | 165 - 400 sq. yds

        </h1>
        <h3>
          Looking to invest in the fastest-growing real estate hotspot near
          Hyderabad?
        </h3>
        <p>
          Welcome to <strong>Iconia by My Elegant Group</strong> – a premium
          villa plots community located on the Hyderabad–Bangalore Highway,
          right next to the proposed <strong>Regional Ring Road (RRR)</strong>{" "}
          in Shadnagar.
        </p>

        <ul>
          <li>✅ MUDA & DTCP Approved Plots under HMDA Limits</li>
          <li>✅ Gated Community with Modern Amenities</li>
          <li>✅ Excellent Connectivity to ORR, RRR & Airport</li>
          <li>✅ Ready for Construction</li>
          <li>✅ High-Growth Zone – Maximum Appreciation Potential</li>
        </ul>

        <p>
          Surrounded by rapid infrastructure development and major government
          projects, <strong>Iconia</strong> offers the perfect blend of nature,
          luxury, and future-ready living. Whether you’re planning to build your
          dream home or grow your wealth, this is your gateway to long-term
          prosperity.
        </p>

        <h3>📍 Location Advantage:</h3>
        <ul>
          <li>Adjacent to the upcoming RRR</li>
          <li>Near Shadnagar MMTS, NH-44</li>
          <li>40 mins from Shamshabad Airport</li>
          <li>Surrounded by tech parks, pharma corridor & educational hubs</li>
        </ul>

        <p>
          <strong>📞 Book Your Site Visit Now!</strong>
        </p>
        <p>Limited Plots Available | High ROI | Luxury Living Starts Here</p>
        <p>
          <strong>
            👉 My Elegant Group – Building Legacies in Real Estate
          </strong>
        </p>
      </div>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import brochureFile from "../../assets/Elegant-Iconia-Presentation.pdf";
import "./form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    plotRange: "",
    agree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("mobile", formData.mobile);
      data.append("plotRange", formData.plotRange);

      const response = await fetch(
        "http://localhost/Elegant-group/htdocs/backend/send-email.php",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.text();

      if (result.trim() === "success") {
        // Trigger brochure download
        const link = document.createElement("a");
        link.href = brochureFile;
        link.download = "Elegant-Iconia-Presentation.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset form
        setFormData({
          name: "",
          email: "",
          mobile: "",
          plotRange: "",
          agree: false,
        });
      } else {
        setSubmissionError("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionError(
        "Failed to process your request. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="form-section py-5 px-3"
      style={{ backgroundColor: "lightgray" }}
    >
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Form Column */}
          <div className="col-12 col-md-6">
            <div className="p-4 rounded shadow bg-white">
              <h2 className="mb-4 text-center text-uppercase fw-bold">
                Download Brochure
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">
                    Mobile Number*
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="plotRange" className="form-label">
                    Select Your Plot Range
                  </label>
                  <select
                    className="form-select"
                    id="plotRange"
                    name="plotRange"
                    value={formData.plotRange}
                    onChange={handleChange}
                  >
                    <option value="">Select Range</option>
                    <option value="165 - 200 Sq. Yds">165 - 200 Sq. Yds</option>
                    <option value="200 - 300 Sq. Yds">200 - 300 Sq. Yds</option>
                    <option value="300 - 400 Sq. Yds">300 - 400 Sq. Yds</option>
                  </select>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="agree">
                    I agree and authorize the team to contact me. This will
                    override the registry with DNC / NDNC.
                  </label>
                </div>
                {submissionError && (
                  <div className="alert alert-danger">{submissionError}</div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit & Download"}
                </button>
              </form>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="col-12 col-md-6">
            <div className="ps-md-4">
              <h2
                className="text-uppercase fw-bold mb-4"
                style={{ fontSize: "1.5rem" }}
              >
                Looking to invest in the fastest-growing real estate hotspot
                near Hyderabad?
              </h2>
              <p style={{ fontSize: "1rem" }}>
                Welcome to <strong>Iconia by My Elegant Group</strong> – a
                premium villa plots community located on the Hyderabad–Bangalore
                Highway, right next to the proposed Regional Ring Road (RRR) in
                Shadnagar.
              </p>
              <h3 className="fw-bold my-4" style={{ fontSize: "1.25rem" }}>
                Invest in Your Future with Iconia by Elegant Group
              </h3>
              <p style={{ fontSize: "1rem" }}>
                Iconia by Elegant Group offers premium villa plots in a
                thoughtfully planned gated community. Strategically located in a
                rapidly developing zone near Hyderabad, this project combines
                luxury, connectivity, and long-term value. Backed by MUDA and
                DTCP approvals, Iconia ensures legal clarity and quality
                infrastructure. Secure your space today and watch your
                investment grow with confidence.
              </p>
              <p>
                <ul style={{ fontSize: "1rem", listStyleType: "none" }}>
                  <li> ✅ MUDA & DTCP Approved Plots under HMDA Limits</li>
                  <li>✅ Gated Community with Modern Amenities</li>
                  <li>✅ Excellent Connectivity to ORR, RRR & Airport</li>
                  <li>✅ Ready for Construction</li>
                  <li>✅ High-Growth Zone – Maximum Appreciation Potential</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;

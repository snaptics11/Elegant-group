import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/logo.jpg";
import "./Navbar.css";
import brochureFile from "../../assets/Galleria-Gardens-brochure.pdf";

const Navbar = () => {
    const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navRef = useRef(null);
    const [showSubmitPopup, setShowSubmitPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        location: "",
        plotRange: "",
        agree: false,
    });

    const sectionIds = [
        { label: "Home", id: "Home" },
        { label: "About project", id: "About" },
        { label: "Highlights", id: "Highlights" },
        { label: "why", id: "why" },
        { label: "Gallery", id: "Gallery" },
        { label: "location-highlights", id: "location-highlights" },
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const resetForm = () => {
        setFormData({ name: "", mobile: "", location: "", plotRange: "", agree: false });
    };

    const handleOpenEnquiryPopup = () => {
        setShowEnquiryPopup(true);
        resetForm();
    };

    const handleCloseEnquiryPopup = () => {
        setShowEnquiryPopup(false);
    };

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 992);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile && navRef.current) {
            navRef.current.classList.remove("show");
        }
    }, [isMobile]);

    const toggleNav = () => {
        if (navRef.current) {
            navRef.current.classList.toggle("show");
        }
    };

    const handleNavLinkClick = (sectionId) => {
        const target = document.getElementById(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        if (isMobile && navRef.current) {
            navRef.current.classList.remove("show");
        }

        // Prevent # symbol in URL
        window.history.replaceState(null, "", window.location.pathname);
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSubmitPopup(true);

    try {
        const response = await fetch("https://yourdomain.com/send-email.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",


                
            },
            body: new URLSearchParams({
                name: formData.name,
                mobile: formData.mobile,
                plotRange: formData.plotRange,
            }),
        });

        const result = await response.text();
        if (result === "success") {
            const link = document.createElement('a');
            link.href = brochureFile;
            link.download = 'Galleria-Gardens-brochure.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert("There was an error submitting the form.");
        }
    } catch (error) {
        console.error("Error submitting form:", error);
    }
};



    const handleCloseSubmitPopup = () => {
        setShowSubmitPopup(false);
        setShowEnquiryPopup(false);
        resetForm();
    };

    return (
        <div className="navbar navbar-expand-lg navbar-light p-3 sticky-top" style={{ backgroundColor: "white" }}>
            <div className="container">
                <div className="navbar-brand d-flex align-items-center" onClick={() => handleNavLinkClick('Logo')} style={{ cursor: "pointer" }}>
                    <img src={logo} alt="Logo" style={{ height: "60px" }} className="img" />
                </div>
                <button className="navbar-toggler" type="button" onClick={toggleNav}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" ref={navRef}>
                    <ul className="navbar-nav mx-auto text-center">
                        {sectionIds.map(({ label, id }) => (
                            <li className="nav-item" key={id}>
                                <span
                                    className="nav-link"
                                    onClick={() => handleNavLinkClick(id)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {label}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="text-center mt-2 mt-lg-0">
                        <button className="btn btn-outline-primary w-100 w-lg-auto" onClick={handleOpenEnquiryPopup}>Download Brochure</button>
                    </div>
                </div>
            </div>

            {/* Enquiry Form */}
            {showEnquiryPopup && (
                <div className="popup-overlay" onClick={handleCloseEnquiryPopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <div className="popup-header">
                            <h2>Download Brochure</h2>
                            <button className="close-button" onClick={handleCloseEnquiryPopup}>
                                <i className="bi bi-x" style={{ fontSize: "1.5rem" }}></i>
                            </button>
                        </div>
                        <form className="popup-form" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required autoFocus />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                                <input type="tel" className="form-control" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="plotRange" className="form-label">Select Your Plot Range</label>
                                <select className="form-select" id="plotRange" name="plotRange" value={formData.plotRange} onChange={handleChange}>
                                    <option value="">Select Range</option>
                                    <option value="range1">165 - 200 Sq. Yds</option>
                                    <option value="range2">200 - 300 Sq. Yds</option>
                                    <option value="range3">300 - 400 Sq. Yds</option>
                                </select>
                            </div>
                            <div className="mb-4 form-check">
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
                                    I agree and authorize the team to contact me. This will override the registry with DNC / NDNC.
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Submit & Download</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Success Popup */}
            {showSubmitPopup && (
                <div className="popup-overlay" onClick={handleCloseSubmitPopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <div className="popup-header">
                            <h3>Submitted Successfully!</h3>
                            <button className="close-button" onClick={handleCloseSubmitPopup}>
                                <i className="bi bi-x"></i>
                            </button>
                        </div>
                        <div className="popup-body">
                            <p>Thank you for your submission! Your brochure is downloading.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;

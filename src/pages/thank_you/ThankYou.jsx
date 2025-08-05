import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import brochureFile from "../../assets/Elegant-Iconia-Presentation.pdf";
import "./ThankYou.css";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Google Tag Manager (head script)
    const gtmScript = document.createElement("script");
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5BQ7CDSJ');
    `;
    document.head.appendChild(gtmScript);

    // 2. Google Tag Manager <noscript> fallback
    const gtmNoScript = document.createElement("noscript");
    gtmNoScript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BQ7CDSJ"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.appendChild(gtmNoScript);

    // 3. Google Analytics (gtag.js)
    const gaScript = document.createElement("script");
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-CZK5G71M12";
    gaScript.async = true;
    document.head.appendChild(gaScript);

    const gaInlineScript = document.createElement("script");
    gaInlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-CZK5G71M12');
    `;
    document.head.appendChild(gaInlineScript);

    // Cleanup when component unmounts (optional)
    return () => {
      document.head.removeChild(gtmScript);
      document.body.removeChild(gtmNoScript);
      document.head.removeChild(gaScript);
      document.head.removeChild(gaInlineScript);
    };
  }, []);

  return (
    <div className="thank-you-container d-flex flex-column align-items-center justify-content-center text-center p-4">
      <img
        src={logo}
        alt="Elegant Group Logo"
        className="mb-4"
        style={{ height: "150px" }}
      />

      <h1 className="thank-you-title mb-4">
        Thank You for Your Interest in Iconia Balanagar 🎉
      </h1>

      <p className="thank-you-message lead mb-4">
        Our experts will get in touch with you shortly...<br />
        Click the button below to download our E-Brochure.
      </p>

      <a
        href={brochureFile}
        download
        className="btn btn-outline-primary mb-3"
      >
        Download Brochure
      </a>

      <button className="btn btn-outline-primary" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default ThankYou;

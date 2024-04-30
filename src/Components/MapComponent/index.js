import React from "react";

function MapComponent() {
  return (
    <div className="w-full  aspect-video">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.418005445933!2d77.20587457473674!3d28.617231584776654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b2258c1449%3A0x1848ea09e5def856!2sParliament%20Of%20India%2C%20Central%20Secretariat%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1714394839986!5m2!1sen!2sin"
        width="600"
        height="450"
        // style={{ border: 0, width: "100%" }}
        className="w-full h-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
}

export default MapComponent;

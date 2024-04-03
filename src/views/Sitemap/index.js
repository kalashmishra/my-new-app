// XmlComponent.js
import React, { useState, useEffect } from "react";

const Sitemap = () => {
  const [xmlContent, setXmlContent] = useState("");

  useEffect(() => {
    const fetchXml = async () => {
      try {
        const response = await fetch("../../../public/sitemap.xml");
        const data = await response.text();
        setXmlContent(data);
      } catch (error) {
        console.error("Error fetching XML:", error);
      }
    };

    fetchXml();
  }, []);
  console.log(xmlContent);

  return (
    <div>
      <pre>{xmlContent}</pre>
    </div>
  );
};

export default Sitemap;

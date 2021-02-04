import React, { useState, useEffect } from "react";
import darkModeStyles from "./DarkModeToggle.module.css";

const DarkModeToggle = () => {
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  useEffect(() => {
    localStorage.setItem("theme", "light");
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, []);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(false);
    }
  };

  return (
    <label className={darkModeStyles.switch}>
      <input
        type='checkbox'
        defaultChecked={checked}
        onChange={() => toggleThemeChange()}
      />
      <span className={`${darkModeStyles.slider} ${darkModeStyles.round}`} />
    </label>
  );
};

export default DarkModeToggle;

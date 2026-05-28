import { useState } from "react";

export const DarkModeComponent = () => {
    const [darkMode, setDarkMode] = useState(true)

    function handleClick() {
        setDarkMode((valorActual) => !valorActual)
        document.body.classList.toggle("dark")
    }

  return (
    <div className="w-25 h-10 border text-white rounded-xl p-2" onClick={handleClick}>
        <button className={`w-[50%] h-full border rounded-full ${darkMode ? "" : "translate-x-full"} transition duration-200`}></button>
    </div>
  );
};

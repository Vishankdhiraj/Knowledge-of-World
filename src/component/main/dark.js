import React from "react";
export default function Dark() {
    const [darkMode, setDarkMode] = React.useState(false);
    React.useEffect(()=>{
        if(darkMode){
          document.body.classList.add("dark-mode");
        }
        else{
            document.body.classList.remove("dark-mode");
        }
    },[darkMode])
    return(
        <button className="dark-mode-toggle" onClick={()=> setDarkMode(!darkMode)}>   {darkMode ? "☀️" : "🌙 "}</button>
    )

}
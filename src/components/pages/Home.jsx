import React, {useState} from 'react'
import TopBar from '../TopBar'

export default function Home() {
    const [darkMode,
        setDark] = useState(false);

    function darkModeClicked() {
        setDark(!darkMode);
        console.log(darkMode);
    }

    return ( 
    <div style= { { backgroundColor: darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)' } } > 
    < TopBar background={darkMode}  setDarkMode = { darkModeClicked} />
     </div>
    );
}
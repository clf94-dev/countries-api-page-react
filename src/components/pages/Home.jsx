import React, {useState} from 'react'
import TopBar from '../TopBar'
import SearchBar from '../SearchBar';
import CountriesSection from '../CountriesSection';

export default function Home() {
    const [darkMode,
        setDark] = useState(false);
        const [search, setSearch ] =useState('');
        const [filter, setFilter] = useState('');

    function darkModeClicked() {
        setDark(!darkMode);
        console.log(darkMode);
    }

    function handleSelectChange (e) {
        setSearch(e.target.value)
        console.log(e.target.value)
    }
    function handleInputChange (e) {
        setSearch(e.target.value)
    }
    return ( 
    <div style= { { backgroundColor: darkMode ?'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)' } } > 
    < TopBar background={darkMode}  setDarkMode = { darkModeClicked} />
    <SearchBar background={darkMode} setSearch={handleInputChange} setFilter={handleSelectChange} filterValue={filter} />
    <CountriesSection filterState={filter} searchState={search} background={darkMode} />
     </div>
    );
}
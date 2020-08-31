import React,{useState} from 'react'
import TopBar from '../TopBar';
import BackPage from '../BackPage';
import CountryInfo from '../CountryInfo';

function Country() {
    const [darkMode,
        setDark] = useState(false);
        const [search, setSearch ] =useState('');
        const [filter, setFilter] = useState('');

    function darkModeClicked() {
        setDark(!darkMode);
        console.log(darkMode);
    }

    var param = window.location.pathname;
    var segmArray =param.split('/');
    var country = segmArray.pop();

   
    return (
        <div>
             < TopBar background={darkMode}  setDarkMode = { darkModeClicked} />
  <BackPage background={darkMode} />
  <CountryInfo name={country}/>
        </div>
    )
}

export default Country;

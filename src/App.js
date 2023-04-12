import React, { useEffect, useState } from 'react';
import NavBar from './components/Navbar'
import Characteres from './components/Characteres';
import Pagination from './components/Pagination';



function App() {
  const [info, setInfo] = useState([]);
  const [characters, setCharacters] = useState([]);
  const InitialUrl = "https://rickandmortyapi.com/api/character";

//--------------------------------------------------
  const fetchCharacter = (InitialUrl) => {  
    fetch(InitialUrl)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  }; 
  //------------------------------
  const onPrevious = () => {
    fetchCharacter(info.prev)
  } 
  const onNext = () => {
    fetchCharacter(info.next)
  }   
//------------------------------
  useEffect(() => {
    fetchCharacter(InitialUrl);
  }, [])

  return (
    <>
      <NavBar brand="Prueba Tecnica App" />
      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onNext={onNext} onPrevious={onPrevious}/>
        <Characteres characters={characters} />
        <Pagination prev={info.prev} next={info.next} onNext={onNext} onPrevious={onPrevious}/>
      </div>
    </>
  );
}

export default App;

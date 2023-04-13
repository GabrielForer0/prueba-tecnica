import React, { useEffect, useState } from 'react';
import NavBar from './components/Navbar'
import Characteres from './components/Characteres';
import Pagination from './components/Pagination';


function App() {
  const [info, setInfo] = useState([]);
  const [message, setMessage] = useState("");
  const [characters, setCharacters] = useState([]);
  const [charactersReset, setCharactersReset] = useState([]);
  const InitialUrl = "https://rickandmortyapi.com/api/character";


  
//--------------------------------------------------
  const fetchCharacter = (InitialUrl) => {  
    fetch(InitialUrl)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results);
        setCharactersReset(data.results)
        setInfo(data.info);
        console.log("Personajes", data.results)
      })
      .catch(error => console.log(error))
  }; 
 

  

const searchFilter = (event) =>{
  if (event.key === 'Enter') {
    setCharacters(characters.filter((eachUnit) => (eachUnit.name.includes(event.target.value))));
    }
    if (event.key === 'Backspace') {
      setCharacters(charactersReset);
      }
}
   const fetchCharacterFilter = (event) => {  
        setMessage(event.target.value);
   }
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
        <div>
        <input  value={message} onKeyDown={searchFilter} onChange={fetchCharacterFilter}></input>
      
        </div>  
        <Characteres characters={characters} />
        <Pagination prev={info.prev} next={info.next} onNext={onNext} onPrevious={onPrevious}/>
      </div>
    </>
  );
}

export default App;

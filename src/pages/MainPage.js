import { Box } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import CharacterCard from '../components/CharacterCard';
import useFetch from '../hooks/useFetch';


function MainPage() {
  // TODO: loading and error pages
  const [page, setPage] = useState(1);
  const { loading, error, characters} = useFetch(page);
  const loader = useRef(null)


  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1)
    }
  }, [])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "350px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);
  console.log(characters)
  
  const listCharacters = characters.map((character) => <CharacterCard key={character.id} character={character}/>)
  return (
    <div>
      <h1>Infinity character page</h1>
      <>
            <div className="grid-item">
              {listCharacters}
            </div>
        <div ref={loader}/>
        </>
    </div>
  )
}

export default MainPage
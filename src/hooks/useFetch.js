import React, {useState, useEffect, useCallback} from 'react'


export default function useFetch(page) {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const axios = require("axios")


  const sendData = useCallback(async () => {
    try {
      await setLoading(true);
      await setError("");
      const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      await setCharacters((prev) => [...prev, ...res.data.results]);
      console.log(res.data)
      setLoading(false);
    } catch (err) {
      setError(err);
      }
    },[page]);

    useEffect(() => {
      sendData();
    }, [page, sendData]);

    return { loading, error, characters}
}

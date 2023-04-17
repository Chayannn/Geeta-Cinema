import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=8027747f';
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies('Batman');
  }, []);
  return (
    <div className='app'>
        <h1>Geeta Cinema</h1>
        <div className='search'></div>
    </div>
  );
};

export default App;

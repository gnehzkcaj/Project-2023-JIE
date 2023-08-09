
import { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import NumberGenerator from '../components/Numbergenerator';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

export default function Gallery() {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);

  const [numbers, setNumbers] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleGenerateNumbers = (count) => {
    const surpriseNumbers = NumberGenerator(count);
    setNumbers(surpriseNumbers);
    setIsButtonClicked(true);
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
        const data = await response.json();
        setLoading(false);
        setPokemon(data.results.map((p) => ({ name: p.name, id: p.url.split("/")[6] })));
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    if (!isButtonClicked) {
      fetchData();
    }
  }, [isButtonClicked]);

  useEffect(() => {
    setLoading(true);
    const fetchSurprisedData = async () => {
      try {
        setPokemon([]);

        const promises = numbers.map(async (num) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
          const data = await response.json();
          return { name: data.name, id: num };
        });

        const newPokemonData = await Promise.all(promises);
        setPokemon((pokemon) => [...pokemon, ...newPokemonData]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    if (isButtonClicked) {
      fetchSurprisedData();
    }
  }, [numbers, isButtonClicked]);

  if (loading) return "Loading...";

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Container>
      <h1>Gallery</h1>
      <NumberGenerator count={12} />
      <Button variant="contained" sx={{ marginRight: 6 }} onClick={() => handleGenerateNumbers(12)}>Surprise Me !</Button>
      <Button variant="contained" onClick={handleRefresh}>
        Fetch All
      </Button>
      <PokemonList pokemon={pokemon} />
    </Container>
  );
}

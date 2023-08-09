
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ImageCollege from '../components/ImageCollege';

import AboutThisApp from '../components/About';
import Slides from '../components/Slides';


const images = [
  {
    name: "Spinda",
    id: 327,
    type: "Normal",
    abilities: "Own Tempo / Tangled Feet",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/327.svg",
  },
  {
    name: "Yanmega",
    id: 469,
    type: "Bug / Flying",
    abilities: "Speed Boost / Tinted Lens",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/469.svg",
  },
  {
    name: "Omastar",
    id: 139,
    type: "Rock / Water",
    abilities: "Shell Armor / Swift Swim",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/139.svg",
  },
  {
    name: "Honchkrow",
    id: 430,
    type: "Dark / Flying",
    abilities: "Insomnia / Super Luck",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/430.svg",
  },
  {
    name: "Patrat",
    id: 504,
    type: "Normal",
    abilities: "Keen Eye / Run Away",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/504.svg",
  },

];

export default function Homepage() {
  return (
    <Container>
      <Typography variant="h3" component="h1" marginTop={5}>
        Welcome to Pokémon Gallery & Games
      </Typography>
      <Box marginTop={5} sx={{ display: "flex" }}>
        <img
          src="https://i.imgur.com/R7LBz0J.png"
          alt="Spider Pikachu"
          height="600"
          style={{ marginRight: '50px' }}
        />
        <ImageCollege />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={5}>
          About this React project
        </Typography>
        <Typography variant="body1" component="div" marginTop={3}>
          <p>This project is my Final Project for the 2023 General Assembly React Course.</p>
          <p>This project is a web application built with:</p>
          <p>
            This is a mimic of{" "}
            <a href="https://www.pokemon.com/">www.pokemon.com</a> by using the:
          </p>
          <Box marginLeft={5}>
            <ul>
              <li><a href="https://pokeapi.co/"><img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" width="100" alt="pokeapi logo" /></a></li>
              <li>React</li>
              <li>Material UI</li>
            </ul>
          </Box>
        </Typography>
      </Box>
      <Slides images={images} />
      <Box marginTop={10} marginBottom={10} sx={{ display: "flex" }}>
        <AboutThisApp />

      </Box>
      <Box>
      </Box>
    </Container >
  )
}
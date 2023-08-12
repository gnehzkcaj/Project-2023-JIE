
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ImageCollege from '../components/ImageCollege';
import SocialMediaIcons from '../components/Socialmedia';
import AboutThisApp from '../components/About';
import Slides from '../components/Slides';
import Linkbutton from '../components/Linkbutton';
import { TYPE_COLORS } from '../components/Colors';

const images = [
  {
    name: "Kingdra",
    id: 230,
    type: "Water / Dragon",
    abilities: "Sniper / Swift Swim",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/230.svg",
  },
  {
    name: "Yanmega",
    id: 469,
    type: "Bug / Flying",
    abilities: "Speed Boost / Tinted Lens",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/469.svg",
  },
  {
    name: "Shroomish",
    id: 285,
    type: "Grass",
    abilities: "Effect Spore / Poison Heal",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/469.svg",
  },
  {
    name: "Omastar",
    id: 139,
    type: "Rock / Water",
    abilities: "Shell Armor / Swift Swim",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/285.svg",
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

const types = Object.keys(TYPE_COLORS);

export default function Homepage() {
  return (
    <Container>
      <Box marginTop={5} sx={{ display: "flex" }}>
        <img
          src="https://i.imgur.com/R7LBz0J.png"
          alt="Spider Pikachu"
          height="600"
          style={{ marginRight: '50px' }}
        />
        <ImageCollege />
      </Box>
      <Typography variant="h6" component="h4" marginTop={5}>
        About this React project
      </Typography>
      <Box sx={{ display: "flex" }}>

        <Typography variant="body1" component="div" marginTop={3}>
          <p>This project is my Final Project for the 2023 General Assembly React Course.</p>
          <p>
            This web application is a mimic of{" "}
            <a href="https://www.pokemon.com/" target="_blank" rel="noopener noreferrer">www.pokemon.com</a> by using the:
          </p>
          <Box marginLeft={5}>
            <ul>
              <li><a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" width="100" alt="pokeapi logo" /></a></li>
              <li>React</li>
              <li>Material UI</li>
              <li>Some Images are created by Generate AI</li>
            </ul>
          </Box>
        </Typography>
        <Box sx={{ width: 500, marginLeft: 20 }}>
          <Typography variant="h6" component="h4" marginBottom={5} marginLeft={12}>
            Pokémon Types
          </Typography>
          {types.map((type, index) => (
            <button
              key={index}
              style={{ color: 'white', width: 100, backgroundColor: `#${TYPE_COLORS[type]}`, margin: '5px' }}
            >
              {type}
            </button>
          ))}
        </Box>
      </Box>

      <Box marginTop={10}>
        <Typography variant="h6" component="h6" marginTop={5}>
          Featured Pokémon
        </Typography>
      </Box>
      <Box>
        <Slides images={images} />
        <Linkbutton text={'Expore More Pokémon'} url={'../../gallery'} />
      </Box>
      <Box marginTop={10} marginBottom={10} sx={{ display: "flex" }}>
        <AboutThisApp />
        <SocialMediaIcons />
      </Box>
      <Box>
      </Box>
    </Container >
  )
}
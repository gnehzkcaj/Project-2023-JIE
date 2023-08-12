import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function Game() {
    return (
        <Container>
            <Box>
                <Typography variant="h3" component="h1" marginTop={5}>
                    Games & App
                </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
                <Box marginTop={10} marginRight={5}>
                    <Typography variant="h6" component="h4" marginTop={5} marginBottom={3}>
                        Enjoy the lates Pokémon Present
                    </Typography>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/AeJaL59Pqk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <Typography variant="body1" marginTop={5} marginBottom={3}>
                        Discover new information about Pokémon, more DLC updates, exciting animation news, and much more.
                    </Typography>
                </Box>
                <Box marginTop={10} marginBottom={10}>
                    <Typography variant="h6" component="h4" marginTop={5} marginBottom={3}>
                        Click on the image below to discover a Pokémon Game...
                    </Typography>
                    <a href="http://pokemongamejz.surge.sh/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/fBM8i35.png?1" width="500" alt="pokeapi logo" /></a>
                    <Typography>
                        Enjoying Pokémon's Balloon game. Rescure the Pokémons by popping balloon is fun. You can pop as much as you can in 60 seconds.
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}
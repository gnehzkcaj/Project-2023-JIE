import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function AboutThisApp() {
    return (
        <Box>
            <Typography variant="h6" component="h4">
                About Pokémon
            </Typography>
            <Typography variant="body1" component="div" marginTop={3}>
                Pokémon was launched in Japan in 1996. Today it is one of the most popular children's entertainment properties. This Gallery of Pokémon is a collection of over 1,200 Pokémon and over 2000 Pokémon items.               
            </Typography>
        </Box>
    )
}
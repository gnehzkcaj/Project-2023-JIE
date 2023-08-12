import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import Linkbutton from './Linkbutton';

export default function Tvfooter({pokeDetailName}) {
    return (
        <Box>
            <Box style={{ marginRight: 60, display: 'flex', justifyContent: 'flex-end' }}>
                <Linkbutton text={'Expore More Pokémon'} url={'../../gallery'} />
            </Box>
            <Box sx={{
                backgroundColor: '#232323',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 2
            }}>
                <Typography color="white" variant="h6" component="h4" marginTop={5} marginBottom={5}>
                    {pokeDetailName} Pokémon TV Episodes
                </Typography>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/AeJaL59Pqk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <Box marginTop={5}></Box>
            </Box>
        </Box>

    )
}
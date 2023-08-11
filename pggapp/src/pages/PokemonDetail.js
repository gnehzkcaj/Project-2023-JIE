import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Linkbutton from '../components/Linkbutton';
import { Grid, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { TYPE_COLORS } from '../components/Typecolors';

export default function PokemonDetail() {
    const [pokeDetail, setpokeDetail] = useState({});
    console.log("this is pokeDetail:", pokeDetail);
    const [prePokemon, setPrePokemon] = useState([]);
    const [nextPokemon, setNextPokemon] = useState([]);
    const [pokeDescription, setpokeDescription] = useState([])

    const params = useParams();

    useEffect(() => {
        const getPggDescription = () => {
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.id}
            `)
                .then(response => response.json())
                .then(data => {
                    console.log("this is data:", data);
                    setpokeDescription(data);
                })
                .catch(error => console.log(error));
        }
        getPggDescription();
    }, [params.id]);

    useEffect(() => {
        const getPggData = () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
                .then(response => response.json())
                .then(data => {
                    console.log("this is data:", data);
                    setpokeDetail(data);
                })
                .catch(error => console.log(error));
        }
        getPggData();
    }, [params.id]);

    const preID = parseInt(params.id) - 1;
    const nextID = parseInt(params.id) + 1;

    useEffect(() => {
        const getPggData = () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${preID}`)
                .then(response => response.json())
                .then(data => {
                    console.log("this is data:", data);
                    setPrePokemon(data);
                })
                .catch(error => console.log(error));
        }
        getPggData();
    }, [preID])

    console.log("nextID", nextID)
    useEffect(() => {
        const getPggData = () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${nextID}`)
                .then(response => response.json())
                .then(data => {
                    console.log("this is data:", data);
                    setNextPokemon(data);
                })
                .catch(error => console.log(error));
        }
        getPggData();
    }, [nextID])

    const prePokemonName = prePokemon.name;

    const handlePrePokemon = () => {
        window.location.href = `/pokemon/${preID}`;
    }

    const nextPokemonName = nextPokemon.name;

    const handleNextPokemon = () => {
        window.location.href = `/pokemon/${nextID}`;
    }

    return (
        <div>
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box marginTop={10} sx={{ display: 'flex', justifyContent: 'space-between', width: 500 }}>
                    <Button variant="contained" onClick={handlePrePokemon} sx={{ backgroundColor: '#a4a4a4' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            Previous
                            #{preID}
                            {prePokemonName ? '\n' + prePokemonName : ''}
                        </div>
                    </Button>
                    <Box sx={{ width: 200 }}></Box>
                    <Button variant="contained" onClick={handleNextPokemon} sx={{ backgroundColor: '#a4a4a4' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            Next
                            #{nextID}
                            {nextPokemonName ? '\n' + nextPokemonName : ''}
                        </div>
                    </Button>
                </Box>
            </Container>
            {pokeDetail.name && pokeDetail.name.length > 0 && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>{pokeDetail.name}</h2>
                    <h3 style={{ marginLeft: '20px' }}>#{pokeDetail.id}</h3>
                </div>
            )}


            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Box marginLeft={10}>
                        {pokeDetail.id < 650 ? (
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDetail.id}.svg`}
                                alt={`Pokemon with ID ${pokeDetail.id}`}
                            />
                        ) : (
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeDetail.id}.png`}
                                alt={`Pokemon with ID ${pokeDetail.id} img not avaiable`}
                            />
                        )}
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box>

                        <h3>height: {pokeDetail.height}</h3>
                        <h3>weight: {pokeDetail.weight}</h3>
                        <h3>base_experience: {pokeDetail.base_experience}</h3>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokeDetail.id}.png`}
                            alt={'page not found'}
                            width={200}
                        />
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <div>
                        <h3>Ability:</h3>
                        <ol>
                            {pokeDetail && pokeDetail.abilities && pokeDetail.abilities.map((abilityData, index) => (
                                <li key={index}>
                                    {abilityData.ability.name}
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div>
                        <h3>Types:</h3>
                        <ul>
                            {pokeDetail &&
                                pokeDetail.types &&
                                pokeDetail.types.map((typesData, index) => (
                                    <Button
                                        key={index}
                                        style={{ color: 'white', backgroundColor: `#${TYPE_COLORS[typesData.type.name]}`, margin: '5px' }}
                                    >
                                        {typesData.type.name}
                                    </Button>
                                ))}
                        </ul>
                    </div>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokeDetail.id}.png`}
                        alt={'page not found'}
                        width={100}
                    />

                </Grid>
                <Grid item xs={3}>
                    <h3>Stats:</h3>

                </Grid>
            </Grid>
            <Box marginBottom={5}>
                <h3>Flavor Facts:</h3>
                {pokeDescription && pokeDescription.flavor_text_entries && (
                    <ul>
                        {Array.from(
                            pokeDescription.flavor_text_entries.reduce((uniqueFlavorTexts, flavor_text_entry) => {
                                if (flavor_text_entry.language.name === 'en') {
                                    const cleanFlavorText = flavor_text_entry.flavor_text.replace(/[\f]/g, ' ');
                                    uniqueFlavorTexts.add(cleanFlavorText);
                                }
                                return uniqueFlavorTexts;
                            }, new Set())
                        ).map((uniqueFlavorText, index) => (
                            <li key={index}>
                                {uniqueFlavorText}
                            </li>
                        ))}
                    </ul>
                )}


            </Box>


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
                    {pokeDetail.name} Pokémon TV Episodes
                </Typography>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/AeJaL59Pqk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <Box marginTop={5}></Box>
            </Box>
        </div >
    );
}
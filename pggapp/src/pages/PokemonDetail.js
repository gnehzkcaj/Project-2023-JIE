import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import { Grid, Button, LinearProgress, Typography, Box } from '@mui/material';
import Description from '../components/Description'

import { TYPE_COLORS } from '../components/Colors';
import Tvfooter from '../components/Tvfooter';

export default function PokemonDetail() {
    const [pokeDetail, setpokeDetail] = useState({});
    console.log("this is pokeDetail:", pokeDetail);
    const [prePokemon, setPrePokemon] = useState([]);
    const [nextPokemon, setNextPokemon] = useState([]);

    const params = useParams();

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
        if (preID >= 1) {
            window.location.href = `/pokemon/${preID}`;
        }
    };

    const nextPokemonName = nextPokemon.name;

    const handleNextPokemon = () => {
        if (nextID <= 10271) {
            window.location.href = `/pokemon/${nextID}`;
        }
    }

    const height = parseInt(pokeDetail.height) / 10;
    const weight = parseInt(pokeDetail.weight) / 10;

    return (
        <div>
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box marginTop={10} sx={{ display: 'flex', justifyContent: 'space-between', width: 500 }}>
                    <Button variant="contained" onClick={handlePrePokemon} sx={{ width: 300, height: 80, backgroundColor: '#a4a4a4' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p>Previous</p>
                            {preID >= 1 ? `#${preID}` : ' Not available'}
                            {prePokemonName ? '\n' + prePokemonName : ''}
                        </div>
                    </Button>
                    <Box sx={{ width: 200 }}></Box>
                    <Button variant="contained" onClick={handleNextPokemon} sx={{ width: 300, height: 80, backgroundColor: '#a4a4a4' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p>Next</p>
                            {nextID <= 10271 ? `#${nextID}` : ' Not available'}
                            {nextPokemonName ? '\n' + nextPokemonName : ''}
                        </div>
                    </Button>
                </Box>
            </Container>

            {pokeDetail.name && pokeDetail.name.length > 0 && (
                <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h3 style={{ marginRight: '20px' }}>#{pokeDetail.id}</h3>
                    <h2>{pokeDetail.name}</h2>
                </div>
            )}

            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Box marginLeft={10}>
                        {pokeDetail.id < 650 ? (
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDetail.id}.svg`}
                                alt={`Not Available`}
                                width={300}
                            />
                        ) : (
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeDetail.id}.png`}
                                alt={`Not Available`}
                                width={300}
                            />
                        )}
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{ backgroundColor: '#30a7d7', borderRadius: 3, color: 'white', padding: '3vh', flexDirection: "column", textAlign: "center", justifyContent: 'center', alignItems: 'center' }}>
                        <h3>height: {height} m</h3>
                        <h3>weight: {weight} kg</h3>
                        <h3>base_experience: {pokeDetail.base_experience}</h3>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeDetail.id}.png`}
                            alt={`Not Available`}
                            width={100}
                        />
                        <h3>Ability:</h3>

                        {pokeDetail && pokeDetail.abilities && pokeDetail.abilities.map((abilityData, index) => (
                            <Box key={index} style={{ color: 'black' }}>
                                <h3>{abilityData.ability.name}</h3>
                            </Box>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{ textAlign: 'center' }}>
                        <h3>Types:</h3>
                        <div>
                            {pokeDetail &&
                                pokeDetail.types &&
                                pokeDetail.types.map((typesData, index) => (
                                    <button
                                        key={index}
                                        style={{ color: 'white', backgroundColor: `#${TYPE_COLORS[typesData.type.name]}`, margin: '5px' }}
                                    >
                                        {typesData.type.name}
                                    </button>
                                ))}
                        </div>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokeDetail.id}.png`}
                            alt={`Not Available`}
                            width={100}
                        />
                        <h3>Held Items:</h3>
                        <>
                            {pokeDetail &&
                                pokeDetail.held_items &&
                                pokeDetail.held_items.map((heldItemsData, index) => (
                                    <div>
                                        <h3 key={index}>{heldItemsData.item.name}</h3>
                                        <img
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${heldItemsData.item.name}.png`}
                                            alt={`Not Available`}
                                            width={60} />
                                    </div>

                                ))}
                        </>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <h3>Stats:</h3>
                    <div>
                        {pokeDetail &&
                            pokeDetail.stats && pokeDetail.stats.map((statData, index) => (
                                <div>
                                    <Typography variant='body1'>
                                        {statData.stat.name}
                                    </Typography>
                                    <Typography variant='body1'>{statData.base_stat}/255</Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={(statData.base_stat / 255) * 100} 
                                        sx={{ width: 255, backgroundColor: '#a4a4a4', borderRadius: 5, flex: 1, height: 10, marginBottom: 5, marginLeft: 5 }}
                                    />
                                </div>
                            ))}
                    </div>
                </Grid>
            </Grid>
            <Box marginBottom={5} marginLeft={5}>
                <Description id={pokeDetail.id} />
            </Box>
            <Tvfooter pokeDetailName={pokeDetail.name} />
        </div >
    );
}

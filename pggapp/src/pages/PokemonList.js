import { useState } from "react";
import { Link } from "react-router-dom";
import './PokemonList.css';
import { Pagination, Container, Box, Select, MenuItem, Typography } from '@mui/material';

export default function PokemonList({ pokemon }) {
    const [sortedPokemon, setSortedPokemon] = useState([...pokemon]);

    const [page, setPage] = useState(1);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(sortedPokemon.length / itemsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const sortIDLowToHigh = () => {
        const sortedArray = [...pokemon].sort((a, b) => a.id - b.id);
        setSortedPokemon(sortedArray);
    };

    const sortIDHighToLow = () => {
        const sortedArray = [...pokemon].sort((a, b) => b.id - a.id);
        setSortedPokemon(sortedArray);
    };

    const sortNameLowToHigh = () => {
        const sortedArray = [...pokemon].sort((a, b) => a.name.localeCompare(b.name));
        setSortedPokemon(sortedArray);
    }

    const sortNameHighToLow = () => {
        const sortedArray = [...pokemon].sort((a, b) => b.name.localeCompare(a.name));
        setSortedPokemon(sortedArray);
    }

    const currentPageItems = sortedPokemon.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    const handleSortChange = (event) => {
        switch (event.target.value) {
            case 'idLowToHigh':
                sortIDLowToHigh();
                break;
            case 'idHighToLow':
                sortIDHighToLow();
                break;
            case 'nameLowToHigh':
                sortNameLowToHigh();
                break;
            case 'nameHighToLow':
                sortNameHighToLow();
                break;
            default:
                break;
        }
    };

    return (
        <Container>
            <Box className="list-header" sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                <Typography variant="h6" gutterBottom>
                    Sort by:
                </Typography>
                <Select value="" onChange={handleSortChange} sx={{ marginLeft: 2, width: 150, height: 30 }}>
                    <MenuItem value="idLowToHigh">Sort by ID: Lowest Number (First)</MenuItem>
                    <MenuItem value="idHighToLow">Sort by ID: Highest Number (First)</MenuItem>
                    <MenuItem value="nameLowToHigh">Sort by Name: A to Z</MenuItem>
                    <MenuItem value="nameHighToLow">Sort by Name: Z to A</MenuItem>
                </Select>
            </Box>
            <Box className="pagination-component" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 5 }}>
                <Pagination
                    variant="outlined"
                    color="primary"
                    size="medium"
                    count={totalPages}
                    page={page}
                    onChange={handleChangePage}
                />
            </Box>
            <Box className="list-overview" marginBottom={10}>
                {currentPageItems.map((p) => (
                    <Box className="list-item" key={p.id}>
                        <p>#{p.id}</p>
                        <h3>{p.name}</h3>
                        {p.id < 650 ? (
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${p.id}.svg`}
                                alt={`Pikachu hided the selfie of Pokemon with ID ${p.id}`}
                            />
                        ) : (
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
                                alt={`Pikachu hided the selfie of Pokemon with ID ${p.id}`}
                            />
                        )}
                        <Link to={`/pokemon/${p.id}`}>View Details</Link>
                    </Box>
                ))}
            </Box>
        </Container>
    );
}
import React, { useState, useEffect } from 'react';
import { Box, Card, Grid, Typography, Button } from '@mui/material';

export default function ItemList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30;

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/item?limit=${itemsPerPage}&offset=${(currentPage - 1) * itemsPerPage}`);
                const data = await response.json();

                const fetchedItems = await Promise.all(
                    data.results.map(async (item) => {
                        try {
                            const itemResponse = await fetch(item.url);
                            const itemData = await itemResponse.json();
                            return {
                                name: itemData.name,
                                spriteUrl: itemData.sprites.default,
                            };
                        } catch (error) {
                            console.error('Error fetching item data:', error);
                            return null;
                        }
                    })
                );
                setLoading(false);
                setItems(items => [...items, ...fetchedItems.filter(item => item !== null)]);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
                setError('An error occurred while fetching data.');
            }
        };

        fetchData();
    }, [currentPage]);

    if (loading && items.length === 0) return 'Loading...';
    if (error) return `Error: ${error}`;

    const loadMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    return (
        <div>
            <Box sx={{ display: 'flex', marginTop: 3, marginBottom: 3, justifyContent: 'center' }}>
                <Typography variant="h4">Pokémon Item List</Typography>
            </Box>
            <Grid container spacing={2} marginBottom={5}>
                {items.map((item, index) => (
                    <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
                        <Card variant="outlined" sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="body1" marginRight={3}>{index}</Typography>
                            <Typography variant="body1" marginRight={2}>{item.name}</Typography>
                            <img src={item.spriteUrl} alt={item.name} />
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', marginTop: 3, marginBottom: 6, justifyContent: 'center' }}>
                <Button variant="outlined" onClick={loadMore}>
                    Load More
                </Button>
            </Box>
        </div>
    );
};

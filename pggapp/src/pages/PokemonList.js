import { useState } from "react";


import { Pagination } from '@mui/material'

export default function PokemonList({ pokemon }) {
    const [page, setPage] = useState(1);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(pokemon.length / itemsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const currentPageItems = pokemon.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    return (
        <div>

            <div className="pagination-component">
                <Pagination
                    variant="outlined"
                    color="primary"
                    size="medium"
                    count={totalPages}
                    page={page}
                    onChange={handleChangePage}
                />
            </div>
            <div className="list-overview">

                {currentPageItems.map((p) => (
                    <div className="list-item" key={p.id}>
                        <p>#{p.id}</p>
                        <h3>{p.name}</h3>

                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${p.id}.svg`}
                            alt={`Pikachu hided the selfie of Pokemon with ID ${p.id}`}
                        />

                    </div>
                ))}
            </div>
        </div>
    );
}
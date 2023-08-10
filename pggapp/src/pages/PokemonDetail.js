import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Linkbutton from '../components/Linkbutton';

export default function PokemonDetail() {
    const [pokeDetail, setpokeDetail] = useState({});
    console.log("this is pokeDetail:", pokeDetail);

    const params = useParams();

    console.log("id:", params.id);

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

    return (
        <div>
            {pokeDetail.name && pokeDetail.name.length > 0 && (
                <h2>Name: {pokeDetail.name}</h2>
            )}
            <h3>#{pokeDetail.id}</h3>
            <h3>height: {pokeDetail.height}</h3>
            <h3>weight: {pokeDetail.weight}</h3>
            <h3>base_experience: {pokeDetail.base_experience}</h3>

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
                    {pokeDetail && pokeDetail.types && pokeDetail.types.map((typesData, index) => (
                        <li key={index}>
                            {typesData.type.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <Linkbutton text={'Expore More Pokémon'} url={'../../gallery'} />
            </div>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/AeJaL59Pqk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
}
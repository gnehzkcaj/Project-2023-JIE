import { useState, useEffect } from "react";

export default function Description(props) {
    const { id } = props;

    const [pokeDescription, setpokeDescription] = useState([]);

    useEffect(() => {
        const getPggDescription = () => {
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}
            `)
                .then(response => response.json())
                .then(data => {
                    console.log("Fetch description data:", data);
                    setpokeDescription(data);
                })
                .catch(error => console.log(error));
        }
        getPggDescription();
    }, [id]);
    
    return (
        <div>    
                <h3>Species Flavor Facts:</h3>
                {pokeDescription && pokeDescription.flavor_text_entries && (
                    <ul>
                        {Array.from(
                            pokeDescription.flavor_text_entries.reduce((uniqueFlavorTexts, flavor_text_entry) => {
                                if (flavor_text_entry.language.name === 'en') {
                                    const cleanFlavorText = flavor_text_entry.flavor_text.replace(/[\f]/g, ' ');
                                    const startingPart = cleanFlavorText.slice(0, 25);
                                    if (!uniqueFlavorTexts.has(startingPart)) {
                                        uniqueFlavorTexts.set(startingPart, cleanFlavorText);
                                    }
                                }
                                return uniqueFlavorTexts;
                            }, new Map())
                        ).map((uniqueFlavorText, index) => (
                            <li key={index}>
                                {uniqueFlavorText[1]} 
                            </li>
                        ))}
                    </ul>
                )}        
        </div>
    )
}
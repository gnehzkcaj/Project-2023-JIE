import './Library.css';
import { useState, useEffect } from 'react';
import Timer from './Timer';

const PGG_URL = process.env.REACT_APP_PGG_URL

function Library() {
    const [pggList, setPggList] = useState({});
    //console.log("this is pggList:", pggList);
    //console.log("this is PGG_URL:", PGG_URL);
    useEffect(() => {
        
        const getPggData = () => {
            fetch(`${PGG_URL}/35`)
                .then(response => response.json())
                .then(data => {
                    console.log("this is data:", data);
                    setPggList(data);
                })
                .catch(error => console.log(error));
        }
        getPggData();
    }, []);

    return (
        <div>
            {pggList.forms && pggList.forms.length > 0 && (
                <p>{pggList.forms[0].name}</p>
            )}
            {pggList.name && pggList.name.length > 0 && (
                <h2>Name: {pggList.name}</h2>
            )}
            <h3>id: {pggList.id}</h3>
            <h3>height: {pggList.height}</h3>
            <h3>base_experience: {pggList.base_experience}</h3>
            <div>
                <h3>Ability:</h3>
                <ol>
                    {pggList && pggList.abilities && pggList.abilities.map((abilityData, index) => (
                        <li key={index}>
                            {abilityData.ability.name}
                        </li>
                    ))}
                </ol>
            </div>
            <div>
                <h3>Held_items:</h3>
                <ol>
                    {pggList && pggList.held_items && pggList.held_items.map((helditemsData, index) => (
                        <li key={index}>
                            {helditemsData.item.name}
                        </li>
                    ))}
                </ol>
            </div>



            <Timer />

        </div>
    );
}

export default Library;
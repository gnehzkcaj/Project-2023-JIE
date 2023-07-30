import './Library.css';
import { useState, useEffect } from "react";

const PGG_URL = process.env.REACT_APP_PGG_URL

function Library() {
    const [pggList, setPggList] = useState({});
    console.log("this is pggList:", pggList);
    console.log("this is PGG_URL:", PGG_URL);
    useEffect(() => {
        const getPggData = () => {
            fetch(`${PGG_URL}/1`)
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

        </div>
    );
}

export default Library;
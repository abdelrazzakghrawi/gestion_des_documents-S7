import React, { useEffect } from 'react';
import axios from 'axios';

function index() {
    useEffect(() => {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

        axios.get(`${apiBaseUrl}/documents`)
             .then(response => {
                 console.log(response.data);
             })
             .catch(error => {
                 console.error('Erreur lors de la requête :', error);
             });
    }, []); // Le tableau vide assure que l'effet s'exécute une seule fois après le montage du composant

    return (
        <div>
            Bonjour, ceci est le composant Index!
        </div>
    );
}

export default index;

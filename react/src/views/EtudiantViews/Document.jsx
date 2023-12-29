import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GridSection = ({ route, title, content }) => (
    <Link to={route} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ backgroundColor: '#f0f0f0', padding: '100px', borderRadius: '8px', textAlign: 'center' }}>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    </Link>
);

GridSection.propTypes = {
    route: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default function Document() {
    const [searchTerm, setSearchTerm] = useState('');
    const gridData = [
        { route: "/documents/attestation-scolaire", title: "Attestation Scolaire", content: "Obtenez votre attestation scolaire ici." },
        { route: "/documents/emploi-du-temps", title: "Emploi du Temps", content: "Consultez les horaires des cours et des activités." },
        { route: "/documents/notes-et-resultats", title: "Notes et Résultats", content: "Accédez à vos notes et résultats scolaires." },
        { route: "/documents/inscription", title: "Inscription", content: "Formulaire d'inscription pour les nouveaux étudiants." },
        { route: "/documents/demande-de-bourse", title: "Demande de Bourse", content: "Formulaires et informations pour les demandes de bourse." },
        { route: "/documents/autorisation-parentale", title: "Autorisation Parentale", content: "Documents nécessaires pour l'autorisation parentale." },
        { route: "/documents/reglement-interieur", title: "Règlement Intérieur", content: "Règles et politiques de l'école." },
        { route: "/documents/plan-ecole", title: "Plan de l'École", content: "Plan et guide de l'école pour les étudiants et visiteurs." }
    ];

    const filteredData = gridData.filter((data) => {
        // Filtrer les données en fonction de la valeur de recherche
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
            data.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            data.content.toLowerCase().includes(lowerCaseSearchTerm)
        );
    });

    return (
        <div>
            <h2>Document</h2>
            <div style={{ marginBottom: '16px' }}>
                <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                {filteredData.map((data, index) => (
                    <GridSection key={index} {...data} />
                ))}
            </div>
        </div>
    );
}

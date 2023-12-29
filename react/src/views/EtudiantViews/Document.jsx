import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faCertificate, faClock, faBook,faUserPlus, faDollarSign,  faMap  } from '@fortawesome/free-solid-svg-icons'; // Importez les icônes spécifiques dont vous avez besoin

import { faCalendarCheck, faChalkboardTeacher, faBriefcase, faFileSignature, faShieldAlt, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList, faExchangeAlt, faFileAlt, faFootballBall } from '@fortawesome/free-solid-svg-icons';


const GridSection = ({ route, title, content, icon }) => (
    <Link to={route} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ backgroundColor: '#f0f0f0', padding: '100px', borderRadius: '8px', textAlign: 'center' }}>
            <FontAwesomeIcon icon={icon} size="2x" style={{ marginBottom: '10px' }} />
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    </Link>
);

GridSection.propTypes = {
    route: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
};

export default function Document() {
    const [searchTerm, setSearchTerm] = useState('');
    const gridData = [
        { route: "/documents/attestation-scolaire", title: "Attestation Scolaire", content: "Obtenez votre attestation scolaire ici.", icon: faCertificate },
        { route: "/documents/emploi-du-temps", title: "Emploi du Temps", content: "Consultez les horaires des cours et des activités.", icon: faClock },
        { route: "/documents/notes-et-resultats", title: "Notes et Résultats", content: "Accédez à vos notes et résultats scolaires.", icon: faBook },
        { route: "/documents/inscription", title: "Inscription", content: "Formulaire d'inscription pour les nouveaux étudiants.", icon: faUserPlus },
        { route: "/documents/calendrier-examens", title: "Calendrier des Examens", content: "Consultez le calendrier des examens à venir.", icon: faCalendarCheck },
        { route: "/documents/attestation-presence", title: "Attestation de Présence", content: "Obtenez une attestation de présence aux cours.", icon: faClipboardList },
        { route: "/documents/demande-transfert", title: "Demande de Transfert", content: "Formulaires pour demander un transfert d'école.", icon: faExchangeAlt },
        { route: "/documents/formulaire-dispense", title: "Formulaire de Dispense", content: "Demandez une dispense pour certaines activités ou cours.", icon: faFileAlt },
        { route: "/documents/planning-activites-extrascolaires", title: "Planning des Activités Extrascolaires", content: "Découvrez les activités extrascolaires et leur planning.", icon: faFootballBall },
        { route: "/documents/demande-de-bourse", title: "Demande de Bourse", content: "Formulaires et informations pour les demandes de bourse.", icon: faDollarSign },
        { route: "/documents/plan-ecole", title: "Plan de l'École", content: "Plan et guide de l'école pour les étudiants et visiteurs.", icon: faMap },
        { route: "/documents/informations-cours", title: "Informations sur les Cours", content: "Détails et matériel pour vos cours.", icon: faChalkboardTeacher },
        { route: "/documents/rapports-stage", title: "Rapports de Stage", content: "Guides et modèles pour les rapports de stage.", icon: faBriefcase },
        { route: "/documents/procedures-administratives", title: "Procédures Administratives", content: "Instructions pour les démarches administratives.", icon: faFileSignature },
        { route: "/documents/regles-securite", title: "Règles de Sécurité", content: "Règles et consignes de sécurité de l'établissement.", icon: faShieldAlt },
        { route: "/documents/programme-evenements", title: "Programme d'Événements", content: "Calendrier des événements et activités scolaires.", icon: faCalendar },




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

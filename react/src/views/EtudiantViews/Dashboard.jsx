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

export default function Dashboard() {
    const [searchTerm, setSearchTerm] = useState('');
    const gridData = [
        { route: "/dashboard/section1", title: "Section 1", content: "Contenu de la section 1..." },
        { route: "/dashboard/section2", title: "Section 2", content: "Contenu de la section 2..." },
        { route: "/dashboard/section3", title: "Section 3", content: "Contenu de la section 3..." },
        { route: "/dashboard/section1", title: "Section 1", content: "Contenu de la section 1..." },
        { route: "/dashboard/section2", title: "Section 2", content: "Contenu de la section 2..." },
        { route: "/dashboard/section3", title: "Section 3", content: "Contenu de la section 3..." },
        { route: "/dashboard/section2", title: "Section 2", content: "Contenu de la section 2..." },
        { route: "/dashboard/section3", title: "Section 3", content: "Contenu de la section 3..." },
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
            <h2>Dashboard</h2>
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

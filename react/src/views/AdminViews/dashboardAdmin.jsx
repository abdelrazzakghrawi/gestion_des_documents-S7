// Exemple de gestion des autorisations dans un composant
import { Navigate } from "react-router-dom";
import { useStateContext } from '../../contexts/Context.jsx';

const DashboardDirecteur  = () => {
    const { user } = useStateContext();

    // Vérifier si l'utilisateur est une secrétaire
    if (user && user.role === 'directeur') {
        return (
            <div>
                {}
            </div>
        );
    } else {
        // Rediriger ou afficher un message d'erreur si l'utilisateur n'est pas autorisé
        return <Navigate to="/unauthorized" />;
    }
};

export default DashboardDirecteur ;

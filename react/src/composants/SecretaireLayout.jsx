import { Outlet, Navigate,  } from "react-router-dom";
import { useStateContext } from "../contexts/Context";
// SecretaireLayout.jsx

const SecretaireLayout = () => {
    const { role, token } = useStateContext();

    // Si l'utilisateur n'est pas connecté, le rediriger vers la page de connexion
    if (!token) {
        return <Navigate to="/login" />;
    }

    // Si l'utilisateur n'est pas un secrétaire, rediriger vers une page non autorisée
    if (role !== 'secretaire') {
        return <Navigate to="/unauthorized" />;
    }

    return (
        <div className="secretaire-layout">
            {/* Votre contenu spécifique au layout de la secrétaire */}
            <nav>
                {/* Vos liens de navigation */}
            </nav>
            <main>
                {/* Outlet rendra les composants enfants spécifiés dans les routes */}
                <Outlet />
            </main>
        </div>
    );
};

export default SecretaireLayout;


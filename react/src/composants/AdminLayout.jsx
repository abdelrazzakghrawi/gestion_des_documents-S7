import { Outlet, Navigate,  } from "react-router-dom";
import { useStateContext } from "../contexts/Context";
// SecretaireLayout.jsx

const AdminLayout = () => {
    const { role, token } = useStateContext();

    // Si l'utilisateur n'est pas connecté, le rediriger vers la page de connexion
    if (!token) {
        return <Navigate to="/login" />;
    }

    if (role !== 'admin') {
        return <Navigate to="/unauthorized" />;
    }

    return (
        <div className="admin-layout">
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

export default AdminLayout;


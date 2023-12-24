// DirecteurLayout.jsx
import { Outlet, Link, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/Context.jsx";
import { useEffect } from "react";
import axiosClient from "../axios-client.js";

export default function DirecteurLayout() {
    const { user, token, setUser, setToken } = useStateContext();

    useEffect(() => {
        // Chargement des informations utilisateur au montage du composant
        axiosClient.get('/user')
            .then(({ data }) => {
                setUser(data);
            });
    }, [setUser]);

    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient.post('/logout')
            .then(() => {
                setUser({});
                setToken(null);
            });
    };

    if (!token || user.role !== 'directeur') {
        // Redirection vers la page de connexion si l'utilisateur n'est pas connecté ou n'est pas directeur
        return <Navigate to="/login" />;
    }

    return (
        <div id="directeurLayout">
            <aside>
                <Link to="/dashboard/directeur">Tableau de bord Directeur</Link>
                {/* Ajoutez d'autres liens spécifiques au directeur si nécessaire */}
            </aside>
            <div className="content">
                <header>
                    <div>
                        UPFDOC - Directeur
                    </div>
                    <div>
                        {user.name}
                        <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

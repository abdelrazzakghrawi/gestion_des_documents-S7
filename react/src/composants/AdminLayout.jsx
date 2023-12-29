import { Outlet, Navigate, Link } from "react-router-dom";
import { useStateContext } from "../contexts/Context.jsx";
import { useEffect } from "react";
import axiosClient from "../axios-client.js";

const DirecteurLayout = () => {
    const { user, token, setUser, setToken } = useStateContext();

    useEffect(() => {
        // Chargement des informations du directeur au montage du composant
        axiosClient.get('/directeur')
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

    if (!token) {
        // Redirection vers la page de connexion si l'utilisateur n'est pas connecté
        return <Navigate to="/login" />;
    }

    return (
        <div id="directeurLayout">
            <aside>
                <Link to="/DasboardDirecteur">DasboardDirecteur</Link>
                <Link to="/reports">Rapports</Link>
                {/* Ajoutez d'autres liens spécifiques au directeur */}
            </aside>
            <div className="content">
                <header>
                    <div>
                        UPFDOC
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
};

export default DirecteurLayout;

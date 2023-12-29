import { Outlet, Navigate, Link } from "react-router-dom";
import { useStateContext } from "../contexts/Context";
import { useEffect } from "react";
import axiosClient from "../axios-client.js";

export default function DefaultLayout() {
    const { user, token,role, setUser, setToken } = useStateContext();

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

    if (!token) {
        // Redirection vers la page de connexion si l'utilisateur n'est pas connecté
        return <Navigate to="/login" />;
    }

    // Redirection en fonction du rôle de l'utilisateur
    if (role === 'secretaire') {
        return <Navigate to="/secretairelayout" />;
    }

    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
                <Link to="/Document">Document</Link>

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
}

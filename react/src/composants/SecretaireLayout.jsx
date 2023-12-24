// SecretaireLayout.jsx
import { Outlet, Link, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/Context";
import { useEffect } from "react";
import axiosClient from "../axios-client.js";

export default function SecretaireLayout() {
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

  if (!token || user.role !== 'secretaire') {
    // Redirection vers la page de connexion si l'utilisateur n'est pas connecté ou n'est pas secrétaire
    return <Navigate to="/login" />;
  }

  return (
    <div id="secretaireLayout">
      <aside>
        <Link to="/dashboard/secretaire">Tableau de bord Secrétaire</Link>
        {/* Ajoutez d'autres liens spécifiques au secrétaire si nécessaire */}

      </aside>
      <div className="content">
        <header>
          <div>
            UPFDOC - Secrétaire
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

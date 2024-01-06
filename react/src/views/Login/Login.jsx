import  { useRef, useState } from 'react';
import axiosClient from '../../axios-client.js';
import { useStateContext } from '../../contexts/Context.jsx';
// import '../Login/LoginCSS/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState(null);
    const { setUser, setToken } = useStateContext();
    const [isAdmin, setIsAdmin] = useState(true);

    // Fonction pour gérer le clic sur le bouton Admin
    const handleAdminClick = () => {
        setIsAdmin(true);
    };

    // Fonction pour gérer le clic sur le bouton Étudiant
    const handleStudentClick = () => {
        setIsAdmin(false);
    };

    // Fonction appelée lors de la soumission du formulaire
    const onSubmit = (ev) => {
        ev.preventDefault();

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            job: isAdmin ? 'Admin' : 'Student',
        };

        // Envoi de la requête au serveur pour la connexion
        axiosClient.post('/login', payload)
            .then(({ data }) => {
                // Mise à jour du contexte global avec les informations utilisateur
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                // Gestion des erreurs de validation du formulaire
                const response = err.response;
                if (response && response.status === 422) {

                    if (response.data.errors) {

                        setErrors(response.data.errors);

                    } else if (response.data.message) {

                        setErrors({
                            email: [response.data.message],
                        });
                    }
                }
            });
    };

    return (
        <div className={`container ${isAdmin ? 'active' : ''}`}>
            {isAdmin ? (
                // Partie "Admin"
                <div className="form-container sign-up">
                    <form onSubmit={onSubmit}>
                        {/* Titre dynamique en fonction du rôle sélectionné */}
                        <h1>{isAdmin ? 'Directeur/Secrétaire' : 'wha'}</h1>

                        {/* Sélection du rôle */}
                        <select name="job">
                            <option value="SuperAdmin">Directeur</option>
                            <option value="Secretaire">Secrétaire</option>
                            <option value="Secretaire">Admin</option>
                        </select>

                        {errors && (
                            // Affichage des erreurs de validation du formulaire
                            <div className="alert">
                                {Object.keys(errors).map((key) => (
                                    <p key={key}>{errors[key][0]}</p>
                                ))}
                            </div>
                        )}
                        {/* Champ de saisie pour l'email */}
                        <input ref={emailRef} type="email" placeholder="Email" />
                        {/* Champ de saisie pour le mot de passe */}
                        <input ref={passwordRef} type="password" placeholder="Password" />
                        {/* Bouton de soumission du formulaire */}
                        <button type="submit">Login</button>
                    </form>
                </div>
            ) : (
                // Partie "Étudiant"
                <div className="form-container sign-in">
                    <form onSubmit={onSubmit}>
                        {/* Lien vers la création d'un compte */}
                        <Link to="/signup">Create an account</Link>

                        {/* Titre pour la partie "Étudiant" */}
                        <h1>Étudiant</h1>
                        {errors && (
                            // Affichage des erreurs de validation du formulaire
                            <div className="alert">
                                {Object.keys(errors).map((key) => (
                                    <p key={key}>{errors[key][0]}</p>
                                ))}
                            </div>
                        )}
                        {/* Champ de saisie pour l'email */}
                        <input ref={emailRef} type="email" placeholder="Email" />
                        {/* Champ de saisie pour le mot de passe */}
                        <input ref={passwordRef} type="password" placeholder="Password" />
                        {/* Lien pour oublier le mot de passe */}
                        <a href="#">Forget Your Password?</a>
                        {/* Bouton de soumission du formulaire */}
                        <button type="submit">Login</button>
                    </form>
                </div>
            )}
            {/* Panneau de basculement entre les rôles */}
            <div className="toggle-container">
                <div className="toggle">
                    {/* Panneau gauche pour Étudiant */}
                    <div className="toggle-panel toggle-left">
                        <h1>Vous nêtes pas un Admin ?</h1>
                        <p>Se connecter en tant quétudiant</p>
                        <button className="hidden" onClick={handleStudentClick}>
                            Étudiant
                        </button>
                    </div>
                    {/* Panneau droit pour Admin */}
                    <div className="toggle-panel toggle-right">
                        <h1>Vous êtes un Admin ?</h1>
                        <p>Se connecter en tant quétudiant</p>
                        <button className="hidden" onClick={handleAdminClick}>
                            Admin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

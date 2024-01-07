import React, { useRef, useState } from 'react';
import axiosClient from '../../axios-client.js';
import { useStateContext } from '../../contexts/Context.jsx';
import { Link } from 'react-router-dom';
// import '../Login/LoginCSS/Login.css';
const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const roleRef = useRef(); // Ref for the admin role dropdown
    const [errors, setErrors] = useState(null);
    const { setUser, setToken } = useStateContext();
    const [isAdmin, setIsAdmin] = useState(false);

    const handleAdminClick = () => {
        setIsAdmin(true);
    };

    const handleStudentClick = () => {
        setIsAdmin(false);
    };

    const onSubmit = async (ev) => {
        ev.preventDefault();
        console.log("Submitting form"); // Debug log

        let apiEndpoint = '';
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        if (isAdmin) {
            const selectedRole = roleRef.current.value;
            payload.job = selectedRole;

            if (selectedRole === 'Admin') {
                apiEndpoint = 'http://localhost:8000/api/login_admin';
            } else if (selectedRole === 'Secretaire') {
                apiEndpoint = 'http://localhost:8000/api/login_secretary';
            }
        } else {
            // For students
            apiEndpoint = 'http://localhost:8000/api/login_etudiant';
        }

        try {
            const { data } = await axiosClient.post(apiEndpoint, payload);
            console.log("Login success", data); // Log success
            setUser(data.user);
            setToken(data.token);
            localStorage.setItem('token', data.token);
            setUser(data.user); // Assuming setUser updates your context or global state
    
        } catch (err) {
            console.error("Login failed", err); // Log error
            const response = err.response;
            if (response && response.status === 422) {
                setErrors(response.data.errors || { email: [response.data.message] });
            }
        }
    };

    return (
        <div className={`container ${isAdmin ? 'active' : ''}`}>
            {isAdmin ? (
                <div className="form-container sign-up">
                    <form onSubmit={onSubmit}>
                        <h1>{'Login as Admin/Secrétaire'}</h1>
                        <select ref={roleRef} name="job">
                            <option value="SuperAdmin">Directeur</option>
                            <option value="Secretaire">Secrétaire</option>
                            <option value="Admin">Admin</option>
                        </select>
                        {errors && (
                            // Affichage des erreurs de validation du formulaire
                            <div className="alert">
                                {Object.keys(errors).map((key) => (
                                    <p key={key}>{errors[key][0]}</p>
                                ))}
                            </div>
                        )}
                       
                        <input ref={emailRef} type="email" placeholder="Email" />
                       
                        <input ref={passwordRef} type="password" placeholder="Password" />
                       
                        <button type="submit">Login</button>
                    </form>
                </div>
            ) : (
                <div className="form-container sign-in">
                    <form onSubmit={onSubmit}>
                        <Link to="/signup">Create an account</Link>
                        <h1>Étudiant</h1>
                        {errors && (
                          
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
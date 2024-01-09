// router.jsx
import {  Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login/Login.jsx";
import Signup from "./views/Login/Signup.jsx";
import Users from "./views/EtudiantViews/Users.jsx";
import Dashboard from "./views/EtudiantViews/Dashboard.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./composants/DefaultLayout.jsx";
import GuestLayout from "./composants/GuestLayout.jsx";
import Document from "./views/EtudiantViews/Document.jsx";
import SecretaireLayout from "./composants/SecretaireLayout.jsx";
import AdminLayout from "./composants/AdminLayout.jsx";
import DashboardSecretaire from "./views/SecretaryViews/DashboardSecretaire.jsx";
import DashboardAdmin from "./views/AdminViews/Etudiant/dashboardAdmin.jsx";
import ListeEtudiants from "./views/AdminViews/Etudiant/ListeEtudiants.jsx";
import AjouterEtd from './views/AdminViews/Etudiant/AjouterEtd.jsx';


import AjouterSec from "./views/AdminViews/secretaire/AjouterSec.jsx";

import ListeSecretaires from "./views/AdminViews/secretaire/ListeSecretaires.jsx";
import ViewSecretaires from "./views/AdminViews/secretaire/ViewSecretaires.jsx";
import ModifierSec from "./views/AdminViews/secretaire/ModifierSec.jsx";


import ViewEtudiant from './views/AdminViews/Etudiant/ViewEtudiant.jsx';
import Modifieretd from './views/AdminViews/Etudiant/Modifieretd.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
        {
            path:'/',
            element:<Navigate to="/dashboard"/>
        },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/users",
        element: <Users />
      },
      {
        path: "/document",
        element: <Document />,
      },
    ]
  }, {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  },
  {
    path: "/secretaire",
    element: <SecretaireLayout />,
    children: [
      {
        path: "dashboardSecretaire",
        element: <DashboardSecretaire />
      },
      // Other routes for the secretaire
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboardAdmin",
        element: <DashboardAdmin />
      },
      {
        path: "ListeEtudiants",
        element: <ListeEtudiants />

      },


      {
        path: "ViewEtudiant/:id",
        element: <ViewEtudiant/>
      },
      {
        path: "Modifieretd/:id",
        element: <Modifieretd/>
      },
      {
        path: "ajouterEtd",
        element: <AjouterEtd/>
      },



      {
        path: "ListeSecretaires",
        element: <ListeSecretaires/>
      },
      {
        path: "ajouterSec",
        element: <AjouterSec/>
      }
,
      {
        path: "ViewSecretaires/:id",
        element: <ViewSecretaires/>
      },
      {
        path: "ModifierSec/:id",
        element: <ModifierSec/>
      },

      // Other routes for the directeur
    ]
  }
]);

export default router;

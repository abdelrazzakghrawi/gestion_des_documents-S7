import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login/Login.jsx";
import Signup from "./views/Login/Signup.jsx";
import Users from "./views/EtudiantViews/Users.jsx";
import Dashboard from "./views/EtudiantViews/Dashboard.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./composants/DefaultLayout.jsx";
import GuestLayout from "./composants/GuestLayout.jsx";
import Document from "./views/EtudiantViews/Document.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<DefaultLayout/>,
        children:[
            {
                path:'/',
                element:<Navigate to="/dashboard" />
            },
            {
                path:"/dashboard",
                element:<Dashboard/>
            },
            {
                path:"/users",
                element:<Users/>
            },
            {
                path: "/document",
                element: <Document />,
            },


        ]
    },
    {
        path:"/",
        element: <GuestLayout/>,
        children:[
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<Signup/>
            },

        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;

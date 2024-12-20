import { createBrowserRouter } from "react-router-dom";



import App from '../App.jsx';
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";

// Action 
import registerAction  from "./actions/registerAction.js";



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/register',
        element: <Register />,
        action: registerAction,
    },
    {
        path: '/login',
        element: <Login />,
    
    },
]); 

export default router;
import { createBrowserRouter } from "react-router-dom"
import Register from "../components/Register.jsx"
import Login from "../components/Login.jsx"
import App from '../App.jsx'

const router= createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        children: [
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'login',
                element: <Login/>
            }
        ]
    }
])

export default router
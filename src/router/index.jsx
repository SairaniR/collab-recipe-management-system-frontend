import { createBrowserRouter } from "react-router-dom"
import Register from "../components/Register.jsx"
import App from '../App.jsx'

const router= createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        children: [
            {
                path: 'register',
                element: <Register/>
            }
        ]
    }
])

export default router
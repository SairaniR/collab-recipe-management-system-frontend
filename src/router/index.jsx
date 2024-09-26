import { createBrowserRouter } from "react-router-dom"
import Register from "../components/Register.jsx"
import App from '../App.jsx'
import Recipes from "../components/Recipes.jsx"

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
                path: 'recipes',
                element: <Recipes/>
            }
        ]
    }
])

export default router
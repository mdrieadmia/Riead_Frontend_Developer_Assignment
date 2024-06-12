import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const Routes = createBrowserRouter([
    {
        path : '/',
        element : <Root/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path : '/register',
                element : <Register/>
            },
            {
                path : '/login',
                element : <Login/>
            },
        ]
    }
])

export default Routes;
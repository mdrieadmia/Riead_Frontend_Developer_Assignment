import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";

const Routes = createBrowserRouter([
    {
        path : '/',
        element : <Root/>,
        children : [
            {
                index : true,
                element : <Home/>
            }
        ]
    }
])

export default Routes;
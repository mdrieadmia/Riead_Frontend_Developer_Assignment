import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="container mx-auto">
            <div>
                <h1>Navbar</h1>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
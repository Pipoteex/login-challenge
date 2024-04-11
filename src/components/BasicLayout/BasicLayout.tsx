import { Outlet, useOutlet } from "react-router-dom";
import Header from "../Header/Header";

const BasicLayout = () => {
    //HOOKS
    const existOutlet = useOutlet();

    return (
        <div className="w-screen h-screen flex flex-col">
            <Header />
            {existOutlet ? <Outlet /> : <></>}
        </div>
    );
};

export default BasicLayout;

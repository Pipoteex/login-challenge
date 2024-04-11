import { useUser } from "../../context/UserContext";

import UserIcon from "../../assets/icons/user-icon.svg?react";
import { removeAuthHeader } from "../../api/axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
    //HOOKS

    const { state } = useUser();
    const navigate = useNavigate();

    //FUNCTIONS

    const handleLogout = () => {
        removeAuthHeader();
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <header className="flex justify-between m-[40px]">
            <div>Hola {state?.name}</div>
            <div
                onClick={handleLogout}
                className="cursor-pointer flex items-center"
            >
                <UserIcon fill="orange" className="w-[30px] mr-[10px]" />
                Logout
            </div>
        </header>
    );
};

export default Header;

import { api } from "../../../api/axios";
import { LoginTypes } from "../../../types/types";

export const getFirstLoginData = async (): Promise<LoginTypes> => {
    let { data } = await api.get<LoginTypes>("/06c67c77-18c4-45/login");
    return data;
};

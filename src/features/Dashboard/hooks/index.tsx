import { useQuery } from "@tanstack/react-query";
import { api } from "../../../api/axios";
import { UserListTypes } from "../../../types/types";

export const getUserData = async () => {
    let { data } = await api.get<UserListTypes>("/06c67c77-18c4-45/users");
    return data;
};

export const useGetUserData = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["userData"],
        queryFn: getUserData,
        staleTime: 60 * 1000,
    });

    return { userData: data, isLoadingUserData: isLoading };
};

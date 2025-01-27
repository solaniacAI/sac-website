import {useAuth} from "~/store/auth";

export const useLogout = () => {
    const auth = useAuth();

    auth.setClear();
    navigateTo("/");
};
export const useUser = () => {
    // @ts-ignore
    return auth.getIsLoggedIn ? auth.getUser : null;
};

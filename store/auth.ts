import {defineStore} from "pinia";

interface User {
    id?: String;
    firstName?: String;
    lastName?: String;
    image?: String;
}

interface Auth {
    token?: String;
    uid: String;
    wallet: String;
    user: User;
    owner: Boolean,
}

export const useAuth = defineStore("auth", {
    state: (): Auth => ({
        token: "",
        uid: "",
        wallet: "",
        owner: false,
        user: {
            id: "",
            firstName: "",
            lastName: "",
            image: "",
        },
    }),
    actions: {
        setWallet(wallet: string) {
            this.wallet = wallet;
        },
        setUserId(id: string) {
            this.user.id = id;
        },
        setUUID(uuid: string) {
            this.uid = uuid;
        },
        setUserName(firstName: string, lastName: string) {
            this.user.firstName = firstName;
            this.user.lastName = lastName;
        },
        setToken(token: string) {
            this.token = token;
        },
        setUser(user: User) {
            this.user = {...user};
        },
        setClear() {
            this.token = "";
            this.wallet = "";
            this.user = {};
            this.uid = "";
        },
        setOwner(owner: boolean) {
            this.owner = owner
        }
    },
    getters: {
        getUser: (state) => state.user,
        getUserId: (state) => state.uid,
        getIsLoggedIn: (state) => Boolean(state.token),
        getToken: (state) => state.token,
        getWallet: (state) => state.wallet,
        getOwner: (state) => state.owner,
    },
    persist: {
        paths: ["token", "user", "wallet", "owner"],
    },
});

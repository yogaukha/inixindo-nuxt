import { defineStore } from "pinia";

const cookieNip = useCookie('nip', {maxAge: 3600})
const cookieUnitId = useCookie('unit_id', {maxAge: 3600})
const cookieChosenRole = useCookie('chosen_role')

export const useAuthStore = defineStore("auth", {
    state: () => ({
        logged_in: false,
        token: "",
        exp_in: 300,
        ref_exp_in: 1800,
        min_validity: 60,
        timer: "",
        username: "",
        role: "",
        error: "",
    }),
    form: {
        email: "",
        password: ""
    },
    actions: {
    },
});

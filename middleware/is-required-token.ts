import { useUser } from "~/composables/useAuth";
import { useAuth } from "~/store/auth";

export default defineNuxtRouteMiddleware((to) => {
  const token = useAuth().getToken;
  const wallet = useAuth().getWallet;
  if (!token) {
    if (to) {
      const redirectTo = useCookie("redirectTo");
      redirectTo.value = to.path;
    }
    return navigateTo("/");
  }
  if (wallet == to.params.id) {
    useAuth().setOwner(true)
  }
  if (to.meta.role) {
    return navigateTo("/");
  }
});

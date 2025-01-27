import { useUser } from "~/composables/useAuth";

const authRoutes = ["/", "/about", "/business"];

export default defineNuxtRouteMiddleware((to) => {
  const user = useUser();
  if (authRoutes.includes(to.path) && user) {
    const redirectTo = useCookie("redirectTo");
    if (redirectTo.value) {
      setTimeout(() => {
        redirectTo.value = null;
      }, 0);
      // return navigateTo(redirectTo.value);
    }
    // return navigateTo("/");
  }
});

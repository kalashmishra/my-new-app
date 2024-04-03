/*--------route-redirection----------*/
export const routeRedirection = (navigate) => {
  if (
    window.location.pathname.endsWith("/") &&
    window.location.pathname !== "/"
  ) {
    navigate(window.location.pathname.slice(0, -1));
  }
};
/*--------scroll-top----------*/
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

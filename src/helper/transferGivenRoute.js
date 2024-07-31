export const transferGivenRoute = (location) => {
  if (location.hash) {
    const element = document.getElementById(location.hash.split("#")[1]);
    if (element) {
      element.scrollIntoView({ behavior: "auto" });
    }
  }
};
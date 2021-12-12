import headerOnScroll from "./components/headerOnScroll";
import carousel from "./components/carousel";
import navMobile from "./components/navMobile";
import scrollToAnchor from "./components/scrollToAnchor";


$(document).ready(() => {
  headerOnScroll();
  carousel('.js-agents');
  navMobile()
  scrollToAnchor();
});

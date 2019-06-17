import Vue from "vue";
import contenedorImages from "./Vue/contenedorImages";
import cabecera from "./Vue/header";
import piePagina from "./Vue/footer";
import Carousel3d from "vue-carousel-3d";
import tilt from "vanilla-tilt";

Vue.use(Carousel3d);

let app = new Vue({
  el: "#contenedorImages",
  render: h => h(contenedorImages)
});

app = new Vue({
  el: "#cabecera",
  render: h => h(cabecera)
});

app = new Vue({
  el: "#piePagina",
  render: h => h(piePagina)
});

app = new Vue({
  el: "#example",
  data: {
    slides: 8,
    images: "portada2.jpg"
  }
});
tilt.init(document.querySelectorAll(".imagenes"), {
  scale: "1.05",
  glare: true,
  maxGlare: "0.3"
});

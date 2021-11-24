document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    height: "auto",
    focus: "center",
    autoWidth: true,
    arrows: false,
    pagination: false,
  });
  splide.mount();
});

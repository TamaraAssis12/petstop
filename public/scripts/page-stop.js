const options = {
    draggin: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map

const map = L.map("mapid", options).setView([-22.9183902, -42.8313887], 16);

// create and add TileLayer

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create and add Maker

L.marker([-22.9183902, -42.8313887], { icon })
  .addTo(map)
  .openPopup();

//   image gallery
function selectImage(event) {
  const button = event.currentTarget;

  // remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active");
    }

  // selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".stop-details > img");

  // atualizar o container de imagem
  imageContainer.src = image.src;

  // adicionar a classe .active para este botão
  button.classList.add("active");
}               
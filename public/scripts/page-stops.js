// create map

const map = L.map("mapid").setView([-22.9183902, -42.8313887], 16);

// create and add TileLayer

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create popup overlay

const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Ponto de Hidratação e Alimentação <a href="stop.html?id=1" class="choose-stop"> <img src="./public/images/arrow-white.svg"> </a>'
);

// create and add Maker

L.marker([-22.9183902, -42.8313887], { icon })
  .addTo(map)
  .bindPopup(popup)
  .openPopup();

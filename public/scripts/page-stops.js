// create map

const map = L.map("mapid").setView([-22.9183902, -42.8313887], 16);

// create and add TileLayer

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({id, name, lat, lng}) {
  // create popup overlay

  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/stop?id=${id}"><img src="/images/arrow-white.svg"></a>`  )

  // create and add Maker

  L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)
    .openPopup();

}

const stopsSpan = document.querySelectorAll(".stops span")

stopsSpan.forEach( span => {
    const stop = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(stop)
  })



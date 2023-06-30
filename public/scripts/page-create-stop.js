// create map
const map = L.map("mapid").setView([-22.9183902, -42.8313887], 15);

// create and add TileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// creat and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;
  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
  // fetch reverse geocoding data
  fetch(
    "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" +
      lat +
      "&lon=" +
      lng
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("[name=endereco]").value = data.address.road || "";
      document.querySelector("[name=numero]").value = data.address.house_number || "";
      document.querySelector("[name=bairro]").value = data.address.suburb || ""; 
      document.querySelector("[name=cidade]").value = data.address.city || "";
      document.querySelector("[name=estado]").value = data.address.state || "";
    });
});
 

// add campo de fotos
function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector("#images");
  // pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // realizar o clone da última imagem adicionada
  const newFieldContainer =
    fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
  // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }
  // limpar o campo antes de adicionar ao container de imagens
  input.value = "";
  // adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    // limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  // deletar o campo
  span.parentNode.remove();
}

// select tipo de ponto
function toggleSelect(event) {
  // retirar a class .active (dos botões)
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });

  // colocar a class .active nesse botão clicado
  const button = event.currentTarget;

  button.classList.add("active");

  // atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector(
    "[name='petstop-hidratacao-alimentação']"
  );
  input.value = button.dataset.value;
}

// function validate(event) {
//   // validar se lat e lng estão preenchidos
//   const needsLatAndLng = true;
//   if (needsLatAndLng) {
//     event.preventDefault();
//     alert("Selecione um ponto no mapa");
//   }
// }

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
  iconUrl: "/images/map-marker.svg",
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
    "[name='abastece-hidratacao-alimentacao']"
  );
  input.value = button.dataset.value;
}

// alerta de confirmação de abastecimento
function confirmarAbastecimento(){
  Swal.fire({
  title: 'Deseja cadastrar esse ponto?',
  icon: 'warning',
  showCancelButton: true,
  cancelButtonText: 'Cancelar',
  confirmButtonText: 'Cadastrar',
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire('Ponto cadastrado com sucesso.!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('As alterações não foram salvas', '', 'info')
  }
})
} 
const roomData = {
  estandar: {
    info: "Habitación Estándar: Perfecta para viajeros individuales o parejas. Incluye una cama queen, baño privado y amenidades básicas.",
    image: "assets/images/room-1.webp",
  },
  doble: {
    info: "Habitación Doble: Ideal para familias o grupos pequeños. Cuenta con dos camas dobles, baño espacioso y área de estar.",
    image: "assets/images/room-2.webp",
  },
  premium: {
    info: "Habitación Premium: Nuestra opción más lujosa. Disfruta de una suite con cama king, jacuzzi, vista panorámica y servicios exclusivos.",
    image: "assets/images/room-3.webp",
  },
};

const roomList = document.querySelector(".room-list");
const roomInfo = document.getElementById("room-info");
const roomImage = document.getElementById("room-image");

roomList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    const roomType = e.target.getAttribute("data-room");
    updateRoomInfo(roomType);
  }
});

// Función para actualizar la información y la imagen de la habitación
function updateRoomInfo(roomType) {
  if (roomData[roomType]) {
    roomInfo.textContent = roomData[roomType].info;
    roomImage.src = roomData[roomType].image;
    roomImage.alt = `Imagen de la habitación ${roomType}`;
  }
}

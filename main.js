// --- Lógica de JavaScript para la interactividad ---

// Obtener el botón y el contenedor de detalles
const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
const detailsContent = document.getElementById("detailsContent");
const businessCard = document.getElementById("businessCard");

// Variable para rastrear el estado (abierto/cerrado)
let areDetailsVisible = false;

// Añadir evento de clic al botón
toggleDetailsBtn.addEventListener("click", () => {
  areDetailsVisible = !areDetailsVisible; // Invertir el estado
  if (areDetailsVisible) {
    detailsContent.classList.add("open");
    toggleDetailsBtn.textContent = "Ocultar detalles";
  } else {
    detailsContent.classList.remove("open");
    toggleDetailsBtn.textContent = "Ver más detalles";
  }
});

// Opcional: Efecto de "iluminación" sutil al pasar el ratón sobre la tarjeta
// Esto se maneja principalmente con CSS (:hover), pero podrías añadir más JS si quisieras
businessCard.addEventListener("mouseenter", () => {
  // console.log("Mouse entró en la tarjeta");
  // Podrías añadir clases aquí para efectos más complejos si el CSS no es suficiente
});

businessCard.addEventListener("mouseleave", () => {
  // Ejemplo: console.log('Mouse salió de la tarjeta');
});

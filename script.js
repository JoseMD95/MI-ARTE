// Base de datos de obras
const artworks = [
    {
        title: "Soledad Urbana",
        desc: "Óleo sobre lienzo, 2024. Una vista nocturna de la ciudad.",
        price: "$3,500 MXN",
        img: Galeria/Tamayo.jpg
    },
    {
        title: "Retrato en Azul",
        desc: "Acuarela, 2023. Exploración de emociones frías.",
        price: "$1,200 MXN",
        img: Galeria/Tamayo.jpg
    },
    {
        title: "Naturaleza Viva",
        desc: "Carboncillo, 2024. Detalle botánico.",
        price: "$900 MXN",
        img: Galeria/Tamayo.jpg
    }
];

let currentIndex = 0; // Controla en qué número de obra estamos

// Referencias a elementos del DOM
const imgElement = document.getElementById('current-img');
const titleElement = document.getElementById('art-title');
const descElement = document.getElementById('art-desc');
const priceElement = document.getElementById('art-price');
const modalNameElement = document.getElementById('modal-art-name');

// Función para actualizar la pantalla
function updateDisplay() {
    const art = artworks[currentIndex];
    
    // Efecto visual simple: ocultar, cambiar, mostrar
    imgElement.style.opacity = 0;
    
    setTimeout(() => {
        imgElement.src = art.img;
        titleElement.textContent = art.title;
        descElement.textContent = art.desc;
        priceElement.textContent = art.price;
        imgElement.style.opacity = 1;
    }, 200);
}

// Función para los botones (Anterior / Siguiente)
function moveSlide(direction) {
    currentIndex += direction;
    
    // Si pasamos del final, volver al inicio (Loop)
    if (currentIndex >= artworks.length) {
        currentIndex = 0;
    }
    // Si vamos atrás del principio, ir al final
    if (currentIndex < 0) {
        currentIndex = artworks.length - 1;
    }
    
    updateDisplay();
}

// Modal Logic
const modal = document.getElementById('offer-modal');

function openOfferModal() {
    modalNameElement.textContent = artworks[currentIndex].title;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

// Inicializar la primera obra al cargar

updateDisplay();


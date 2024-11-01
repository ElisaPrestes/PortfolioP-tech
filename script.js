$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

// CARDS SOCIAL
document.addEventListener("DOMContentLoaded", function() {
    const cardsData = [
        { image: "images/Card_Social/arduinoII.jpg" },
        { image: "images/Card_Social/Arduino.jpg" },
        { image: "images/Card_Social/ceuGabriel.jpg" },
        { image: "images/Card_Social/bartolomeu.jpg" }, 
        { image: "images/Card_Social/TorreReciclada.jpg" },   
        { image: "images/Card_Social/CartazEtec.jpg" },
        { image: "images/Card_Social/loveSorocaba.jpg" },  
        { image: "images/Card_Social/euSumo.jpg" },  
        { image: "images/Card_Social/RiotTotem.jpg" },
        { image: "images/Card_Social/baltazar" },      
        { image: "images/Card_Social/placa"},  
        { image: "images/Card_Social/1729952836715.jpg"},  
        { image: "images/Card_Social/cantor.jpg"},  
    ];

    const carouselInner = document.getElementById("carouselInner");

    cardsData.forEach((card, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (index === 0) {
            carouselItem.classList.add("active");
        }

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("cardSocial");
        cardDiv.style.width = "18rem";

        const img = document.createElement("img");
        img.src = card.image;

        cardDiv.appendChild(img);
        carouselItem.appendChild(cardDiv);
        carouselInner.appendChild(carouselItem);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.cardSocial');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
  
    let index = 0;
    const cardWidth = cards[0].offsetWidth;
  
    function updateTrackPosition() {
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  
    function prevSlide() {
      index = (index - 1 + cards.length) % cards.length;
      updateTrackPosition();
    }
  
    function nextSlide() {
      index = (index + 1) % cards.length;
      updateTrackPosition();
    }
  
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
  });
  
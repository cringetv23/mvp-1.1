var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    // centeredSlides: true,
    slidesPerView: '1', // Display slides based on their actual width
  
    // Responsive breakpoints for different viewports
    breakpoints: {
      450: {
        slidesPerView: 2, // Display 2 slides at a time
      },
      768: {
        slidesPerView: 3, // Display 2 slides at a time
      },
      // When the window width is >= 992px
      992: {
        slidesPerView: 4, // Display 3 slides at a time
      },
      // Add more breakpoints as needed
    },
  

    // pagination: {
    //   el: ".swiper-pagination2",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  

  var swiper3 = new Swiper(".mySwiper3", {
    spaceBetween: 10,
    // centeredSlides: true,
    slidesPerView: '1', // Display slides based on their actual width
  
    // Responsive breakpoints for different viewports
    breakpoints: {
      450: {
        slidesPerView: 2, // Display 2 slides at a time
      },
      768: {
        slidesPerView: 3, // Display 2 slides at a time
      },
      // When the window width is >= 992px
      992: {
        slidesPerView: 4, // Display 3 slides at a time
      },
      // Add more breakpoints as needed
    },
  

    // pagination: {
    //   el: ".swiper-pagination2",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
  });
  
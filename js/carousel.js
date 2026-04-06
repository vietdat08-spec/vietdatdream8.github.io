new Swiper('.card-wrapper', {
  
  loop: true,
  spaceBetween:30,

  //  pagination bullets
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // responsive breakpoints
  breakpoints: {
    0:{slidesPerView : 1

    },
    768:{slidesPerView : 2

    },
    1024:{slidesPerView : 3

    },
  }

  
});

// const   body=document.querySelector("body"),
//         nav=document.querySelector("nav"),
//         searchToggle= document.querySelector(".searchToggle"),
//         sidebarOpen= document.querySelector(".sidebarOpen"),
//         sidebarClose= document.querySelector(".sidebarClose");



// searchToggle.addEventListener("click",()=>{
//     searchToggle.classList.toggle("active")
// });

// sidebarOpen.addEventListener("click",() =>{
//     nav.classList.add("active");

// });



// body.addEventListener("click" , e =>{
//     let clickedElm = e.target;

//     if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
//         nav.classList.remove("active");
//     }
// });

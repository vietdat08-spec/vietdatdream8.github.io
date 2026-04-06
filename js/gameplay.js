const   section=document.querySelector(".menugame")
        button2= document.querySelector(".button-two"),
        videogame2= document.querySelector(".videogame2"),
        button= document.querySelector(".button-one"),
        videogame1= document.querySelector(".videogame"),
        button4= document.querySelector(".button-four"),
        videogame4= document.querySelector(".videogame4"),
        button3= document.querySelector(".button-three"),
        videogame3= document.querySelector(".videogame3"),
        



button2.addEventListener("click",()=>{
    videogame2.classList.toggle("active")
});
button3.addEventListener("click",()=>{
    videogame3.classList.toggle("active")
});
button4.addEventListener("click",()=>{
    videogame4.classList.toggle("active")
});
button.addEventListener("click",()=>{
    videogame1.classList.toggle("active")
});


button3.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("button3") ){
        videogame2.classList.remove("active"),
         videogame4.classList.remove("active"),
         videogame1.classList.remove("active");
    }

});

button2.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("button3") ){
        videogame4.classList.remove("active");
         videogame3.classList.remove("active");
videogame1.classList.remove("active");
    }

});

button4.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("button3") ){
        videogame2.classList.remove("active");
         videogame3.classList.remove("active");
videogame1.classList.remove("active");
    }

});
button.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("button3") ){
        videogame2.classList.remove("active");
         videogame3.classList.remove("active");
videogame4.classList.remove("active");
    }

});



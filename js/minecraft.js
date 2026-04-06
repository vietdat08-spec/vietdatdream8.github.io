const   body=document.querySelector("body"),
        nav=document.querySelector("nav"),
       
        button1= document.querySelector(".button1"),
        button2= document.querySelector(".button2"),
        img2= document.querySelector(".img2");



button1.addEventListener("click",()=>{
    button1.classList.toggle("active")
});

button1.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("button1") ){
        button2.classList.remove("active");
         
    }

});

button2.addEventListener("click",()=>{
    button2.classList.toggle("active")
});

button2.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("button2") ){
        button1.classList.remove("active");
         
    }

});
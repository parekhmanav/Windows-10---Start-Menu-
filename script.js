let menu = document.getElementsByClassName("menu")[0]
let win = document.getElementsByClassName("win")[0]


win.addEventListener('click',()=>{
    console.log("Clicked")
    if(menu.style.bottom == '-81px'){

        menu.style.bottom ='568px'
    }
    else{
        menu.style.bottom ='-81px'
    }
})



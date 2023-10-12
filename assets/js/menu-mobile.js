document.addEventListener("DOMContentLoaded", (event) => {
    
    // seleccionar mis dos elementos principales
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");

    //Función mostrar y ocultar menú
    const showHidenMenu = () => {
        let show = document.querySelector(".menu-mobile--show");

        if(show){
            mobile_menu.classList.remove("menu-mobile--show");
        }else{
            mobile_menu.classList.add("menu-mobile--show");
        } 
    };


    
    
    // Al dar click al botón del menú muestra el menú de navegación responsive
    mobile_btn.addEventListener("click", showHidenMenu);
       

    // Al redimensionar la pantalla por debajo de 1000px ocultar el menú si es necesario
    window.addEventListener("resize", () =>{
        let window_width = parseInt(document.body.clientWidth);

        if(window_width >= 1000){ 
            mobile_menu.classList.remove("menu-mobile--show");
        }
    });



//Poder cerra el menú con el botón X
    let btn_close = document.querySelector(".menu-mobile__close");

        btn_close.addEventListener("click",showHidenMenu);

    // Desplegar submenus
    let menu_item = document.querySelectorAll(".menu-mobile__item");

    menu_item.forEach(item => {
        
        item.addEventListener("click", (event) => {
            let submenu = item.lastElementChild;

            if(submenu.className === "menu-mobile__submenu-mobile"){
                if(submenu.style.display === "block"){
                    submenu.style.display = "none";
                }else{
                submenu.style.display = "block";
                }
            }
            
        });
    });

});       
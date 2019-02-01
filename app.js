//GET ELEMENTS FROM HTML DOCUMENT

//HAMBURGER ICON IN UPPER RIGTH CORNER
const hamburger = document.querySelector('.hamburger');
//MENU PAGE THAT APPEARS WHEN HAMBURGER IS CLICKED
const menu = document.querySelector('.menu');

//VARIABLE THAT WILL DECIDE IF THE MENU WILL BE SHOWN OR NOT
let showMenu = false;
//LISTEN FOR CLICK ON HAMBURGER ICON AND CALL TOGGLEMENU FUNCTION
hamburger.addEventListener('click', toggleMenu);
//DECLARE TOGGLEMENU FUNCTION
function toggleMenu() {
    //CHECK IF SHOW MENU VARAIBLE IS FALSE
    if (showMenu === false) {
        //ADD A CLASS 'CLOSE' TO THE HAMBURGER IN THE HTML DOC
        hamburger.classList.add('close');
        menu.classList.add('show');

        showMenu = true;
    }
    else {
        hamburger.classList.remove('close');
        menu.classList.remove('show');

        showMenu = false;
    }

} 
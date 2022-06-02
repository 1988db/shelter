document.addEventListener('DOMContentLoaded', ()=> {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('mobile-menu');    
    burger.addEventListener('click', openCloseMenu);    
    function openCloseMenu () {
        menu.classList.toggle('visible');
    }
});
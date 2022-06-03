document.addEventListener('DOMContentLoaded', ()=> {
    const burger = document.getElementById('burger');
    const logoWrapper = document.getElementById('logo-wrapper');
    const mainNav = document.getElementById('main-nav')
    const mainMenu = document.getElementById('main-menu');
    let isMenuOpen = false;
    burger.addEventListener('click', showHideMenu);

    function showHideMenu () {
        if(isMenuOpen) {
            logoWrapper.classList.toggle('visible');
            burger.classList.toggle('visible');
            mainNav.classList.toggle('visible');
            setTimeout(()=> {
                mainMenu.style.display = 'none';
                mainNav.style.display = 'none';
            }, 510);
            isMenuOpen = false;
            
        } else {
            logoWrapper.classList.toggle('visible');
            burger.classList.toggle('visible');
            mainMenu.style.display = 'flex';
            mainNav.style.display = 'flex';
            mainNav.classList.toggle('visible');
            isMenuOpen = true;       
        }
        
        
        
    }
    
});
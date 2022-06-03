document.addEventListener('DOMContentLoaded', ()=> {
    const body = document.querySelector('body');
    const burger = document.getElementById('burger');
    const logoWrapper = document.getElementById('logo-wrapper');    
    const mainMenu = document.getElementById('main-menu');
    const clonedMenu = mainMenu.cloneNode(true);
    const shutter = document.createElement('div');
    let mobileMenu;
    const nav = document.createElement('nav');
    let isMenuOpen = false;
    burger.addEventListener('click', showHideMenu);

    function createMobileMenu () {
        nav.classList.add('mobile-menu');
        nav.appendChild(clonedMenu);
        shutter.classList.add('shutter');
        shutter.addEventListener('click', showHideMenu);        
        logoWrapper.appendChild(nav);
        body.style.width = '100vw';
        body.style.height = '100vh';
        body.style.overflow = 'hidden';
        body.appendChild(shutter);        
        mobileMenu = nav;
    }

    function deleteMobileMenu () {
        logoWrapper.removeChild(nav);
        body.removeChild(shutter);
        body.style.width = 'auto';
        body.style.height = 'auto';
        body.style.overflow = 'auto';       
    }

    function slideIn () {
        mobileMenu.classList.toggle('visible');
        isMenuOpen = true;
    }

    function slideOut () {
        mobileMenu.classList.toggle('visible');
    }

    function showHideMenu () {
        if (!isMenuOpen) {
            logoWrapper.classList.toggle('visible');
            burger.classList.toggle('visible');
            createMobileMenu();
            setTimeout(()=> {
                slideIn();
            }, 10)
        } else {
            logoWrapper.classList.toggle('visible');
            burger.classList.toggle('visible');
            setTimeout(()=> {
                slideOut();
            },10)            
            setTimeout(()=> {                
                deleteMobileMenu();
            }, 511)
            isMenuOpen = false;
        }
    }
    
});
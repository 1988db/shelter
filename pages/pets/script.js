document.addEventListener('DOMContentLoaded', ()=> {
    const body = document.querySelector('body');
    const burger = document.getElementById('burger');
    const headerWrapper = document.getElementById('headerWrapper');
    const main = document.querySelector('main');
    const mainMenu = document.getElementById('main-menu');
    const clonedMenu = mainMenu.cloneNode(true);
    const nav = document.createElement('nav');
    const shutter = document.createElement('div');
    let isMenuOpen = false;
    let mobileMenu;
    burger.addEventListener('click', showHideMenu);

    function createMobileMenu () {
        clonedMenu.querySelectorAll('a').forEach(element => {
            element.addEventListener('click', resetLogo);
            element.addEventListener('click', deleteMobileMenu);
        });
        nav.classList.add('mobile-menu');
        clonedMenu.style.display = 'flex';
        nav.appendChild(clonedMenu);
        shutter.classList.add('shutter');
        shutter.addEventListener('click', showHideMenu); 
        main.appendChild(nav);
        body.style.width = '100vw';
        body.style.height = '100vh';
        body.style.overflow = 'hidden';
        body.appendChild(shutter);        
        mobileMenu = nav;
    }

    function deleteMobileMenu () {        
        main.removeChild(nav);
        body.removeChild(shutter);
        body.style.width = 'auto';
        body.style.height = 'auto';
        body.style.overflow = 'auto';   
        isMenuOpen = false;    
    }

    function slideIn () {
        mobileMenu.classList.toggle('visible');
        isMenuOpen = true;
    }

    function slideOut () {
        mobileMenu.classList.toggle('visible');
    }

    function resetLogo () {
        headerWrapper.classList.toggle('visible');
        burger.classList.toggle('visible');
        mobileMenu.classList.toggle('visible');
    }

    function showHideMenu () {
        if(!isMenuOpen) {
        headerWrapper.classList.toggle('visible');
        burger.classList.toggle('visible');
        createMobileMenu();
        setTimeout(()=> {
            slideIn();
        }, 10)
    } else {
        headerWrapper.classList.toggle('visible');
        burger.classList.toggle('visible');
        setTimeout(()=> {
            slideOut();
        },10)            
        setTimeout(()=> {                
            deleteMobileMenu();
        }, 511)            
    }
    }
});
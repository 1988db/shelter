document.addEventListener('DOMContentLoaded', ()=> {

    let petsData = [
        {
            "name": "Jennifer",
            "img": "../../assets/images/pets-jennifer.png",
            "type": "Dog",
            "breed": "Labrador",
            "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            "age": "2 months",
            "inoculations": ["none"],
            "diseases": ["none"],
            "parasites": ["none"]
          },
          {
            "name": "Sophia",
            "img": "../../assets/images/pets-sophia.png",
            "type": "Dog",
            "breed": "Shih tzu",
            "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            "age": "1 month",
            "inoculations": ["parvovirus"],
            "diseases": ["none"],
            "parasites": ["none"]
          },
          {
            "name": "Woody",
            "img": "../../assets/images/pets-woody.png",
            "type": "Dog",
            "breed": "Golden Retriever",
            "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            "age": "3 years 6 months",
            "inoculations": ["adenovirus", "distemper"],
            "diseases": ["right back leg mobility reduced"],
            "parasites": ["none"]
          },
          {
            "name": "Scarlett",
            "img": "../../assets/images/pets-scarlett.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            "age": "3 months",
            "inoculations": ["parainfluenza"],
            "diseases": ["none"],
            "parasites": ["none"]
          },
          {
            "name": "Katrine",
            "img": "../../assets/images/pets-katrine.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": ["panleukopenia"],
            "diseases": ["none"],
            "parasites": ["none"]
          },
          {
            "name": "Timmy",
            "img": "../../assets/images/pets-timmy.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            "age": "2 years 3 months",
            "inoculations": ["calicivirus", "viral rhinotracheitis"],
            "diseases": ["kidney stones"],
            "parasites": ["none"]
          },
          {
            "name": "Freddie",
            "img": "../../assets/images/pets-freddie.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            "age": "2 months",
            "inoculations": ["rabies"],
            "diseases": ["none"],
            "parasites": ["none"]
          },
          {
            "name": "Charly",
            "img": "../../assets/images/pets-charly.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
            "diseases": ["deafness", "blindness"],
            "parasites": ["lice", "fleas"]
          }
    ];

    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const burger = document.getElementById('burger');
    const headerWrapper = document.getElementById('headerWrapper');
    const main = document.querySelector('main');
    const mainMenu = document.getElementById('main-menu');
    const clonedMenu = mainMenu.cloneNode(true);
    const nav = document.createElement('nav');
    const shutter = document.createElement('div');
    let isMenuOpen = false;
    let cards = document.querySelectorAll('.card');

    let screenWidth = screen.width;
    const firstBtn = document.getElementById('firstBtn');
    const prvBtn = document.getElementById('prvBtn');
    const nextBtn = document.getElementById('nextBtn');
    const lastBtn = document.getElementById('lastBtn');
    let currentPage = 1;
    let pageNr = document.getElementById('pageNr');
    let petsPagesCount;
    let cardsOnPage;
    let petsPages = [];

    const popUp = document.getElementById('pop-up');
    const popUpContent = document.getElementById('pop-up-content');
    const popUpClose = document.getElementById('pop-up-close-btn');
    const petName = document.getElementById('pet-name');
    const popUpImg = document.getElementById('pop-up-img');
    const petType = document.getElementById('type');
    const petBreed = document.getElementById('breed');
    const petDescription = document.getElementById('description');
    const petAgeValue = document.getElementById('age-value');
    const petInoculationsValue = document.getElementById('inoculations-value');
    const petDiesasesValue = document.getElementById('diseases-value');
    const petParasitesValue = document.getElementById('parasites-value');

    
    //count number of pages needed and cards on each page
    if (screenWidth >= 1280) {
        petsPagesCount = 6;
        cardsOnPage = 8;        
      } else if (screenWidth >= 768 && screenWidth < 1280) {
        petsPagesCount = 8;
        cardsOnPage = 6;
      } else if (screenWidth < 768) {
        petsPagesCount = 12;
        cardsOnPage = 3;
      }

    //create 6 pages with random pets cards
    for (i=0; i< 6; i++) {
        let indexesArray = [0,1,2,3,4,5,6,7];
        indexesArray.sort(() => Math.random() - 0.5);
        petsPages.push(indexesArray);
    }

    //generate first page

    generatePages();
    
    prvBtn.addEventListener('click', previousPage);
    nextBtn.addEventListener('click', nextPage);
    firstBtn.addEventListener('click', firstPage);
    lastBtn.addEventListener('click', lastPage) ;   

    function previousPage() {
        if (currentPage == 2) {
            prvBtn.classList.add('disabled');
            firstBtn.classList.add('disabled');
        }
        if (currentPage == petsPagesCount) {
            nextBtn.classList.remove('disabled');
            lastBtn.classList.remove('disabled');
        }  
        if (currentPage == 1) {            
            generatePages();
        } else {
            currentPage--;
            generatePages();
        }
        pageNr.textContent = currentPage;
    }
    
    function nextPage() {
        if (currentPage == petsPagesCount - 1) {
            nextBtn.classList.add('disabled');
            lastBtn.classList.add('disabled');
        }
        if (currentPage == 1) {
            firstBtn.classList.remove('disabled');
            prvBtn.classList.remove('disabled');
        }  
        if (currentPage < petsPagesCount) {
            currentPage++;
            generatePages();
        } else if (currentPage == petsPagesCount) {
            generatePages();
        }
        pageNr.textContent = currentPage;
    }

    function firstPage() {
        if (currentPage == petsPagesCount) {
            nextBtn.classList.remove('disabled');
            lastBtn.classList.remove('disabled');
        }
        prvBtn.classList.add('disabled');
        firstBtn.classList.add('disabled');
        currentPage = 1;
        pageNr.textContent = currentPage;
        generatePages();        
    }

    function lastPage() {
        if (currentPage == 1) {
            prvBtn.classList.remove('disabled');
            firstBtn.classList.remove('disabled');
        }
        nextBtn.classList.add('disabled');
        lastBtn.classList.add('disabled');
        currentPage = petsPagesCount;
        pageNr.textContent = currentPage;
        generatePages();        
    }

    function generatePages() {
        for (i=0; i<cardsOnPage; i++) {                       
            cards[i].children[0].setAttribute('src', petsData[petsPages[currentPage-1][i]].img);
            
        }
    }

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

    //pop-up
    //add listeners to cards
    cards.forEach(element => element.addEventListener('click', openPopUp));
    //open pop-up
    function openPopUp (e) {
        let petIndex = e.target.closest('.card').dataset.index;
        popUp.classList.toggle('pop-up-visible');
        html.style.overflowY = 'hidden';
        body.style.overflowY = 'hidden';
        popUpImg.setAttribute('src', petsData[petIndex].img);
        petName.textContent = petsData[petIndex].name;
        petType.textContent = petsData[petIndex].type;
        petBreed.textContent = petsData[petIndex].breed;
        petDescription.textContent = petsData[petIndex].description;
        petAgeValue.textContent = petsData[petIndex].age;
        petInoculationsValue.textContent = petsData[petIndex].inoculations;
        petDiesasesValue.textContent = petsData[petIndex].diseases;
        petParasitesValue.textContent = petsData[petIndex].parasites;
      }
  
      //close pop-up
      popUp.addEventListener('click', closePopUp);
      popUpClose.addEventListener('click', closePopUp);
      popUpContent.addEventListener('click', (e)=> e.stopPropagation());
  
      function closePopUp () {
        popUp.classList.toggle('pop-up-visible');
        html.style.overflowY = 'auto';
        body.style.overflowY = 'auto';
      }
});
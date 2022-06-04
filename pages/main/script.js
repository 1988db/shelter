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
    const slideLeftBtn = document.getElementById('slide-left');
    const slideRightBtn = document.getElementById('slide-right');
    let petsRandomOrder = [];
    let sliderFirstPosition = 0;
    let slider = [0,1,2]; 
    slideLeftBtn.addEventListener('click', slideLeft);
    slideRightBtn.addEventListener('click', slideRight);
    let petsData = [
        {
            "name": "Jennifer",
            "img": "../../assets/images/jennifer.png",
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
            "img": "../../assets/images/sophia.png",
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
            "img": "../../assets/images/woody.png",
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
            "img": "../../assets/images/scarlett.png",
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
            "img": "../../assets/images/katrine.png",
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
            "img": "../../assets/images/timmy.png",
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
            "img": "../../assets/images/freddie.png",
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
            "img": "../../assets/images/charly.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
            "diseases": ["deafness", "blindness"],
            "parasites": ["lice", "fleas"]
          }
    ];
    
    //set pets random order

    //count pets
    for (i=0; i < petsData.length; i++) {
      petsRandomOrder.push(i);      
    }
    //mix their order randomly
    petsRandomOrder.sort(() => Math.random() - 0.5);
    console.log(petsRandomOrder);

    //function slide left
    function slideLeft () {
      //chechk slider length

      //set new slider values - slider values are indexes of petsRandomOrder array
      sliderFirstPosition = sliderFirstPosition - 3;
      if (sliderFirstPosition < 0) { //if we are out of petsRandomOrder array we count from the end
        sliderFirstPosition = petsRandomOrder.length + sliderFirstPosition;
      }
      slider[0] = sliderFirstPosition;
      if (sliderFirstPosition + 1 > petsRandomOrder.length - 1) { //if we are out of petsRandomOrder array we count from the beginning
        slider[1] = sliderFirstPosition + 1 - petsRandomOrder.length;
      } else {
        slider[1] = sliderFirstPosition + 1;
      }
      if (sliderFirstPosition + 2 > petsRandomOrder.length - 1) { //if we are out of petsRandomOrder array we count from the beginning
        slider[2] = sliderFirstPosition + 2 - petsRandomOrder.length;
      } else {
        slider[2] = sliderFirstPosition + 2;
      }
      console.log(slider);
    }

    //function slide right
    function slideRight () {
      //chechk slider length

      //set new slider values - slider values are indexes of petsRandomOrder array
      sliderFirstPosition = sliderFirstPosition + 3;
      if (sliderFirstPosition > petsRandomOrder.length - 1) { //if we are out of petsRandomOrder array we count from the beginning
        sliderFirstPosition = sliderFirstPosition - petsRandomOrder.length;
      }
      slider[0] = sliderFirstPosition;
      if (sliderFirstPosition + 1 > petsRandomOrder.length - 1) { //if we are out of petsRandomOrder array we count from the beginning
        slider[1] = sliderFirstPosition + 1 - petsRandomOrder.length;
      } else {
        slider[1] = sliderFirstPosition + 1;
      }
      if (sliderFirstPosition + 2 > petsRandomOrder.length - 1) { //if we are out of petsRandomOrder array we count from the beginning
        slider[2] = sliderFirstPosition + 2 - petsRandomOrder.length;
      } else {
        slider[2] = sliderFirstPosition + 2;
      }
      console.log(slider);
    }

    //mobile menu
    burger.addEventListener('click', showHideMenu);

    function createMobileMenu () {
        clonedMenu.querySelectorAll('a').forEach(element => {
            element.addEventListener('click', resetLogo);
            element.addEventListener('click', deleteMobileMenu);
        });
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
        logoWrapper.classList.toggle('visible');
        burger.classList.toggle('visible');
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
        }
    }
    
});
const dropdown = document.querySelectorAll('.question img');
const logo = document.querySelectorAll('.logo_image');
const form = document.querySelector('form');
const email = document.querySelector('input');
const error = document.querySelector('form img');
const tabOne = document.querySelector('#tab-one');
const tabTwo = document.querySelector('#tab-two');
const tabThree = document.querySelector('#tab-three');
const tabOneContent = document.querySelectorAll('.tab_one');
const tabTwoContent = document.querySelectorAll('.tab_two');
const tabThreeContent = document.querySelectorAll('.tab_three');
const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close_menu');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu a');

hamburger.addEventListener('click', function(e){
    menu.classList.add('open');
})
closeMenu.addEventListener('click', function(e){
    menu.classList.remove('open');
})

links.forEach(link => {
    link.addEventListener('click', function(e){
        menu.classList.remove('open');
    })
})



tabOne.addEventListener('click', function(e){
    this.classList.add('current');
    tabTwo.classList.remove('current');
    tabThree.classList.remove('current');

    tabOneContent.forEach(content => {
        content.style.display = 'block';
    })
    tabTwoContent.forEach(content => {
        content.style.display = 'none';
    })
    tabThreeContent.forEach(content => {
        content.style.display = 'none';
    })
})


tabTwo.addEventListener('click', function(e){
    this.classList.add('current');
    tabOne.classList.remove('current');
    tabThree.classList.remove('current');

    tabTwoContent.forEach(content => {
        content.style.display = 'block';
    })
    tabOneContent.forEach(content => {
        content.style.display = 'none';
    })
    tabThreeContent.forEach(content => {
        content.style.display = 'none';
    })
})


tabThree.addEventListener('click', function(e){
    this.classList.add('current');
    tabOne.classList.remove('current');
    tabTwo.classList.remove('current');

    tabThreeContent.forEach(content => {
        content.style.display = 'block';
    })
    tabOneContent.forEach(content => {
        content.style.display = 'none';
    })
    tabTwoContent.forEach(content => {
        content.style.display = 'none';
    })
})


logo.forEach(img => {
    img.addEventListener('click', function(e){
        window.location.reload();
    })
})

email.addEventListener('keyup', function(e){
    if(email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1){
        this.style.color = 'red';
    }else{
        this.style.color = 'black';
    }
})

form.addEventListener('submit', validate);
function validate(e){
    if(email.value === ''){
        e.preventDefault();
        error.classList.add('open');
        setTimeout(() => error.classList.remove('open'), 3000);
    }
}

dropdown.forEach(drop => {
    drop.addEventListener('click', openAnswer);
    function openAnswer(e){
        this.setAttribute('src', './images/icon-arrow-close.svg');
        this.style.transform = 'rotate(180deg)';

        this.nextElementSibling.classList.add('open');

        this.removeEventListener('click', openAnswer);
        this.addEventListener('click', closeAnswer);
    }
    function closeAnswer(e){
        this.setAttribute('src', './images/icon-arrow.svg');
        this.style.transform = 'rotate(0deg)';

        this.nextElementSibling.classList.remove('open');

        this.removeEventListener('click', closeAnswer);
        this.addEventListener('click', openAnswer);
    }
})
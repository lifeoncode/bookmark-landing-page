window.addEventListener('load', init);

function init(e){
    // tabs
    const [tabA, tabB, tabC] = [document.querySelector('#tab-a'), document.querySelector('#tab-b'), document.querySelector('#tab-c')];

    // tabs content
    const [contentA, contentB, contentC] = [document.querySelector('.tab_a_content'), document.querySelector('.tab_b_content'), document.querySelector('.tab_c_content')];

    // events for each tab
    tabA.addEventListener('click', function(e){
        this.classList.add('current');
        tabB.classList.remove('current');
        tabC.classList.remove('current');

        showContentA();
    })

    tabB.addEventListener('click', function(e){
        this.classList.add('current');
        tabA.classList.remove('current');
        tabC.classList.remove('current');

        showContentB();
    })
    
    tabC.addEventListener('click', function(e){
        this.classList.add('current');
        tabA.classList.remove('current');
        tabB.classList.remove('current');

        showContentC();
    })
    



    // functions called for tabs
    function showContentA(){

        // first hide all other content
        contentB.classList.add('hide');
        contentC.classList.add('hide');

        // then show relevant content
        contentA.classList.remove('hide');
    }
    
    function showContentB(){

        // first hide all other content
        contentA.classList.add('hide');
        contentC.classList.add('hide');
        
        // then show relevant content
        contentB.classList.remove('hide');
    }

    function showContentC(){

        // first hide all other content
        contentA.classList.add('hide');
        contentB.classList.add('hide');

        // then show relevant content
        contentC.classList.remove('hide');
    }






    // questions dropdown
    const [qA, qB, qC, qD] = [document.querySelector('#q-a .drop'), document.querySelector('#q-b .drop'), document.querySelector('#q-c .drop'), document.querySelector('#q-d .drop')];

    // closing dropdown
    const [closeA, closeB, closeC, closeD] = [document.querySelector('#q-a .close'), document.querySelector('#q-b .close'), document.querySelector('#q-c .close'), document.querySelector('#q-d .close')];
    
    // answers
    const [ansA, ansB, ansC, ansD] = [document.querySelector('#ans-a'), document.querySelector('#ans-b'), document.querySelector('#ans-c'), document.querySelector('#ans-d')];

    let red = 'var(--soft-red)';
    let blue = 'var(--dark-blue)';

    // dropdown events
    qA.addEventListener('click', function(e){

        // first change the arrow
        this.classList.add('hide');
        closeA.classList.remove('hide')

        // change the color of question
        document.querySelector('#q-a h3').style.color = `${red}`;

        // then show answer
        ansA.classList.remove('hide');
        ansA.classList.add('ans');
    })
    

    qB.addEventListener('click', function(e){

        // first change the arrow
        this.classList.add('hide');
        closeB.classList.remove('hide')

        // change the color of question
        document.querySelector('#q-b h3').style.color = `${red}`;

        // then show answer
        ansB.classList.remove('hide');
        ansB.classList.add('ans');
    })
    
    
    qC.addEventListener('click', function(e){

        // first change the arrow
        this.classList.add('hide');
        closeC.classList.remove('hide')

        // change the color of question
        document.querySelector('#q-c h3').style.color = `${red}`;

        // then show answer
        ansC.classList.remove('hide');
        ansC.classList.add('ans');
    })


    qD.addEventListener('click', function(e){

        // first change the arrow
        this.classList.add('hide');
        closeD.classList.remove('hide')

        // change the color of question
        document.querySelector('#q-d h3').style.color = `${red}`;

        // then show answer
        ansD.classList.remove('hide');
        ansD.classList.add('ans');
    })





    // closing the dropdown
    closeA.addEventListener('click', function(e){
        this.classList.add('hide');
        qA.classList.remove('hide');

        document.querySelector('#q-a h3').style.color = `${blue}`;

        ansA.classList.add('hide');
        ansA.classList.remove('ans');
    })


    closeB.addEventListener('click', function(e){
        this.classList.add('hide');
        qB.classList.remove('hide');

        document.querySelector('#q-b h3').style.color = `${blue}`;

        ansB.classList.add('hide');
        ansB.classList.remove('ans');
    })


    closeC.addEventListener('click', function(e){
        this.classList.add('hide');
        qC.classList.remove('hide');

        document.querySelector('#q-c h3').style.color = `${blue}`;
        
        ansC.classList.add('hide');
        ansC.classList.remove('ans');
    })


    closeD.addEventListener('click', function(e){
        this.classList.add('hide');
        qD.classList.remove('hide');

        document.querySelector('#q-d h3').style.color = `${blue}`;
        
        ansD.classList.add('hide');
        ansD.classList.remove('ans');
    })






    // form validation
    const [form, input] = [document.querySelector('form'), document.querySelector('input')];

    // form event
    form.addEventListener('submit', function(e){
        if(input.value === ''){
            e.preventDefault();
            input.style.border = `2px solid ${red}`;
            document.querySelector('#error').classList.remove('hide');
            document.querySelector('#error').textContent = `You forgot to enter your email`;
            
        }
    })


    input.addEventListener('keyup', function(e){
        if(input.value.indexOf('@') === -1){
            input.style.border = `2px solid ${red}`;
            document.querySelector('#error').classList.remove('hide');
            document.querySelector('#error').textContent = `Whoops, make sure it's an email`;

        }else{
            document.querySelector('#error').classList.add('hide');
            input.style.border = '0';
        }
    })





    // menu
    const [openMenu, closeMenu, menu] = [document.querySelector('#menu-btn'), document.querySelector('#close-menu'), document.querySelector('#menu')];

    openMenu.addEventListener('click', function(e){
        menu.classList.add('show_menu');

        setTimeout(() => {
            menu.style.top = '0';
            menu.classList.remove('show_menu')
        }, 600)
    })

    closeMenu.addEventListener('click', function(e){
        menu.classList.add('hide_menu');

        setTimeout(() => {
            menu.style.top = '-1450px';
            menu.classList.remove('hide_menu');
        }, 600)
    })
    
}
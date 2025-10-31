const voceMenuPunti = document.querySelector('#menu-punti');
const voceMenuVideo = document.querySelector('#menu-video');
const voceMenuInspo = document.querySelector('#menu-inspo');
const table = document.getElementById('table');
const subscribe = document.getElementById('sub-btn');
const subCard = document.getElementById('subscribe-card');


voceMenuPunti.addEventListener('click', function(){
    console.log("Test al click");
    table.classList.add("active");
    
});


subscribe.addEventListener('click', function(){
    console.log("click su bottone");
    subscribe.toggleAttribute('active');

    if (subscribe.hasAttribute('active')) {
        subCard.classList.add('visible');
    } else {
        subCard.classList.remove('visible');
    }
})




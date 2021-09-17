/*==========Dates============*/
const Clock = function(){
    const time = document.querySelector('.time');
    const days = ['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat'];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        
    setInterval(() => {
            const date = new Date()
            time.textContent= [days[date.getDay()], date.getDate(), months[date.getMonth()], `${date.getHours()}:${date.getMinutes() > 9? date.getMinutes() : '0' + date.getMinutes()}`].join(' ');
        }, 1000);
    }
Clock();
/*==========================================*/


/*==============images======================*/ 

let imageContainer = document.querySelector('.scroll-object');
let image = document.querySelectorAll('.image');
let body = document.querySelector('body');

imageContainer.addEventListener('click', function(e){
    const clicked = e.target.closest('.image');
    console.log(clicked.currentSrc);

    if(!clicked) return;
    image.forEach(t => t.classList.remove('image3'))
        clicked.classList.add('image3');
        
});


for(let i=0; i<imageContainer.children.length; i++){
    imageContainer.children[i].addEventListener('click', function(){
        body.style.backgroundImage = `url(./images/image-${i}.jpg)`;
        body.style.backgroundSize = 'cover';
    })
};

/*===================Close modal==================== */

const settings = document.querySelector('.settings');
const modal = document.querySelector('.box');

settings.addEventListener('click', function(){
    modal.classList.toggle('hidden');
})

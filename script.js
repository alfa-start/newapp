function togglenav(){
    var navbar = document.getElementById('navbar')
    if(navbar.className === 'navbar')
    navbar.className = 'responsive';

    else{
        navbar.className ='navbar'
    }
}


document.addEventListener('DOMContentLoaded', function () {

    const faqItems = document.querySelectorAll('.faq-item')

    faqItems.forEach(function (item) {
        const question = item.querySelector('.faq-question')
        question.addEventListener('click', function () {
            faqItems.forEach(function (faqItem) {
                if (faqItem !== item) {
                    faqItem.classList.remove('active')
                    faqItem.querySelector('.faq-answer').style.display = 'none'
                 }
            })
            item.classList.toggle('active')
            const answer = item.querySelector('.faq-answer')
            answer.style.display = item.classList.contains('active') ? 'block' : 'none'
           
        })
    })

})

let currentindex = 0;
const slides = document.querySelectorAll('.slider img')
const totalslides = slides.length
const slidesinterval= 3000

document.querySelector('.next').addEventListener('click', ()=>{
    currentindex =( currentindex + 1) % totalslides
    updateslider()
    resetinterval()

})
document.querySelector('.prev').addEventListener('click', ()=>{
    currentindex =( currentindex > 0)? currentindex -1 : totalslides -1;
    updateslider()
    resetinterval()

})
function updateslider(){
    document.querySelector('.slider').style.transform = `translateX(${-currentindex * 100}%)`
}

let slidetimer = setInterval(autoslide,slidesinterval)

function autoslide(){
    currentindex = (currentindex +1)% totalslides
    updateslider()
}

function resetinterval() {
    clearInterval(slidetimer)
    slidetimer = setInterval(autoslide,slidesinterval)
    
}
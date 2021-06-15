let items = document.querySelectorAll('.carousel .carousel-inner.content6-slider .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

const btncontrol = document.querySelectorAll('.ct6 a');
const btn7 = document.querySelectorAll('.content-7 button');
btn7[0].onclick = () =>{
    btncontrol[0].click();
    btn7[0].disabled = true;
    btn7[1].disabled = false;
    btn7[0].classList.add('choosing-7');
    btn7[0].classList.remove('notchoose-7');
    btn7[1].classList.add('notchoose-7');
}
btn7[1].onclick = () =>{
    btncontrol[1].click();
    btn7[1].disabled = true;
    btn7[0].disabled = false;
    btn7[1].classList.add('choosing-7');
    btn7[1].classList.remove('notchoose-7');
    btn7[0].classList.add('notchoose-7');
}
setInterval(() => {
    if(window.innerWidth * 1.0 < 700){
        btncontrol.forEach(e => {
            e.classList.remove('visually-hidden');
        });
    }
    else{
        btncontrol.forEach(e => {
            e.classList.add('visually-hidden');
        });
    }
}, 0);
const nav = document.querySelector('.navbar.d-none.d-lg-block');
const logo = document.querySelector('.navbar-brand.ds img');
const navitems= document.querySelectorAll('.navbar-nav.ds .nav-item .nav-link');
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll > 45){ 
        nav.classList.add('fixed-top');
        nav.classList.add('blue');
        for (const i of navitems) {
            i.classList.add('ds');
        }
        logo.setAttribute('src','public/img/logo2.png')
    }
    else{
        nav.classList.remove('fixed-top');
        nav.classList.remove('blue');
        logo.setAttribute('src','public/img/logo1.png')
        for (const i of navitems) {
            i.classList.remove('ds');
        }
    }
});

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton.classList.add('opacity');
  } else {
    mybutton.style.display = "none";
    mybutton.classList.remove('opacity');
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const ct8 = document.querySelectorAll('.ct8 .col-lg-4');
ct8.forEach(e => {
    e.addEventListener('mouseover', ()=>{
        e.firstElementChild.setAttribute('id','scale');
    })
    e.addEventListener('mouseout', ()=>{
        e.firstElementChild.removeAttribute('id');
    })
    e
});

const sliderct1 = document.querySelector('.slider-main');
const btncontrol_ct1 = document.querySelectorAll('.carousel-fade button.banner-control');
sliderct1.addEventListener('mouseover',()=>{
    btncontrol_ct1.forEach(e=>{
        e.removeAttribute('id');
    })
})
sliderct1.addEventListener('mouseout',()=>{
    btncontrol_ct1[0].setAttribute('id','tranL');
    btncontrol_ct1[1].setAttribute('id','tranR');
})
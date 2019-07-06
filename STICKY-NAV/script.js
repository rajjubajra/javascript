
//select div
const body = document.querySelector('body');
const container = document.querySelector('.container');
const nav = document.querySelector('Nav');
const landing = document.querySelector('.landing');
const pageOne = document.querySelector('.page-one');


const innerHeight = window.innerHeight;//display window height
const NavHeight = nav.offsetHeight; //height of the Nav div


//nav bar position to the bottom of the page
//on scroll Nav bar will stick to top
const navPosition = innerHeight - NavHeight;
nav.style.marginTop = `${navPosition}px`;


//Landing page position 
landing.style.marginTop = `-${innerHeight}px`;


//on scroll stick Nav at top
stickAtTop = (e) => {
  //window scroll position
  let scrollingPosition = window.scrollY;
  if(scrollingPosition >= navPosition){
    //stick to top
    nav.style.marginTop = `0px`;
    pageOne.style.paddingTop = `${innerHeight}px`;
    body.classList.add('sticky-at-top');
   
  }else{
    //back to the position
    body.classList.remove('sticky-at-top');
    nav.style.marginTop = `${navPosition}px`;
    pageOne.style.paddingTop = '0px';
  }
}
window.addEventListener('scroll', stickAtTop);
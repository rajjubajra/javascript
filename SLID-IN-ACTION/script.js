//image list from image folder
listing = () => {
  let iVal = ''; 
  for(let i=1; i <=12; i++){
         iVal += `<img src="images/birds-${i}.jpg" alt="bird-${i}" /><br />`;
      }
  document.querySelector('.images').innerHTML = iVal;
}
listing();





//select images
const images = document.querySelectorAll('img');
console.log(images);


images.forEach(img => {
  img.alt === 'bird-1' 
  ? img.classList.add('show') 
  : img.classList.add('hide');
})


function imageSlideIn(e){

  images.forEach(img => {

    //top point image hide
    const topPeek =  img.offsetTop + img.height
    //bottom point image show
    const bottomPeek = img.offsetTop - window.innerHeight + (img.height/2);
    //scroll position
    const scrollPosition = window.scrollY;
   
    if(topPeek >= scrollPosition && bottomPeek <= scrollPosition){
      //add class 'show'
      img.classList.remove('hide');
      img.classList.add('show');
    }else{
      //add class hide
      img.classList.remove('show');
      setTimeout(img.classList.add('hidding'), 1500);
      img.classList.add('hide');
    }
  })
}

window.addEventListener('scroll', imageSlideIn);
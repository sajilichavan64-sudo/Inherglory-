// SCROLL REVEAL

const hiddenElements = document.querySelectorAll(
'.card, .review, .faq-box, .policy, .care, .gallery img'
);

const observer = new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
});

hiddenElements.forEach((el)=>{
el.classList.add('hidden');
observer.observe(el);
});


// FLOATING HEARTS EFFECT

function createHeart(){

const heart = document.createElement('div');

heart.innerHTML = '💗';

heart.style.position = 'fixed';
heart.style.left = Math.random() * window.innerWidth + 'px';
heart.style.top = '-20px';
heart.style.fontSize = Math.random() * 20 + 15 + 'px';
heart.style.opacity = '0.7';
heart.style.zIndex = '999';
heart.style.pointerEvents = 'none';

document.body.appendChild(heart);

let position = 0;

const fall = setInterval(()=>{

position += 3;

heart.style.top = position + 'px';

if(position > window.innerHeight){
clearInterval(fall);
heart.remove();
}

},20);

}

setInterval(createHeart,1200);


// BUTTON GLOW EFFECT

const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn=>{

btn.addEventListener('mousemove',(e)=>{

const x = e.offsetX;
const y = e.offsetY;

btn.style.background = `
radial-gradient(circle at ${x}px ${y}px,
#ffb6d1,
#ff70a6)
`;

});

btn.addEventListener('mouseleave',()=>{

btn.style.background =
'linear-gradient(45deg,#ff70a6,#ff9fc6)';

});

});


// SMOOTH IMAGE POPUP EFFECT

const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img=>{

img.addEventListener('click',()=>{

img.classList.toggle('active');

});

});


// AUTO SPARKLE EFFECT

function sparkle(){

const spark = document.createElement('div');

spark.innerHTML = '✨';

spark.style.position = 'fixed';
spark.style.left = Math.random() * window.innerWidth + 'px';
spark.style.top = Math.random() * window.innerHeight + 'px';
spark.style.fontSize = Math.random() * 15 + 10 + 'px';
spark.style.opacity = '0.8';
spark.style.zIndex = '999';
spark.style.pointerEvents = 'none';

document.body.appendChild(spark);

setTimeout(()=>{
spark.remove();
},2000);

}

setInterval(sparkle,900);
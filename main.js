const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu= document.querySelector(".nav__items");


menuBtn.addEventListener("click", () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})


closeBtn.addEventListener("click", () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})
 

const faqs = document.querySelectorAll('.faqs' );

faqs.forEach(faqs => {
    faqs.addEventListener('click',() => {
        faqs.classList.toggle('open');

        const icon = faqs.querySelector('.faqs__icon i');

        if(icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        } else{
            icon.className = 'fa-solid fa-plus';
        }
        
        
    });
});


window.addEventListener('scroll' , () => {
   document.querySelector('nav').classList.toggle('window-scroll' , window. 
   scrollY > 0);

})
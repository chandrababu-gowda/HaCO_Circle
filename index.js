'use strict';

const toggleBtn = document.querySelector('.toggleBTN');
const nav = document.querySelector(".navLinks");

toggleBtn.addEventListener('click',function(){
    if(nav.classList.contains("hidden")){
        nav.classList.remove('hidden');
    }else{
        nav.classList.add('hidden')
    }
})
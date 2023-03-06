const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesbtn = document.querySelector('.button-yes');
const nobtn = document.querySelector('.button-no');

const wrapperRect = wrapper.getBoundingClientRect();
const nobtnRect = nobtn.getBoundingClientRect();

yesbtn.addEventListener('click', () =>{
    question.innerHTML = 'Ayyyiiiieeehhh😍🥰😜';
});

nobtn.addEventListener('click', () => {
    question.innerHTML = 'You do not have any other choice, just say yes😜😅';
    const i = Math.floor(Math.random()*(wrapperRect.width - nobtnRect.width))+1;
    const j = Math.floor(Math.random()*(wrapperRect.height - nobtnRect.height))+1;

    nobtn.style.left = i + 'px';
    nobtn.style.left = j + 'px';
    
})

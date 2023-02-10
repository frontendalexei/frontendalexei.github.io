const wrapper = document.querySelectorAll('.first__wrapper');
const burger = document.querySelector('.promo__burger');
const burgerActive = document.querySelector('.active');
const burgerActivity = document.querySelector('.activity');
const link = document.querySelector('.link');
wrapper.forEach(e => {
    burger.addEventListener('click', () => {
        showElement(e.children[1]);
        hideElement(e.children[2]);
        hideElement(e.children[0]);
    });
    burgerActive.addEventListener('click', () => {
        showElement(e.children[0]);
        hideElement(e.children[1]);
        hideElement(e.children[2]);
    });
    burgerActivity.addEventListener('click', () => {
        showElement(e.children[1]);
        hideElement(e.children[0]);
        hideElement(e.children[2]);
    });
    link.addEventListener('click', () => {
        showElement(e.children[2]);
        hideElement(e.children[1]);
        hideElement(e.children[0]);
    });
    showElement(e.children[0]);
    hideElement(e.children[1]);
    hideElement(e.children[2]);

    console.log(e.children);
});
function hideElement(elem) {

    elem.style.display = 'none';

}
function showElement(element) {
    element.style.display = 'block';
};
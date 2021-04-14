const nav = document.querySelector('#navbar');
// identify an element to observe
const navTglr = document.querySelector('.navbar-toggler');
// create a new instance of `MutationObserver` named `observer`,
// passing it a callback function
const observer = new MutationObserver(function() {
    if (navTglr.ariaExpanded === "true"){
        nav.classList.add('shaddow-bg-hamburger');
    } else {
        nav.classList.remove('shaddow-bg-hamburger');
    }
});
// call `observe()` on that MutationObserver instance,
// passing it the element to observe, and the options object
observer.observe(navTglr, {attributeFilter: ["aria-expanded"]});
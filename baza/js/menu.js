document.addEventListener('DOMContentLoaded', function (){
    const nav = document.querySelector('#navbar');
    function addShadow() {
        if (window.scrollY >= 150){
            nav.classList.add('shaddow-bg');
        } else {
            nav.classList.remove('shaddow-bg');
        }
    }
    window.addEventListener('scroll', addShadow)
});

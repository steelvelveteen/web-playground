document.addEventListener('DOMContentLoaded', init);

function init(){
    console.log('DOM has been loaded');
    let query = window.matchMedia('(max-width: 599px)');

    // if (query.matches) {
    //     console.log('Media matches: max-width: 599px');
    //     document.querySelector('h1').style.color = "red";
    // } else {
    //     console.log('Nope');
    //     document.querySelector('h1').style.color = "black";
    // }

    // This works!!
    query.addEventListener('change', (q) => {
        if (q.matches) {
            document.querySelector('h1').style.color = "red";
            console.log('Media matches: max-width: 599px');
        } else {
            document.querySelector('h1').style.color = "black";
            console.log('Nope');
        }
    });
}
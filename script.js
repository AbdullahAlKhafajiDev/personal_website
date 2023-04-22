const me_to_name = document.querySelector(".welcome-block span")
const leftScrollBackground = document.querySelector('.side-line')

leftScrollBackground.style.height = `${bodyHeightFinder() * 0.7}px`

//for changing the ME to ABDULLAH AL KHAFAJI.
window.addEventListener('scroll', (e)=>{
    fillScrollBar = document.querySelector('.fill-side-line')
    percentageScrolled = getScrollPercent() * 0.01
    console.log(percentageScrolled)

    //changes name on scroll.
    if (percentageScrolled == 0){
        me_to_name.innerHTML = "me"
        fillScrollBar.style.height = `0px`
    }
    else {
        me_to_name.innerHTML = "Abdullah Al Khafaji";
        fillScrollBar.style.height = `${percentageScrolled * (bodyHeightFinder() * 0.7)}px`;
    }
    
})

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}



function bodyHeightFinder(){
    let body = document.body, html = document.documentElement;
    let bodyHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    return bodyHeight;
}

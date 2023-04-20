const me_to_name = document.querySelector(".welcome-block span")


//for changing the ME to ABDULLAH AL KHAFAJI.
me_to_name.addEventListener('mouseover', (e)=>{
    me_to_name.innerHTML = "Abdullah Al Khafaji"
})

me_to_name.addEventListener('mouseout', (e)=>{
    me_to_name.innerHTML = "me"
})

window.addEventListener('scroll', (e)=>{
    fillScrollBar = document.querySelector('.fill-side-line')
    percentageScrolled = getScrollPercent() * 0.01
    console.log(percentageScrolled)
    let i = 1;
    //changes name on scroll.
    if (percentageScrolled == 0){
        me_to_name.innerHTML = "me"
    }
    else {
        me_to_name.innerHTML = "Abdullah Al Khafaji";
        fillScrollBar.style.height = `${percentageScrolled * 2500}px`;
    }
    
})

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}


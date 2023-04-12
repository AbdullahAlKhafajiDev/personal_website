const me_to_name = document.querySelector(".welcome-text-box span")


//for changing the ME to ABDULLAH AL KHAFAJI.
me_to_name.addEventListener('mouseover', (e)=>{
    me_to_name.innerHTML = "Abdullah Al Khafaji"
})

me_to_name.addEventListener('mouseout', (e)=>{
    me_to_name.innerHTML = "me"
})

window.addEventListener('scroll', (e)=>{
    precentageScrolled = getScrollPercent()

    if (precentageScrolled == 0){
        me_to_name.innerHTML = "me"
    }
    else (
        me_to_name.innerHTML = "Abdullah Al Khafaji"
    )
    
})

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}


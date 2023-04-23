const me_to_name = document.querySelector(".welcome-block span")
const leftScrollBackground = document.querySelector('.side-line')
leftScrollBackground.style.height = `${bodyHeightFinder() * 0.7}px`

var asyncFuncWorking = false; //global variable to prevent repeated function calls.
var inFirstSection = true;

document.querySelector('.first-block').style.setProperty('--opacity', 1)
document.querySelector('.second-block').style.setProperty('--opacity', 1)
document.querySelector('.third-block').style.setProperty('--opacity', 1)

//for changing the ME to ABDULLAH AL KHAFAJI.
window.addEventListener('scroll', (e)=>{
    const personalImgae = document.getElementById('personal_image')
    fillScrollBar = document.querySelector('.fill-side-line')
    percentageScrolled = getScrollPercent() * 0.01
    console.log(percentageScrolled)

    //changes name on scroll.
    if (percentageScrolled == 0){
        me_to_name.innerHTML = "me"
        fillScrollBar.style.height = `0px`
        inFirstSection = true;

        //image transformation
        personalImgae.style.opacity = '0'
        personalImgae.style.transform = "translate(-50%,-30%)"
    }
    else {
        
        if (asyncFuncWorking == false && inFirstSection == true){
            slowTextTransformer(me_to_name, "Abdullah Al Khafaji");

            //image transformation.
            personalImgae.style.opacity = '1'
            personalImgae.style.transform = "translate(-50%,-50%)"
        }

        inFirstSection = false;
        fillScrollBar.style.height = `${percentageScrolled * (bodyHeightFinder() * 0.7)}px`;

        //will return true if object in view.
        gradientBackgroundChanger(document.querySelector('.first-block'))
        gradientBackgroundChanger(document.querySelector('.second-block'))
        gradientBackgroundChanger(document.querySelector('.third-block'))
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

function slowTextTransformer(elementObject, newString){
    asyncFuncWorking = true;
    let delay = 0;
    let speed = 30;
    let word = '';
    
    for (let letter of newString){
        setTimeout(() => {
            word += letter;
            elementObject.innerHTML = word;
            if (word == newString){
                console.log(`text conversion of "${newString}" complete.`)
                asyncFuncWorking = false;
            }
        }, delay += speed);
    }
}

function isInViewport(elementObject){
    let  bounding = elementObject.getBoundingClientRect();
    
    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
        return true
    }
}

function gradientBackgroundChanger(object){
    let blockInView = isInViewport(object)
        if (blockInView){
            object.style.setProperty('--opacity', 0)
            setTimeout(() => {
                object.style.setProperty('--display', 'none')
            }, 500);
        }
        else {
            object.style.setProperty('--opacity', 1)
            setTimeout(() => {
                object.style.setProperty('--display', 'block')
            }, 500);
        }
}

function introduction(){
    var currentPositionOfPage = window.scrollY;
    window.scrollTo(0, currentPositionOfPage + 20);
    setTimeout(() => {
        document.querySelector('.first-block').scrollIntoView();
    }, 1200);
}
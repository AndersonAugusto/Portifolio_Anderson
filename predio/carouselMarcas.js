let minutes = document.getElementsByClassName('minute')

function wipeIn(element) {
    element.classList.add('wipe-in')
}

function wipeOut(element) {
    element.classList.add('wipe-out')
    delay(2000).then(() => reset(element))
}

function reset(element) {
    element.classList = 'minute'
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
function* carousel(elements) {   
    for (let i = 0; i >= 0; i++) {
        if (i === 0) {
            wipeIn(elements[i])
            yield
        } 
            wipeOut(elements[i % elements.length])
            wipeIn(elements[(i + 1) % elements.length])
            yield
    }
}
function runCarousel(genObj) {
    if (!genObj.next().done) {
        setTimeout(runCarousel, 7000, genObj)
    }
}
runCarousel(carousel(minutes))
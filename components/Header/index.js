// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component


/**
 * Main
 */


Header()




/**
 * Helpers
 */


function Header() {
    const header = document.createElement('div')
    header.classList.add('header')

    const date = document.createElement('date')
    date.classList.add('date')
    date.textContent = 'March 28, 2019'

    const h1 = document.createElement('h1')
    h1.textContent = 'Lambda Times'

    const temp = document.createElement('span')
    temp.classList.add('temp')
    temp.textContent = "98"+ '\u00B0'

    appendChildren(header, [date, h1, temp])

    document.querySelector('.header-container').appendChild(header)
    
    return header
}


function appendChildren(to, elements) {
    elements.forEach(el => {
        to.appendChild(el)
    })
}

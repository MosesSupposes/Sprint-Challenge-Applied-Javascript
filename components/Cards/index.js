// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


/**
 * Main
 */


fetchCards()




/**
 * Helpers
 */


function fetchCards() {
    axios
        .get('https://lambda-times-backend.herokuapp.com/articles')
        .then(function renderCards(res){
            const { data: { articles } } = res

            Object.values(articles).forEach(function(articleType) {
                articleType.forEach(function renderIntoCard(article) {
                    return Card(article.headline, article.authorPhoto, article.authorName)
                })
            })
        })
}

function Card(articleHeadline, authorImgSrc, authorName) {
    const card = document.createElement('div')
    card.classList.add('card')

    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = articleHeadline

    const author = document.createElement('div')
    author.classList.add('author')

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const img = document.createElement('img')
    img.src = authorImgSrc

    const span = document.createElement('span')
    span.textContent = `By ${authorName}`
    
    imgContainer.appendChild(img)
    appendChildren(author, [imgContainer, span])
    appendChildren(card, [headline, author])
    document.querySelector('.cards-container').appendChild(card)
    
    return card
}


function appendChildren(to, elements) {
    elements.forEach(el => {
        to.appendChild(el)
    })
}
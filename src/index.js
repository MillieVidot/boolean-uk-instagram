const rootEl = document.querySelector('#root')
console.log(rootEl)

// header 
const headerEl = document.createElement('header')
headerEl.setAttribute("class", "main-header")

const wrapperEl = document.createElement('div')
wrapperEl.setAttribute("class", "wrapper")
// div 1 
const chip1El = document.createElement('div')
chip1El.setAttribute("class", "chip")
chip1El.classList.add("active")

const headerAvatarSmall1El = document.createElement('div')
headerAvatarSmall1El.setAttribute("class", "avatar-small")

const image1El = document.createElement('img')
image1El.setAttribute("src", "https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg")
image1El.setAttribute("alt", "Salvador Dali")

const userName1El = document.createElement('span')
userName1El.innerText = "Salvador Dali"

// div 2 
const chip2El = document.createElement('div')
chip2El.setAttribute("class", "chip")

const headerAvatarSmall2El = document.createElement('div')
headerAvatarSmall2El.setAttribute("class", "avatar-small")

const image2El = document.createElement('img')
image2El.setAttribute("src", "https://www.sartle.com/sites/default/files/images/artist/pablo-picasso-137216-5115406.jpg")
image2El.setAttribute("alt", "Picasso")

const userName2El = document.createElement('span')
userName2El.innerText = "Picasso"

// div 3 
const chip3El = document.createElement('div')
chip3El.setAttribute("class", "chip")

const headerAvatarSmall3El = document.createElement('div')
headerAvatarSmall3El.setAttribute("class", "avatar-small")

const image3El = document.createElement('img')
image3El.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&amp;usqp=CAU")
image3El.setAttribute("alt", "Van Gogh")

const userName3El = document.createElement('span')
userName3El.innerText = "Van Gogh"


// main 
const mainEl = document.createElement('main')
mainEl.setAttribute("class", "wrapper")
// post section 
const createPostSectionEl = document.createElement('section')
createPostSectionEl.setAttribute("class", "create-post-section")
// post section form 
const createPostFormEl = document.createElement('form')
createPostFormEl.setAttribute("id", "create-post-form")
createPostFormEl.setAttribute("autocomplete", "off")
// form innards 
const createPostTitleEl = document.createElement('h2')
createPostTitleEl.innerText = "Create a post"

const imageInputLabelEl = document.createElement('label')
imageInputLabelEl.innerText = "Image"
const imageInputUrlEl = document.createElement('input')
imageInputUrlEl.setAttribute("id", "image")
imageInputUrlEl.setAttribute("name", "image")
imageInputUrlEl.setAttribute("type", "text")

const imageTitleLabelEl = document.createElement('label')
imageTitleLabelEl.innerText = "Title"
const imageTitleInputEl = document.createElement('input')
imageTitleInputEl.setAttribute("id", "title")
imageTitleInputEl.setAttribute("name", "title")
imageTitleInputEl.setAttribute("type", "text")

const imageContentLabelEl = document.createElement('label')
imageContentLabelEl.innerText = "Content"
const imageContentInputEl = document.createElement('textarea')

const actionBtnsEL = document.createElement('div')
actionBtnsEL.setAttribute("class" , "action-btns")
const previewBtn = document.createElement('button')
previewBtn.setAttribute("id", "preview-btn")
previewBtn.setAttribute("type" , "submit")
previewBtn.innerText = "Preview"

const postBtn = document.createElement('button')
postBtn.setAttribute("type", "button")
postBtn.innerText = "Post"
// postBtn.addEventListener("click", function() {

//    // user adds image url
//    // user adds image this.title 
//    // user adds content text 
//    // when click submit add to server
//    // update page with new server information


// })


// form section 
actionBtnsEL.append(previewBtn, postBtn)
createPostFormEl.append(createPostTitleEl, imageInputLabelEl, imageInputUrlEl, imageTitleLabelEl, imageTitleInputEl, imageContentLabelEl, imageContentInputEl, actionBtnsEL)
createPostSectionEl.append(createPostFormEl)

// feed section 
const createPostSectionFeedEl = document.createElement('section')
createPostSectionFeedEl.setAttribute("class", "feed")

const feedStackListEl = document.createElement('ul')
feedStackListEl.setAttribute("class", "stack")
// list 
const feedStackListItmesEl = document.createElement('li')
feedStackListItmesEl.setAttribute("class", "post")

const StackPostDivEl = document.createElement('div')
StackPostDivEl.setAttribute("class", "chip")
StackPostDivEl.classList.add("active")

const feedAvatarSmall1El = document.createElement('div')
feedAvatarSmall1El.setAttribute("class", "avatar-small")

const feedAvatarSmallImage1El = document.createElement('img')
feedAvatarSmallImage1El.setAttribute("src", "https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg")
feedAvatarSmallImage1El.setAttribute("alt", "Salvador Dali")
feedAvatarSmall1El.append(feedAvatarSmallImage1El)
StackPostDivEl.append(feedAvatarSmall1El)

const stackPostImageDivEl = document.createElement('div')
stackPostImageDivEl.setAttribute("class", "post--image")
console.log(stackPostImageDivEl)

const stackPostImageEl = document.createElement('img')
// stackPostImageEl.setAttribute("src", "https://images.unsplash.com/photo-1616745309504-0cb79e9ae590?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60")
stackPostImageEl.setAttribute("alt", "Undefined")
stackPostImageDivEl.append(stackPostImageEl)

const stackPostContentEl = document.createElement('div')
stackPostContentEl.setAttribute("class", "post--content")
const stackPostContentTitleEl = document.createElement('h2')
stackPostContentTitleEl.innerText = "A tree in blossom"
const stackPostContentTextEl = document.createElement('p')
stackPostContentTextEl.innerText = "Spring is finally here... I just love the colours."
stackPostContentEl.append(stackPostContentTitleEl, stackPostContentTextEl)

const stackPostCommentsEl = document.createElement('div')
stackPostCommentsEl.setAttribute("class", "post--comments")


feedStackListItmesEl.append(StackPostDivEl, stackPostImageDivEl, stackPostContentEl, stackPostCommentsEl)
feedStackListEl.append(feedStackListItmesEl)
createPostSectionFeedEl.append(feedStackListEl)



chip1El.append(headerAvatarSmall1El, userName1El)
headerAvatarSmall1El.append(image1El)
chip2El.append(headerAvatarSmall2El, userName2El)
headerAvatarSmall2El.append(image2El)
chip3El.append(headerAvatarSmall3El, userName3El)
headerAvatarSmall3El.append(image3El)

headerEl.append(chip1El, chip2El, chip3El)
mainEl.append(createPostSectionEl, createPostSectionFeedEl)
rootEl.append(headerEl, mainEl)
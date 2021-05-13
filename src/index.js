const rootEl = document.querySelector('#root')

const users = [
   {
     "id": 1,
     "username": "Salvador Dali",
     "avatar": "https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg"
   },
   {
     "id": 2,
     "username": "Picasso",
     "avatar": "https://www.sartle.com/sites/default/files/images/artist/pablo-picasso-137216-5115406.jpg"
   },
   {
     "id": 3,
     "username": "Van Gogh",
     "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&usqp=CAU"
   }
 ]


function createHeaderSection() {
   const headerEl = document.createElement('header')
   headerEl.setAttribute("class", "main-header")

   const wrapperEl = document.createElement('div')
   wrapperEl.setAttribute("class", "wrapper")

   headerEl.append(wrapperEl)
   rootEl.append(headerEl)
}

// // main 
function createMainSection() {
   const mainEl = document.createElement('main')
   mainEl.setAttribute("class", "wrapper")
   // post section 
   const postSectionEl = document.createElement('section')
   postSectionEl.setAttribute("class", "create-post-section")

   mainEl.append(postSectionEl)
   rootEl.append(mainEl)
}


// User Chip
function createUserChip(user) {
   const chipEl = document.createElement('div')
   chipEl.setAttribute("class", "chip")
   // chipEl.classList.add("active")

   const avatarEl = document.createElement('div')
   avatarEl.setAttribute("class", "avatar-small")
   
   const imageEl = document.createElement('img')
   imageEl.setAttribute("src", user.avatar)
   imageEl.setAttribute("alt", user.username)

   avatarEl.append(imageEl)

   const userNameEl = document.createElement('span')
   userNameEl.innerText = user.username

   chipEl.append(avatarEl, userNameEl)

   return chipEl
}

// User chipS 
function createUserChips(users) {
   for(const user of users) {
      const chipEl = createUserChip(user)

      const wrapperEl = document.querySelector(".wrapper")
      wrapperEl.append(chipEl)
   }
}

createHeaderSection()
createMainSection()
console.log(rootEl)


// // post section form 
// const createPostFormEl = document.createElement('form')
// createPostFormEl.setAttribute("id", "create-post-form")
// createPostFormEl.setAttribute("autocomplete", "off")
// // form innards 
// const createPostTitleEl = document.createElement('h2')
// createPostTitleEl.innerText = "Create a post"

// const imageInputLabelEl = document.createElement('label')
// imageInputLabelEl.innerText = "Image"
// const imageInputUrlEl = document.createElement('input')
// imageInputUrlEl.setAttribute("id", "image")
// imageInputUrlEl.setAttribute("name", "image")
// imageInputUrlEl.setAttribute("type", "text")

// const imageTitleLabelEl = document.createElement('label')
// imageTitleLabelEl.innerText = "Title"
// const imageTitleInputEl = document.createElement('input')
// imageTitleInputEl.setAttribute("id", "title")
// imageTitleInputEl.setAttribute("name", "title")
// imageTitleInputEl.setAttribute("type", "text")

// const imageContentLabelEl = document.createElement('label')
// imageContentLabelEl.innerText = "Content"
// const imageContentInputEl = document.createElement('textarea')

// const actionBtnsEL = document.createElement('div')
// actionBtnsEL.setAttribute("class" , "action-btns")
// const previewBtn = document.createElement('button')
// previewBtn.setAttribute("id", "preview-btn")
// previewBtn.setAttribute("type" , "submit")
// previewBtn.innerText = "Preview"

// const postBtn = document.createElement('button')
// postBtn.setAttribute("type", "button")
// postBtn.innerText = "Post"
// // postBtn.addEventListener("click", function() {

// //    // user adds image url
// //    // user adds image this.title 
// //    // user adds content text 
// //    // when click submit add to server
// //    // update page with new server information


// // })


// // form section 
// actionBtnsEL.append(previewBtn, postBtn)
// createPostFormEl.append(createPostTitleEl, imageInputLabelEl, imageInputUrlEl, imageTitleLabelEl, imageTitleInputEl, imageContentLabelEl, imageContentInputEl, actionBtnsEL)
// postSectionEl.append(createPostFormEl)

// // feed section 
// const feedSectionEl = document.createElement('section')
// feedSectionEl.setAttribute("class", "feed")

// const feedStackListEl = document.createElement('ul')
// feedStackListEl.setAttribute("class", "stack")
// // list 
// const feedStackListItmesEl = document.createElement('li')
// feedStackListItmesEl.setAttribute("class", "post")

// const StackPostDivEl = document.createElement('div')
// StackPostDivEl.setAttribute("class", "chip")
// StackPostDivEl.classList.add("active")

// const feedAvatarSmall1El = document.createElement('div')
// feedAvatarSmall1El.setAttribute("class", "avatar-small")

// const feedAvatarSmallImage1El = document.createElement('img')
// feedAvatarSmallImage1El.setAttribute("src", "https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg")
// feedAvatarSmallImage1El.setAttribute("alt", "Salvador Dali")
// feedAvatarSmall1El.append(feedAvatarSmallImage1El)
// StackPostDivEl.append(feedAvatarSmall1El)

// const stackPostImageDivEl = document.createElement('div')
// stackPostImageDivEl.setAttribute("class", "post--image")
// console.log(stackPostImageDivEl)

// const stackPostImageEl = document.createElement('img')
// // stackPostImageEl.setAttribute("src", "https://images.unsplash.com/photo-1616745309504-0cb79e9ae590?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60")
// stackPostImageEl.setAttribute("alt", "Undefined")
// stackPostImageDivEl.append(stackPostImageEl)

// const stackPostContentEl = document.createElement('div')
// stackPostContentEl.setAttribute("class", "post--content")
// const stackPostContentTitleEl = document.createElement('h2')
// stackPostContentTitleEl.innerText = "A tree in blossom"
// const stackPostContentTextEl = document.createElement('p')
// stackPostContentTextEl.innerText = "Spring is finally here... I just love the colours."
// stackPostContentEl.append(stackPostContentTitleEl, stackPostContentTextEl)

// const stackPostCommentsEl = document.createElement('div')
// stackPostCommentsEl.setAttribute("class", "post--comments")


// feedStackListItmesEl.append(StackPostDivEl, stackPostImageDivEl, stackPostContentEl, stackPostCommentsEl)
// feedStackListEl.append(feedStackListItmesEl)
// feedSectionEl.append(feedStackListEl)




// chip2El.append(headerAvatarSmall2El, userName2El)
// headerAvatarSmall2El.append(image2El)




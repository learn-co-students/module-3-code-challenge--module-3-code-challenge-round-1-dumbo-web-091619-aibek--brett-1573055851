document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  let imageId = 3878 //Enter the id from the fetched image here
  let imageCard = document.querySelector(".container")
  let commentUl = document.getElementById("comments")
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch(`https://randopic.herokuapp.com/images/${imageId}`)
  .then(r => r.json())
  .then(image => {  
    // debugger
    image.comments.forEach(comments => {
      // debugger
      imageCard.innerHTML =  ` 
      <div data-id="${comments.content.id}" class="row" id="image_content">
      <div class="card col-md-4"></div>
      <img src="${image.url}" id="image" data-id="${comments.content.id}"/>
          <h4 id="name">${image.name}</h4>
          <span>Likes:
            <span id="likes">${image.like_count}</span>
          </span>
          <button data-id="${image.id}" id="like_button">Like</button>
          <form data-id="${image.id}" id="comment_form" >
            <input data-id="${comments.id}" id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
            <input type="submit" value="Submit" data-id="${comments.id}"/>
          </form>
          <ul id="comments">
          <li>${comments.content}</li>
          </ul>
        </div>`

        // debugger

       let commentForm = imageCard.querySelector('#comment_form')
              // debugger
              commentForm.addEventListener('submit', event => {
        //  debugger

        event.preventDefault()
         let newComment = event.target['comment_input'].value
         let dId = event.target.dataset.id
        //  debugger
        commentUl.innerHTML += `<li>${newComment}</li>`

         fetch("https://randopic.herokuapp.com/comments", {
           method: "POST",
           headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            image_id: parseInt(dId),
            content: newComment
          })
         })
         .then(r => r.json())
         .then(data => {
          // debugger 
          // newComment.da
          let commentUl = document.getElementById("comments")

          commentUl.innerHTML += `<li>${data.content}</li>`

          // commentForm.reset()  
        })
       })


    
 })
  })

  imageCard.addEventListener('click', event => {
// debugger
   if(event.target.tagName === "BUTTON"){
    let currentLike = event.target.previousElementSibling.querySelector('span').innerText
    let newLike = parseInt(event.target.previousElementSibling.querySelector('span').innerText)+1
    // event.target
    let id = event.target.dataset.id
    fetch('https://randopic.herokuapp.com/likes', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
  'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: parseInt(id)
      })

    })
    .then(r => r.json())
    .then(likes => {
      event.target.previousElementSibling.querySelector('span').innerText = parseInt(event.target.previousElementSibling.querySelector('span').innerText)+1
      // debugger
    })

   }


  })

  






























})

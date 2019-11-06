document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 3877 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`


///// none of the above links were working when I tried. had to use the link from the readme link for inital.
// but comments and like url was not working. 



const commentsUl = document.querySelector('#comments')
  let newCommentForm = document.querySelector('#comment_form')
  
  newCommentForm.addEventListener('submit', (e) => {
    e.preventDefault()
        let newComment = e.target["comment_input"].value 

        fetch('https://randopic.herokuapp.com/comments', {
            method: "POST",
            headers:{
              'content-type': 'application/json',
              'accept': 'application/json'
            },

            body: JSON.stringify({
              comment: newComment
            })
        })
        .then(r => r.json())
        .then(obj => {

          commentsUl.push(obj)

          console.log(obj)

        })
  })


  console.log(newCommentForm)







//   <form id="comment_form">
//   <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
//   <input type="submit" value="Submit"/>
// // </form>









  // const imageCardDiv = document.querySelector('#image-card')


  //   fetch('https://randopic.herokuapp.com/images/3877')
  //   .then(r => r.json())
  //   .then(() => {
  //         //create
  //       // const imageArr = Object.keys(imageObj)
  //           // debugger

  //       let imageDiv = document.createElement('div')
  //       imageDiv.innerHTML = `
  //       <div class="container">
  //       <div class="row" id="image_content">
  //         <div class="card col-md-4"></div>
  //         <div id="image_card" class="card col-md-4">
  //             <img src="${image.url}" id="image" data-id=""/>
  //             <h4 id="name">Title of image goes here</h4>
  //             <span>Likes:
  //               <span id="likes">Likes Go Here</span>
  //             </span>
  //             <button id="like_button">Like</button>
  //             <form id="comment_form">
  //               <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
  //               <input type="submit" value="Submit"/>
  //             </form>
  //             <ul id="comments">
  //                  <!-- <li> for each comment goes here -->
  //             </ul>
  //           </div>
  //         <div class="card col-md-4"></div>
  //       </div>
  //     </div>
  //       `

  //       imageCardDiv.append(imageDiv)




  //       // let img = document.querySelector('#image')

  //       // img.src = image.url




  //         console.log(imageArr);
  //       // imageArr.forEach(image => { 
  //         console.log(imageArr)
  //         // let imageDiv = document.createElement('div')

          
  //       });
  //         // imageCardDiv.append()

  //     // }); //end for each
    
  })/// end DOMCONTENT LOADED



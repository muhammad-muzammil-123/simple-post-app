var backgroundImage = "";
function post(){
    var title  = document.getElementById("exampleInputEmail1");
    var description = document.getElementById("exampleFormControlTextarea1")
    //    var card_title = document.querySelector(".card-title");
    //    var card_text = document.querySelector(".card-text");
       var postText = document.querySelector(".postText");
    //    var div = document.createElement ("div");
    //    card_title.innerHTML = title.value +  '<br >';
    //    card_text.innerHTML  = description.value;
  
       
       if(title.value.trim() === "" && description.value.trim() === ""){
        Swal.fire('Please enter a value!');
    }
        else if(title.value.trim() && description.value.trim() === ""){
            Swal.fire('Please enter both value!');
       }else {
        postText.innerHTML += `<div class="container">
        <div class="facebook-post">
            <i class="fa-brands facebook-logo fa-facebook"></i>
            
            <i onclick = "cancel()" class="fa-solid facebook-logo cross fa-circle-xmark"></i>
            <div class="userName" >
                <span class = "title-value">${title.value}</span>
            <p></p></div>
            
           <p class="images" style = "background-image: url(${backgroundImage})" >${description.value}</P>
           
            <div class="tap">
                <i class="fa-solid fa-circle-plus"></i>
                <span>tap to tag a location ></span>
    
            </div>
            <div class="likes">
                <i onclick = "like()" class="fa-regular  fa-thumbs-up"></i>Like
               
                <i class="fa-regular fa-comment"></i>Comment
              
                <i class="fa-solid fa-share"></i>Share
               
            </div>
    
        
        </div>
    </div>`






      
//         card_title.innerHTML = title.value +  '<br >';
//    card_text.innerHTML  = description.value;
//    div.appendChild(card_title);
//    card_title.classList.add("cardText");
//    div.appendChild(card_text);
//    div.classList.add("my_card");
//    postText.appendChild(div);

          
   title.value = "";
   description.value = "";
       }

}

function cancel(){
  var facebook_post = document.querySelector(".facebook-post");
  facebook_post.style.display = "none";
}
function like(){
  var fa_thumbs_up = document.querySelector(".fa-thumbs-up");
  fa_thumbs_up.style.color = "blue";
}
function selectImage(src){
    backgroundImage = src
    var bg_image = document.getElementsByClassName("bg-image");
      for(var i = 0; i < bg_image.length; i++){
        bg_image[i].className = "bg-image";
       
      }

  event.target.className += " images-list-selected" ;
  console.log(event.target)
}
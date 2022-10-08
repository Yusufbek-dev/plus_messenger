let form = document.querySelector("form");
let inputCode = document.querySelector("#password");
let captionTop = document.querySelector(".caption-top");
let captionBottom = document.querySelector(".caption-bottom");

const password = 7777;

function checkPassword() {
  if(password != inputCode.value) {
    captionTop.classList.add("wrong");
    captionBottom.classList.add("active");
    return 
    
  }else if(password == inputCode.value) {
    captionTop.classList.remove("wrong");
    captionBottom.classList.remove("active");
    form.setAttribute('action', "telegram.html");
  }
  return form.submit()
}
form.addEventListener("submit", (e)=> {
  e.preventDefault()
  console.log(e);
 checkPassword()
})

// telegram effects





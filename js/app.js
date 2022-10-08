let textLeft =document.querySelector(".left input[type='text']");
let textRight =document.querySelector(".right input[type='text']");

let sendBtnL =document.querySelector(".left .send");
let sendBtnR =document.querySelector(".right .send");

let iconBtnL =document.querySelector(".left .icon-btn");
let iconBtnR =document.querySelector(".right .icon-btn");

let iconsL =document.querySelectorAll(".left .icons i");
let iconsR =document.querySelectorAll(".right .icons i");

let iconLeft =document.querySelector(".left .icons");
let iconRight =document.querySelector(".right .icons");

let ulListL = document.querySelector(".left ul");
let ulListR = document.querySelector(".right ul");
let texTime = document.querySelector("li p")

let formL = document.querySelector(".left form");
let formR = document.querySelector(".right form");


// // // // 
// // // //   let li = `<li>${toDoList[i]}</li>`;
// // // //   
// // // //   ol.insertAdjacentHTML("beforeend", li)
// // // // }
// // // 
// // 
// 

// date time
let date = new Date();
let hours = date.getHours();
let minute = date.getMinutes();


// left side
// sendBtnL.addEventListener("click", ()=> {
//   ulListL.insertAdjacentHTML("beforeend", pushWhiteL);
//   ulListR.insertAdjacentHTML("beforeend", pushGreenL)
// })

iconBtnL.addEventListener("click", ()=> {
    iconLeft.classList.toggle("active");
    }) 
iconsL.forEach((e)=> {
e.addEventListener("click", ()=>{
  textLeft.value += e.textContent;
})
})

console.log(textLeft.value);
// right side

iconBtnR.addEventListener("click", ()=> {
    iconRight.classList.toggle("active");
    });
iconsR.forEach((e)=> {
e.addEventListener("click", ()=>{
  textRight.value += e.textContent;
})
})


formL.addEventListener("submit", (e)=> {
  e.preventDefault();
  // date time
  let date = new Date();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let pushGreenL = `<li><div class="user2"><span>${textLeft.value}</span> <p>${hours}:${minute}</p></div></li>`;
  let pushWhiteL = `<li><div class="user1"><span>${textLeft.value}</span> <p>${hours}:${minute}</p></div></li>`;
    ulListL.insertAdjacentHTML("afterbegin", pushWhiteL);
    ulListR.insertAdjacentHTML("afterbegin", pushGreenL);
    ulListL.style.flexDirection = "column-reverse";
    ulListR.style.flexDirection = "column-reverse";
    formL.reset()
})

// left side

formR.addEventListener("submit", (e)=> {
  e.preventDefault();
  // date time
  let date = new Date();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let pushWhiteR = `<li><div class="user1"><span>${textRight.value}</span> <p>${hours}:${minute}</p></div></li>`;
  let pushGreenR = `<li><div class="user2"><span>${textRight.value}</span> <p>${hours}:${minute}</p></div></li>`;
    ulListR.insertAdjacentHTML("afterbegin", pushWhiteR);
    ulListL.insertAdjacentHTML("afterbegin", pushGreenR);
    ulListL.style.flexDirection = "column-reverse";
    ulListR.style.flexDirection = "column-reverse";
    formR.reset();
})
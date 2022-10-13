"use strict";
const AllmodalBtn = document.querySelectorAll("[data-modal]");
const modal = document.querySelector(".login");


AllmodalBtn.forEach(btn => {
  btn.addEventListener("click", OpenModal)
})

function OpenModal(){
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";

}
function CloseModal(){
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}
modal.addEventListener("click", (e) => {
  if(e.target === modal || e.target.getAttribute(['data-close']) === ""){
    CloseModal();
  }
})

const forms = document.querySelectorAll("form");

const message = {
  loading: "Loadin",
  success: "Murojatingiz qabul qilindi",
  failure: "Error",
}

forms.forEach(item => {
  postData(item);
})

function postData(form){
  form.addEventListener("submit", (e) =>  {
    e.preventDefault();

    const statusMessage = document.createElement("div")
    statusMessage.textContent = message.loading
    form.append(statusMessage)

    const request = new XMLHttpRequest()
    request.open("POST", "server.php")
    request.setRequestHeader("Content-type", "application/json")
    const formData = new FormData(form)

    const object = {}
    formData.forEach(function (){
      object[key] = value
    })
    const json = JSON.stringify(object)
    

    request.send(json)
    request.addEventListener("load", () => {
      if(request.status === 200){
        console.log(request.response)
        showThanksModal(message.success)
        form.reset()
        
          statusMessage.remove()
        
      }else{
        showThanksModal(message.failure)
      }
    })
  })
}
function showThanksModal(message){
  const loginHeader = document.querySelector(".login__header")
  const prevModalDialog = document.querySelector(".login")
  prevModalDialog.classList.remove("hide")
  OpenModal()
  loginHeader.classList.add("hide")
  OpenModal()
  const thanksModal = document.createElement("div")
  thanksModal.classList.add("login-header")
  thanksModal.innerHTML = `
    <div class="login__header">
      <div data-close class="close__type">×</div>
      <div class="login__title">${message}</div>
    </div>
    `
  document.querySelector(".login").append(thanksModal)
  setTimeout(() => {
    thanksModal.remove()
    prevModalDialog.classList.add("show")
    prevModalDialog.classList.remove("hide")
    loginHeader.classList.add("show")
    loginHeader.classList.remove("hide")
  }, 4000)
}
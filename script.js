

    
const signup = document.querySelector('.t-signup');
const login = document.querySelector('.t-login');
const addclass = document.querySelector('.site')

signup.addEventListener('click', function(){
    addclass.className = 'site signup-show'
})
login.addEventListener('click', function(){
    addclass.className = 'site login-show'
})


let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup")
}

function closePopup(){
    popup.classList.remove("open-popup")
}

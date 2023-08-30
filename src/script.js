const loginUser = document.getElementById('login-user');
const userShortName = document.getElementById('user-short-name');
const loginUserButton = document.getElementById('login-user-button');
const mainContent = document.getElementById('main-content');
const userFullName = document.getElementById('user-full-name');
const usernameWelcome = document.getElementById('username');

// Validate FUnction
function validateInput (inputValue) {
    let regex = /^[^\d]+$/;
    if(regex.test(inputValue)) {
        return true;
    } else {
        return false
    }
}


// Login user
const isLogin = localStorage.getItem("isLogin")
const nameUser = localStorage.getItem("name")


if(isLogin === "true") {
    loginUser.style.display = "none";
    mainContent.style.display = "block"
}
if(nameUser) {
    usernameWelcome.innerHTML = localStorage.getItem("name")
}

loginUserButton.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("isLogin", "true");
    localStorage.setItem("name", userShortName.value)
    if (validateInput(userShortName.value)) {
        loginUser.style.display = "none";
        alertBox.style.display = "none";
        setTimeout(() => {mainContent.style.display = "block"},700)
        usernameWelcome.innerHTML = userShortName.value
    } else {
        alert("Please Check Your Input, Input Cannot Include Number");
    }
})


// Scroll Navbar Event
const navbar = document.getElementsByClassName("navbar-container")[0]
const navbarText = document.querySelectorAll(".nav-list a");
const navbarLogo = document.querySelector(".logo h1")
window.addEventListener("scroll", () => {
    if (scrollY > 100) {
        navbar.style.background = "#f0f8ff";
        navbarText.forEach((text) => {
            text.style.color = "#0c8195";
            text.addEventListener("mouseover", () => {
                text.style.color = "#f1c111"
            })
            text.addEventListener("mouseout", () => {
                text.style.color = "#0c8195"
            })
        })
        navbarLogo.style.color = "#0c8195";
    } else if(scrollY < 100) {
        navbar.style.background = "#0c8195";
        navbarText.forEach((text) => {
            text.style.color = "#f0f8ff";
            text.addEventListener("mouseover", () => {
                text.style.color = "#f1c111"
            })
            text.addEventListener("mouseout", () => {
                text.style.color = "#f0f8ff"
            })
        })
        navbarLogo.style.color = "#f0f8ff";
    }
    navbar.style.transition = ".5s ease-in-out"
})

// Alert Box
const alertBox = document.getElementById('alert-box');
const alertTime = document.getElementById('submit-time')
const alertUsername = document.getElementById('alert-username');
const alertBirth = document.getElementById('alert-birth');
const alertGender = document.getElementById('alert-gender');
const alertMassage = document.getElementById('alert-massage');
const alertButton = document.getElementById('alert-button');

const nameInput = document.getElementById('name-input');
const birthInput = document.getElementById('birth-input');
const inputRadioMale = document.getElementById('male');
const inputRadioFemale = document.getElementById('female');
const massageForm = document.getElementById('massage');
const sendButton = document.getElementById('send-button');

let genderUser = ""
inputRadioMale.addEventListener("change", () => {
    if(inputRadioMale.checked) {
        inputRadioFemale.checked = false;
        genderUser = inputRadioMale.value
    }
})
inputRadioFemale.addEventListener("change", () => {
    if(inputRadioFemale.checked) {
        inputRadioMale.checked = false;
        genderUser = inputRadioFemale.value
    }
})
function alertBoxShow() {
    
    let day = new Date()
    const alertValue = {
        time : `Submit on :<br> ${day}`,
        username : `Nama : ${nameInput.value}`,
        birth : `Birth : ${birthInput.value}`,
        gender : `Gender : ${genderUser}`,
        massage : `Massage : ${massageForm.value}`
    }
    alertTime.innerHTML = alertValue.time;
    alertUsername.innerHTML = alertValue.username;
    alertBirth.innerHTML = alertValue.birth;
    alertGender.innerHTML = alertValue.gender;
    alertMassage.innerHTML = alertValue.massage;

    setTimeout(() => alertBox.style.display = "block",200)
}

sendButton.addEventListener("click", () => {
    if(validateInput(nameInput.value)) {
        alertBoxShow();
    } else {
        alert("Please Check Again Your Input, Input Cannot Include Number")
    }
})

alertButton.addEventListener("click", () => {
    setTimeout(() => {
        alertBox.style.display = "none"
    }, 200)
})
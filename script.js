// -----------------1------------
document.addEventListener("DOMContentLoaded", function () {
  console.log("Вся страница загружена");

  // ----------------2-------------

  let fullName = document.getElementById("full-name");
  let username = document.getElementById("username");
  let checkbox = document.getElementById("checkbox");
  let password = document.getElementById("password");
  let repeatPassword = document.getElementById("repeat-password");
  let buttonSubmit = document.getElementById("button");
  let email = document.getElementById("email");
  let modal = document.getElementById("modal");
  let buttonOk = document.getElementById("btn-ok");
  let form = document.getElementById("form");
  let title = document.getElementById("title");
  let account = document.getElementById("account");
  let formInputs = document.querySelectorAll(".form__action-input");
  let privacy = document.getElementById("privacy");

  fullName.addEventListener("input", function (event) {
    const numbers = event.target.value.replace(/[0-9]/g, "");
    if (event.target.value !== numbers) {
      event.target.value = numbers;
    }
  });

  //-----------------3--------------

  username.addEventListener("keydown", function (e) {
    if (e.key === "," || e.key === ".") {
      e.preventDefault();
    }
  });

  //-----------------4-------------

  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      console.log("Согласен");
    } else {
      console.log("Не согласен");
    }
  });

  //----------------5-------------

  function checkPassword(str) {
    if (str.length < 8) {
      alert("Пароль должен содержать не менее 8 символов!");
      return false;
    }
    return true;
  }

  function checkRepeatPassword(pass1, pass2) {
    if (pass1 !== pass2) {
      alert("Пароли не совпадают!");
      return false;
    }
    return true;
  }

  function validation() {
    if (!fullName.value) {
      alert("Заполните поле Full name");
      return false;
    }
    if (!username.value) {
      alert("Заполните поле Your username");
      return false;
    }
    if (!email.value) {
      alert("Заполните поле E-mail");
      return false;
    }
    if (!password.value) {
      alert("Заполните поле Password");
      return false;
    }
    if (!repeatPassword.value) {
      alert("Заполните поле Repeat Password");
      return false;
    }
    if (!checkPassword(password.value)) {
      return false;
    }
    if (!checkRepeatPassword(password.value, repeatPassword.value)) {
      return false;
    }
    if (!checkbox.checked) {
      alert(
        "Подтвердите, согласны ли с нашими Условиями обслуживания и Политикой конфиденциальности."
      );
      return false;
    }
    return true;
  }

  buttonSubmit.addEventListener("click", () => {
    if (buttonSubmit.innerText.toLowerCase() === "sign up") {
      if (validation()) {
        modal.style.display = "block";
        form.reset();
        userPage();
      }
    } else if (buttonSubmit.innerText.toLowerCase() === "sign in") {
      if (userValidation()) {
        alert(`Добро пожаловать, ${username.value}!`);
        form.reset();
      }
    }
  });

  buttonOk.addEventListener("click", () => {
    modal.style.display = "none";
    userPage();
  });

  //-----------------6-------------

  function userPage() {
    title.innerText = "Log in to the system";
    privacy.remove();
    buttonSubmit.innerText = "Sign In";
    account.remove();

    for (let i = 0; i < formInputs.length; i++) {
      if (
        formInputs[i].innerText === "Full name" ||
        formInputs[i].innerText === "E-mail" ||
        formInputs[i].innerText === "Repeat Password"
      ) {
        formInputs[i].remove();
      }
    }
  }

  function userValidation() {
    if (!username.value) {
      alert("Заполните поле Your username");
      return false;
    } else if (!password.value) {
      alert("Заполните поле Password");
      return false;
    }
    return true;
  }

  account.addEventListener("click", () => {
    userPage();
  });
});

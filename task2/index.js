"use strict";

const userNameSurname = document.querySelectorAll(".info-name input");

userNameSurname.forEach((inp) => {
  const NAME_REG_EXP = /[A-Z][a-z]{1,35}(-[A-Z][a-z]{1,35})?/;
  inp.oninput = (e) => {
    NAME_REG_EXP.test(e.target.value)
      ? e.target.classList.remove("invalid")
      : e.target.classList.add("invalid");
  };
});

const phoneInput = document.querySelector(".phone");

phoneInput.addEventListener("input", (e) => {
  const PHONE_REG_EXP = /\+380\d{9}/;
  if (PHONE_REG_EXP.test(e.target.value)) {
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.add("invalid");
  }
});

const textArea = document.querySelector(".textarea");

textArea.oninput = (e) => {
  const TEXTAREA_REG_EXP = /[^\s]/;
  if (TEXTAREA_REG_EXP.test(e.target.value)) {
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.add("invalid");
  }
};

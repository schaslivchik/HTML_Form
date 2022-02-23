"use strict";

const radiusValue = document.querySelector(".radius-input");
const result = document.querySelector(".result");
const visualCircle = document.querySelector('.visual-circle')
radiusValue.addEventListener("input", function () {
  const volume = (4 / 3) * 3.14 * Math.pow(radiusValue.value, 3);
  result.textContent = volume;
});

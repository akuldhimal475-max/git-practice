document.querySelector(".btn_add").addEventListener("click", () => {
  let a = Number(document.querySelector(".num1").value);
  let b = Number(document.querySelector(".num2").value);
  document.write(`The addition is ${a + b}`);
});
document.querySelector(".btn_sub").addEventListener("click", () => {
  let a = Number(document.querySelector(".num1").value);
  let b = Number(document.querySelector(".num2").value);
  document.write(`The subtraction is ${a - b}`);
});
document.querySelector(".btn_mul").addEventListener("click", () => {
  let a = Number(document.querySelector(".num1").value);
  let b = Number(document.querySelector(".num2").value);
  document.write(`The multiplication is ${a * b}`);
});
document.querySelector(".btn_div").addEventListener("click", () => {
  let a = Number(document.querySelector(".num1").value);
  let b = Number(document.querySelector(".num2").value);
  document.write(`The division is ${a / b}`);
});

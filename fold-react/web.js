document.querySelector(".btn_add").addEventListener("click", () => {
  let a = document.querySelector(".num1").value;
  let b = document.querySelector(".num2").value;
  a = Number(a);
  b = Number(b);
  document.write(`The addition is ${a + b}`);
});
document.querySelector(".btn_sub").addEventListener("click", () => {
  let a = document.querySelector(".num1").value;
  let b = document.querySelector(".num2").value;
  a = Number(a);
  b = Number(b);
  document.write(`The subtraction is ${a - b}`);
});
document.querySelector(".btn_mul").addEventListener("click", () => {
  let a = document.querySelector(".num1").value;
  let b = document.querySelector(".num2").value;
  a = Number(a);
  b = Number(b);
  document.write(`The multiplicaion is ${a * b}`);
});
document.querySelector(".btn_div").addEventListener("click", () => {
  let a = document.querySelector(".num1").value;
  let b = document.querySelector(".num2").value;
  a = Number(a);
  b = Number(b);
  document.write(`The diviion is ${a / b}`);
});

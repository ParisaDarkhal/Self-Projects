let textField = document.querySelector("textarea");
let a = "";
let b = "";
let op = undefined;
function insertNumber(e) {
  let num = e.target.value;
  if (!op) {
    a += num;
  } else {
    b += num;
  }
  console.log(a);

  textField.innerHTML += num;
}

function insertOperator(e) {
  op = e.target.value;
  textField.innerHTML += op;
}

function calculateResult() {
  let aa = parseFloat(a);
  let bb = parseFloat(b);
  if (op === "+") {
    textField.innerHTML = aa + bb;
  } else if (op === "-") {
    textField.innerHTML = aa - bb;
  } else if (op === "*") {
    textField.innerHTML = aa * bb;
  } else if (op === "/") {
    textField.innerHTML = aa / bb;
  }
}

function clearField(e) {
  textField.innerHTML = "";
  a = "";
  b = "";
  op = undefined;
}

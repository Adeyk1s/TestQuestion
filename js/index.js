const calc = document.querySelector(".wrapper");
const result = document.querySelector("#result");

let data = [];
calc.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn")) return;
  const value = e.target.textContent;
  data.push(value);
  for (let i = 0; i < data.length; i++) {
    if (data[i] == "+" && data[i + 1] == "+") {
      data.pop(value);
      return;
    }
    if (data[i] == "+" && data[i + 1] == "-") {
      data.pop(value);
      return
    }
    if (data[i] == "+" && data[i + 1] == "*") {
      data.pop(value);
      return
    }
    if (data[i] == "+" && data[i + 1] == "/") {
      data.pop(value);
      return
    }
    if (data[i] == "+" && data[i + 1] == ".") {
      data.pop(value);
      return
    }
    if (data[i] == "-" && data[i + 1] == "-") {
      data.pop(value);
      return;
    }
    if (data[i] == "-" && data[i + 1] == "+") {
      data.pop(value);
      return
    }
    if (data[i] == "-" && data[i + 1] == "*") {
      data.pop(value);
      return
    }
    if (data[i] == "-" && data[i + 1] == "/") {
      data.pop(value);
      return
    }
    if (data[i] == "-" && data[i + 1] == ".") {
      data.pop(value);
      return
    }
    if (data[i] == "*" && data[i + 1] == "*") {
      data.pop(value);
      return;
    }
    if (data[i] == "*" && data[i + 1] == "-") {
      data.pop(value);
      return
    }
    if (data[i] == "*" && data[i + 1] == "+") {
      data.pop(value);
      return
    }
    if (data[i] == "*" && data[i + 1] == "/") {
      data.pop(value);
      return
    }
    if (data[i] == "*" && data[i + 1] == ".") {
      data.pop(value);
      return
    }
    if (data[i] == "/" && data[i + 1] == "/") {
      data.pop(value);
      return;
    }
    if (data[i] == "/" && data[i + 1] == "-") {
      data.pop(value);
      return
    }
    if (data[i] == "/" && data[i + 1] == "*") {
      data.pop(value);
      return
    }
    if (data[i] == "/" && data[i + 1] == "+") {
      data.pop(value);
      return
    }
    if (data[i] == "/" && data[i + 1] == ".") {
      data.pop(value);
      return
    }
    if (data[i] == "." && data[i + 1] == ".") {
      data.pop(value);
      return;
    }
    if (data[i] == "." && data[i + 1] == "-") {
      data.pop(value);
      return
    }
    if (data[i] == "." && data[i + 1] == "*") {
      data.pop(value);
      return
    }
    if (data[i] == "." && data[i + 1] == "/") {
      data.pop(value);
      return
    }
    if (data[i] == "." && data[i + 1] == "+") {
      data.pop(value);
      return
    }
  }
  switch (value) {
    case "C":
      result.value = "";
      data.length = 0;
      break;
    case "+":
      if (result.value.length == 0) return;
      result.value += value;
      break;
    case "-":
      result.value += value;
      break;
    case "*":
      if (result.value.length == 0) return;
      result.value += value;
      break;
    case "/":
      if (result.value.length == 0) return;
      result.value += value;
      break;
    case ".":
      if (result.value.length == 0) {data.pop(value);return};
      result.value += value;
      break;
    case "=":
      if (result.value.length == 0) return;
      result.value = eval(result.value).toFixed(2);
      data = [result.value];
      break;
    default:
      result.value += value;
      break;
  }
});

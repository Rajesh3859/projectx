const textarea = document.createElement("textarea");
const para = document.createElement("p");
const span = document.createElement("span");
span.innerText = "0";
para.innerText = "enter Text length:";
para.appendChild(span);
textarea.setAttribute("placeholder", "Enter message");
document.body.append(...[textarea, para]);

textarea.addEventListener("input", (e) => {
  span.innerText = e.target.value.length;
});

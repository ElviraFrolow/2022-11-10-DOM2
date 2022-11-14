const userInput = document.getElementById("userinput");
const submitBtn = document.getElementById("enter");

submitBtn.addEventListener("click", () => {
  let li = document.createElement(`li`);
  li.textContent = userInput.value;
  document.body.firstElementChild.lastElementChild.appendChild(li);
});

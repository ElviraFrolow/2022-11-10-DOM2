const clickBtn = document.querySelector("button");
let counter = 0;
const container = document.querySelector(".umwickeln");

clickBtn.addEventListener("click", () => {
  let div = document.createElement("div");
  div.textContent = counter;

  if (counter % 10 == 0) {
    div.classList.add("weiss");
  } else {
    div.classList.add("rechteck");
  }

  container.appendChild(div);
  counter++;
});

//   // Möglichkeit 2
//   if (counter % 10 == 0) {
//     div.setAttribute("class", "weiss rechteck");
//   } else {
//     div.setAttribute("class", "rechteck");
//   }

//   container.appendChild(div);
//   counter++;
// });

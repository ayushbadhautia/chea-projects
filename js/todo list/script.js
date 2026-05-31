import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

const todo = [[], [], [], [], [], [], []];

renderDate();
renderDayOption();









function renderDate(){
let today = dayjs();
document.querySelector(".date-day").innerHTML = today.format("ddd MMM DD YYYY");
setInterval(() => {
  document.querySelector(".date-time").innerHTML = dayjs().format("h:mm:ss A");
}, 1000);
}


function renderDayOption() {
  let html = "";
  for (let i = 0; i < todo.length; i++) {
    html+=`
      <button class="btn${i+1}">
        <p>${dayjs().add(i,'day').format("dd")}</p>
        <p>${dayjs().add(i,'day').format("D")}</p>
      </button>
    `;
  }
  document.querySelector('.day-option').innerHTML = html;
}


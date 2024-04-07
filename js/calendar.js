const makeCalendar = (date) => {
  const currentYear = new Date(date).getFullYear();
  const currentMonth = new Date(date).getMonth() + 1;

  const firstDay = new Date(date.setDate(1)).getDay();
  const lastDay = new Date(currentYear, currentMonth, 0).getDate();

  const limitDay = firstDay + lastDay;
  const nextDay = Math.ceil(limitDay / 7) * 7;

  let htmlDummy = "";

  for (let i = 0; i < firstDay; i++) {
    htmlDummy += `<div class="calendar-noColor"></div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    htmlDummy += `<div>${i}</div>`;
  }

  for (let i = limitDay; i < nextDay; i++) {
    htmlDummy += `<div class="calendar-noColor"></div>`;
  }

  document.querySelector(`.calendar-dateBoard`).innerHTML = htmlDummy;
  document.querySelector(
    `.calendar-dateTitle`
  ).innerText = `${currentYear}年 ${currentMonth}月`;
};

const date = new Date();

makeCalendar(date);

// 이전달 이동
document.querySelector(`.calendar-prevDay`).onclick = () => {
  makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
};

// 다음달 이동
document.querySelector(`.calendar-nextDay`).onclick = () => {
  makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
};

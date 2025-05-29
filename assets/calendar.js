const calendarGrid = document.getElementById("calendarGrid");
const monthYear = document.getElementById("monthYear");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

let currentDate = new Date();

const events = {
  "2025-05-06": "Start of Term",
  "2025-05-15": "Parent-Teacher Meeting",
  "2025-05-28": "Science Exhibition"
};

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const startDay = firstDayOfMonth.getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  calendarGrid.innerHTML = "";
  monthYear.textContent = date.toLocaleString("default", { month: "long", year: "numeric" });

  // Fill empty cells before the first day
  for (let i = 0; i < startDay; i++) {
    calendarGrid.innerHTML += `<div></div>`;
  }

  for (let day = 1; day <= totalDays; day++) {
    const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const isEvent = events[fullDate];

    calendarGrid.innerHTML += `
      <div class="relative group border rounded-lg py-6 h-28 flex flex-col justify-center items-center text-sm hover:bg-blue-100 transition ${
        isEvent ? 'bg-blue-50 border-[#6089FB]' : ''
      }">
        <span class="text-lg font-semibold">${day}</span>

        ${
          isEvent
            ? `<div class="mt-1 text-xs text-[#6089FB] font-medium">${events[fullDate]}</div>
               <div class="absolute bottom-full mb-2 w-48 bg-white border text-black text-xs px-3 py-2 rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  ${events[fullDate]}
               </div>`
            : ''
        }
      </div>`;
  }
}

prevMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);
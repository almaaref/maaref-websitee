const calendarGrid = document.getElementById("calendarGrid");
const monthYear = document.getElementById("monthYear");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

let currentDate = new Date();

// ✅ Updated structure: array of ranges
const events = [
  { start: "2025-08-18", end: "2025-08-18", name: "First Day of Staff" },
  { start: "2025-08-25", end: "2025-08-25", name: "First Day of Students" },
  { start: "2025-09-04", end: "2025-09-04", name: "Prophet's Birthday" },
  { start: "2025-10-13", end: "2025-10-13", name: "Mid - Term Break" },
  { start: "2025-12-02", end: "2025-12-03", name: "National Day" },
  { start: "2025-12-15", end: "2026-01-02", name: "Winter Break" },
  { start: "2026-01-01", end: "2026-01-01", name: "New Year" },
  { start: "2026-02-09", end: "2026-02-10", name: "Mid-Term Break" },
  { start: "2026-03-19", end: "2026-03-20", name: "Eid Ul Fitr" },
  { start: "2026-03-23", end: "2026-04-03", name: "Spring Break" },
  { start: "2026-05-26", end: "2026-05-29", name: "Eid Ul Adha" },
  { start: "2026-06-16", end: "2026-06-16", name: "New Islamic Year" },
  { start: "2026-06-26", end: "2026-06-26", name: "Last School Day" }
];

// ✅ Helper to check if fullDate falls inside a range
function getEventForDate(fullDate) {
  for (const event of events) {
    if (fullDate >= event.start && fullDate <= event.end) {
      return event.name;
    }
  }
  return null;
}

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const startDay = firstDayOfMonth.getDay(); // 0 = Sunday
  const totalDays = new Date(year, month + 1, 0).getDate();

  calendarGrid.innerHTML = "";
  monthYear.textContent = date.toLocaleString("default", { month: "long", year: "numeric" });

  // Add empty slots before the first day
  for (let i = 0; i < startDay; i++) {
    calendarGrid.innerHTML += `<div></div>`;
  }

  for (let day = 1; day <= totalDays; day++) {
    const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const eventName = getEventForDate(fullDate);

    calendarGrid.innerHTML += `
      <div class="relative group border rounded-lg py-6 h-28 flex flex-col justify-center items-center text-base hover:bg-blue-100 transition ${
        eventName ? 'bg-blue-50 border-[#6089FB]' : ''
      }">
        <span class="text-lg font-semibold">${day}</span>

        ${
          eventName
            ? `<div class="mt-1 text-xs text-[#6089FB] font-medium">${eventName}</div>
              <div class="absolute bottom-full mb-2 w-48 bg-white border text-black text-xs px-3 py-2 rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  ${eventName}
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

// ✅ Initial render
renderCalendar(currentDate);

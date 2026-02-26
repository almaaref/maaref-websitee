 
const newsletters = [
  
  { id: 22, title: "Newsletter #23", date: "February 26, 2026", file: "/newsletters/MAS Newsletter 23.pdf"}, 
  { id: 21, title: "Newsletter #22", date: "February 19, 2026", file: "/newsletters/MAS Newsletter 22.pdf"},
  { id: 20, title: "Newsletter #21", date: "February 13, 2026", file: "/newsletters/MAS Newsletter 21.pdf"},
  { id: 19, title: "Newsletter #20", date: "February 5, 2026", file: "/newsletters/MAS Newsletter 20.pdf"},
  { id: 18, title: "Newsletter #19", date: "January 29, 2026", file: "/newsletters/MAS Newsletter 19.pdf"},
  { id: 18, title: "Newsletter #18", date: "January 22, 2026", file: "/newsletters/MAS Newsletter 18.pdf"},
  { id: 17, title: "Newsletter #17", date: "January 15, 2026", file: "/newsletters/MAS Newsletter 17.pdf"},
  { id: 16, title: "Newsletter #16", date: "January 08, 2026", file: "/newsletters/MAS Newsletter16.pdf"},
  { id: 15, title: "Newsletter #15", date: "January 01, 2026", file: "/newsletters/MAS Newsletter 15.pdf"},
  { id: 14, title: "Newsletter #14", date: "December 04, 2025", file: "/newsletters/MAS Newsletter 14.pdf"},
  { id: 13, title: "Newsletter #13", date: "November 27, 2025", file: "/newsletters/MAS Newsletter 13.pdf"},
  { id: 12, title: "Newsletter #12", date: "November 20, 2025", file: "/newsletters/MAS Newsletter 12.pdf"},
  { id: 11, title: "Newsletter #11", date: "November 13, 2025", file: "/newsletters/MAS Newsletter11.pdf"}, 
  { id: 10, title: "Newsletter #10", date: "November 06, 2025", file: "/newsletters/MAS Newsletter10.pdf"},
  { id: 9, title: "Newsletter #09", date: "October 30, 2025", file: "/newsletters/MAS Newsletter 9.pdf"},
  { id: 8, title: "Newsletter #08", date: "October 24, 2025", file: "/newsletters/MAS Newsletter 8.pdf"},
  { id: 7, title: "Newsletter #07", date: "October 16, 2025", file: "/newsletters/MAS Newsletter 7.pdf"}, 
  { id: 6, title: "Newsletter #06", date: "October 9, 2025", file: "/newsletters/MAS Newsletter 6.pdf"}, 
  { id: 5, title: "Newsletter #05", date: "October 3, 2025", file: "/newsletters/MAS Newsletter 5.pdf"},
  { id: 4, title: "Newsletter #04", date: "September 25, 2025", file: "/newsletters/MAS Newsletter4.pdf"},
  { id: 3, title: "Newsletter #03", date: "September 18, 2025", file: "/newsletters/MAS Newsletter 3.pdf"},
  { id: 2, title: "Newsletter #02", date: "September 9, 2025", file: "/newsletters/MAS Newsletter2.pdf"},
  { id: 1, title: "Newsletter #01", date: "September 4, 2025", file: "/newsletters/MAS Newsletter1.pdf"}
];

function renderNewsletters(targetId, count = newsletters.length) {
  const targetContainer = document.getElementById(targetId);
  if (!targetContainer) return;

  targetContainer.innerHTML = "";

  // Sort and group by month
  const sorted = newsletters
    .slice(0, count)
    .map(n => ({
      ...n,
      parsedDate: new Date(n.date),
      month: new Date(n.date).toLocaleString('default', { month: 'long', year: 'numeric' })
    }))
    .sort((a, b) => b.parsedDate - a.parsedDate);

  const grouped = {};
  sorted.forEach(n => {
    if (!grouped[n.month]) grouped[n.month] = [];
    grouped[n.month].push(n);
  });

  for (const month in grouped) {
    const monthSection = document.createElement("div");
    monthSection.className = "mb-10";

    const heading = document.createElement("h3");
    heading.className = "text-2xl font-bold text-[#6089FB] mb-4";
    heading.textContent = month;
    monthSection.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";

    grouped[month].forEach(n => {
      const card = document.createElement("div");
      card.className = "bg-white shadow rounded-lg p-4 text-center hover:shadow-md transition";

      card.innerHTML = `
        <h4 class="font-semibold text-lg text-[#6089FB] mb-2">${n.title}</h4>
        <p class="text-base text-gray-500 mb-4">${n.date}</p>
        <a href="${n.file}" target="_blank" class="text-white bg-[#6089FB] px-4 py-2 text-base rounded hover:bg-blue-600">View</a>
      `;

      grid.appendChild(card);
    });

    monthSection.appendChild(grid);
    targetContainer.appendChild(monthSection);
  }
}

// Run the function
document.addEventListener("DOMContentLoaded", () => {
  renderNewsletters("newslettersGrid");
});

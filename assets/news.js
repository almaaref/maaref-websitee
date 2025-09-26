 
const newsletters = [
  
  { id: 4, title: "Newsletter #02", date: "September 25, 2025", file: "/newsletters/MAS Newsletter4.pdf"},
  { id: 3, title: "Newsletter #01", date: "September 18, 2025", file: "/newsletters/MAS Newsletter 3.pdf"},
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

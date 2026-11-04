// Monthly newsletters data
// To add a new issue: add a new line at the TOP of the list below.
// "month" format is YYYY-MM (e.g. "2026-11" for November 2026).
const monthlyNewsletters = [

  
  { id: 1, title: "Monthly Newsletter - October 2026", month: "2026-10", file: "newsletters/October.pdf" }

];

function renderMonthlyNewsletters(targetId, count = monthlyNewsletters.length) {
  const targetContainer = document.getElementById(targetId);
  if (!targetContainer) return;

  targetContainer.innerHTML = "";

  // Build a real date from the YYYY-MM value (avoids browser date-parsing differences)
  const sorted = monthlyNewsletters
    .map(n => {
      const [year, mon] = n.month.split("-").map(Number);
      const parsedDate = new Date(year, mon - 1, 1);
      return {
        ...n,
        parsedDate,
        year: String(year),
        label: parsedDate.toLocaleString("en-US", { month: "long", year: "numeric" })
      };
    })
    .sort((a, b) => b.parsedDate - a.parsedDate)
    .slice(0, count);

  // Group by year
  const grouped = {};
  sorted.forEach(n => {
    if (!grouped[n.year]) grouped[n.year] = [];
    grouped[n.year].push(n);
  });

  for (const year in grouped) {
    const yearSection = document.createElement("div");
    yearSection.className = "mb-10";

    const heading = document.createElement("h3");
    heading.className = "text-2xl font-bold text-[#6089FB] mb-4";
    heading.textContent = year;
    yearSection.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";

    grouped[year].forEach(n => {
      const card = document.createElement("div");
      card.className = "bg-white shadow rounded-lg p-4 text-center hover:shadow-md transition";

      card.innerHTML = `
        <h4 class="font-semibold text-lg text-[#6089FB] mb-2">Monthly Newsletter</h4>
        <p class="text-base text-gray-500 mb-4">${n.label}</p>
        <a href="${n.file}" target="_blank" class="text-white bg-[#6089FB] px-4 py-2 text-base rounded hover:bg-blue-600">View</a>
      `;

      grid.appendChild(card);
    });

    yearSection.appendChild(grid);
    targetContainer.appendChild(yearSection);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderMonthlyNewsletters("monthlyNewslettersGrid");
});


const newsletters = [
  { id: 1, title: "Newsletter #1", date: "March 6, 2024", file: "newsletters/wednesday-weekly-issue1.pdf" },
  { id: 2, title: "Newsletter #2", date: "March 13, 2024", file: "newsletters/wednesday-weekly-week-5-2024.pdf" },
  { id: 3, title: "Newsletter #3", date: "March 20, 2024", file: "newsletters/wednesday-weekly-week-6-2024.pdf" },
  { id: 4, title: "Newsletter #4", date: "March 27, 2024", file: "newsletters/wednesday-weekly-week-7-2024.pdf" },
  { id: 5, title: "Newsletter #5", date: "April 3, 2024", file: "newsletters/wednesday-weekly-week-8-2024.pdf" },
  { id: 6, title: "Newsletter #6", date: "April 10, 2024", file: "newsletters/wednesday-weekly-week-10-2024.pdf" },
  { id: 7, title: "Newsletter #7", date: "April 17, 2024", file: "newsletters/wednesday-weekly-week-11-2024.pdf" },
  { id: 8, title: "Newsletter #8", date: "April 24, 2024", file: "newsletters/wednesday-weekly-week-12-2024.pdf" },
  { id: 9, title: "Newsletter #9", date: "May 1, 2024", file: "newsletters/wednesday-weekly-week-13-2024.pdf" },
  { id: 10, title: "Newsletter #10", date: "May 8, 2024", file: "newsletters/wednesday-weekly-week-14-2024.pdf" },
  { id: 11, title: "Newsletter #11", date: "May 15, 2024", file: "newsletters/wednesday-weekly-week-15-2024.pdf" },
  { id: 12, title: "Newsletter #12", date: "May 22, 2024", file: "newsletters/wednesday-weekly-week-16-2024.pdf" },
  { id: 13, title: "Newsletter #13", date: "May 29, 2024", file: "newsletters/wednesday-weekly-week-17-2024.pdf" },
  { id: 14, title: "Newsletter #14", date: "June 5, 2024", file: "newsletters/wednesday-weekly-week-18-2024.pdf" },
  { id: 15, title: "Newsletter #15", date: "June 12, 2024", file: "newsletters/wednesday-weekly-week-20-2024.pdf" },
  { id: 16, title: "Newsletter #16", date: "June 19, 2024", file: "newsletters/wednesday-weekly-week-21-2024.pdf" },
  { id: 17, title: "Newsletter #17", date: "June 26, 2024", file: "newsletters/wednesday-weekly-week-22-2024.pdf" },
  { id: 18, title: "Newsletter #18", date: "July 3, 2024", file: "newsletters/wednesday-weekly-week-23-2024.pdf" },
  { id: 19, title: "Newsletter #19", date: "July 10, 2024", file: "/newsletters/wednesday-weekly-week-18.pdf" },
  { id: 20, title: "Newsletter #20", date: "July 17, 2024", file: "/newsletters/wednesday-weekly-week-20.pdf" },
  { id: 21, title: "Newsletter #21", date: "July 24, 2024", file: "/newsletters/wednesday-weekly-week-21.pdf" },
  { id: 22, title: "Newsletter #22", date: "July 31, 2024", file: "/newsletters/wednesday-weekly-week-22.pdf" },
  { id: 23, title: "Newsletter #23", date: "August 7, 2024", file: "/newsletters/wednesday-weekly-week-23.pdf" },
  { id: 24, title: "Newsletter #24", date: "August 14, 2024", file: "/newsletters/wednesday-weekly-week-24.pdf" },
  { id: 25, title: "Newsletter #25", date: "August 21, 2024", file: "/newsletters/wednesday-weekly-week-25.pdf" }
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

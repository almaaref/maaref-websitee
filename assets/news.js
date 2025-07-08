    
const newsletters = [
    { id: 34, title: "Newsletter #34", date: "May 25, 2025", file: "newsletters/newsletter34.pdf" },
    { id: 33, title: "Newsletter #33", date: "May 18, 2025", file: "newsletters/newsletter33.pdf" },
    { id: 32, title: "Newsletter #32", date: "May 11, 2025", file: "newsletters/newsletter32.pdf" },
    { id: 31, title: "Newsletter #31", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 30, title: "Newsletter #30", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 29, title: "Newsletter #29", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 28, title: "Newsletter #28", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 27, title: "Newsletter #27", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 26, title: "Newsletter #26", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 25, title: "Newsletter #25", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 24, title: "Newsletter #24", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 23, title: "Newsletter #23", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 22, title: "Newsletter #22", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 21, title: "Newsletter #21", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 20, title: "Newsletter #20", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 19, title: "Newsletter #19", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 18, title: "Newsletter #18", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 17, title: "Newsletter #17", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 16, title: "Newsletter #16", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 15, title: "Newsletter #15", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 14, title: "Newsletter #14", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 13, title: "Newsletter #13", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 12, title: "Newsletter #12", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 11, title: "Newsletter #11", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 10, title: "Newsletter #10", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 9, title: "Newsletter #9", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 8, title: "Newsletter #8", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 7, title: "Newsletter #7", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 6, title: "Newsletter #6", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 5, title: "Newsletter #5", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 4, title: "Newsletter #4", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 3, title: "Newsletter #3", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 2, title: "Newsletter #2", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
    { id: 1, title: "Newsletter #1", date: "May 4, 2025", file: "newsletters/newsletter31.pdf" },
];

    function renderNewsletters(targetId, count = newsletters.length) {
    const targetContainer = document.getElementById(targetId);
    if (!targetContainer) return;

    newsletters.slice(0, count).forEach(n => {
        const cardEl = document.createElement("div");
        cardEl.className = "bg-white shadow rounded-lg p-4 text-center hover:shadow-md transition";
        cardEl.innerHTML = `
            <h3 class="font-semibold text-lg text-[#6089FB] mb-2">${n.title}</h3>
            <p class="text-base text-gray-500 mb-4">${n.date}</p>
            <a href="${n.file}" target="_blank" class="text-white bg-[#6089FB] px-4 py-2 text-base rounded hover:bg-blue-600">View</a>
        `;
        targetContainer.appendChild(cardEl);
    });
}


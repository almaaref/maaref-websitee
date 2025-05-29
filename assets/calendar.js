document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('school-calendar');
    if (!calendarEl) return;

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridYear'
        },
    events: [
        {
        title: 'First Day of Term',
        start: '2024-09-01',
        description: 'Students return to school'
        },
        {
        title: 'Mid-Term Break',
        start: '2024-10-20',
        end: '2024-10-24',
        description: 'No school during this break'
        },
        {
        title: 'Parent-Teacher Meeting',
        start: '2024-11-15',
        description: 'Held in the school auditorium'
        }
    ],
    eventClick: function (info) {
        document.getElementById('modal-title').textContent = info.event.title;
        document.getElementById('modal-description').textContent = info.event.extendedProps.description;
        document.getElementById('calendar-modal').classList.remove('hidden');
    }
});

    calendar.render();

    document.getElementById('close-modal')?.addEventListener('click', () => {
        document.getElementById('calendar-modal').classList.add('hidden');
    });
});

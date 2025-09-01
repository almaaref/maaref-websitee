document.addEventListener("DOMContentLoaded", function () {
    // Toggle dropdown menus on click
    document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
      toggle.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent document click from firing
        const menu = this.nextElementSibling;  
        // Hide all other dropdowns
        document.querySelectorAll(".dropdown-menu").forEach(m => {
          if (m !== menu) m.classList.add("hidden");
        });
        // Toggle current
        if (menu) {
          menu.classList.toggle("hidden");
        }
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener("click", () => {
      document.querySelectorAll(".dropdown-menu").forEach(m => m.classList.add("hidden"));
    });
  
    // Mobile menu toggle
    const mobileToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }
  });
  

    window.addEventListener('DOMContentLoaded', () => {
    const backdrop = document.getElementById('popup-backdrop');
    const modal = document.getElementById('popup-modal');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.remove('-translate-y-full');
  });

  function closePopup() {
    const backdrop = document.getElementById('popup-backdrop');
    const modal = document.getElementById('popup-modal');

    // Slide up animation
    modal.classList.add('-translate-y-full');
    backdrop.classList.add('opacity-0');

    // Hide after transition ends
    setTimeout(() => {
      backdrop.classList.add('pointer-events-none');
    }, 300); // match `duration-300`
  }

  // Script for testimonials

  const testcontainer = document.getElementById('testimonial-scroll');
  let isHovering = false;
  let isDragging = false;
  let startX;
  let scrollLeft;

  testcontainer.addEventListener('mouseenter', () => isHovering = true);
  testcontainer.addEventListener('mouseleave', () => isHovering = false);

  // Drag to scroll
  testcontainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - testcontainer.offsetLeft;
    scrollLeft = testcontainer.scrollLeft;
  });

  testcontainer.addEventListener('mouseup', () => isDragging = false);
  testcontainer.addEventListener('mouseleave', () => isDragging = false);

  testcontainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - testcontainer.offsetLeft;
    const walk = (x - startX) * 2;
    testcontainer.scrollLeft = scrollLeft - walk;
  });

  document.getElementById("tourForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  formData.append("form-name", "school-tour");

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then((response) => {
      if (response.ok) {
        document.getElementById("successMessage").classList.remove("hidden");
        form.reset();
      } else {
        alert("Form submission failed. Please try again.");
      }
    })
    .catch((error) => {
      alert("There was a problem submitting the form.");
    });
});

  function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  }

  function toggleDropdown(id) {
    document.querySelectorAll('.dropdown').forEach(el => {
      if (el.id !== id) el.classList.add('hidden');
    });
    const target = document.getElementById(id);
    if (target) target.classList.toggle('hidden');
  }

  document.addEventListener('click', (e) => {
    const nav = document.getElementById('desktop-nav');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!nav?.contains(e.target) && !mobileMenu?.contains(e.target)) {
      document.querySelectorAll('.dropdown').forEach(el => el.classList.add('hidden'));
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
      new Swiper('.swiper', {
        loop: true,
        speed: 600,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        effect: 'slide',
      });
    });

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.facilitiesHomeSwiper'); // <- match HTML
  if (!container) return;

  // guard against double init during hot-reload
  if (container.swiper) container.swiper.destroy(true, true);

  new Swiper(container, {
    loop: true,
    speed: 800,
    effect: 'slide',
    autoplay: { delay: 5000, disableOnInteraction: false },

    // Scope to this container to avoid collisions
    navigation: {
      nextEl: container.querySelector('.swiper-button-next'),
      prevEl: container.querySelector('.swiper-button-prev'),
    },
    pagination: {
      el: container.querySelector('.swiper-pagination'),
      clickable: true,
    },
  });
});

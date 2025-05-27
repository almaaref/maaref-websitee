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
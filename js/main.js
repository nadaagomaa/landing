
  document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const CloseMenuBtn = document.getElementById('closeMenuBtn');
    const overlayBackdrop = document.querySelector('.overlay-backdrop'); 
    const body = document.body;
    function toggleMenu() {
      navbarCollapse.classList.toggle('show');
      overlayBackdrop.classList.toggle('show');
      body.classList.toggle('overflow-hidden');
    }
    navbarToggler.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });
    CloseMenuBtn.addEventListener('click', function() {
      toggleMenu();
    });
    // Function to close the navbar on resize if it's open
    function closeNavbarOnResize() {
      if (window.innerWidth  && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
        overlayBackdrop.classList.remove('show');
      }
    }
    // Debounce function
    let resizeTimeout;
    function debouncedCloseNavbarOnResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(closeNavbarOnResize, 50); 
    }
    // Add event listener for window resize with debouncing
    window.addEventListener('resize', debouncedCloseNavbarOnResize); 
  });
 
 
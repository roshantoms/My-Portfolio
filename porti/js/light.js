document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme - check localStorage first, then system preference
    let currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    applyTheme(currentTheme);
    
    // Toggle function
    themeToggle.addEventListener('click', function() {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    });
    
    function applyTheme(theme) {
        // Set theme attribute on document element
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update button icon
        const icon = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        themeToggle.innerHTML = icon;
        
        // Update navbar logo border color immediately
        const navbarLogo = document.querySelector('.navbar-brand img');
        if (navbarLogo) {
            navbarLogo.style.borderColor = `var(--color-brand)`;
        }
    }
});
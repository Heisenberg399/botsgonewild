/**
 * Handles the theme toggling (light/dark mode) for the website.
 * Saves the user's preference in localStorage.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Get the theme toggle button element
    const themeToggleButton = document.getElementById('theme-toggle');
    // Get the saved theme from localStorage, default to 'light' if not found
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply the saved theme when the page loads
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleButton.textContent = 'Toggle Light Mode'; // Update button text
    } else {
        // Default is light mode (no class needed initially)
        themeToggleButton.textContent = 'Toggle Dark Mode'; // Update button text
    }

    // Add event listener for the toggle button click
    themeToggleButton.addEventListener('click', () => {
        // Toggle the 'dark-mode' class on the body element
        document.body.classList.toggle('dark-mode');

        // Determine the new theme and update localStorage and button text
        let theme = 'light'; // Assume light mode
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark'; // It's actually dark mode
            themeToggleButton.textContent = 'Toggle Light Mode'; // Update button text
        } else {
            themeToggleButton.textContent = 'Toggle Dark Mode'; // Update button text
        }
        // Save the newly selected theme to localStorage
        localStorage.setItem('theme', theme);
    });
});

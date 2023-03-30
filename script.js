// Focus on search bar when clicking on search icon
document.getElementById('search-icon').addEventListener('click', () => {
    document.getElementById('search-bar').focus();
});

// Dark mode
document.addEventListener('DOMContentLoaded', (e) => {
    document.documentElement.setAttribute('data-theme', 'light');

    const themeButton = document.getElementById('theme-button');

    themeButton.onclick = () => {
        // Change theme
        let currentTheme = document.documentElement.getAttribute('data-theme');
        let switchTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute("data-theme", switchTheme);

        //Change icon
        if (currentTheme === 'light') {
            themeButton.classList.remove('fa-moon');
            themeButton.classList.add('fa-lightbulb');
        }
        else {
            themeButton.classList.remove('fa-lightbulb');
            themeButton.classList.add('fa-moon');
        }
    }
});
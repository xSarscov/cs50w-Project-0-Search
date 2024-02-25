
document.addEventListener('DOMContentLoaded', () => {
    // Check if user typed anything in the search input, if not stop the form submit
    const searchForm = document.querySelector('#search-form');

    searchForm.addEventListener('submit', (event) => {

        const searchField = document.querySelector('#search-field').value;

        if (event.submitter.name === 'btnK' && searchField.trim() === '') {
            event.preventDefault();
        }

    });

    // Change the color mode of the Google logo based on the theme of the page
    const googleImage = document.querySelector('#google-img');

    const ChangeLogoColor = () => {
        const isLightTheme = document.documentElement.getAttribute('data-bs-theme') === 'light';

        if (isLightTheme) {
            googleImage.src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
            googleImage.srcset = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png 1.5x';
        } else {
            googleImage.src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png';
            googleImage.srcset = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_160x56dp.png 1.5x';
        }
    }

    const toggleColorModeBtn = document.querySelector('#theme-toggle');
    const getStoredTheme = localStorage.getItem('theme') || 'dark';
    const setStoredTheme = theme => localStorage.setItem('theme', theme);
    
    const setTheme = theme => document.documentElement.setAttribute('data-bs-theme', theme);
    
    toggleColorModeBtn.addEventListener('click', () => {
        const newTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
        setStoredTheme(newTheme);
        toggleColorModeBtn.innerText = `Dark mode: ${newTheme === 'dark' ? 'on' : 'off'}`;
        setTheme(newTheme);
        ChangeLogoColor();
    });
    
    setTheme(getStoredTheme);
    ChangeLogoColor();

});

// Initialize bootstrap tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]'),
    tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));











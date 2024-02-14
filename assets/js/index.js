document.addEventListener('DOMContentLoaded', () => {

    const searchForm = document.querySelector('#search-form');

    searchForm.addEventListener('submit', (event) => {

        const searchField = document.querySelector('#search-field').value;

        if (event.submitter.name === 'btnK' && searchField.trim() === '') {
            event.preventDefault();
        }

    });

});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


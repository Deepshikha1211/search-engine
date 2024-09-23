// Get DOM elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchHistoryList = document.getElementById('search-history');
const clearHistoryButton = document.getElementById('clear-history');

// Function to load search history from localStorage
function loadSearchHistory() {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    searchHistoryList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        searchHistoryList.appendChild(li);
    });
}

// Function to save a search term
function saveSearch(query) {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    history.push(query);
    localStorage.setItem('searchHistory', JSON.stringify(history));
}

// Event listener for search button
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        saveSearch(query);
        loadSearchHistory();
        searchInput.value = '';
    }
});

// Event listener for clear history button
clearHistoryButton.addEventListener('click', () => {
    localStorage.removeItem('searchHistory');
    loadSearchHistory();
});

// Load history on page load
document.addEventListener('DOMContentLoaded', loadSearchHistory);

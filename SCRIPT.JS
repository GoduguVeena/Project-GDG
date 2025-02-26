// script.js
document.getElementById('tripForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const tripName = document.getElementById('tripName').value;
    const destination = document.getElementById('destination')
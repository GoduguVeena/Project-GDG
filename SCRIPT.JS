// Poll data structure to store vote counts
const pollResults = {
    JavaScript: 0,
    Python: 0,
    Java: 0,
    C++: 0
};

// Get references to the poll form and result elements
const pollForm = document.getElementById("pollForm");
const resultsDiv = document.getElementById("results");

pollForm.addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent form submission (refresh)
    
    // Get selected vote
    const selectedOption = document.querySelector('input[name="language"]:checked');
    
    if (selectedOption) {
        // Increment the vote count for the selected option
        const language = selectedOption.value;
        pollResults[language]++;
        
        // Update the displayed results
        updateResults();
    } else {
        alert("Please select an option before submitting.");
    }
});

// Function to update results on the page
function updateResults() {
    resultsDiv.innerHTML = `
        <p>JavaScript: ${pollResults.JavaScript}</p>
        <p>Python: ${pollResults.Python}</p>
        <p>Java: ${pollResults.Java}</p>
        <p>C++: ${pollResults.C++}</p>
    `;
}

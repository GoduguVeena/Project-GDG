document.getElementById("add-rsvp").addEventListener("click", function () {
    // Get input values
    const eventName = document.getElementById("event-name").value.trim();
    const attendeeName = document.getElementById("attendee-name").value.trim();
    const rsvpStatus = document.getElementById("rsvp-status").value;

    // Validate inputs
    if (!eventName || !attendeeName || !rsvpStatus) {
        alert("Please fill out all fields.");
        return;
    }

    // Create a new row for the RSVP list
    const tableBody = document.querySelector("#rsvp-list tbody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${eventName}</td>
        <td>${attendeeName}</td>
        <td>${rsvpStatus}</td>
    `;

    // Add the new row to the table
    tableBody.appendChild(newRow);

    // Clear the form fields
    document.getElementById("event-name").value = "";
    document.getElementById("attendee-name").value = "";
    document.getElementById("rsvp-status").value = "";
});

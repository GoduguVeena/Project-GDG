const groups = [
    { name: "Math Enthusiasts", description: "A group for solving math problems.", members: 10 },
    { name: "AI Learners", description: "Discuss and learn AI concepts together.", members: 15 },
];

function displayGroups() {
    const groupsContainer = document.getElementById("groups");
    groupsContainer.innerHTML = "";
    groups.forEach((group, index) => {
        const groupCard = `
            <div class="card">
                <h3>${group.name}</h3>
                <p>${group.description}</p>
                <p>Members: ${group.members}</p>
                <button class="btn" onclick="joinGroup(${index})">Join Group</button>
            </div>
        `;
        groupsContainer.innerHTML += groupCard;
    });
}

function createGroup() {
    const name = document.getElementById("groupName").value;
    const description = document.getElementById("groupDescription").value;
    if (name && description) {
        groups.push({ name, description, members: 1 });
        displayGroups();
        document.getElementById("groupName").value = "";
        document.getElementById("groupDescription").value = "";
    }
}

function joinGroup(index) {
    groups[index].members += 1;
    displayGroups();
}

// Initialize the group display
displayGroups();

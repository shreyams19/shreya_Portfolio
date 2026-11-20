
// Highlight skill cards when clicked

function changeSkill(element) {
    element.classList.toggle("selected");
}

// Automatically display current year

let currentYear = new Date().getFullYear();

document.getElementById("year").innerHTML = currentYear;

// document.addEventListener("DOMContentLoaded", function () {
//     // Load Header
//     fetch('header.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("header").innerHTML = data;
//             initializeSidebar(); // Initialize sidebar functionality after loading header
//         })
//         .catch(error => console.error("Error loading header:", error));

//     // Load Footer
//     fetch('footer.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("footer").innerHTML = data;
//         })
//         .catch(error => console.error("Error loading footer:", error));
// });

// // Function to initialize sidebar functionality
// function initializeSidebar() {
//     const openSidebarBtn = document.getElementById("openSidebar");
//     const closeSidebarBtn = document.getElementById("closeSidebar");
//     const sidebar = document.getElementById("sidebar");

//     if (openSidebarBtn && closeSidebarBtn && sidebar) {
//         openSidebarBtn.addEventListener("click", function () {
//             sidebar.classList.remove("translate-x-full");
//         });

//         closeSidebarBtn.addEventListener("click", function () {
//             sidebar.classList.add("translate-x-full");
//         });
//     } else {
//         console.error("Sidebar elements not found");
//     }
// }


document.addEventListener("DOMContentLoaded", function () {
    // Load Header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
            initializeSidebar(); // Initialize sidebar functionality after loading header
            initializeDirectionToggle(); // Initialize direction toggle functionality
        })
        .catch(error => console.error("Error loading header:", error));

    // Load Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});

// Function to initialize sidebar functionality
function initializeSidebar() {
    const openSidebarBtn = document.getElementById("openSidebar");
    const closeSidebarBtn = document.getElementById("closeSidebar");
    const sidebar = document.getElementById("sidebar");

    if (openSidebarBtn && closeSidebarBtn && sidebar) {
        openSidebarBtn.addEventListener("click", function () {
            sidebar.classList.remove("translate-x-full");
        });

        closeSidebarBtn.addEventListener("click", function () {
            sidebar.classList.add("translate-x-full");
        });
    } else {
        console.error("Sidebar elements not found");
    }
}

// Function to initialize direction toggle functionality
function initializeDirectionToggle() {
    const directionToggleBtn = document.getElementById("directionToggle");

    if (directionToggleBtn) {
        // Check if there's a saved direction preference
        const currentDirection = localStorage.getItem('siteDirection') || 'ltr';

        // Apply the saved direction
        document.documentElement.setAttribute('dir', currentDirection);
        document.body.setAttribute('dir', currentDirection);

        // Add event listener for the toggle button
        directionToggleBtn.addEventListener("click", function () {
            const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';

            // Update the direction
            document.documentElement.setAttribute('dir', newDir);
            document.body.setAttribute('dir', newDir);

            // Save the preference
            localStorage.setItem('siteDirection', newDir);

            // Update sidebar position based on direction
            updateSidebarPosition(newDir);

            // Optional: Show a notification
            const dirName = newDir === 'rtl' ? 'RTL' : 'LTR';
            showDirectionNotification(dirName);
        });
    } else {
        console.error("Direction toggle button not found");
    }
}

// Update sidebar position based on direction
function updateSidebarPosition(direction) {
    const sidebar = document.getElementById("sidebar");

    if (sidebar) {
        if (direction === 'rtl') {
            sidebar.classList.remove("right-10", "translate-x-full");
            sidebar.classList.add("left-0", "translate-x-full");
        } else {
            sidebar.classList.remove("left-0", "translate-x-full");
            sidebar.classList.add("right-0", "translate-x-full");
        }
    }
}


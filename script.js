document.addEventListener("DOMContentLoaded", function () {
    // Load Header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
            initializeSidebar(); // Initialize sidebar functionality after loading header
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

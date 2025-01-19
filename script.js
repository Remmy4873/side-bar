// Toggle Sidebar
document.getElementById('toggle_btn').addEventListener('click', function() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("collapsed");
});

// Handle Active Menu Item
const menus = document.querySelectorAll(".sidebar ul li a");
menus.forEach(menu => {
    menu.addEventListener("click", function() {
        menus.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});

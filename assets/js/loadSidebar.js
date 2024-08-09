document.addEventListener("DOMContentLoaded", function() {
    const sidebarElement = document.getElementById("sidebar");

    fetch('sidebar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            sidebarElement.innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
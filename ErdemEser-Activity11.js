// Document ready function using vanilla JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Function to handle click events on navigation list items
    function handleNavItemClick() {
        // Retrieve the title attribute from the child anchor tag
        var title = this.querySelector('a').getAttribute('title');
        // Build the path to the JSON file
        var jsonFilePath = 'json_files/' + title + '.json';
        // Fetch and display the JSON data
        fetchAndDisplayJSON(jsonFilePath);
    }

    // Fetch and display JSON data
    function fetchAndDisplayJSON(path) {
        fetch(path)
            .then(response => response.json())
            .then(data => {
                // Update the main content with the fetched data
                document.querySelector('main > h2').innerHTML = data.speakers[0].month + '<br/>' + data.speakers[0].speaker;
                document.querySelector('main > h1').innerHTML = data.speakers[0].title;
                document.querySelector('main > img').setAttribute('src', data.speakers[0].image);
                document.querySelector('main > p').innerHTML = data.speakers[0].text;
            })
            .catch(error => {
                // Handle any errors during the fetch
                console.error('Error loading JSON:', error);
                alert('Error loading data for ' + path);
            });
    }

    // Attach click event handlers to each list item in the navigation list
    var navItems = document.querySelectorAll('#nav_list li');
    navItems.forEach(function (item) {
        item.addEventListener('click', handleNavItemClick);
    });
});

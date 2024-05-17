// Wait until the document is fully loaded
$(document).ready(function () {
    // Attach a click event handler to each list item in the navigation list
    $("#nav_list li").click(function() {
        // Get the title attribute of the child anchor tag of the clicked list item
        var title = $(this).children("a").attr("title");
        // Construct the filename of the JSON file using the title
        var filename = "json_files/" + title + ".json"; // Path adjusted to point to the correct directory
        // Call the function to fetch and process the JSON data
        consumeJSON(filename);
    });
});

// Function to fetch and process JSON data
function consumeJSON(jsonFileURL) {
    // Make an AJAX request to fetch the JSON data
    $.ajax({
        url: jsonFileURL,
        dataType: "json", // Expect a JSON response
        success: function (data) {
            // On successful fetch, update the main content with the fetched data
            $("main > h2").html(data.speakers[0].month + "<br/>" + data.speakers[0].speaker);
            $("main > h1").html(data.speakers[0].title);
            $("main > img").attr("src", data.speakers[0].image);
            $("main > p").html(data.speakers[0].text);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Log any errors during the fetch to the console
            console.log('Error loading JSON:', textStatus, errorThrown);
            // Show an alert with the error message
            alert('Error loading data for ' + jsonFileURL);
        }
    });
}

            
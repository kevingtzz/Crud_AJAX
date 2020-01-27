$(document).ready(function() {
    //console.log('jquery is working');

    $('#search').keyup(function(e) {
        let search = $('#search').val();
        $.ajax({
            url: 'task-search.php',
            type: 'POST',
            data: { search },
            success: function(response) {
                let tasks = JSON.parse(response);
                console.log(tasks);
            }
        })
    })
});
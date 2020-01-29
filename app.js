$(document).ready(function() {
    
    $('#task_result').hide();

    $('#search').keyup(function(e) {
        if ($('#search').val()) {
            let search = $('#search').val();
            $.ajax({
                url: 'task-search.php',
                type: 'POST',
                data: { search },
                success: function(response) {
                    let tasks = JSON.parse(response);
                    let template = '';

                    tasks.forEach(task => {
                        template += `<li>
                            ${task.name}
                        </li>`
                    });

                    $('#container').html(template);
                    $('#task_result').show();
                }
            })
        }
    })

    $('#task-form').submit(function(e) {
        const postData = {
            name: $('#name').val(),
            description: $('#description').val()
        };
        $.post('task-add.php', postData, function(response) {
            console.log(response);
        });
        e.preventDefault();
    });
});
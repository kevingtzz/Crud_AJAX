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

            $('#task-form').trigger('reset');
        });
        e.preventDefault();
    });

    $.ajax({
        url: 'task-list.php',
        type: 'GET',
        success: function(res) {
            let tasks = JSON.parse(res);
            let template = '';
            tasks.forEach(task => {
                template += `
                    <tr>
                        <td>${task.id}</td>
                        <td>${task.name}</td>
                        <td>${task.description}</td>
                    </tr>
                `
            });
            $('#task').html(template);
        }
    });
});
$(document).ready(function(){
    $('form').on('submit', function(evento){
        evento.preventDefault()

        const tarefa = $('#tarefa').val()
        const novaTarefa = $(`<li>${tarefa}</li>`)

        $(novaTarefa).appendTo('ul')

        $('#tarefa').val('')

        $('li').click(function(){
            $(this).addClass('riscado')
        })

        $('#tarefa').val('')
    })
})
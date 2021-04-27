function adicionarTarefa() {
    let diaDaSemana = document.getElementById("dias-semana").value
    let tarefaLista = document.getElementById("tarefa").value

    if (tarefaLista !== "") {
        document.getElementById(diaDaSemana).innerHTML += `<li>${tarefaLista}</li>`
        document.getElementById("tarefa").value = ""
    } else {
        alert("O campo está vazio! Por favor, insira uma tarefa.")
    }
   

}


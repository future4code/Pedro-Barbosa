let cliques = 0

function adicionarTarefa() {
    let diaDaSemana = document.getElementById("dias-semana").value
    let tarefaLista = document.getElementById("tarefa").value
    let horarioDoDia = document.getElementById("horas-do-dia").value

    if (tarefaLista !== "") {
        document.getElementById(diaDaSemana).innerHTML += `<li onclick='riscaTexto(this)'>${tarefaLista} às ${horarioDoDia}</li>`

        document.getElementById("tarefa").value = ""
    } else {
        alert("O campo está vazio! Por favor, insira uma tarefa.")
    }

}

function riscaTexto(textoinserido){
    textoinserido.style = "text-decoration: line-through";
}

function limparTudo() {
    let listas = document.getElementsByTagName("li")
    for (let limpeza of listas) {
        limpeza.innerHTML = ""
    }
}

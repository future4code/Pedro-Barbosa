const arrayTasks = ["Pagar o agiota", "Tomar uma dose dupla de Dreher"];

const newTaskArray = [...arrayTasks, process.argv[2]];

console.log("Tarefa adicionada com sucesso!");
console.log(newTaskArray);

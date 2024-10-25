function agregarTarea() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");

        // Crear un nuevo elemento de lista
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="btn btn-danger btn-sm" onclick="eliminarTarea(this)">Eliminar</button>
        `;

        // Agregar el nuevo elemento a la lista
        taskList.appendChild(listItem);
        taskInput.value = ""; // Limpiar el campo de entrada
    }
}

function eliminarTarea(button) {
    const listItem = button.parentElement; // Obtener el elemento de lista (li)
    listItem.remove(); // Eliminar el elemento de la lista
}

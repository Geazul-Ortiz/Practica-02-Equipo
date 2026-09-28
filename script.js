document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formIncidencia");
  const btnLimpiar = document.getElementById("btnLimpiar");
  const tablaBody = document.querySelector("#tablaIncidencias tbody");

  // Accion del boton Guardar (Submit)
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const idPedido = document.getElementById("idPedido").value;
    const tipo = document.getElementById("tipoIncidencia").value;
    const causa = document.getElementById("causa").value;
    const fecha = document.getElementById("nuevaFecha").value;

    // Crear una nueva fila en la tabla
    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
      <td>${idPedido}</td>
      <td>${tipo}</td>
      <td>${causa}</td>
      <td>${fecha}</td>
      <td><button class="btn-borrar">Eliminar</button></td>
    `;

    // Agregar funcionalidad al boton de eliminar de la fila
    nuevaFila.querySelector(".btn-borrar").addEventListener("click", () => {
      nuevaFila.remove();
    });

    tablaBody.appendChild(nuevaFila);

    alert("¡Incidencia registrada correctamente!");
    form.reset();
  });

  // Accion del boton Limpiar
  btnLimpiar.addEventListener("click", () => {
    form.reset();
  });
});

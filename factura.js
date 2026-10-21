let acumuladoSubtotal = 0;

document.getElementById("agregarProducto").addEventListener("click", agregarFila);

function agregarFila() {
    let producto = document.getElementById("nombreProducto").value;
    let cantidad = Number(document.getElementById("cantidadProducto").value);
    let precio = Number(document.getElementById("precioProducto").value);

    let subtotal = cantidad * precio;
    let filaNueva = document.createElement("tr");

    filaNueva.innerHTML = 
    `<td>${producto}</td>
     <td>${cantidad}</td>
     <td>${precio.toFixed(2)}</td>
     <td>${subtotal.toFixed(2)}</td>`;

    document.getElementById("DetalleFactura").appendChild(filaNueva);

    // Acumular y calcular totales
    acumuladoSubtotal += subtotal;
    let iva = acumuladoSubtotal * 0.15; // Puedes cambiar el porcentaje de IVA si lo necesitas
    let total = acumuladoSubtotal + iva;

    // Actualizar los valores en la tabla de resumen
    document.getElementById("resumenSubtotal").textContent = acumuladoSubtotal.toFixed(2);
    document.getElementById("resumenIVA").textContent = iva.toFixed(2);
    document.getElementById("resumenTotal").textContent = total.toFixed(2);

    // Limpiar campos de entrada
    document.getElementById("nombreProducto").value = "";
    document.getElementById("cantidadProducto").value = "";
    document.getElementById("precioProducto").value = "";
}
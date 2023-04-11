$(document).ready(function () {
    $('#mytable').DataTable({
        responsive: true,
        "ajax": {
            "url": "estadisticasjson.json",
            "dataSrc": ""
        },
        "columns": [
            { "data": "nombre", className: "text-center" },
            { "data": "apellido", className: "text-center" },
            { "data": "run", className: "text-center" },
            { "data": "nacionalidad", className: "text-center" },
            { "data": "monto", className: "text-center" },
            { "data": "cantidad", className: "text-center" }
        ]
    });
});
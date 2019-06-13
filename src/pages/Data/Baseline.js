export default {
    "columnas": [
      {
        "id":1,
        "nombre": "Nombres",
        "nomcol": "nombre",
        "dependencia": 1
      },
      {
        "id":2,
        "nombre": "Apellidos",
        "nomcol": "ap_pat, ap_mat",
        "dependencia": 1
      },
      {
        "id":3,
        "nombre": "Dni",
        "nomcol": "docid",
        "dependencia": 1
      },
      {
        "id":4,
        "nombre": "familia",
        "nomcol": "docid",
        "dependencia": 1
      },
      {
        "id":5,
        "nombre": "direccion",
        "nomcol": "docid",
        "dependencia": 1
      },
      {
        "id":6,
        "nombre": "Garita",
        "nomcol": "docid",
        "dependencia": 1
      },
      {
        "id":7,
        "nombre": "Agua diaria",
        "nomcol": "docid",
        "dependencia": 1
      },
      {
        "id":8,
        "nombre": "Consumo promedio",
        "nomcol": "docid",
        "dependencia": 1
      },
      {
        "id":9,
        "nombre": "Ahorro mensual",
        "nomcol": "docid",
        "dependencia": 1
      },
      {
        "id":10,
        "nombre": "miembros de la familia",
        "nomcol": "docid",
        "dependencia": 1
      },
    ],

    "dependencias": [
        {
          "id": 1,
          "join": "INNER JOIN ttable ON ttable.id = nana.id"
        }
      ],

}
  
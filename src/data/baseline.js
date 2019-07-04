export default {
    'columnas': {
        'residente': [

            {
                'id':1,
                'nombre': 'Nombres',
                'nomcol': 'nombre',
                'dependencia': 1
            },
            {
            
                'id':2,
                'nombre': 'Apellidos',
                'nomcol': 'ap_pat, ap_mat',
                'dependencia': 1
            },
            {
                'id':3,
                'nombre': 'Dni',
                'nomcol': 'docid',
                'dependencia': 1
            },
            {
                'id':8,
                'nombre': 'Educacion',
                'nomcol': 'docid',
                'dependencia': 1
            },
            {
                'id':9,
                'nombre': 'Estado Civil',
                'nomcol': 'docid',
                'dependencia': 1
            },
            {
                'id':10,
                'nombre': 'Fecha Nacimiento',
                'nomcol': 'docid',
                'dependencia': 1
            },
            {
                'id':11,
                'nombre': 'Tiempo Resid',
                'nomcol': 'docid',
                'dependencia': 1
            },
            {
                'id':12,
                'nombre': 'Genero',
                'nomcol': 'docid',
                'dependencia': 1
            }
        ],
        'vivienda': [
            {
                'id':4,
                'nombre': 'Id Familia',
                'nomcol': 'docid',
                'dependencia': 1
            },
            {
                'id':5,
                'nombre': 'Direccion',
                'nomcol': 'docid',
                'dependencia': 1
            },
            {
                'id':6,
                'nombre': 'Material',
                'nomcol': 'docid',
                'dependencia': 1
            },
            {
                'id':7,
                'nombre': '# Habitantes',
                'nomcol': 'docid',
                'dependencia': 1
            },
            {
                'id':7,
                'nombre': '# Mascotas',
                'nomcol': 'docid',
                'dependencia': 1
            }
        ]

    },
    'dependencias': [
        {
          'id': 1,
          'join': 'INNER JOIN ttable ON ttable.id = nana.id'
        }
      ],

}
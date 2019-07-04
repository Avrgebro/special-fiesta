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
                'nomcol': 'apellidos',
                'dependencia': 1
            },
            {
                'id':3,
                'nombre': 'Dni',
                'nomcol': 'dni',
                'dependencia': 1
            },
            {
                'id':8,
                'nombre': 'Educacion',
                'nomcol': 'educacion',
                'dependencia': 1
            },
            {
                'id':9,
                'nombre': 'Estado Civil',
                'nomcol': 'estadocivil',
                'dependencia': 1
            },
            {
                'id':10,
                'nombre': 'Fecha Nacimiento',
                'nomcol': 'fechanac',
                'dependencia': 1
            },
            {
                'id':11,
                'nombre': 'Tiempo Resid',
                'nomcol': 'tresidencia',
                'dependencia': 1
            },
            {
                'id':12,
                'nombre': 'Genero',
                'nomcol': 'genero',
                'dependencia': 1
            }
        ],
        'vivienda': [
            {
                'id':4,
                'nombre': 'Id Familia',
                'nomcol': 'idfamilia',
                'dependencia': 1
            },
            {
                'id':5,
                'nombre': 'Direccion',
                'nomcol': 'direccion',
                'dependencia': 1
            },
            {
                'id':6,
                'nombre': 'Material',
                'nomcol': 'material',
                'dependencia': 1
            },
            {
                'id':7,
                'nombre': '# Habitantes',
                'nomcol': 'nhabitantes',
                'dependencia': 1
            },
            {
                'id':7,
                'nombre': '# Mascotas',
                'nomcol': 'nmascotas',
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
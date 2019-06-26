export default {
    'filters':[
        {
            'id': 1,
            'name': 'daterange',
            'text': 'Rango de fechas',
            'type': 1,
            'initialvalue': [],
            'model': 'daterange',
            'variables': ['@STARTDATE', '@ENDDATE@'],
            'options': [],
            'clause': 'AND fecha >= @STARDATE@ AND fecha <= @ENDDATE@',
            'required': true
        },
        {
            'id': 2,
            'name': 'genre',
            'text': 'Genero',
            'type': 0,
            'initialvalue': [],
            'model': 'genre',
            'variables': ['@GENERO@'],
            'options': ['Masculino', 'Femenino'],
            'clause': 'AND genero = @GENERO@',
            'required': false
        },
        {
            'id': 3,
            'name': 'agerange',
            'text': 'Rango de edad',
            'type': 0,
            'initialvalue': [],
            'model': 'agerange',
            'variables': ['@EDADES@'],
            'options': ['<15', '[15-25[', '[25-40[', '>40'],
            'clause': 'AND edad = @EDADES@',
            'required': false
        }
    ],
    'filterdata':{
        'daterange': [],
        'genre': [],
        'agerange': []
    }
}

/*
Tipos de controles de filtros
0 - dropdown single selection
1 - daterange
2 - datepicker
*/
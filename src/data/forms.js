export default {
  'forms': [{
      id: 1,
      name: 'Informacion general',
      type: 'Vivienda',
      preguntas: [{"pregunta":"cuantos anos tienes","clave":"anos","tipoPregunta":"Valor","opciones":[]},{"pregunta":"fecha de nacimiento","clave":"fecha_nac","tipoPregunta":"Fecha","opciones":[]},{"pregunta":"operador movil","clave":"operador_movil","tipoPregunta":"Opciones","opciones":["Movistar","Claro","Entel","Tuenti","Bitel"]}]
    }, {
      id: 2,
      name: 'Servicios basicos',
      type: 'Vivienda',
      preguntas: [{"pregunta":"cuantos anos tienes","clave":"anos","tipoPregunta":"Valor","opciones":[]},{"pregunta":"fecha de nacimiento","clave":"fecha_nac","tipoPregunta":"Fecha","opciones":[]},{"pregunta":"operador movil","clave":"operador_movil","tipoPregunta":"Opciones","opciones":["Movistar","Claro","Entel","Tuenti","Bitel"]}]
    }, {
      id: 3,
      name: 'Informacion general',
      type: 'Residente',
      preguntas: [{"pregunta":"cuantos anos tienes","clave":"anos","tipoPregunta":"Valor","opciones":[]},{"pregunta":"fecha de nacimiento","clave":"fecha_nac","tipoPregunta":"Fecha","opciones":[]},{"pregunta":"operador movil","clave":"operador_movil","tipoPregunta":"Opciones","opciones":["Movistar","Claro","Entel","Tuenti","Bitel"]}]
    }, {
      id: 4,
      name: 'Educacional',
      type: 'Residente',
      preguntas: [{"pregunta":"cuantos anos tienes","clave":"anos","tipoPregunta":"Valor","opciones":[]},{"pregunta":"fecha de nacimiento","clave":"fecha_nac","tipoPregunta":"Fecha","opciones":[]},{"pregunta":"operador movil","clave":"operador_movil","tipoPregunta":"Opciones","opciones":["Movistar","Claro","Entel","Tuenti","Bitel"]}]
    }, {
      id: 5,
      name: 'Empleo',
      type: 'Residente',
      preguntas: [{"pregunta":"cuantos anos tienes","clave":"anos","tipoPregunta":"Valor","opciones":[]},{"pregunta":"fecha de nacimiento","clave":"fecha_nac","tipoPregunta":"Fecha","opciones":[]},{"pregunta":"operador movil","clave":"operador_movil","tipoPregunta":"Opciones","opciones":["Movistar","Claro","Entel","Tuenti","Bitel"]}]
    }, {
      id: 6,
      name: 'Empoderamiento',
      type: 'Residente',
      preguntas: [{"pregunta":"cuantos anos tienes","clave":"anos","tipoPregunta":"Valor","opciones":[]},{"pregunta":"fecha de nacimiento","clave":"fecha_nac","tipoPregunta":"Fecha","opciones":[]},{"pregunta":"operador movil","clave":"operador_movil","tipoPregunta":"Opciones","opciones":["Movistar","Claro","Entel","Tuenti","Bitel"]}]
    },
  {
    id: 11,
    name: 'Información General',
    type: 'Vivienda',
    preguntas: [
      {"pregunta":"V1. Indique el tipo de vivienda","clave":"tipo_vivienda","tipoPregunta":"Opciones","opciones":["Casa propia de 1 piso","Casa propia de 2 pisos","Casa alquilada","Pieza en casa"]},
      {"pregunta":"V2. ¿Cuál es el material predominante las paredes de su vivienda?","clave":"tipo_vivienda","tipoPregunta":"Opciones","opciones":["ladrillo","cemento","madera","material noble","tripley","Otros"]},
      {"pregunta":"V3. ¿Cuál es el material predominante en el piso de su vivienda?","clave":"piso_vivienda","tipoPregunta":"Opciones","opciones":["Losa","cemento","madera","plastico","tripley","Otros"]},
      {"pregunta":"V4. ¿Cuántos animales domesticos poseen en el hogar?","clave":"piso_vivienda","tipoPregunta":"Valor","opciones":[]}
    ]
  },
  {
    id: 16,
    name: 'Educación',
    type: 'Residente',
    preguntas: [
      {"pregunta":"ED1. ¿Sabe leer y escribir?","clave":"lee_escribe","tipoPregunta":"Opciones","opciones":["Sí","No"]},
      {"pregunta":"ED2. ¿Asiste actualmente a algún establecimiento educacional?","clave":"asiste_educa","tipoPregunta":"Opciones","opciones":["Sí","No"]},
      {"pregunta":"ED3. Indique el Curso y Tipo de estudio actual (para los que están estudiando) o el último curso aprobado (para los que no están estudiando)","clave":"edu_nivel","tipoPregunta":"Opciones","opciones":["primaria","secundaria","tecnica","universitaria","Otros","Sin Nivel"]},
      {"pregunta":"ED4. ¿Qué tipo de administración posee la insitución?","clave":"tipo_centroedu","tipoPregunta":"Opciones","opciones":["Institución estatal","Institución privada","Otros"]}
    ]
  },
  {
    id: 9,
    name: 'Empleo',
    type: 'Residente',
    preguntas: [
      {"pregunta":"EM1. La semana pasada, ¿trabajó al menos una hora sin considerar los quehaceres de su hogar?:","clave":"em_trab_sem_pasada","tipoPregunta":"Opciones","opciones":["Sí","No"]},
      {"pregunta":"EM2. ¿Está en búsqueda de trabajo remunerado?:","clave":"em_enbusca","tipoPregunta":"Opciones","opciones":["Sí","No"]},
      {"pregunta":"EM3. ¿Por qué no buscó trabajo?:","clave":"em_nobusca_razon","tipoPregunta":"Opciones","opciones":["Ya conseguí trabajo, recien comenzará.","No tiene con quién dejar a los hjos.","No tiene con quién dejar a adultos mayores.","Quehaceres del hogar.","Un familiar se opone.","Ofrecen sueldos muy bajos."]},
      {"pregunta":"EM4. ¿Cuántas semanas buscó o ha estado buscando trabajo?","clave":"em_busca_sem","tipoPregunta":"Valor","opciones":[]},
      {"pregunta":"EM5. ¿Cuál es su ocupación u oficio actual o qué hace usted en su trabajo principal?","clave":"em_ocupacion","tipoPregunta":"Opciones","opciones":["Abogado","Albañil","Carpintero","Electricista","Otros"]},
      {"pregunta":"EM6. En su empleo actual, usted trabaja como:","clave":"em_tipo","tipoPregunta":"Opciones","opciones":["Empleador","Trabajador independiente","Empleado sector público","Patrón en campo","Peón en campo","PNP o FF.AA.","Otros"]},
      {"pregunta":"EM7. En su empleo actual. ¿tiene contrato de trabajo?:","clave":"em_contrato","tipoPregunta":"Opciones","opciones":["Si","No","No sabe"]},
      {"pregunta":"EM8. En su empleo actual, su relación contractual es de tipo:","clave":"em_contrato_tipo","tipoPregunta":"Opciones","opciones":["Plazo indefinido","Plazo fijo","Por obra, faena o servicio","Transitorio"]}
    ]
  }
  ]
}
export default {
  'forms': [{
      id: 1,
      name: 'Informacion general',
      type: 'Vivienda',
      questions: [{"question":"cuantos anos tienes","key":"anos","type":"Valor","options":[]},{"question":"fecha de nacimiento","key":"fecha_nac","type":"Fecha","options":[]},{"question":"operador movil","key":"operador_movil","type":"Opciones","options":["Movistar","Claro","Entel","Tuenti","Bitel"]}]
    }, {
      id: 2,
      name: 'Servicios basicos',
      type: 'Vivienda',
      questions: [{"question":"cuantos anos tienes","key":"anos","type":"Valor","options":[]},{"question":"fecha de nacimiento","key":"fecha_nac","type":"Fecha","options":[]},{"question":"operador movil","key":"operador_movil","type":"Opciones","options":["Movistar","Claro","Entel","Tuenti","Bitel"]}]
    }, {
      id: 3,
      name: 'Informacion general',
      type: 'Residente',
      questions: [{"question":"cuantos anos tienes","key":"anos","type":"Valor","options":[]},{"question":"fecha de nacimiento","key":"fecha_nac","type":"Fecha","options":[]},{"question":"operador movil","key":"operador_movil","type":"Opciones","options":["Movistar","Claro","Entel","Tuenti","Bitel"]}]
    }, {
      id: 4,
      name: 'Educacional',
      type: 'Residente',
      questions: [{"question":"cuantos anos tienes","key":"anos","type":"Valor","options":[]},{"question":"fecha de nacimiento","key":"fecha_nac","type":"Fecha","options":[]},{"question":"operador movil","key":"operador_movil","type":"Opciones","options":["Movistar","Claro","Entel","Tuenti","Bitel"]}]
    }, {
      id: 5,
      name: 'Empleo',
      type: 'Residente',
      questions: [{"question":"cuantos anos tienes","key":"anos","type":"Valor","options":[]},{"question":"fecha de nacimiento","key":"fecha_nac","type":"Fecha","options":[]},{"question":"operador movil","key":"operador_movil","type":"Opciones","options":["Movistar","Claro","Entel","Tuenti","Bitel"]}]
    }, {
      id: 6,
      name: 'Empoderamiento',
      type: 'Residente',
      questions: [{"question":"cuantos anos tienes","key":"anos","type":"Valor","options":[]},{"question":"fecha de nacimiento","key":"fecha_nac","type":"Fecha","options":[]},{"question":"operador movil","key":"operador_movil","type":"Opciones","options":["Movistar","Claro","Entel","Tuenti","Bitel"]}]
    },
  {
    id: 7,
    name: 'Información General',
    type: 'Vivienda',
    questions: [
      {"question":"V1. Indique el tipo de vivienda","key":"tipo_vivienda","type":"Opciones","options":["Casa propia de 1 piso","Casa propia de 2 pisos","Casa alquilada","Pieza en casa"]},
      {"question":"V2. ¿Cuál es el material predominante las paredes de su vivienda?","key":"tipo_vivienda","type":"Opciones","options":["ladrillo","cemento","madera","material noble","tripley","Otros"]},
      {"question":"V3. ¿Cuál es el material predominante en el piso de su vivienda?","key":"piso_vivienda","type":"Opciones","options":["Losa","cemento","madera","plastico","tripley","Otros"]},
      {"question":"V4. ¿Cuántos animales domesticos poseen en el hogar?","key":"piso_vivienda","type":"Valor","options":[]}
    ]
  },
  {
    id: 8,
    name: 'Educación',
    type: 'Residente',
    questions: [
      {"question":"ED1. ¿Sabe leer y escribir?","key":"lee_escribe","type":"Opciones","options":["Sí","No"]},
      {"question":"ED2. ¿Asiste actualmente a algún establecimiento educacional?","key":"asiste_educa","type":"Opciones","options":["Sí","No"]},
      {"question":"ED3. Indique el Curso y Tipo de estudio actual (para los que están estudiando) o el último curso aprobado (para los que no están estudiando)","key":"edu_nivel","type":"Opciones","options":["primaria","secundaria","tecnica","universitaria","Otros","Sin Nivel"]},
      {"question":"ED4. ¿Qué tipo de administración posee la insitución?","key":"tipo_centroedu","type":"Opciones","options":["Institución estatal","Institución privada","Otros"]}
    ]
  },
  {
    id: 9,
    name: 'Empleo',
    type: 'Residente',
    questions: [
      {"question":"EM1. La semana pasada, ¿trabajó al menos una hora sin considerar los quehaceres de su hogar?:","key":"em_trab_sem_pasada","type":"Opciones","options":["Sí","No"]},
      {"question":"EM2. ¿Está en búsqueda de trabajo remunerado?:","key":"em_enbusca","type":"Opciones","options":["Sí","No"]},
      {"question":"EM3. ¿Por qué no buscó trabajo?:","key":"em_nobusca_razon","type":"Opciones","options":["Ya conseguí trabajo, recien comenzará.","No tiene con quién dejar a los hjos.","No tiene con quién dejar a adultos mayores.","Quehaceres del hogar.","Un familiar se opone.","Ofrecen sueldos muy bajos."]},
      {"question":"EM4. ¿Cuántas semanas buscó o ha estado buscando trabajo?","key":"em_busca_sem","type":"Valor","options":[]},
      {"question":"EM5. ¿Cuál es su ocupación u oficio actual o qué hace usted en su trabajo principal?","key":"em_ocupacion","type":"Opciones","options":["Abogado","Albañil","Carpintero","Electricista","Otros"]},
      {"question":"EM6. En su empleo actual, usted trabaja como:","key":"em_tipo","type":"Opciones","options":["Empleador","Trabajador independiente","Empleado sector público","Patrón en campo","Peón en campo","PNP o FF.AA.","Otros"]},
      {"question":"EM7. En su empleo actual. ¿tiene contrato de trabajo?:","key":"em_contrato","type":"Opciones","options":["Si","No","No sabe"]},
      {"question":"EM8. En su empleo actual, su relación contractual es de tipo:","key":"em_contrato_tipo","type":"Opciones","options":["Plazo indefinido","Plazo fijo","Por obra, faena o servicio","Transitorio"]}
    ]
  }
  ]
}
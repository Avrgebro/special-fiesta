<template>
  <div>
    <span>{{ data.formname}}</span>
    <el-form>
      <ul>
        <li v-for="(question, index) in data.questions" v-bind:key="index">
          <el-form-item :label="(index+1) + '. ' + question.question">
            <el-input v-if="question.type == 'Valor'" v-model="formans[index].answer" type="number" style="width: 150px"></el-input>
            <el-date-picker
              v-if="question.type == 'Fecha'"
              v-model="formans[index].answer"
              type="date"
              placeholder="Seleccione fecha">
            </el-date-picker>
            <el-radio-group v-if="question.type == 'Opciones'" v-model="formans[index].answer">
              <el-radio
                v-for="(option, index) in question.options"
                v-bind:key="index"
                :label="option">{{ option }}</el-radio>
            </el-radio-group>
          </el-form-item>
        </li>
      </ul>
    </el-form>
    
  </div>
</template>
<script>
/************************************************************************
 *Aqui ira una lista de preguntas, cada pregunta puede ser de 3 tipos:  *
 *Valor -> input numerico                                               *
 *Fecha -> DatePicker                                                   *
 *Opciones -> radio group                                               *
 ************************************************************************/
import Forms from '@/data/forms'
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    },
    mode: {
      type: String,
      required: true,
      default: 'view',
      validator: function (value) {
        return ['view', 'answer'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      formans: []
    }
  },
  mounted() {
    // console.log('holas')
    // this.formans.push('hola')
    for(var i = 0; i < this.data.questions.length; i++){
      var value = this.data.questions[i].type == 'Opciones'? this.data.questions[i].options[0] : ''
      //console.log(value)
      var obj = {
        question: this.data.questions[i].question,
        answer: value
      }
      this.formans.push(obj)
    }
  },
  methods: {

  }
  
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>


<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ expectedData, actualData } = {}) {
      this.chart.setOption({
          title: {
              text: 'Consumo de agua anual por mes'
          },
          tooltip : {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  label: {
                      backgroundColor: '#6a7985'
                  }
              }
          },
          legend: {
              data: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis : [
              {
                  type : 'category',
                  boundaryGap : false,
                  data : ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'2015',
                  type:'line',
                  stack: '总量',
                  areaStyle: {},
                  data:[230, 210, 132, 101, 120, 132, 101, 134, 90, 134, 90, 230]
              },
              {
                  name:'2016',
                  type:'line',
                  stack: '总量',
                  areaStyle: {},
                  data:[234, 290, 330, 310, 220, 182, 191, 182, 191, 234, 290, 330]
              },
              {
                  name:'2017',
                  type:'line',
                  stack: '总量',
                  areaStyle: {},
                  data:[330, 410, 232, 150, 232, 201, 154, 190, 201, 154, 190, 330]
              },
              {
                  name:'2018',
                  type:'line',
                  stack: '总量',
                  areaStyle: {normal: {}},
                  data:[390, 330, 320, 332, 320, 332, 301, 334, 301, 334, 390, 330]
              },
              {
                  name:'2019',
                  type:'line',
                  stack: '总量',
                  areaStyle: {normal: {}},
                  data:[1290, 1330, 1320, 932, 820, 932, 901, 934, 901, 934, 1290, 1330]
              }
          ]
      },)
    }
  }
}
</script>

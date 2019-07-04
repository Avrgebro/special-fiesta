<template>
  <div class="dashboard-container">
    <div class="dashboard-text">Bienvenido {{ name }}</div>
    <el-container>
      <el-row :gutter="10">
        <el-col :span="12">
          <el-card :shadow="never">
            <div slot="header" class="clearfix">
              <span>{{ data.title.text }}</span>
            </div>
            <v-chart :options="data"></v-chart>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-row>
            <el-card>
              <div slot="header" class="clearfix">
                <span>{{ data2.title.text }}</span>
              </div>
              <v-chart :options="data2"></v-chart>
            </el-card>
          </el-row>
        </el-col>
      </el-row>
      
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data () {
    return {
      data: {
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
              data:['Hola','联盟广告','视频广告','直接访问','搜索引擎']
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
                  data:[120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230]
              },
              {
                  name:'2016',
                  type:'line',
                  stack: '总量',
                  areaStyle: {},
                  data:[220, 182, 191, 234, 290, 330, 310, 182, 191, 234, 290, 330]
              },
              {
                  name:'2017',
                  type:'line',
                  stack: '总量',
                  areaStyle: {},
                  data:[150, 232, 201, 154, 190, 330, 410, 232, 201, 154, 190, 330]
              },
              {
                  name:'2018',
                  type:'line',
                  stack: '总量',
                  areaStyle: {normal: {}},
                  data:[320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330]
              },
              {
                  name:'2019',
                  type:'line',
                  stack: '总量',
                  areaStyle: {normal: {}},
                  data:[820, 932, 901, 934, 1290, 1330, 1320, 932, 901, 934, 1290, 1330]
              }
          ]
      },
      data2: {
        title: {
          text: 'Distribucion de edades'
        },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'Distribucion de edades',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:28, name:'<5'},
                {value:51, name:'[5,12['},
                {value:35, name:'[12,18['},
                {value:38, name:'[18,25['},
                {value:127, name:'[25,60['},
                {value:27, name:'>60'}
            ]
        }
    ]
}
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

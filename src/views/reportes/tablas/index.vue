<template>
  <div class="app-container">
    <el-aside>
      <el-menu>
        <span>Columnas</span>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-d-arrow-right"></i>
            <span>Columnas tipo 1</span>
          </template>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-d-arrow-right"></i>
            <span>Columnas tipo 2</span>
          </template>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-d-arrow-right"></i>
            <span>Columnas tipo 3</span>
          </template>
        </el-submenu>

        <span>Filtros</span>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-d-arrow-right"></i>
            <span>Filtros</span>
          </template>
        </el-submenu>

      </el-menu>


    </el-aside>

    <el-main>

    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>


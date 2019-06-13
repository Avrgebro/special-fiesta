<template>
  <div>
    <md-table v-model="family_members" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Nombres">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Apellidos">{{ item.lastName }}</md-table-cell>
        <md-table-cell md-label="Edad">{{ item.age }}</md-table-cell>
        <md-table-cell md-label="Educación">{{ item.education }}</md-table-cell>
        <md-table-cell md-label="Editar">
          <md-button class="md-raised md-primary md-icon-button">
            <md-icon>edit</md-icon>
          </md-button>
          <md-button class="md-raised md-primary md-icon-button">
            <md-icon>delete</md-icon>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      family_members: [
        {
          name: "Jean Piere",
          lastName: "Sullón Monteza",
          age: "24",
          education: "Magister en todo"
        },
        {
          name: "Alfredo",
          lastName: "Baez Rojas",
          age: "23",
          education: "Se hace lo que se puede"
        },
        {
          name: "Jose Alonso",
          lastName: "Bejarano Carranza",
          age: "24",
          education: "Gaaaa"
        },
        {
          name: "Francisco",
          lastName: "Fabián",
          age: "23",
          education: "Doctor en el amor"
        }
      ]
    };
  }
};
</script>

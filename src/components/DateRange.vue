<script setup lang="ts">

import {ref} from 'vue'

let dateRange = ref<string[]>([])

interface Formulario  {
  data:{
    dateRange:  string[];
  }
}

const mostrarFechas = ($form: Formulario) =>{
    dateRange.value = $form.data.dateRange
}

</script>

<template>
    <h2>Date Range</h2>
    <Vueform>
      <DatesElement
        name="dateRange"
        label="Date range"
        mode="range"
      />
      <ButtonElement
        name="submit"
        button-label="Submit"
        @click="mostrarFechas"
      />
    </Vueform>

    <p v-if="dateRange.length > 0">
      Las fechas seleccionadas son el <strong>{{ dateRange[0] }}</strong> y el <strong>{{ dateRange[1] }}</strong>
    </p>
  </template>

  <style scoped>
  p{
    text-align: center;
  }
</style>
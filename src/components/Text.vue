<template>
  <h2>Texto</h2>
  <div class="container">
    <Vueform>
      <TextElement  
      :loading="loading"
      name="nombre" 
      label="Info" 
      info="Introduce un texto"   
      info-position="top" />
      <ButtonElement 
      name="primaryButton" 
      button-label="Button" 
      :loading="loading"
      @click="mostrarTexto" />
    </Vueform>
  </div>

  <div v-if="nombre !== '' && typeof nombre === 'string'">
    <p>El texto introducido es: <strong>{{ nombre }}</strong></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const nombre = ref<string>('')
const loading = ref(false)

interface Formulario {
  data: {
    nombre: string
  }
}

const mostrarTexto = ($form: Formulario) => {

  setTimeout(() => {
    nombre.value = $form.data.nombre
    loading.value = false
}, 3000);
loading.value = true

}
</script>

<style scoped>
p {
  text-align: center;
}
</style>

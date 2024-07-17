<script setup lang="ts">
import { ref } from 'vue'

interface FormData {
  signature: Blob;
}

//Blob = Binary Large Object
let imagen = ref<Blob | undefined>(undefined)
let imagenUrl = ref<string | undefined>(undefined)

const mostrarSignatura = ($form: { data: FormData }) => {
  console.log($form.data.signature);
  imagen.value = $form.data.signature;
  console.log(`Que hay en imagen= ${imagen.value}`);

  // Obtener URL para poder visualizar la imagen
  if (imagen.value) {
    imagenUrl.value = URL.createObjectURL(imagen.value);
  }
}
</script>


<template>
  <Vueform>
    <SignatureElement 
    name="signature" 
    label="Signature" />

    <ButtonElement 
    name="primaryButton" 
    button-label="Mostrar" 
    @click="mostrarSignatura" />
  </Vueform>
  <div v-if="imagenUrl" class="contenedor-imagen">
    <img :src="imagenUrl" alt="Signature Image" class="imagen" />
  </div>
</template>


<style scoped>
.contenedor-imagen {
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 90%;
  max-width: 600px;
  margin: 20px auto;
  height: auto;
}

.imagen {
  max-width: 100%;
  max-height: 300px;
  height: auto;
  width: auto;
  display: block;
  margin: auto;
}
</style>

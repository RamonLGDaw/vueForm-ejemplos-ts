<script setup lang="ts">
import { ref } from 'vue';

interface Formulario {
  data: {
    image: File;
  };
}

const nombreImage = ref<string>('');
const imageUrl = ref<string>('');

const mostrarImage = ($form: Formulario) => {
  const file: File = $form.data.image;
  nombreImage.value = file.name;
  console.log(`El nombre de la imagen es: ${nombreImage.value}`);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    if (typeof reader.result === 'string') {
      imageUrl.value = reader.result;
    }
  };
};
</script>

<template>
  <h2>Image Upload</h2>
  <p class="aviso">**El botón 'Upload' no está funcional actualmente, utilizar 'Submit' para mostrar la imagen.</p>
  <Vueform>
    <FileElement
      :upload-temp-endpoint="false"
      name="image"
      label="Image"
      accept="image/*"
      view="image"
      :auto="false"
      drop
      :rules="[
        'mimetypes:image/jpeg,image/png,image/gif,image/webp,image/svg+xml,image/tiff',
      ]"
    />
    <ButtonElement
      name="submit"
      button-label="Submit"
      @click="mostrarImage"
    />
  </Vueform>
  
  <div v-if="imageUrl">
    <p>Nombre de la imagen: <strong>{{ nombreImage }}</strong></p>
    <img :src="imageUrl" alt="Selected Image" style="max-width: 100%; height: auto;">
  </div>
</template>

<style scoped>
.aviso {
  color: blue;
}
</style>

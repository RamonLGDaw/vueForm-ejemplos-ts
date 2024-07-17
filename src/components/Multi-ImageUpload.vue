<script setup lang="ts">
import { ref } from 'vue';

const nombreImagenes = ref<string[]>([]);
const imagenesUrl = ref<string[]>([]);

const mostrarImagenes = ($form: any) => {
  const files: File[] = $form.data.multiImage;

  nombreImagenes.value = [];
  imagenesUrl.value = [];

  files.forEach((file: File) => {
    nombreImagenes.value.push(file.name);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        imagenesUrl.value.push(reader.result.toString());
      }
    };
  });
};
</script>


<template>
    <h2>Multi Image Upload</h2>
  
    <Vueform>
      <MultifileElement
        :upload-temp-endpoint="false"
        name="multiImage"
        label="Multi-image"
        view="image"
        drop
        accept="image/*"
        :file="{
          rules: [
            'mimetypes:image/jpeg,image/png,image/gif,image/webp,image/svg+xml,image/tiff',
          ],
        }"
      />
      <ButtonElement
        type="submit"
        name="submit"
        button-label="Submit"
        @click="mostrarImagenes"
      />
    </Vueform>
    
    <div v-if="imagenesUrl.length > 0">
      <h3>Imágenes seleccionadas:</h3>
      <div class="image-grid">
        <div v-for="(nombre, index) in nombreImagenes" :key="index" class="image-item">
          <img :src="imagenesUrl[index]" :alt="`Imagen ${index + 1}`" class="uploaded-image">
          <p>{{ nombre }}</p>
        </div>
      </div>
    </div>
  </template>
  

  <style scoped>
  .image-grid {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }
  
  .image-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
  
  .uploaded-image {
    max-width: 100%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 8px;
  }
  </style>
  
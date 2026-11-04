<template>
  <CabecalhoPagina />
  <div class="formuario">
    <FormularioOpcoes />
  </div>
</template>

<script>
import CabecalhoPagina from "./CabecalhoPagina.vue";
import FormularioOpcoes from "./FormularioOpcoes.vue";

export default {
  name: "TelaInicial",
  components: {
    CabecalhoPagina,
    FormularioOpcoes,
  },
};
</script>

<style scoped>
.formuario {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

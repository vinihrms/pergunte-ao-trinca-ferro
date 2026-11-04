<template>
  <CabecalhoPagina />
  <div class="formuario">
    <FormularioOpcoes @consultar="$emit('consultar', $event)" />
  </div>
</template>

<script>
import CabecalhoPagina from "./CabecalhoPagina.vue";
import FormularioOpcoes from "./FormularioOpcoes.vue";

export default {
  name: "TelaInicial",
  emits: ["consultar"],
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

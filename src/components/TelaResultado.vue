<template>
  <CabecalhoPagina />
  <ResultadosGerados
    :a="a"
    :b="b"
    :res="res"
    @consultar-novamente="$emit('consultar-novamente')"
  />
</template>

<script>
import CabecalhoPagina from "./CabecalhoPagina.vue";
import ResultadosGerados from "./ResultadosGerados.vue";

export default {
  name: "TelaResultado",
  props: {
    a: {
      type: String,
      required: true,
    },
    b: {
      type: String,
      required: true,
    },
    res: {
      type: String,
      required: true,
    },
  },
  emits: ["consultar-novamente"],
  components: {
    CabecalhoPagina,
    ResultadosGerados,
  },
};
</script>

<style scoped></style>

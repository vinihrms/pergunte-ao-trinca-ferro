<template>
  <form class="form-opcoes" @submit.prevent="consultar">
    <div class="mb-3">
      <label for="opcao1" class="form-label">Opção 1</label>
      <input type="name" v-model="a" class="form-control" id="opcao1" required/>
    </div>
    <span class="versus">vs</span>
    <div class="mb-3">
      <label for="opcao2" class="form-label">Opção 2</label>
      <input type="name" v-model="b" class="form-control" id="opcao2" required />
    </div>
    <button type="submit" class="btn btn-success">Consultar</button>
  </form>
</template>

<script>
export default {
  name: "FormularioOpcoes",

  emits: ["consultar"],

  data() {
    return {
      a: "",
      b: "",
    };
  },

  methods: {
    consultar() {
      this.$emit("consultar", {
        a: this.a.trim(),
        b: this.b.trim(),
      });
    },
  },
};
</script>

<style scoped>
.form-opcoes {
  display: grid;
  grid-template-columns: minmax(0, 220px) auto minmax(0, 220px);
  align-items: flex-end;
  gap: 1rem;
  width: fit-content;
  max-width: 100%;
}

.form-opcoes .mb-3 {
  width: 220px;
  margin-bottom: 0 !important;
}

.form-opcoes button {
  grid-column: 1 / -1;
  width: 100%;
}

.versus {
  font-weight: bold;
  align-self: center;
}
</style>

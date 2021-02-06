<template>
  <label>
    <p>{{ label }}</p>
    <input type="tel" v-model="internalModel" :placeholder="placeholder" />
  </label>
</template>
<script>
export default {
  name: 'InternationalPhoneInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      internalModel: this.value,
    };
  },
  watch: {
    internalModel(newValue) {
      this.$emit('input', newValue);
    },
  },
};
</script>

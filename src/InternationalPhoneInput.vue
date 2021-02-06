<template>
  <label>
    <p>{{ label }}</p>
    <input type="tel" v-model="internalModel" :placeholder="placeholder" />
  </label>
</template>
<script>
import { AsYouType } from 'libphonenumber-js';

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
  computed: {
    internalModel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', new AsYouType().input(value));
      },
    },
  },
};
</script>

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
    modelValue: {
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
  emits: ['update:modelValue'],
  computed: {
    internalModel: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', new AsYouType().input(value));
      },
    },
  },
};
</script>

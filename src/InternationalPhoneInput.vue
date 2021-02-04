<template>
  <label>
    <p>{{ label }}</p>
    <input
  /></label>
</template>
<script>
export default {
  name: 'InternationalPhoneInput',
  props: {
    label: {
      type: String,
      default: 'phone',
    },
  },
};
</script>

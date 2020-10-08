<template>
  <label>
    <p>{{ label }}</p>
    <input
  /></label>
</template>
<script>
export default {
  name: 'PhoneInput',
  props: {
    label: {
      type: String,
      default: 'phone',
    },
  },
};
</script>

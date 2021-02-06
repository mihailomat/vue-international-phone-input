<template>
  <div id="app">
    <InternationalPhoneInput
      label="Phone number"
      v-model="phoneNumber"
      placeholder="enter phone number"
    />
    <p>Phone number: {{ phoneNumber }}</p>
  </div>
</template>

<script lang="ts">
import InternationalPhoneInput from './InternationalPhoneInput.vue';
export default {
  components: {
    InternationalPhoneInput,
  },
  data: () => ({
    phoneNumber: '',
  }),
};
</script>

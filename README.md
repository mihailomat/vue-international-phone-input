# vue-international-phone-input

A Vue component for entering and validating international telephone numbers.

## Usage

Install the dependency by using yarn

`yarn add vue-international-phone-input`

or npm

`npm i --save vue-international-phone-input`

Import the component similar to this example using composition API:

```vue
<template>
  <div>
    <InternationalPhoneInput
      v-model="phoneNumber"
      label="Phone number"
      placeholder="Enter phone number"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import InternationalPhoneInput from 'vue-international-phone-input';

  const phoneNumber = ref('');
</script>
```

## API

### Props

| Props       | Type   | Required | Default |
| ----------- | ------ | -------- | ------- |
| value       | String | false    | ''      |
| label       | String | false    | ''      |
| placeholder | String | false    | ''      |

### Events

| Event | Return                                           |
| ----- | ------------------------------------------------ |
| input | emit new value when it is entered in phone input |

## Contributing

After checking out the code make sure you install all the dependencies by running

```bash
yarn
```

To run a local dev server with hot-reloads do

```bash
yarn serve
```

## License

This project is licensed under [MITLicense](http://en.wikipedia.org/wiki/MIT_License)

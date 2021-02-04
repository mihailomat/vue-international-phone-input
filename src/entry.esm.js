import phoneInput from '@/PhoneInput.vue';
export { phoneInput };

export default /*#__PURE__*/ (() => {
  const installable = phoneInput;

  installable.install = (Vue) => {
    Vue.component('VuePhoneInput', installable);
  };
  return installable;
})();

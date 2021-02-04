import phoneInput from '@/InternationalPhoneInput.vue';
export { phoneInput };

export default /*#__PURE__*/ (() => {
  const installable = phoneInput;

  installable.install = (Vue) => {
    Vue.component('InternationalPhoneInput', installable);
  };
  return installable;
})();

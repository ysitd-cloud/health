import ErrorCard from './ErrorCard.vue';

export default {
  data: () => ({ error: null }),
  errorCaptured(err, vm, info) {
    this.error = `${err.stack}\n\nfound in ${info} of component`;
    return false;
  },
  render(h) {
    if (this.error) {
      return h(ErrorCard, { error: this.error });
    }
    // ignoring edge cases for the sake of demonstration
    return this.$slots.default[0];
  },
};

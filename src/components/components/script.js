import Service from './Service.vue';

export default {
  components: {
    Service,
  },
  data() {
    return {
      services: {
        account: 'Account Service',
        status: 'Status Service',
      },
    };
  },
};

import axios from 'axios';

const UNKNOWN = 'Unknown';
const HEALTHY = 'Healthy';
const ERROR = 'Error';
const WARNING = 'Warning';

const classes = {
  [UNKNOWN]: '',
  [HEALTHY]: 'green',
  [ERROR]: 'red',
  [WARNING]: 'amber',
};

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      fetching: false,
      data: null,
    };
  },
  computed: {
    health() {
      return this.data === null ? 0 : this.data.available.total;
    },
    total() {
      return this.data === null ? 0 : this.data.total;
    },
    status() {
      if (this.data === null) {
        return UNKNOWN;
      }

      if (this.health === 0 && this.total > 0) {
        return ERROR;
      }

      return this.total > this.health ? WARNING : HEALTHY;
    },
    statusClass() {
      return `${classes[this.status]}--text`;
    },
    endpoint() {
      return `https://status.ysitd.cloud/components/${this.service}`;
    },
  },
  methods: {
    fetchData() {
      this.fetching = true;
      axios.get(this.endpoint)
        .then(({ data }) => {
          this.data = data;
          this.fetching = false;
        })
        .catch((e) => {
          throw e;
        });
    },
  },
  mounted() {
    this.fetchData();
  },
};

import axios from 'axios';
import PieChart from '../../charts/PieCharts.vue';

const HEALTH_URL = 'https://status.ysitd.cloud/cdn/health';

const COLORS = [
  '#9C27B0',
  '#FFEB3B',
  '#03A9F4',
  '#FFC107',
  '#673AB7',
  '#FF9800',
  '#00BCD4',
  '#F44336',
  '#009688',
  '#FF5722',
  '#3F51B5',
  '#795548',
  '#4CAF50',
  '#E91E63',
  '#8BC34A',
  '#2196F3',
  '#CDDC39',
];

export default {
  components: {
    PieChart,
  },
  data() {
    return {
      requests: null,
      initial: false,
      fetching: false,
      vsColor: ['#4CAF50', '#F44336'],
      colors: COLORS,
    };
  },
  computed: {
    cacheData() {
      return this.requests === null ? [] : [this.requests.cached, this.requests.uncached];
    },
    sslData() {
      return this.requests === null ? [] : [
        this.requests.ssl.encrypted,
        this.requests.ssl.unencrypted,
      ];
    },
    contentTypeData() {
      return this.requests === null ? [] : Object.values(this.requests.content_type);
    },
    contentTypeLabels() {
      return this.requests === null ? [] : Object.keys(this.requests.content_type);
    },
    countryData() {
      return this.requests === null ? [] : Object.values(this.requests.country);
    },
    countryLabels() {
      return this.requests === null ? [] : Object.keys(this.requests.country);
    },
  },
  methods: {
    fetchData() {
      this.fetching = true;
      return axios.get(HEALTH_URL)
        .then(({ data }) => {
          this.requests = data.requests;
          this.fetching = false;
        });
    },
    refreshData() {
      window.gtag('event', 'refresh', {
        event_label: 'cdn',
        event_category: 'refresh',
      });
      this.fetchData();
    },
  },
  mounted() {
    this.fetchData()
      .then(() => { this.initial = true; });
  },
};

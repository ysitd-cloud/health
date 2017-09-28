import axios from 'axios';
import moment from 'moment';
import PieChart from '../charts/PieCharts.vue';

const HEALTH_URL = 'https://status.ysitd.cloud/traffic/health';

const COLORS = [];

COLORS[2] = ['#4CAF50', '#66BB6A', '#81C784', '#43A047', '#388E3C', '#00C853', '#00E676', '#69F0AE'];
COLORS[3] = ['#3F51B5', '#5C6BC0', '#7986CB', '#3949AB', '#303F9F', '#283593', '#304FFE', '#3D5AFE'];
COLORS[4] = ['#FF9800', '#FFA726', '#FFB74D', '#FB8C00', '#F57C00', '#FF6D00', '#FF9100', '#FFAB40'];
COLORS[5] = ['#F44336', '#EF5350', '#E53935', '#D32F2F', '#C62828', '#B71C1C', '#FF1744', '#D50000'];

export default {
  components: {
    PieChart,
  },
  data() {
    return {
      fetching: true,
      statusCode: null,
      timeout: null,
      uptime: null,
      response: null
    };
  },
  filters: {
    duration(content) {
      return Math.round(moment.duration(content, 'seconds').as('hours') * 100) / 100;
    },
    ms(content) {
      return Math.round(moment.duration(content, 'seconds').as('milliseconds') * 100) / 100;
    },
  },
  computed: {
    datasets() {
      return this.statusCode === null ? [] : Object.values(this.statusCode);
    },
    labels() {
      return this.statusCode === null ? [] : Object.keys(this.statusCode);
    },
    colors() {
      const idx = [0, 0, 0, 0, 0, 0];
      return this.labels.map((status) => {
        const statusCode = parseInt(status, 10);
        const index = Math.floor(statusCode / 100);
        const color = COLORS[index][idx[index]];
        idx[index] += 1;
        return color;
      });
    },
  },
  methods: {
    fetchData() {
      axios.get(HEALTH_URL)
        .then(({ data }) => {
          this.statusCode = data.total_status_code_count;
          this.uptime = data.uptime_sec;
          this.response = data.average_response_time_sec;
          this.fetching = false;
        });
      this.timeout = setTimeout(() => this.fetchData(), 5000);
    },
    cleanUp() {
      if (this.timeout !== null) {
        clearTimeout(this.timeout);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
  beforeDestroy() {
    this.cleanUp();
  },
};

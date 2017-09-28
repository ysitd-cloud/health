import Chart from 'chart.js';

export default {
  props: {
    width: {
      type: String,
      default: '500px',
    },
    height: {
      type: String,
      default: '500px',
    },
    labels: {
      type: Array,
      required: true,
    },
    datasets: {
      type: Array,
      required: true,
    },
    colors: {
      type: Array,
    },
    title: {
      type: String,
    },
    titlePosition: {
      type: String,
      default: 'top',
    },
  },
  watch: {
    datasets() {
      this.updateChart();
    },
    colors() {
      this.updateChart();
    },
    labels() {
      this.updateChart();
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  computed: {
    style() {
      return {
        height: this.height,
        width: this.width,
      };
    },
  },
  methods: {
    updateChart() {
      this.chart.data.labels = this.labels;
      this.chart.data.datasets = [{ data: this.datasets, backgroundColor: this.colors }];
      this.chart.update({ duration: 0 });
    },
    createChart() {
      this.chart = new Chart(this.$refs.canvas, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: this.datasets,
            backgroundColor: this.colors,
          }],
          labels: this.labels,
        },
        options: {
          title: {
            display: !!this.title,
            text: this.title,
            position: this.titlePosition,
          },
        },
      });
    },
    destroyChart() {
      if (this.chart !== null) {
        this.chart.destroy();
      }
      this.chart = null;
    },
  },
  mounted() {
    this.createChart();
  },
  beforeDestroy() {
    this.destroyChart();
  },
};

export default {
  data() {
    return {
      packs: [
        {
          name: 'Starter',
          levels: ['18stka'],

      selectedPack: null,
    };
  },
  methods: {
    openPack(pack) {
      this.selectedPack = pack;
    },
    backToPacks() {
      this.selectedPack = null;
    },
  },
  render() {
    return Vue.h(

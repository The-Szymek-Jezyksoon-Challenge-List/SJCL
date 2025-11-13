export default {
  data() {
    return {
      packs: [
        {
          name: 'Starter Pack',
          levels: ['Level 1', 'Level 2', 'Level 3'],
        },
        {
          name: 'Advanced Pack',
          levels: ['Level 4', 'Level 5', 'Level 6'],
        },
        {
          name: 'Challenge Pack',
          levels: ['Level 7', 'Level 8'],
        },
      ],
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

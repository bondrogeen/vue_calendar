<template>
  <div class="home">
    <div class="home__inner">
      <Calendar :events="events" @add="add" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Calendar: () => import('@/components/calendar'),
  },
  data: () => ({
    events: [],
    type: ['info', 'warning', 'error'],
  }),
  mounted() {
    const data = this.$moment().clone();
    this.events = [
      { id: 1, name: 'Event 1', type: this.random(), date: data },
      { id: 2, name: 'Event 2', type: this.random(), date: data },
      { id: 3, name: 'Event 3', type: this.random(), date: data },
      { id: 4, name: 'Event 4', type: this.random(), date: data.clone().add(3, 'day') },
      { id: 5, name: 'Event 5', type: this.random(), date: data.clone().add(3, 'day') },
      { id: 6, name: 'Event 6', type: this.random(), date: data.clone().add(6, 'day') },
      { id: 8, name: 'Event 7', type: this.random(), date: data.clone().add(16, 'day') },
      { id: 9, name: 'Event 7', type: this.random(), date: data.clone().add(19, 'day') },
      { id: 10, name: 'Event 7', type: this.random(), date: data.clone().add(35, 'day') },
    ];
  },
  methods: {
    random() {
      return this.type[Math.floor(Math.random() * this.type.length)];
    },
    add() {
      const data = this.$moment().clone();
      const maxId = Math.max(...this.events.map(item => item.id)) + 1;
      this.events.push({ id: maxId, name: 'Event ' + maxId, type: this.random(), date: data.clone().add(maxId - 10, 'day') });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0 0 0;
  // align-items: center;
  background-color: #f5f5f5;
  &__inner {
    width: 800px;
    padding: 20px;
  }
}
</style>

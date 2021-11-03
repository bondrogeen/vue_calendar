<template>
  <div :class="['cell', ...allClass]" @click="click">
    <div class="cell__day">{{ number }}</div>
    <div class="cell__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cell',
  props: {
    day: Object,
    active: Boolean,
    date: Object,
  },
  computed: {
    allClass() {
      return [
        { 'cell--weekends': this.isWeekends && this.isMonth && !this.isBefore },
        { 'cell--now': this.isNow },
        { 'cell--month': this.isMonth && !this.isBefore },
        { 'cell--active': this.active },
      ];
    },
    now() {
      return this.$moment().clone();
    },
    isWeekends() {
      return [6, 0].includes(this.day.day());
    },
    isNow() {
      return this.day.isSame(this.now, 'day');
    },
    isMonth() {
      return this.day.isSame(this.date, 'month');
    },
    isBefore() {
      return this.day.isBefore(this.now, 'day');
    },
    number() {
      return this.day.format('D');
    },
  },
  methods: {
    click() {
      this.$emit('select', this.day);
    },
  },
};
</script>

<style lang="scss" scoped>
.cell {
  height: 90px;
  width: 100%;
  background-color: #f5f5f5;
  color: #b7b4b4;
  border-radius: 5px;
  border: 1px solid #fff;
  transition: all 0.1s ease-in;
  z-index: 1;
  &--month {
    color: #434141;
    background-color: #fff;
  }
  &--weekends {
    .cell__day {
      color: #7676f4;
    }
  }
  &--active {
    border: 1px solid #08e200;
  }
  &--now {
    background-color: #fff;
    border: 1px solid #8080808c;
    .cell__day {
      color: #08e200;
    }
  }
  &__day {
    text-align: end;
    padding: 0 5px 0 0;
    font-weight: bold;
  }
  &__body {
    padding: 0 5px;
    width: 100px;
    position: relative;
  }
  &:hover {
    z-index: 2;
  }
}
</style>
<template>
  <div class="badge">
    <span :class="['badge__title', `badge__title--${type}`]">{{ `${dateString} ${name} ${type}` }}</span>
  </div>
</template>

<script>
export default {
  name: 'badge',
  props: {
    id: Number,
    type: String,
    name: String,
    date: Object,
  },
  computed: {
    dateString() {
      return `${this.date.format('H:MM')}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.badge {
  font-size: 14px;
  margin: 0 0 3px 0;
  width: 100%;
  position: relative;
  line-height: 16px;
  &__title {
    border-radius: 5px;
    padding: 0 3px;
    display: block;
    width: 90px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    &:hover {
      display: inline;
    }
    &--info {
      background-color: #eef5f1;
      color: #97bb9f;
    }
    &--error {
      background-color: #fceced;
      color: #c1868c;
    }
    &--warning {
      background-color: #faead0;
      color: #d2ae81;
    }
  }
}
</style>
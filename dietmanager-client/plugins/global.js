import Vue from 'vue'

Vue.mixin({
  methods: {
    getCurrency(value = 0) {
      return `$${value.toFixed(2)}`
    },
    getDaysRange(days) {
      if (days.length === 1) {
        return this.$moment()
          .day(days[0])
          .format('dddd')
      } else if (days.length > 1) {
        return `${this.$moment()
          .day(days[0])
          .format('dddd')} - ${this.$moment()
          .day(days[days.length - 1])
          .format('dddd')}`
      } else {
        return '-'
      }
    }
  }
})

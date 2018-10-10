<template>
    <p>Double Counter is: {{ doubleCounter }}</p>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      doubleCounter: 'counter/doubleCounter',
    }),
    // you can mix the getters into computed with object spread operator
    // ...mapGetters([
    //   'doubleCounter',
    //   // ...
    // ])
    // if you want to use different name
    // ...mapGetters({
    //   // map `this.counter` to `this.$store.getters.doubleCounter`
    //     counter: 'doubleCounter'
    // })
  },
}
</script>

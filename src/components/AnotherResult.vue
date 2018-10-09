<template>
    <p>Double Counter is: {{ doubleCounter }}</p>
</template>

<script>
export default {
  computed: {
    doubleCounter () {
      return this.$store.getters.doubleCounter
    },
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

<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
export default {
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    },
    // example use mapMutations
    // ...mapMutations([
    //   'increment', // map `this.increment()` to `this.$store.commit('increment')`

    // `mapMutations` also supports payloads:
    //   'incrementBy' // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
    // ]),
    // use different name
    // ...mapMutations({
    //   add: 'increment' // map `this.add()` to `this.$store.commit('increment')`
    // })
  },
}
</script>

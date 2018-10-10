<template>
    <div>
      <div>
        <span>Sync</span>
        <br>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>   
      </div>
      <hr>
       <div>
        <span>Async</span>
        <br>
        <button class="btn btn-primary" @click="asyncIncrement">Async Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement">Async Decrement</button>
       </div>

    </div>
</template>

<script>
export default {
  methods: {
    increment () {
      this.$store.dispatch('increment')
    },
    decrement () {
      this.$store.dispatch('decrement')
    },
    asyncIncrement () {
      this.$store.dispatch('asyncIncrement')
    },
    asyncDecrement () {
      this.$store.dispatch('asyncDecrement')
    },
    // ...mapActions([
    //   'increment', // map `this.increment()` to `this.$store.dispatch('increment')`

    //   // `mapActions` also supports payloads:
    //   'incrementBy' // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
    // ]),
    // ...mapActions({
    //   add: 'increment' // map `this.add()` to `this.$store.dispatch('increment')`
    // })
  },
}
</script>

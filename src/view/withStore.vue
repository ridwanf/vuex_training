<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex With Store</h1>
        <app-result></app-result>
        <hr>
        <app-another-result></app-another-result>        
        <hr>
        <app-counter></app-counter>
    </div>
</div>
</template>

<script>
import Result from '../components/ResultStore.vue'
import AnotherResult from '../components/AnotherResult.vue'
import Counter from '../components/CounterStore.vue'

export default {
  components: {
    appResult: Result,
    appCounter: Counter,
    appAnotherResult: AnotherResult,
  },
}
</script>

<style>

</style>

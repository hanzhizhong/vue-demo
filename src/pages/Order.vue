<template>
  <div class="order">
    <v-header></v-header>
  </div>
</template>

<script>
export default {
    methods:{
        getParams(){
            console.log(this.$route.name);
        }
    },
    mounted() {
        this.getParams()
    }
};
</script>

<style>
</style>
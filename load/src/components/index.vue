<template>
  <div class="hello">
    
  </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
        name:"index",
        data(){
            return {
              
            }
        },
        computed:{
            ...mapState([
                "navData",
                "articleData"
            ])
        },
        cretaed(){
            if(!this.navData){
              this.$router.push({path:"/loading"})
            }
        }
    }
</script>


<style scoped>
    
</style>

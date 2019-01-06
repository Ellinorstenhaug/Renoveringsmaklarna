<template>
     <div>
          
     </div>
</template>

<script>
export default {
    props: ['count'],
    methods : {
         updateValue: function (count) {
              console.log("HEEEEJ");
               this.$emit('a', count);
         }
    }
}
</script>

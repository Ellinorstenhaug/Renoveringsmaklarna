<template>
     <div>
          
     </div>
</template>

<script>
export default {
    props: ['count'],
    methods : {
         updateValue: function (count) {
               this.$emit('a', count);
         }
    }
}
</script>

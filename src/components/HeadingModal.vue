<template>
    <div>
        <h1>{{computedHeading}}</h1>
    </div>
</template>
<script>
export default {
    props: ['title'],
    computed: {
        computedHeading:function (){
        if (this.title != null) {
            return this.title;
        }
        return "Tjänst saknas";
        }
    }

}
</script>

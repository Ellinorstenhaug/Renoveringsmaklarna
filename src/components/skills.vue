<template>
  <div class="hello">
    <!-- {{ name }}

  {{ btnState ? 'The button is disabled' : 'The button is active' }}

  <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button> -->
    <div class="container">
      <div class="holder">
        <form @submit.prevent="addSkill">
          <input type="text" placeholder="Enter a skill you have.." v-model="skill" v-validate="'min:5'" name="skill" >
          {{skill}}
        <p class="alert" v-if="errors.has('skill')">{{errors.first('skill')}}</p>
          <!-- <input type="checkbox" id="checkbox" v-model="checked"> -->
        </form>
        <ul>
          <li v-for="(data, index) in skills" :key="index">{{data.skill}}</li>
        </ul>

        <!-- <p v-if="skills.length >= 1">You have more than 1 skill!</p>
        <p v-else>You have less than or equql to 1 skill.</> -->

        <!-- <div v-bind:class="{ alert: !showAlert, 'another-class': !showClass }"></div> -->
        <!-- <div v-bind:class="alertObject"></div> -->
        <!-- <div v-bind:style=" {backgroundColor: bgColor, width: bgwidth, height: bgHeight}"></div> -->
      </div>

      <p>These are the skills that you possess</p>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Skills',
    data() {
      return {
        skill: '',
        skills: [{
          // checked:false,
            "skill": "Vue.js"
          },
          {
            "skill": "Frontend Developer"
          }
        ],
        // bgColor: 'yellow',
        // bgWidth: '100%',
        // bgHeight: '30px',
        // alertObject: {
        //   alert: true, 
        // }


        // showAlert: true, 
        // showClass: true
      }
    },
    methods: {
      addSkill() {
        this.skills.push({skill: this.skill});
        this.skill ="";
        // console.log(`This checkbox value is ${this.checked}`);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style src="./skills.css" scoped>-->
<style scoped>
  .alert {

background-color:#fdf2ce;
/* width: 100%; */
    height: 20px;
    margin-top:-1px;
    /* display:inline-block; */
    padding:5px;
  }

  .another-class {
    border: 5px solid black;
  }

  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align: center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
</style>
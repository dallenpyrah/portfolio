<template>
  <div class="container-fluid bg-success hover-background-left desktop">
    <div class="row justify-content-between">
      <h1 class="ml-4 text-light">
        Hello <span class="text-dark text-name">.</span>
      </h1>
    </div>
    <div class="row justify-content-center margin-name">
      <div class="col-12 text-right">
        <h1 class="text-light text-name-dallen">
          I am
        </h1>
      </div>
    </div>
  </div>
  <div class="container-fluid bg-white hover-background-right desktop">
    <div class="row justify-content-center margin-name-dallen">
      <div class="col-12 text-left">
        <h1 class="text-dark text-name-dallen">
          Dallen <span class="text-dark text-name">.</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import 'animate.css'
import 'aos/dist/aos.css'
import { reactive } from 'vue'
AOS.init()
export default {
  name: 'Desktop',
  setup() {
    const state = reactive({

    })
    return {
      state
    }
  }
}
</script>

<style scoped>
.text-large{
  font-size: 15rem;
}
.text-name{
  font-size: 5rem;
}
.text-name-dallen{
  font-size: 10rem;
}
.text-description{
  font-size: 6rem;
}
.text-dark{
  color: rgb(43, 43, 43)!important;
}
.margin-name{
  margin-top: 25rem;
}
.margin-name-dallen{
  margin-top: 31.5rem;
}
.hover-background-left:hover .row .text-light{
  color: black!important;
}
.hover-background-left:hover .row .text-light .text-dark{
  color: #00e68e!important;
}
.hover-background-left:hover{
  background-color: rgb(255, 255, 255)!important;
}
.hover-background-left {
  transition: all .25s;
}
.hover-background-right:hover{
  background-color: #00e68e!important;
}
.hover-background-right:hover .row .col-12 .text-dark{
  color: white!important;
}
.hover-background-right{
  transition: all .25s;
}
</style>

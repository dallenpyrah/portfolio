<template>
  <div class="container-fluid bg-success vh-100">
    <div class="row">
      <div class="col-6 hover-background-left height-left">
        <h1 class="ml-five text-light hello animate__animated animate__hinge animate__delay-2s">
          Hello <span class="text-dark text-name">.</span>
        </h1>
        <h1 class="text-light text-right text-name-dallen margin-name animate__animated animate__slideInLeft">
          I am
        </h1>
      </div>
      <div class="col-6 bg-white hover-background-right height-right">
        <h1 class="text-dark text-left text-name-dallen margin-name-dallen animate__animated animate__slideInRight">
          Dallen <span class="text-dark text-name">.</span>
        </h1>
      </div>
    </div>
    <div class="row bg-white vh-100">
      <div class="col-12 text-center">
        <h1 class="mt-5 acctive">
          Second Row
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css'
export default {

}
</script>

<style scoped>
.hello:hover{
  transform: translateY(-10px);
}
.hello{
  transition: all 0.25s;
}
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
  margin-top: 20.5rem;
}
.margin-name-dallen{
  margin-top: 26.5rem;
}
.hover-background-left:hover .text-light{
  color: black!important;
}
.hover-background-left:hover .text-light .text-dark{
  color: #00e68e!important;
}
.hover-background-left:hover{
  background-color: rgb(255, 255, 255)!important;
}
.hover-background-left {
  transition: all .25s;
}
.hover-background-right:hover{
  background-color:#00e68e!important;
}
.hover-background-right:hover .text-dark{
  color:#ffffff!important;
}
.hover-background-right:hover .text-dark .text-dark{
  color:#000000!important;
}
.hover-background-right{
  transition: all .25s;
}
.height-left{
  height: 100vh;
}
.height-right{
  height: 100vh;
}
.ml-five{
  margin-left: 4rem;
}
</style>

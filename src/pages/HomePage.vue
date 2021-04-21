<template>
  <div class="container-fluid bg-white">
    <div class="row justify-content-center mt-3">
      <div class="col-6 text-center mt-5">
        <h3 class="line-padding-title">
          <span class="text-success">Hello</span> there I'm Dallen.
        </h3>
      </div>
    </div>
    <div class="row justify-content-center mt-2">
      <div class="col-9 text-center p-2">
        <h6 class="text-secondary line-padding">
          I'm a <span class="text-dark"><a>software developer</a></span> with a passion for building <span class="text-success">futuristic</span> driven applications.
          I enjoy learning about the <span class="text-dark">concepts</span> of <span class="text-success">design</span> with an <span class="text-dark">appreciation</span> for the <span class="text-success">arts.</span>
          In my free time you can find me spending time <span class="text-dark">outside</span> enjoying all that <span class="text-success">life</span> has to offer.
        </h6>
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <div class="col-9 text-center">
        <h4>
          This is my tech stack.<h5>
          </h5>
        </h4>
      </div>
    </div>
    <div class="row m-2 justify-content-around mt-4">
      <div class="col-3 mt-4">
        <h6 class="text-center text-dark mt-2">
          .DOTNET
        </h6>
      </div>
      <div class="col-6 mt-2">
        <div class="card rounded bg-success text-center">
          <h6 class="text-light mt-2">
            Vue.js
          </h6>
        </div>
      </div>
      <div class="col-3 mt-4">
        <h6 class="text-center text-dark mt-2">
          SASS
        </h6>
      </div>
    </div>
    <div class="row m-2 justify-content-around mt-1">
      <div class="col-6 mt-2">
        <div class="card rounded bg-dark text-center">
          <h6 class="text-light mt-2">
            C#
          </h6>
        </div>
      </div>
      <div class="col-6 mt-2">
        <div class="card rounded bg-dark text-center">
          <h6 class="text-light mt-2">
            JavaScript E6
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
.line-padding{
  padding: 10px 0 0 0;
  line-height: 25px;
}
.line-padding-title{
  padding: 10px 0 0 0;
  line-height: 45px;
}
.rounded{
  border-radius: 1rem!important;
}
</style>

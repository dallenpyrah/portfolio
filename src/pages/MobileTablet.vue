<template>
  <div class="container-fluid bg-white">
    <div class="row justify-content-center">
      <div class="col-4">
        <img class="img-fluid" src="../assets/img/dallen.jpg" />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6 text-center">
        <h3 class="line-padding-title">
          <span class="text-success">Hello</span> <span class="">there I'm Dallen.</span>
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
          This is my tech <span class="text-success">stack.</span><h5>
          </h5>
        </h4>
      </div>
    </div>
    <div class="row m-2 justify-content-around mt-4">
      <div class="col-3 mt-4">
        <h6 class="text-center text-dark mt-2">
          .NET
        </h6>
      </div>
      <div class="col-6 mt-2">
        <div class="card rounded bg-success text-center">
          <h6 class="text-light shadow-lg mt-2">
            Vue.js
          </h6>
        </div>
      </div>
      <div class="col-3 mt-4">
        <h6 class="text-center text-dark mt-2">
          My Sql
        </h6>
      </div>
    </div>
    <div class="row m-2 justify-content-around mt-1">
      <div class="col-6 mt-2">
        <div class="card rounded bg-dark text-center">
          <h6 class="text-light shadow-lg mt-2">
            C#
          </h6>
        </div>
      </div>
      <div class="col-6 mt-2">
        <div class="card rounded bg-dark shadow-lg text-center">
          <h6 class="text-light mt-2">
            JavaScript E6
          </h6>
        </div>
      </div>
    </div>
    <div class="row m-2 justify-content-around mt-3">
      <div class="col-3">
        <h6 class="text-center text-dark mt-2">
          Node.js
        </h6>
      </div>
      <div class="col-6 mt-3">
        <div class="card rounded bg-success shadow-lg text-center">
          <h6 class="text-light mt-2">
            MongoDb
          </h6>
        </div>
      </div>
      <div class="col-3">
        <h6 class="text-center text-dark mt-2">
          CSS
        </h6>
      </div>
    </div>
    <div class="row justify-content-center">
      <i class="fa fa-arrow-circle-down mt-4" aria-hidden="true"></i>
    </div>
    <div class="bg-dark">
      <div class="row bg-dark justify-content-center mt-5">
        <div class="col-10 mt-3 text-center">
          <h4 data-aos="fade-in" class="text-light mt-3">
            My <span data-aos="fade-right" class="text-success">Portfolio</span>
          </h4>
        </div>
        <div class="col-12 mt-4 text-center">
          <h6 data-aos="slide-up" class="text-light">
            710 <span class="text-success">Personal </span> Maintenance <span class="text-success">Applicaton</span>
          </h6>
        </div>
        <div class="col-11 mt-2">
          <div class="card bg-dark">
            <img data-aos="slide-right" class="img-fluid p-3" src="https://www.digitalguider.com/wp-content/uploads/2020/07/mobile-app-development.png" />
          </div>
        </div>
      </div>
      <div class="row bg-dark justify-content-center">
        <div class="col-12 mt-4 text-center">
          <h6 class="text-light" data-aos="slide-left">
            Bug <span class="text-success" data-aos="ease-in-out-back">Logger</span>
          </h6>
        </div>
        <div class="col-11 mt-2">
          <div class="card bg-dark">
            <img data-aos="slide-left" class="img-fluid p-3" src="https://mly5n1ylek6q.i.optimole.com/YAOBLcw-sc2Up6Sf/w:914/h:810/q:90/https://mobylogix.com/wp-content/uploads/2020/10/Image-1.png" />
          </div>
        </div>
      </div>
      <div class="row bg-dark justify-content-center">
        <div class="col-12 mt-4 text-center">
          <h6 data-aos="fade-in" data-aos-duration="4000" class="text-light">
            K<span class="text-success">ee</span>pr
          </h6>
        </div>
        <div class="col-11 mt-2">
          <div class="card bg-dark">
            <img class="img-fluid p-3" data-aos-duration="4000" data-aos="slide-left" src="https://dm8ix2eh2gsglmbyba2271c4-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/hybrid-apps-mobile.png" />
          </div>
        </div>
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
  name: 'MobileTablet',
  setup() {
    const state = reactive({

    })
    return {
      state
    }
  }
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

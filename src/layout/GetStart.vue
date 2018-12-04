<template >
  <b-container fluid class="container-wrapper">
    <b-row style="width: 80%;" class="mx-auto pb-4 mb-4">
      <b-col>
        <animated-progress-step :steps="steps" :stepCount="stepCounter"/>
      </b-col>
    </b-row>

    <b-container id="form-container">
      <b-row>
        <div class="col-md-8 col-sm-12 mx-auto">
          <b-card style="height: 80vh" id="get-start-form-card" class="mx-auto">
            <b-col class="col-md-7 col-12 mx-auto">
              <h6
                id="form-statement"
                class="mt-2 pt-2"
              >To unlock the potential of your home, we just need to know a little more about your property. It only takes 30 seconds!</h6>
            </b-col>
            <b-form v-if="false" class="col-md-7 col-12 mx-auto" id="get-start-form">
              <b-form-group class="pb-5">
                <label for="property-address">
                  <h3 class="display-4 form-labels">Your property address</h3>
                </label>
                <b-form-input v-model="address" id="property-address"></b-form-input>
              </b-form-group>
              <b-form-group class="pb-5">
                <label for="property-status">
                  <h3 class="display-4 form-labels">Tell us about your property</h3>
                </label>
                <b-form-radio-group
                  id="property-status"
                  v-model="propertyStatus"
                  :options="propertyStatusOptions"
                  stacked
                  class="pb-3"
                ></b-form-radio-group>
              </b-form-group>
              <b-button block @click="checkAddress()">Next</b-button>
            </b-form>
            <b-form v-if="true" class="col-md-7 col-12 mx-auto" id="get-start-form">
              <b-form-group class="pb-5">
                <label for="number-of-bedrooms">
                  <h3 class="display-4 form-labels">Number of bedrooms</h3>
                </label>
                <b-form-radio-group
                  id="btnradios1"
                  buttons
                  v-model="selected"
                  :options="numOfBedroomsOptions"
                  name="radiosBtnDefault"
                />
              </b-form-group>
              <b-form-group class="pb-5">
                <label for="property-status">
                  <h3 class="display-4 form-labels">Tell us about your property</h3>
                </label>
                <b-form-radio-group
                  id="property-status"
                  v-model="propertyStatus"
                  :options="propertyStatusOptions"
                  stacked
                  class="pb-3"
                ></b-form-radio-group>
              </b-form-group>
              <b-button block @click="checkAddress()">Next</b-button>
            </b-form>
          </b-card>
        </div>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
<<<<<<< HEAD
import animatedProgressStep from "@/components/AnimatedProgressStep";

export default {
  components: {
    "animated-progress-step": animatedProgressStep
  },
  data: function() {
    return {
      steps: 3,
      stepCounter: 0,
      address: "",
      numOfBedrooms: 0,
      numOfBedroomsOptions: [
        { text: "Studio", value: "Studio" },
        { text: "1", value: "1" },
        { text: "2", value: "2" },
        { text: "3", value: "3" },
        { text: "4+", value: "4+" }
      ],
      propertyStatus: "I live here",
      propertyStatusOptions: [
        { text: "I live here", value: "I live here" },
        { text: "This is my second home", value: "This is my second home" },
        {
          text: "I have multiple properties",
          value: "I have multiple properties"
        }
      ]
    };
  },
  methods: {
    checkAddress: function() {
      if (true) {
        this.stepCounter += 1;
      }
=======
import location from "@/components/Location.vue";
import detail from "@/components/Detail.vue";
import aboutYou from "@/components/AboutYou.vue";

export default {
  components: {
    "form-location": location,
    "form-detail": detail,
    "form-aboutyou": aboutYou
  },
  data: () => {
    return {
      formData: {
        fromLocation: "",
        fromDetail: "",
        fromAboutYou: ""
      },
      json: ""
    };
  },
  methods: {
    onComplete: function() {
      json = JSON.stringify(formData);
    },
    toLocation: function(value) {
      this.formData.fromLocation = value;
    },
    toDetail: function(value) {
      this.formData.fromDetail = value;
    },
    toAboutYou: function(value) {
      this.formData.fromAboutYou = value;
>>>>>>> f7eb1c6b7bc7e8ad2cd2ec105ed790d29f9c4840
    }
  }
};
</script>
<<<<<<< HEAD

<style scoped>
.container-wrapper {
  margin-top: 70px;
  padding: 0;
  height: 120vh;
}
.container-wrapper::before {
  background: url("/img/bg/1.jpg") no-repeat center center fixed;
  content: "";
  z-index: -1;
  width: 100%;
  height: 120%;
  position: absolute;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(15px);
}

#get-start-form-card {
  position: relative;
}

#form-statement {
  font-size: 0.6em;
  font-weight: 400;
}
.form-labels {
  font-size: 1.6em;
  font-weight: 400;
}

#get-start-form {
  background: #fff;
=======
<style scoped>
.template-wrapper {
  position: relative;
}
#get-start-form-card {
>>>>>>> f7eb1c6b7bc7e8ad2cd2ec105ed790d29f9c4840
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

<<<<<<< HEAD
@media screen and (max-width: 576px) {
  #form-container {
    padding-left: 0;
    padding-right: 0;
  }
=======
.vue-form-wizard .wizard-nav-pills > li > a {
  color: green !important;
>>>>>>> f7eb1c6b7bc7e8ad2cd2ec105ed790d29f9c4840
}
</style>

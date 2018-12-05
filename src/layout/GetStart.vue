<template >
  <b-container fluid class="container-wrapper">
    <b-row style="width: 80%;" class="mx-auto pb-4 mb-4">
      <b-col>
        <animated-progress-step :steps="steps" :stepCount="stepCounter"/>
      </b-col>
    </b-row>

    <b-container id="form-container">
      <b-row>
        <div class="col-lg-7 col-sm-12 mx-auto">
          <b-card id="get-start-form-card" class="mx-auto py-4">
            <b-col class="col-md-10 col-12 mx-auto pb-5">
              <h6
                id="form-statement"
                class="mt-2 pt-2"
              >To unlock the potential of your home, we just need to know a little more about your property. It only takes 30 seconds!</h6>
            </b-col>

            <!-- first form: general property info -->
            <b-form v-if="false" class="col-md-8 col-12 mx-auto" id="get-start-form">
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
              <div class="text-center">
                <b-button class="col-6" @click="checkAddress()">Next</b-button>
              </div>
            </b-form>

            <!-- second form: single property user -->
            <b-form v-if="false" class="col-md-8 col-12 mx-auto" id="get-start-form">
              <b-form-group class="col-10 pb-5 pl-0">
                <label for="number-of-bedrooms">
                  <h3 class="display-4 form-labels">Number of bedrooms</h3>
                </label>
                <b-form-radio-group
                  id="btnradios1"
                  buttons
                  v-model="numOfBedrooms"
                  :options="numOfBedroomsOptions"
                  name="radiosBtnDefault"
                />
              </b-form-group>
              <b-form-group class="pb-5">
                <b-row>
                  <div class="col-6">
                    <label for="available-date">
                      <h3 class="display-4 form-labels">Available from</h3>
                    </label>
                    <b-form-input
                      id="available-date"
                      type="date"
                      min="2018-12-04"
                      v-model="availableDate"
                    ></b-form-input>
                  </div>
                  <div class="col-6">
                    <label for="unavailable-date">
                      <h3 class="display-4 form-labels">To</h3>
                    </label>
                    <b-form-input
                      id="unavailable-date"
                      type="date"
                      :min="availableDate"
                      v-model="unavailableDate"
                    ></b-form-input>
                  </div>
                </b-row>
              </b-form-group>
              <b-form-group class="pb-5">
                <label for="airbnb-link">
                  <h3 class="display-4 form-labels">
                    Airbnb (or similar sites) link
                    <span class="text-muted">Optional</span>
                  </h3>
                </label>
                <b-form-input id="airbnb-link" type="text" v-model="airbnbLink"></b-form-input>
              </b-form-group>
              <div class="text-center">
                <b-button class="col-6" @click="checkAddress()">Next</b-button>
              </div>
            </b-form>

            <!-- third form: user info -->
            <b-form v-if="true" class="col-md-8 col-12 mx-auto" id="get-start-form">
              <b-form-group class="pb-2">
                <label for="first-name">
                  <h3 class="display-4 form-labels">First Name</h3>
                </label>
                <b-form-input type="text" v-model="firstName" id="first-name"></b-form-input>
              </b-form-group>
              <b-form-group class="pb-2">
                <label for="last-name">
                  <h3 class="display-4 form-labels">Last Name</h3>
                </label>
                <b-form-input type="text" v-model="lastName" id="last-name"></b-form-input>
              </b-form-group>
              <b-form-group class="pb-2">
                <label for="phone-number">
                  <h3 class="display-4 form-labels">Phone Number</h3>
                </label>
                <b-form-input type="text" v-model="phoneNumber" id="phone-number"></b-form-input>
              </b-form-group>
              <b-form-group class="pb-2">
                <label for="email">
                  <h3 class="display-4 form-labels">Email</h3>
                </label>
                <b-form-input type="email" v-model="email" id="email"></b-form-input>
              </b-form-group>
              <div class="text-center">
                <b-button class="col-6" @click="checkAddress()">Next</b-button>
              </div>
            </b-form>
          </b-card>
        </div>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
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
      propertyStatusOptions: [
        { text: "I live here", value: "I live here" },
        { text: "This is my second home", value: "This is my second home" },
        {
          text: "I have multiple properties",
          value: "I have multiple properties"
        }
      ],
      propertyStatus: "I live here",
      numOfBedroomsOptions: [
        { text: "Studio", value: "Studio" },
        { text: "1", value: "1" },
        { text: "2", value: "2" },
        { text: "3", value: "3" },
        { text: "4+", value: "4+" }
      ],

      // data for single property
      numOfBedrooms: 0,
      availableDate: "",
      unavailableDate: "",
      airbnbLink: "",

      // data for user
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: ""
    };
  },
  methods: {
    checkAddress: function() {
      if (true) {
        this.stepCounter += 1;
      }
    }
  }
};
</script>

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
  font-size: 1em;
  font-weight: 400;
}
.form-labels {
  font-size: 1.2em;
  font-weight: 400;
  border-bottom: 0 !important;
}

label {
  margin-bottom: 0;
}

#get-start-form {
  background: #fff;
  /* position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%); */
}

@media screen and (max-width: 576px) {
  #form-container {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>

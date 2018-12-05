<template >
  <b-container fluid class="container-wrapper">
    <b-row style="width: 80%;" class="mx-auto pb-4 mb-4">
      <b-col>
        <animated-progress-step :steps="steps" :stepCount="stepCounter"/>
      </b-col>
    </b-row>

    <b-container id="form-container">
      <b-row>
        <div class="col-lg-7 col-sm-12 mx-auto" style="height: 2000px !important;">
          <b-card id="get-start-form-card" class="mx-auto py-4">
            <b-col class="col-md-10 col-12 mx-auto pb-2">
              <h6
                id="form-statement"
                class="mt-2 pt-2"
                v-if="stepCounter === 0"
              >To unlock the potential of your home, we just need to know a little more about your property. It only takes 30 seconds!</h6>
            </b-col>

            <!-- first form: general property info -->
            <b-form v-if="stepCounter === 0" class="col-md-8 col-12 mx-auto" id="get-start-form">
              <b-form-group class="pb-5 pt-4">
                <label for="property-address">
                  <h3 class="display-4 form-labels">Your property address</h3>
                </label>
                <b-form-input v-model="address" id="property-address"></b-form-input>
              </b-form-group>
              <b-form-group class="pb-2">
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
                <b-button variant="secondary" class="col-5" @click="checkAddress()">
                  <span style="font-size: 120%;">Next</span>
                </b-button>
              </div>
            </b-form>

            <!-- form for users with one property-->
            <b-form
              v-if="stepCounter == 1 && propertyStatus === 'I live here'"
              class="col-md-9 col-12 mx-auto"
              id="get-start-form"
            >
              <b-form-group class="col-10 pb-2 pl-0">
                <label for="number-of-bedrooms">
                  <h3 class="display-4 form-labels">Number of bedrooms</h3>
                </label>
                <b-form-radio-group
                  id="btnradios1"
                  buttons
                  v-model="numOfBedrooms"
                  :options="numOfBedroomsOptions"
                  name="radiosBtnOutline"
                  button-variant="outline-secondary"
                />
              </b-form-group>
              <b-form-group class="pb-2">
                <b-row>
                  <div class="col-6">
                    <label for="available-date">
                      <h3 class="display-4 form-labels">Available from</h3>
                    </label>
                    <b-form-input
                      id="available-date"
                      type="date"
                      :min="currentDate"
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
              <b-form-group class="pb-2">
                <label for="airbnb-link">
                  <h3 class="display-4 form-labels">
                    Airbnb (or similar sites) link
                    <span class="text-muted">Optional</span>
                  </h3>
                </label>
                <b-form-input id="airbnb-link" type="text" v-model="airbnbLink"></b-form-input>
              </b-form-group>
              <b-form-group class="pb-2">
                <label for="number-of-property">
                  <h3 class="display-4 form-labels">Number of properties you want to market</h3>
                </label>
                <b-form-input type="number" min="3" :value="numOfProperty" id="number-of-property"></b-form-input>
              </b-form-group>
              <b-row>
                <b-col cols="3" class="mr-auto">
                  <b-button variant="outline-primary" @click="stepCounter-=1">Previous</b-button>
                </b-col>
                <b-col cols="3" class="ml-auto">
                  <b-button variant="secondary" @click="checkAddress()">Next</b-button>
                </b-col>
              </b-row>
            </b-form>

            <!-- for for user with one extra property -->
            <b-form
              v-if="stepCounter == 1 && propertyStatus === 'This is my second home'"
              class="col-md-9 col-12 mx-auto"
              id="get-start-form"
            >
              <b-form-group class="col-10 pb-2 pl-0">
                <label for="number-of-bedrooms">
                  <h3 class="display-4 form-labels">Number of bedrooms</h3>
                </label>
                <b-form-radio-group
                  id="btnradios1"
                  buttons
                  v-model="numOfBedrooms"
                  :options="numOfBedroomsOptions"
                  name="radiosBtnOutline"
                  button-variant="outline-secondary"
                />
              </b-form-group>
              <b-row>
                <b-col cols="3" class="mr-auto">
                  <b-button variant="outline-primary" @click="stepCounter-=1">Previous</b-button>
                </b-col>
                <b-col cols="3" class="ml-auto">
                  <b-button variant="secondary" @click="checkAddress()">Next</b-button>
                </b-col>
              </b-row>
            </b-form>

            <!-- form for owners with multiple properties -->
            <b-form
              v-if="stepCounter == 1 && propertyStatus === 'I have multiple properties'"
              class="col-md-9 col-12 mx-auto"
              id="get-start-form"
            >
              <b-form-group class="pb-2">
                <label for="number-of-property">
                  <h3 class="display-4 form-labels">Number of properties you want to market</h3>
                </label>
                <b-form-input type="number" min="3" v-model="numOfProperty" id="number-of-property"></b-form-input>
              </b-form-group>
              <b-row>
                <b-col cols="3" class="mr-auto">
                  <b-button variant="outline-primary" @click="stepCounter-=1">Previous</b-button>
                </b-col>
                <b-col cols="3" class="ml-auto">
                  <b-button variant="secondary" @click="checkAddress()">Next</b-button>
                </b-col>
              </b-row>
            </b-form>

            <!-- third form: user info -->
            <b-form v-if="stepCounter === 2" class="col-md-8 col-12 mx-auto" id="get-start-form">
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
              <b-row>
                <b-col cols="3" class="mr-auto">
                  <b-button variant="outline-primary" @click="stepCounter-=1">Previous</b-button>
                </b-col>
                <b-col cols="3" class="ml-auto">
                  <b-button variant="secondary" @click="checkAddress()">Submit</b-button>
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </div>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import animatedProgressStep from "@/components/AnimatedProgressStep";
import { getStartFormBus } from "@/main.js";
export default {
  components: {
    "animated-progress-step": animatedProgressStep
  },

  data: function() {
    return {
      steps: 3,
      stepCounter: 0,
      address: "",
      currentDate: "",
      numOfProperty: "",
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
      numOfBedrooms: "Studio",
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
    },
    getCurrentDate: function() {
      let today = new Date();
      let day = today.getDate();
      let month = today.getMonth() + 1;
      let year = today.getFullYear();
      if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }

      this.currentDate = `${year}-${month}-${day}`;
      alert(this.currentDate);
    },
    getAddress: function(str) {
      this.address = str;
      alert(`address updated as ${this.address}`);
    }
  },
  mounted() {
    getStartFormBus.$on("checkForm", propertyAddress => {
      alert(`alert from on ${propertyAddress}`);
      this.getAddress(propertyAddress);
    });
    this.getCurrentDate();
    this.getAddress();
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
  display: flex;
  flex-direction: column;

  max-height: 70vh;
  max-width: 70vh;
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

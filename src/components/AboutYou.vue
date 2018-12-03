<template>
<b-container>
  <!-- <b-form> -->
    <b-form-group id="aboutYou"
    label="First Name"
    label-for="firstName">
      <b-form-input id="firstName"
      type="text"
      v-model="form.firstName"
      v-click-outside="onClickOutside"
      required>
      </b-form-input>
    </b-form-group>
    <b-form-group id="aboutYou"
    label="Last Name"
    label-for="lastName">
      <b-form-input id="lastName"
      type="text"
      v-model="form.lastName"
      v-click-outside="onClickOutside"
      required>
      </b-form-input>
    </b-form-group>
    <b-form-group id="aboutYou"
    label="Phone Number"
    label-for="phoneNumber">
      <b-form-input id="phoneNumber"
      type="text"
      v-model="form.phoneNumber"
      v-click-outside="onClickOutside"
      required>
      </b-form-input>
    </b-form-group>
    <b-form-group id="aboutYou"
    label="Email"
    label-for="email">
      <b-form-input id="email"
      type="email"
      v-model="form.email"
      v-click-outside="onClickOutside"
      required>
      </b-form-input>
    </b-form-group>
  <!-- </b-form> -->
</b-container>
</template>



<script>

import vClickOutside from 'v-click-outside'

export default {
  name: 'form-location',
  data: () => {
    return {
      form: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: ''
      }
    }
  },

  directives: {
      clickOutside: vClickOutside.directive
  },

  methods: {
    // validate() {
    //   return new Promise((resolve, reject) => {
    //     this.$refs.form.validate((valid) => {
    //       this.$emit('on-validate', valid, this.model)
    //       resolve(valid);
    //     });
    //   })
    // },
    onClickOutside: function (event) {
      this.$emit('childToParentAboutYou', this.form);
    }    
  }
}
</script>

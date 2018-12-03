<template>
<b-container>
  <!-- <b-form> -->
    <b-form-group id="addressGroup"
    label="Property Address"
    label-for="address">
      <b-form-input id="address"
      type="text"
      v-model="form.address"
      v-click-outside="onClickOutside"
      required>
      </b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-radio-group id="propertyTypeSelect"
      v-model="form.selected"
      :options="options"
      stacked
      name="radioOptions"
      v-click-outside="onClickOutside">
      </b-form-radio-group>
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
        address: '',
        selected: 'live-here'
      },
      options: [
        { text: 'I live here', value: 'live-here' },
        { text: 'This is my second home', value: 'second-home' },
        { text: 'I have multiple properties', value: 'many-home' }
      ]
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
      this.$emit('childToParentAddress', this.form);
    }    
  }
}
</script>

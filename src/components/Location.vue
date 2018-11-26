<template>
  <b-form>
    <b-form-group id="addressGroup"
    label="Property Address"
    label-for="address">
      <b-form-input id="address"
      type="text"
      v-mode="form.address"
      required
      v-on:keyup="emitLocationToParent">
      </b-form-input>
      <b-form-radio-group id="propertyTypeSelect"
      v-mode="form.selected"
      :options="form.options"
      stacked
      name="radioOptions">
      </b-form-radio-group>
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  name: "form-location",
  metaInfo: {
    title: "loation"
  },
  props: {

  },
  data: () => {
    return {
      form: {
        address: '',
        selected: 'first',
        options: [
          {text: "I live here", value: "live-here"},
          {text: "This is my second home", value: "second-home"},
          {text: "I have multiple properties", value: "many-home"},
        ],
      }
    }
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
    emitLocationToParent(evnet) {
      this.$emit("nextForm", this.form.address);
    }
  }
}
</script>

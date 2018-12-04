<template>
  <b-container>
    <b-row>
      <b-col cols="md-10">
        <b-form-group label="Property Size">
          <b-form-radio-group
            id="propertySize"
            buttons
            v-model="form.bedrooms"
            :options="options"
            v-click-outside="onClickOutside"
            name="bedrooms"
            style="width: 100% !important;"
          ></b-form-radio-group>
        </b-form-group>
        <b-form-group label="Available from">
          <datepicker
            v-model="form.availability.date1"
            :bootstrapStyling="true"
            v-on:selected="chooseDate"
          />
        </b-form-group>
        <b-form-group label="To">
          <datepicker
            v-model="form.availability.date2"
            :bootstrapStyling="true"
            v-on:selected="chooseDate"
          />
        </b-form-group>
        <b-form-group label="Airbnb (or similar sites) link- Optional">
          <b-form-input
            id="airbnb"
            type="text"
            v-model="form.airbnbLink"
            v-click-outside="onClickOutside"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import vClickOutside from "v-click-outside";

import moment from "moment";
import Datepicker from "vuejs-datepicker";
import flatPickr from "vue-flatpickr-component";
var vueColor = require("vue-color");

function isRTL() {
  return (
    document.documentElement.getAttribute("dir") === "rtl" ||
    document.body.getAttribute("dir") === "rtl"
  );
}

export default {
  name: "form-location",
  components: {
    Datepicker,
    flatPickr,
    "chrome-picker": vueColor.Chrome,
    "compact-picker": vueColor.Compact,
    "material-picker": vueColor.Material,
    "sketch-picker": vueColor.Sketch,
    "slider-picker": vueColor.Slider,
    "swatches-picker": vueColor.Swatches,
    "photoshop-picker": vueColor.Photoshop
  },

  data: () => {
    return {
      form: {
        bedrooms: "studio",
        availability: {
          date1: null,
          date2: null
        },
        airbnbLink: ""
      },
      options: [
        { text: "studio", value: "studio" },
        { text: "2 1/2", value: "2 1/2" },
        { text: "3 1/2", value: "3 1/2" },
        { text: "4 1/2", value: "4 1/2" }
      ],
      disabledDates: {
        days: [0] // Disable sunday
      },
      highlightedDates: {
        dates: [
          moment()
            .add(1, "d")
            .toDate(),
          moment()
            .add(2, "d")
            .toDate(),
          moment()
            .add(3, "d")
            .toDate()
        ]
      },

      //
      // Vue Flatpickr Component
      //

      date: null,
      time: null,
      datetime: null,
      full: null,
      range: null,
      inline: null,

      dateConfig: {
        altInput: true,
        animate: !isRTL()
      },

      timeConfig: {
        enableTime: true,
        noCalendar: true,
        altInput: true,
        animate: !isRTL()
      },

      datetimeConfig: {
        enableTime: true,
        altInput: true,
        animate: !isRTL()
      },

      fullConfig: {
        weekNumbers: true,
        enableTime: true,
        mode: "multiple",
        minDate: "today",
        altInput: true,
        animate: !isRTL()
      },

      rangeConfig: {
        mode: "range",
        altInput: true,
        animate: !isRTL()
      },

      inlineConfig: {
        inline: true,
        altInput: true,
        allowInput: false,
        animate: !isRTL()
      },

      //
      // Vue Color
      //

      colors: {
        hex: "#194d33",
        hsl: {
          h: 150,
          s: 0.5,
          l: 0.2,
          a: 1
        },
        hsv: {
          h: 150,
          s: 0.66,
          v: 0.3,
          a: 1
        },
        rgba: {
          r: 25,
          g: 77,
          b: 51,
          a: 1
        },
        a: 1
      }
    };
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
    onClickOutside: function(event) {
      this.$emit("childToParentDetail", this.form);
    },

    chooseDate: function(event) {
      this.$emit("childToParentDetail", this.form);
    }
  }
};
</script>

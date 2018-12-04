<template>
  <b-container fluid class="template-wrapper">
    <b-container style="height: 100vh;">
      <b-card id="get-start-form-card" class="col-md-6 mx-auto">
        <b-form>
          <form-wizard
            @on-complete="onComplete"
            color="blue"
            title="Get Start with Localstay!"
            subtitle="Supercharge your rental income by 30%"
          >
            <tab-content title="Location" icon="fas fa-check">
              <form-location v-on:childToParentAddress="toLocation"/>
            </tab-content>
            <tab-content title="Details" icon="fas fa-check">
              <form-detail v-on:childToParentDetail="toDetail"/>
            </tab-content>
            <tab-content title="About you" icon="fas fa-check">
              <form-aboutyou v-on:childToParentAboutYou="toAboutYou"/>
            </tab-content>
          </form-wizard>
        </b-form>
        <p>Parent: {{json}}</p>
      </b-card>
    </b-container>
  </b-container>
</template>

<script>
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
    }
  }
};
</script>
<style scoped>
.template-wrapper {
  position: relative;
}
#get-start-form-card {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.vue-form-wizard .wizard-nav-pills > li > a {
  color: green !important;
}
</style>

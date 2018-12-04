<template>
  <b-container fluid class="pt-5">
    <div class="progressBar">
      <div class="progress-track"></div>

      <div
        id="step1"
        :class="{'is-complete':stepCount > 0, 'is-active': stepCount == 0, 'progress-step':true}"
      >
        <h4>Location</h4>
      </div>

      <div
        id="step2"
        :class="{'is-complete':stepCount > 1, 'is-active': stepCount == 1, 'progress-step':true}"
      >
        <h4>About your property</h4>
      </div>

      <div
        id="step3"
        :class="{'is-complete':stepCount > 2, 'is-active': stepCount == 2, 'progress-step':true}"
      >
        <h4>About you</h4>
      </div>
    </div>
  </b-container>
</template>
<style scoped>
.progressBar {
  position: relative;
  display: flex;
}

.progress-step {
  position: relative;
  top: 20px;
  width: 100%;
  font-size: 12px;
  text-align: center;
  color: white;
}

.progress-step.is-active {
  color: #2183dd;
}

.progress-step.is-complete {
  color: #009900;
}

.progress-step:last-child::after {
  display: none;
}

.progress-step:before {
  content: "";
  display: flex;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 40px;
  height: 40px;
  background: #fff;
  border: 4px solid#dfe3e4;
  border-radius: 100%;
  font-size: 20px;
}

.progress-step.is-active:before {
  content: "\f004";
  font-family: "Font Awesome 5 Free";
  color: #fff;
  background: red;
  border: 4px solid transparent;
  padding-left: 0.3em;
  font-weight: 900;
  animation: pulse 2s infinite;
}
.progress-step.is-complete:before {
  font-family: "Font Awesome 5 Free";
  content: "\f00c";
  color: #fff;
  background: #009900;
  border: 4px solid transparent;
  padding-left: 0.3em;
  font-weight: 900;
}
.progress-step:after {
  content: "";
  position: absolute;
  top: 15px;
  left: 50%;
  width: 0%;
  transition: width 1s ease-in;
  height: 10px;
  background: #dfe3e4;
  z-index: -1;
}

.progress-step.is-complete:after {
  background: #2183dd;
  animation: nextStep 1s;
  animation-fill-mode: forwards;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(33, 131, 221, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(33, 131, 221, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(33, 221, 158, 0);
  }
}
@keyframes nextStep {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>

<script>
export default {
  props: {
    stepCount: {
      type: Number,
      default: 0
    },
    steps: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {};
  },
  methods: {
    next: function() {
      //   alert(this.stepCount);
      if (this.stepCount === steps - 1) this.stepCount = 0;
      else this.stepCount += 1;
    }
  }
};
</script>


<template>
  <b-container fluid class="pt-5">
    <div class="progressBar">
      <div class="progress-track"></div>

      <div
        id="step1"
        :class="{'is-complete':stepCount > 0, 'is-active': stepCount == 0, 'progress-step':true}"
      >
        <h5>Location</h5>
      </div>

      <div
        id="step2"
        :class="{'is-complete':stepCount > 1, 'is-active': stepCount == 1, 'progress-step':true}"
      >
        <h5>About your property</h5>
      </div>

      <div
        id="step3"
        :class="{'is-complete':stepCount > 2, 'is-active': stepCount == 2, 'progress-step':true}"
      >
        <h5>About you</h5>
      </div>
    </div>
  </b-container>
</template>
<style scoped>
.progressBar {
  position: relative;
  display: flex;
  counter-reset: h5 0;
}

.progress-step {
  position: relative;
  top: 20px;
  width: 100%;
  font-size: 12px;
  text-align: center;
  color: white;
  counter-increment: h5;
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
  width: 30px;
  height: 30px;
  background: #fff;
  border: 4px solid#dfe3e4;
  border-radius: 100%;
  font-size: 15px;
}

.progress-step.is-active:before {
  /* content: "\f004"; */
  content: counter(h5);
  transition: 0.75s;
  font-family: "Font Awesome 5 Free";
  color: #fff;
  background: red;
  border: 4px solid transparent;
  padding-left: 0.4em;
  font-weight: 900;
  animation: pulse 2s infinite;
}
.progress-step.is-complete:before {
  font-family: "Font Awesome 5 Free";
  content: "\f00c";
  color: #fff;
  background: #009900;
  border: 4px solid transparent;
  padding-left: 0.18em;
  padding-top: 0.05em;
  font-weight: 900;
}
.progress-step:after {
  content: "";
  position: absolute;
  top: 13px;
  left: 50%;
  width: 0%;
  transition: width 1s ease-in;
  height: 5px;
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


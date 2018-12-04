<template>
  <div>
    <div class="progress">
      <div class="progress-track"></div>

      <div id="step1" class="progress-step">Step One</div>

      <div id="step2" class="progress-step">Step Two</div>

      <div id="step3" class="progress-step">Step Three</div>

      <div id="step4" class="progress-step">Complete</div>
      <div id="step4" class="progress-step">Complete</div>
    </div>

    <button onClick="next()">Next Step</button>
  </div>
</template>

<script>
let step = "step1";

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");

function next() {
  if (step === "step1") {
    step = "step2";
    step1.classList.remove("is-active");
    step1.classList.add("is-complete");
    step2.classList.add("is-active");
    alert(step);
  } else if (step === "step2") {
    step = "step3";
    step2.classList.remove("is-active");
    step2.classList.add("is-complete");
    step3.classList.add("is-active");
  } else if (step === "step3") {
    step = "step4d";
    step3.classList.remove("is-active");
    step3.classList.add("is-complete");
    step4.classList.add("is-active");
  } else if (step === "step4d") {
    step = "complete";
    step4.classList.remove("is-active");
    step4.classList.add("is-complete");
  } else if (step === "complete") {
    step = "step1";
    step4.classList.remove("is-complete");
    step3.classList.remove("is-complete");
    step2.classList.remove("is-complete");
    step1.classList.remove("is-complete");
    step1.classList.add("is-active");
  }
}
</script>
<style>
.progress {
  position: relative;
  display: flex;
}

.progress-track {
  position: absolute;
  top: 5px;
  width: 100%;
  height: 5px;
  background-color: #dfe3e4;
  z-index: -1;
}

.progress-step {
  position: relative;
  width: 100%;
  font-size: 12px;
  text-align: center;
}

.progress-step:last-child:after {
  display: none;
}

.progress-step::before {
  content: "\f00c";
  display: flex;
  margin: 0 auto;
  margin-bottom: 10px;
  width: 10px;
  height: 10px;
  background: #fff;
  border: 4px solid #dfe3e4;
  border-radius: 100%;
  color: #fff;
}

.progress-step::after {
  content: "";
  position: absolute;
  top: 6px;
  left: 50%;
  width: 0%;
  transition: width 1s ease-in;
  height: 5px;
  background: red;

  z-index: -1;
}

.progress-step.is-active {
  color: #2183dd;
}

.progress-step.is-active::before {
  border: 4px solid #777;
  animation: pulse 2s infinite;
}

.progress-step.is-complete {
  color: #009900;
}

.progress-step.is-complete:before {
  content: "1";
  font-family: FontAwesome;
  font-size: 10px;
  color: #fff;
  background: #009900;
  border: 4px solid transparent;
}

.progress-step.is-complete::after {
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
    box-shadow: 0 0 0 0 rgba(33, 131, 221, 0);
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
// This is a component for promotional purpose
// It is a image overlay component takes properties as:
//       bgImgUrl: strValue --> ie: "url('urlPath')"
//       bgImgHeight strValue --> ie: "70vh"
//       text: strValue
//       text-color: strValue
//       textFooter: strValue
//       textFooterColor: strValue

<template>
  <div class="container-fluid bg-overlay" :style="{background: bgImgUrl, height: bgImgHeight}">
    <div class="row text-left text-container" :style="{maxWidth: textMaxWidth}">
      <p class="display-4 text-element" :style="{color: textColor}">{{text}}</p>
      <footer
        class="blockquote-footer"
        v-if="textFooter"
        :style="{color: textFooterColor}"
      >{{textFooter}}</footer>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bgImgUrl: {
      type: String,
      required: true
    },
    bgImgHeight: {
      type: String,
      default: "70vh"
    },
    text: {
      type: String,
      default: "default text"
    },
    textColor: {
      type: String,
      default: "white"
    },
    textMaxWidth: {
      type: String,
      default: "70vh"
    },
    textFooter: {
      type: String
    },
    textFooterColor: {
      type: String
    }
  },
  data: function() {
    return {};
  }
};
</script>
<style scoped>
.bg-overlay {
  position: relative;
}
.text-container {
  position: absolute;
  bottom: 20px;
  padding: 0 3%;
}
footer {
  font-size: 1.2em;
}

.text-element {
  line-height: 1.1em;
}
@media screen and (max-width: 520px) {
  .text-element {
    font-size: 1.5rem;
    line-height: 1.4em;
    opacity: 0.8;
  }
}
</style>

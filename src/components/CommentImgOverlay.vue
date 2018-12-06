// This is a component for promotional purpose
// It is a image overlay component takes properties as:
//       bgImgUrl: strValue --> ie: "url('urlPath')"
//       bgImgHeight strValue --> ie: "70vh"
//       comment: strValue
//       comment-color: strValue
//       commentFooter: strValue
//       commentFooterColor: strValue

<template>
  <div class="container-fluid bg-overlay" :style="{background: bgImgUrl, height: bgImgHeight}">
    <div class="row comment-left comment-container" :style="{maxWidth: commentMaxWidth}">
      <p class="display-4 comment-element" :style="{color: commentColor}">&quot;{{comment}}&quot;</p>
      <footer
        class="blockquote-footer"
        v-if="commentFooter"
        :style="{color: commentFooterColor}"
      >{{commentFooter}}</footer>
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
    comment: {
      type: String,
      default: "default comment"
    },
    commentColor: {
      type: String,
      default: "white"
    },
    commentMaxWidth: {
      type: String,
      default: "70vh"
    },
    commentFooter: {
      type: String
    },
    commentFooterColor: {
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
.comment-container {
  position: absolute;
  bottom: 10%;
  padding: 0 3%;
}
footer {
  font-size: 1.2em;
}

.comment-element {
  line-height: 1.1em;
}
@media screen and (max-width: 520px) {
  .comment-element {
    font-size: 1.5rem;
    line-height: 1.4em;
    opacity: 0.8;
  }
}
</style>

<template>
    <div class="transition-bubble">
      <span v-show="animating" class="bubble" id="bubble"></span>
    </div>
</template>
<script>
import anime from "animejs";

export default {
  name: "transition-bubble",
  data() {
    return {
      animating: false,
      animeObjs: []
    };
  },
  methods: {
    show(selector = "#bubble", { duration = 800, easing = "linear" } = {}) {
      const base = Math.max(
        document.body.clientHeight,
        document.body.clientWidth
      );
      const scale = base * 2 * 1.4;
      const animeObj = anime({
        targets: selector,
        scale: scale,
        duration: duration,
        easing: easing
      });
      this.animeObjs.push(animeObj);
      return animeObj.finished;
    },
    hide(selector = "#bubble", { duration = 300, easing = "linear" } = {}) {
      const animeObj = anime({
        targets: selector,
        opacity: 0,
        duration: duration,
        easing: easing
      });
      this.animeObjs.push(animeObj);
      return animeObj.finished;
    },
    resetAnimeObjs() {
      this.animeObjs.forEach(animeObj => {
        animeObj.reset();
      });
      this.animeObjs = [];
    },
    animate(action, thenReset) {
      if (!this[action]) {
        return Promise.resolve();
      }
      this.animating = true;
      return this[action]().then(() => {
        if (thenReset) {
          this.animating = false;
          this.resetAnimeObjs();
        }
      });
    }
  }
};
</script>
<style lang="less">
.transition-bubble {
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 99;
}
.bubble {
  position: absolute;
  background: white;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  transform-origin: 50% 50%;
  transform: scale(0);
  display: inline-block;
}
</style>

<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__inner-info">
        <h1 :class="{ typing: isTyping }" class="title">{{ name }}</h1>
        <h3 class="subtitle">Junior Front-end developer</h3>
      </div>
      <div @click="getDown()" class="header__inner-down"></div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      name: "Даниил Бураков",
      isTyping: false,
    };
  },

  mounted() {
    this.animateText();
  },
  methods: {
    getDown() {
      document.getElementById("about").scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
    },
    animate({ draw, duration }) {
      let start = performance.now();
      const that = this;
      requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) {
          that.isTyping = false;
          timeFraction = 1;
        }
        // вычисление текущего состояния анимации
        let progress = that.bounce(timeFraction);
        draw(progress); // отрисовать её

        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        }
      });
    },
    animateText() {
      const text = this.name;
      let to = this.name.length,
        from = 0;
      const that = this;
      this.isTyping = true;
      this.animate({
        duration: 3000,
        draw: function (progress) {
          let result = (to - from) * progress + from;

          that.name = text.substr(0, Math.ceil(result));
        },
      });
    },

    bounce(timeFraction) {
      for (let a = 0, b = 1; ; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return (
            -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
          );
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
%center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
  height: 100vh;
  background: url("../assets/backdrop.jpg") center center;
  background-size: cover;
  background-repeat: no-repeat;
  &__inner {
    @extend %center;

    backdrop-filter: blur(3px) grayscale(0.7);
    height: 100%;
    width: 100%;
    position: relative;
    &-info {
      .title {
        margin-bottom: 15px;
      }
    }
    &-down {
      position: absolute;
      bottom: 20px;

      &::after {
        content: "";
        cursor: pointer;
        display: block;
        width: 20px;
        height: 20px;
        border-right: 1px solid #fff;
        border-bottom: 1px solid #fff;
        transform-origin: center;
        transform: rotate(45deg);
        animation: down 1.5s ease-in-out infinite;
      }
    }
  }
}
.typing {
  position: relative;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: #fff;
    border-radius: 20px;
    animation: typing 0.4s;
    animation-delay: 0.1s;
    animation-iteration-count: infinite;
  }
}
@keyframes typing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes down {
  from {
    transform: translateY(-15px) rotate(45deg);
    opacity: 1;
  }
  to {
    transform: translateY(8px) rotate(45deg);
    opacity: 0;
  }
}
</style>

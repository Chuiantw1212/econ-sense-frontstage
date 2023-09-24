<template>
  <div class="container">
    <div class="row">
      <h1 class="col">Hello.</h1>
    </div>
    <div class="row">
      <h2 class="col">My name is Ian. (朱老闆)</h2>
    </div>
    <br />
    <div class="row">
      <p class="col">
        I am an web developer in Finance industry, and the creator of this
        website.
      </p>
    </div>
    <div class="row">
      <p class="col">
        This website is created for spreading the common knowledge of lifetime
        finance management and full-stack developing.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    MyListItem: () => import('@/components/MyListItem.vue')
  }
}
</script>
<style lang="scss">
.my-social {
  text-align: center;

  i,
  a,
  span {
    color: black;
  }

  .my-social__icon {
    font-size: 44px;
  }
}

.image--full-width {
  width: 100%;
}

.card__background {
  width: 100%;
  height: 225px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.card__background--econsense {
  background-image: url("https://storage.googleapis.com/my-blog-287510.appspot.com/about/econ-sense.png");
}

.card__background--josie {
  background-image: url("https://storage.googleapis.com/my-blog-287510.appspot.com/about/josie.png");
}

.card__background--mbia {
  background-image: url("https://storage.googleapis.com/my-blog-287510.appspot.com/about/mbia.png");
}
</style>

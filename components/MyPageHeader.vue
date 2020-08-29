<template>
  <div class="myPageHeader">
    <div class="header_image" :style="{ backgroundImage: `url(${src})` }"></div>
    <div class="portrait">
      <slot></slot>
      <div class="portrait_nameGroup">
        <h3 class="portraint_name">{{name_zh}}</h3>
        <h3 class="portraint_name">{{name_en}}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    src: String,
    name_zh: String,
    name_en: String
  }
};
</script>
<style lang="scss" scoped>
.myPageHeader {
  position: relative;
  .header_image {
    min-width: 100%;
    height: 315px;
    background-size: cover;
    background-position: center;
    border: 1px solid #d3d6db;
  }
  .portrait {
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 168px;
    @media screen and (min-width: 768px) {
      display: flex;
      margin: 0 1rem;
      width: unset;
    }
    > img {
      border-radius: 50%;
      max-width: 100%;
      border: 5px solid white;
      width: 168px;
      height: 168px;
    }
    .portrait_nameGroup {
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      text-align: center;
      @media screen and (min-width: 768px) {
        padding-bottom: 2rem;
      }
    }
    .portraint_name {
      margin: 0 auto;
      &:first-child {
        margin-top: auto;
      }
    }
  }
}
</style>


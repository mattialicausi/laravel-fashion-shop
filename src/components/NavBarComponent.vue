<template>
  <div class="navbr">
    <div class="navcontent">
      <div class="container">
        <ul class="container">
          <li>
            <a href="">rossetti</a>
            <!-- <div class="dropdownn">
                            <a href="" class="lidropdownn">Brand1</a>
                            <a href="" class="lidropdownn">Brand2</a>
                            <a href="" class="lidropdownn">Brand3</a>
                        </div> -->
          </li>
          <li><a href="">eyeshadow</a></li>
          <li><a href="">bronzer</a></li>
          <li><a href="">blush</a></li>
          <li><a href="">mascara</a></li>
          <li><a href="">fundation</a></li>
          <li><a href="">prodotti</a></li>
          <li><a href="">contattaci</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.navbr {
  position: sticky;
  top: 80px;
  width: 100%;
  height: 50px;
  .navcontent {
    height: 50px;
    background-color: $mainColor;
    box-shadow: 0px 4px 4px $shadow;
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      min-width: 1170px;

      ul {
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        li {
          list-style: none;
          position: relative;
          width: 100%;
          &:hover .dropdownn {
            display: block;
          }
          a {
            display: block;
            text-transform: uppercase;
            text-align: center;
            color: $grey;
            text-decoration: none;
            background-color: $mainColor;
            padding: 13px 22px;
            transition: all 200ms;
            &:hover {
              color: $white;
              text-shadow: 0px 0px 4px $white;
              background-color: $mainColorActive;
            }
          }
          .dropdownn {
            background-color: $mainColorActive;
            position: absolute;
            width: 100%;
            margin: 0;
            padding: 0;
            flex-direction: column;
            align-items: center;
            box-shadow: 0px 4px 4px $shadow;
            transition: all 250ms;
            display: none;
            z-index: 1;
            a {
              display: block;
              background-color: $mainColorActive;
              width: 100%;
              &:hover {
                filter: brightness(1.1);
              }
            }
          }
        }
      }
    }
  }
}
</style>

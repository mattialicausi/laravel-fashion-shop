<template>
  <div class="navbr">
    <div class="navcontent">
      <div class="container">
        <ul class="container">
          <li><router-link :to="{ name: 'rossetti-category' }" active-class="active1">rossetti</router-link></li>
          <li><router-link :to="{ name: 'eyeshadow-category' }" active-class="active1">ombretti</router-link></li>
          <li><router-link :to="{ name: 'bronzer-category' }" active-class="active1">bronzer</router-link></li>
          <li><router-link :to="{ name: 'blush-category' }" active-class="active1">blush</router-link></li>
          <li><router-link :to="{ name: 'mascara-category' }" active-class="active1">mascara</router-link></li>
          <li><router-link :to="{ name: 'fundation-category' }" active-class="active1">fondotinta</router-link></li>
          <li><router-link :to="{ name: 'other' }" active-class="active1">prodotti</router-link></li>
          <li><router-link :to="{ name: 'contactus' }" active-class="active1">contatti</router-link></li>
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
  background-color: $mainColor;
  top: 80px;
  width: 100%;
  height: 80px;
  .navcontent {
    height: 50px;
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

          $col: #972111;
          $borLen: .1em;
          $depth: 20px;
          $modif: calc($borLen + $depth);

          border: solid #0000;
          margin-top: calc($depth / 2);
          border-width: $borLen $borLen $modif $modif;
          background: conic-gradient(at left $depth  bottom $depth, #0000 90deg, rgb(255 255 255 /0.3) 0 225deg,rgb(255 255 255 /0.6) 0) border-box, conic-gradient(at left $modif bottom $modif, #0000 90deg,$col 0) 0 100%/calc(100% - $borLen) calc(100% - $borLen)  border-box;
          transform: translate(calc($depth / -1),$depth);
          clip-path: polygon($depth 0%, $depth 0%, 100% 0%, 100% calc(100% - $depth), 100% calc(100% - $depth),20px calc(100% - $depth));
          transition: 0.5s;
          &:hover{
            transform: translate(0,0);
            clip-path: polygon(0% $depth, $depth 0%, 100% 0%, 100% calc(100% - $depth), calc(100% - $depth) 100%, 0% 100%);
          }
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
            transition: 200ms ease-in-out;
            &:hover {
              color: $white;
              text-shadow: 0px 0px 4px $white;
              // background-color: $mainColorActive;
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

.active1{
  background-color: $mainColorActive !important;
  color: $white !important;
  text-shadow: 0px 0px 4px $white !important;
  transition: 200ms ease-in-out;
  // $col: #972111;
  // $borLen: .1em;
  // $depth: 20px;
  // $modif: calc($borLen + $depth);
  // transform: translate(0,0);
  // clip-path: polygon(0% $depth, $depth 0%, 100% 0%, 100% calc(100% - $depth), calc(100% - $depth) 100%, 0% 100%);
}
</style>

<template>
    <div class="navbr">
        <div class="navcontent">
            <div class="container">
                <ul class="container">
                    <li><a href="">rossetti</a></li>
                    <li><a href="">eyeshadow</a></li>
                    <li><a href="">bronzer</a></li>
                    <li><a href="">blush</a></li>
                    <li><a href="">mascara</a></li>
                    <li><a href="">fundation</a></li>
                    <li><a href="">altri prodotti</a></li>
                    <li><a href="">contattaci</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavBarComponent',
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/main.scss' as *;

.navbr{
    position: sticky;
    top: 80px;
    width: 100%;
    height: 50px;
    .navcontent{
        height: 50px;
        background-color: $mainColor;
        box-shadow: 0px 4px 4px $shadow;
        .container{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            min-width: 1170px;

            ul{
                height: 100%;
                margin: 0;
                padding: 0;
                display: flex;
                align-items: center;
                li{
                    list-style: none;
                    a{
                        display: block;
                        text-transform: uppercase;
                        color: $grey;
                        text-decoration: none;
                        background-color: $mainColor;
                        padding:13px 22px;
                        transition: all 200ms;
                        &:hover{
                            color: $white;
                            text-shadow: 0px 0px 4px $white;
                            background-color: $mainColorActive;
                        }
                    }
                }
            }
        }
    }
}

</style>
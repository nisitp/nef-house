<template>
    <div id="app">
        <!--<div id="toggleSounds" @click.prevent="$soundEffects.toggle()">Toggle Sounds</div>-->
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Barlow:700|Lobster|Rubik:400,400i,700,700i');
    @import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    
    @import "@/styles/utils.scss";

    html, body {
        margin: 0;
        padding: 0;
//        background: black;
    }

    #app {
        font-family: $font-content;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $color-dark-gray;
        font-size: 16px;
        line-height: 1.2em;
        //width: 960px;
        //height: 600px;
        width: 100%;
        height: 100vh;
        @include bp(0,767, width){
	        height: 85vh;
        }
        background-color: #fff;
        // margin: 20px auto;
    }

    #toggleSounds {
        position: absolute;
        z-index: 999;
        cursor: pointer;
        background: white;
        padding: 3px;
        left: 970px;
    }
</style>

<template>
    <div>
    <p>Cookies.set('test', 'value')</p>
    <el-button type="primary" @click="setCookie">SetCookie</el-button>
    <el-button type="primary" @click="rmCookie">RmCookie</el-button>

    <p>Cookies.set('test-exp', 'hello', 1)</p>
    <el-button type="primary" @click="setCookieWithExp">SetCookie</el-button>
    <el-button type="primary" @click="RmCookieWithExp">RmCookie</el-button>

    <p>Cookies.set('name', 'value', { expires: 7, path: '' });</p>
    <el-button type="primary" @click="setCookieWithPath">SetCookieWithPath</el-button>
    <el-button type="primary" @click="rmCookieWithPath">RmCookieWithPath</el-button>
    <el-button type="primary" @click="getCookieWithPath">GetCookieWithPath</el-button>

    <p>var Cookies2 = Cookies.noConflict(); Cookies2.set('name', 'value');</p>
    <el-button type="primary" @click="setCookie2">SetCookie2</el-button>
    <el-button type="primary" @click="rmCookie2">RmCookie2</el-button>
    <el-button type="primary" @click="getCookie2">GetCookie2</el-button>
</div>
</template>


<script>
import Cookies from 'js-cookie'
export default {
    methods:{
        setCookie(){
            Cookies.set("test", 'hello');
        },
        rmCookie(){
            Cookies.remove("test")
        },
        setCookieWithExp(){
            Cookies.set('test-exp', 'hello', {expires: 7});
        },
        RmCookieWithExp(){
            Cookies.remove('test-exp')
        },
        setCookieWithPath(){
            Cookies.set('test-Path',{hello:'hll'})
        },
        rmCookieWithPath(){
            Cookies.remove('test-Path')
        },
        getCookieWithPath(){
            console.log(Cookies.getJSON('test-Path'))
        },
        setCookie2(){
            var Cookies2 = Cookies.noConflict();
            Cookies2.set("cookies2","cookies2")
        },
        rmCookie2(){
            Cookies.remove('test-Path')
        },
        getCookie2(){
            console.log(Cookies.get('test-Path'))
        }
    }
}
</script>


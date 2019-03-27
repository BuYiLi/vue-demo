<template>
<div>
    <p>this.$cookie.set('test', 'hello cookie')</p>
    <el-button type="primary" @click="setCookie">SetCookie</el-button>
    <el-button type="primary" @click="delCookie">DelCookie</el-button>

    <p>this.$cookie.set('test-exp', 'hello', 1)</p>
    <el-button type="primary" @click="setCookieWithExp">SetCookie</el-button>
    <el-button type="primary" @click="DelCookieWithExp">DelCookie</el-button>

    <p>this.$cookie.set('test-domain', 'hello', {domain: 'localhost'}</p>
    <el-button type="primary" @click="setCookieWithDomain">SetCookieWithDomain</el-button>
    <el-button type="primary" @click="delCookieWithDomain">DelCookieWithDomain</el-button>
    <el-button type="primary" @click="getCookieWithDomain">GetCookieWithDomain</el-button>
</div>
</template>

<script>
export default {
    methods:{
        setCookie(){
            this.$cookie.set("test", 'hello');
        },
        delCookie(){
            this.$cookie.delete("test")
        },
        setCookieWithExp(){
            this.$cookie.set('test-exp', 'hello', 1);
        },
        DelCookieWithExp(){
            this.$cookie.delete('test-exp')
        },
        setCookieWithDomain(){
            this.$cookie.set('test-domain',{hello:'hll'},{domain:'127.0.0.1'})
        },
        delCookieWithDomain(){
            this.$cookie.delete('test-domain')
        },
        getCookieWithDomain(){
            console.log(this.$cookie.get('test-domain'))
        }
    }
}
</script>

<template>
    <div class="ds">
        <Row :gutter="16">
            <i-col :span="6" v-for="item in shops" :key="item.name">
                <div class="grid" @click="$emit('aa',item.name)">
                    <p>
                    <img :src="`http://192.168.2.250:7729/shoplogo/${item.pic}`"/>
                    </p>
                    {{item.name}}
                </div>
            </i-col>
        </Row>
    </div>
</template>

<script>
import axiosstance from '../../http/axiosstance.js';
export default {
    data () {
        return {
            shops: []
        };
    },
    created () {
        axiosstance.get('shops').then(data => {
            this.shops = data.data.shops;
        });
    }
};
</script>

<style lang="less" scoped>
.grid{
    border: 1px solid #eeeeee;
    margin-bottom: 10px;
    height: 100px;
    text-align: center;
    position: relative;
    line-height: 30px;
}
.ds{
    width: 400px;
    height: 200px;
    padding: 10px;
    overflow-y:scroll;
}
img{
   max-width: 80%;
   max-height: 80%;
   position: absolute;
   top: 50%;
   left:50%;
   transform: translate(-50%,-50%)
}
.grid:hover{
    border: 1px solid gold;
}
</style>

<template>
    <div>
        <Row>
            <i-col>
                <p class="back" @click="$emit('clearshop')">
                     <Icon type= 'ios-arrow-back'/> 重新选择电商
                </p>
            </i-col>
        </Row>
        <Row>
           <i-col :span="24">
                <p class="sheng" v-for="item in chuxianguodesheng" :key="item" @click="keyword=item">{{item}}</p>
           </i-col>
        </Row>
        <Row>
           <i-col >
               <Input v-model="keyword"/>
           </i-col>
        </Row>
        <Row>
           <i-col :span="24">
               <div class="llist">
                   <div class="tiao" v-for="item in filtearr" :key="item.name" @click="$emit('change',{
                       'name': item.name,
                        'tel': item.tel,
                   })" >
                   {{item.name}}
               </div>
               </div>
           </i-col>
        </Row>
    </div>
</template>

<script>
import axiosstance from '../../http/axiosstance.js';
export default {
    props: ['shop'],
    created () {
        axiosstance.get('storehouse?shop=' + this.shop).then(data => {
            this.storehouse = data.data.storehouse;
            const allSheng = ['北京市', '天津市', '上海市', '重庆市', '河北省', '山西省', '辽宁省', '吉林省', '黑龙江省', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '海南省', '四川省', '贵州省', '云南省', '陕西省', '甘肃省', '青海省', '台湾', '内蒙古自治区', '广西壮族自治区', '西藏自治区', '宁夏回族自治区', '新疆维吾尔自治区', '香港特别行政区', '澳门特别行政区'];
            // 在你的storehouse里面出现过的省份名字
            let chuxianguodesheng = [];
            allSheng.forEach(item => {
                for (let j = 0; j < this.storehouse.length; j++) {
                    if (this.storehouse[j].name.includes(item)) {
                        chuxianguodesheng.push(item);
                        return;
                    }
                }
            });
            this.chuxianguodesheng = chuxianguodesheng;
        });
    },
    data () {
        return {
            chuxianguodesheng: [],
            storehouse: [],
            keyword: ''
        };
    },
    computed: {
        filtearr () {
            return this.storehouse.filter(item => (new RegExp(this.keyword, 'g')).test(item.name));
        }
    }
};
</script>

<style lang="less" scoped>
.llist{
    height: 200px;
    overflow-y: scroll;
}
.tiao{
    width: 200px;
    line-height: 24px;
    cursor: pointer;
}
.tiao:hover{
    background: rgb(26, 211, 218);
}
.sheng{
    float: left;
    margin-right: 10px;
    font-size: 8px;
    color: rgb(60, 137, 236);
    cursor: pointer;
}
.back{
    margin-bottom: 10px;
    cursor: pointer;
    color: red;
}
</style>

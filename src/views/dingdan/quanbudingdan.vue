<template>
    <div @click="isshow=false"  class="box">
        <h1>全部订单</h1>
        <Row>
            <i-col :span="4">
                <b>选择电商和仓库</b>
            </i-col>
            <i-col :span="18">
                <Dropdown trigger="custom" :visible="isshow" placement="bottom-start">
                    <Button type="success" @click.stop="isshow=true">
                       {{!canku.name ? '点击选择' : shop + ' / ' + canku.name}}
                    </Button>
                    <div slot="list" class="list" @click.stop="">
                        <Dianshang v-if="isshow && !shop" @aa="shop=$event" />
                        <cangku v-if="isshow && shop" :shop="shop" @change="change($event)"  @clearshop="shop='';canku={}" />
                    </div>
            </Dropdown>
            </i-col>
        </Row>
        <Row class="haha">
            <i-col :span="4">
                <b>增加货物</b>
            </i-col>
            <i-col :span="20">
                <Button type="primary" @click="isshowmo=true">点击增加</Button>
            </i-col>
        </Row>
        <Modal v-model="isshowmo" title="增加货物">
            <modalinn v-if="isshowmo"/>
        </Modal>
    </div>
</template>

<script>
import Dianshang from './Dianshang.vue';
import cangku from './cangku.vue';
import modalinn from './modalinn.vue';
export default {
    components: {
        Dianshang,
        cangku,
        modalinn
    },
    data () {
        return {
            shop: '',
            canku: {},
            isshow: false,
            isshowmo: false
        };
    },
    methods: {
        change (obj) {
            this.isshow = false;
            this.canku = obj;
        }
    }
};
</script>

<style lang="less" scoped>
b{
    font-size: 16px;
}
.list{
    width: 400px;
    height: 200px;
}
.box{
    width: 800px;
    height: 600px;
}
.haha{
    margin-top: 10px;
}
</style>

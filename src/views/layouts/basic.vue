<template>
     <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="index" @on-select="han">
                    <div class="layout-logo">
                        加油吧少年
                    </div>
                    <div class="layout-nav">
                        <MenuItem v-for="(item,index) in arr" :key="index" :name='item.name'>
                        {{item.c}}
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                       <router-view></router-view>
                    </Content>
        </Layout>
    </div>
</template>

<script>
export default {
    data () {
        return {
            arr: [
                {
                    'name': 'index',
                    'c': '首页'
                },
                {
                    'name': 'dingdan',
                    'c': '订单'
                },
                {
                    'name': 'wuliu',
                    'c': '物流'
                }
            ]
        };
    },
    methods: {
        han (name) {
            this.$router.push({
                name: name
            });
        }
    }
};
</script>

<style lang="less" scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #2461da4b;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.ivu-menu-dark{
    background:purple;
}
.ivu-layout-header{
    background:purple;
}

</style>

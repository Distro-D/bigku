<template>
     <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-nav">
                        <MenuItem name="1" v-for="(item,index) in arr" :key="index">
                           <router-link to="dingdan">{{item.c}}</router-link>
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
                    mame: 'basic',
                    c: '首页'
                },
                {
                    mame: 'dingdan',
                    c: '订单'
                },
                {
                    mame: 'wuliu',
                    c: '物流'
                }
            ]
        };
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

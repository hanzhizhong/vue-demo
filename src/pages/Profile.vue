<template>
  <div class="profile">
      <v-header></v-header>
      <div class="container">
            <div class="profile-info">
                <a href="#">
                    <div class="profile-avatar"><i class="fa fa-user-circle-o"></i><!-- <img src="" alt=""> --></div>
                    <div class="profile-login-info">
                        <h3>登录/注册</h3><p><i class="fa fa-mobile"></i>&nbsp;暂无绑定手机号</p>
                    </div>
                    
                    <i class="fa fa-chevron-right"></i> 
                </a>
            </div>
            <ul class="profile-holder">
                <li>
                    <a href="#">
                        <span class="pro-orange">0.00</span>元<br>
                        我的余额
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="pro-red">0</span>个<br>
                        我的余额
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="pro-green">0</span>分<br>
                        我的余额
                    </a>
                </li>
            </ul>
        <div class="profile-list">
                <van-cell-group>
                    <van-cell class="profile-list-icon" title="我的订单" is-link>
                        <template slot="icon">
                            <span><i class="iconfont icon-dingdan"></i></span>
                        </template>
                    </van-cell>
                    <van-cell class="profile-list-icon" title="积分商城" is-link>
                        <template slot="icon">
                            <span><i class="iconfont icon-ziyuan"></i></span>
                        </template>
                    </van-cell>
                    <van-cell class="profile-list-icon" title="饿了么会员卡" is-link>
                        <template slot="icon">
                            <span><i class="iconfont icon-tubiao-"></i></span>
                        </template>
                    </van-cell>
                </van-cell-group>
                <van-cell-group>
                    <van-cell class="profile-list-icon" title="服务中心" is-link>
                        <template slot="icon">
                            <span><i class="iconfont icon-fuwuzhongxin"></i></span>
                        </template>
                    </van-cell>
                    <van-cell class="profile-list-icon" title="下载饿了么APP" is-link>
                        <template slot="icon">
                            <span><i class="iconfont icon-xiazai"></i></span>
                        </template>
                    </van-cell>

                </van-cell-group>
        </div>
      </div>
  </div>
</template>

<script>
import {Cell,CellGroup,Icon} from 'vant'
export default {
    components:{
        [Cell.name]:Cell,
        [CellGroup.name]:CellGroup,
        [Icon.name]:Icon
    }
}
</script>

<style scoped>
    .profile-info{
        background-color:darkcyan;
    }
    .profile-info a{
        display:block;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        padding:1rem 0.5rem;
        font-size:0.7rem;
        align-items:center;
        color:#fff;
    }
    .profile-avatar{
        font-size:2.8rem;
        line-height:2.8rem;
        width:2.8rem;
        height:2.8rem;
        color:#fff;
    }
    .profile-login-info{
        flex-grow:2;
        margin-left:0.5rem;
    }
    .profile-login-info h3{
        font-size:0.9rem;
    }
    .profile-login-info i{
        font-size:0.8rem;
    }
    .profile-holder{
        display:flex;
        width:100%;
        background-color:#fff;
        font-size:0.7rem;
        height:4.2rem;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
        border-bottom:1px solid #dadada;
        box-sizing:border-box;
    }
    .profile-holder li{
        width:33.3%;
        text-align:center;
        border-right:1px solid #dadada;
        box-sizing:border-box;
    }
    .profile-holder li:nth-child(3n){
        border-right:none;
    }
    .profile-holder li a{
        color:#666666;
    }
    .profile-holder li span{
        font-size:1.2rem;
        font-weight: bold;
    }
    .pro-orange{
        color:orange;
    }
    .pro-red{
        color:red;
    }
    .pro-green{
        color:green;
    }
    
    .van-cell-group{
        margin-top:0.5rem;
        box-sizing:border-box;
        border-top:1px solid #dadada;
        border-bottom:1px solid #dadada;
    }
    .profile-list-icon span i{
        color:red;
        margin-right:0.4rem;
    }
</style>
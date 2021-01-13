<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">小码哥商城</div>
    </nav-bar>

    <user-info class="user-info"/>

    <section class="account">
      <div class="account-item">
        <div>
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div>
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div>
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>

    <list-view class="order-list" :list-data="orderList"/>
    <list-view class="service-list" :list-data="serviceList"></list-view>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import UserInfo from "./childrenComps/UserInfo";
  import ListView from "./childrenComps/ListView";
  export default {
    name: "Profile",
    components: {
      NavBar,
      UserInfo,
      ListView
    },
    data: function () {
      return {
        orderList: [
          {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
          {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
          {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
        ],
        serviceList: [
          {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
          {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
        ]
      }
    }
  }
</script>

<style scoped>
  #profile {
    background-color: #f2f2f2;
  }

  .nav-bar {
    background: var(--color-tint);
    color: white;
    font-weight: bold;
  }

  .account {
    display: flex;
  }

  .account-item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
    color: #666;
    padding: 18px;
    font-size: 13px;
  }

  .account-item:last-of-type {
    margin-right: 0;
  }

  .balance {
    font-size: 24px;
    font-weight: bold;
    color: #ff5f3e;
  }

  .account-info {
    margin-top: 6px;
  }

  .order-list, .service-list {
    margin-top: 12px;
  }
</style>

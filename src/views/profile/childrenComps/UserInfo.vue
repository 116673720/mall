<template>
  <div class="user-info">
    <a href="#">
      <slot name="user-icon">
        <svg class="privateImage-svg">
          <use xlink:href="#avatar-default" class="test"></use>
        </svg>
      </slot>
      <div class="login-info">
        <slot name="user-nickname">
          <div class="register">登录/注册</div>
        </slot>
        <div class="phone">
          <svg class="icon-mobile">
            <use xlink:href="#mobile"/>
          </svg>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <svg class="arrow-svg">
        <use xlink:href="#arrow-right"/>
      </svg>
    </a>
  </div>
</template>

<script>
  export default {
    name: "UserInfo"
  }
</script>

<style scoped>
  .user-info {
    margin-top: -5px;
  }

  .user-info a {
    position: relative;
    display: flex;
    padding: 15px;
    background: var(--color-tint);
    align-items: center;
  }

  .privateImage-svg {
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 50%
  }

  .privateImage-svg img {
    width: 100%;
    border-radius: 50%;
  }

  .login-info {
    margin-left: 10px;
    color: white;
  }

  .phone {
    display: flex;
    font-size: 13px;
    font-weight: 300;
    margin-top: 5px;
  }

  .icon-mobile {
    width: 12px;
    height: 18px;
    margin-right: 3px;
    fill: white
  }

  .arrow-svg {
    width: 11px;
    height: 22px;
    fill: white;
    position: absolute;
    right: 15px;
  }
</style>

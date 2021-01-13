<template>
  <div v-if="Object.keys(commentInfo).length" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"/>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.avatar" alt="">
      <span>{{commentInfo.username}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="detail-other">
        <span class="date">{{commentInfo.date | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div v-if="commentInfo.images" class="detail-img">
        <img v-for="item in commentInfo.images" :src="item">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "@/common/utils"

  export default {
    name: "DetailCommentInfo",
    props: {
      commentInfo: {
        type: Object
      }
    },
    filters: {
      showDate: function (value) {
        var date = new Date(value * 1000)
        return formatDate(date, "yyyy-MM-dd")
      }
    }
  }
</script>

<style scoped>
  .comment-info {
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid rgba(100, 100, 100, 0.1);
  }

  .info-header {
    line-height: 50px;
    height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }

  .header-title {
    font-size: 15px;
    float: left;
  }

  .header-more {
    font-size: 13px;
    float: right;
    margin-right: 10px;
  }

  .info-user {
    padding: 10px 0 5px;
  }

  .info-user img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .info-user span {
    margin-left: 10px;
    font-size: 15px;
  }

  .info-detail {
    padding: 0 5px 15px;
  }

  .info-detail p {
    line-height: 1.5;
    font-size: 14px;
    color: #777;
  }

  .detail-other {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }

  .detail-other .date {
    margin-right: 8px;
  }

  .detail-img {
    margin-top: 10px;
  }

  .detail-img img {
    height: 70px;
    width: 70px;
    margin-right: 5px;
  }

</style>

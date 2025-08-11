<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function handleLogout() {
  router.push('/login')
}
</script>

<template>
  <div class="dashboard">
    <div class="bar">
      <h1>仪表盘</h1>
      <button @click="handleLogout">退出登录</button>
    </div>
    <div class="content">
      <p>欢迎进入应用！这里是受保护的页面示例。</p>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  border-bottom: 1px solid #eee;
}
.content {
  padding: 18px;
}
button {
  background: #ef4444;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
}
</style>
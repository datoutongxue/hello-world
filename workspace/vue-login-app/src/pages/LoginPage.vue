<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const isSubmitting = ref(false)
const errorMessage = ref('')

async function handleSubmit() {
  errorMessage.value = ''
  if (!email.value || !password.value) {
    errorMessage.value = '请输入邮箱和密码'
    return
  }
  isSubmitting.value = true
  try {
    // 模拟登录请求
    await new Promise(resolve => setTimeout(resolve, 600))
    // 简单校验：任意非空即“通过”
    router.push('/dashboard')
  } catch (err) {
    errorMessage.value = '登录失败，请重试'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="container">
    <div class="card">
      <h1>登录</h1>
      <form @submit.prevent="handleSubmit">
        <label>
          邮箱
          <input v-model="email" type="email" placeholder="you@example.com" autocomplete="username" />
        </label>
        <label>
          密码
          <input v-model="password" type="password" placeholder="••••••••" autocomplete="current-password" />
        </label>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <button type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? '登录中...' : '登录' }}
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #f6f8ff, #e9f7ff);
  padding: 24px;
}
.card {
  width: 100%;
  max-width: 380px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  padding: 28px;
}
h1 {
  margin: 0 0 18px 0;
  font-size: 22px;
}
form {
  display: grid;
  gap: 14px;
}
label {
  display: grid;
  gap: 6px;
  font-size: 13px;
}
input {
  padding: 10px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  outline: none;
}
input:focus {
  border-color: #646cff;
  box-shadow: 0 0 0 3px rgba(100,108,255,0.15);
}
button {
  margin-top: 4px;
  background: #646cff;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 14px;
  cursor: pointer;
}
button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.error {
  color: #e11d48;
  font-size: 12px;
}
</style>
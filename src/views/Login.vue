<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-50 p-4">
    <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center text-blue-700">Login</h2>
      <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
        <input
          type="text"
          v-model="username"
          placeholder="Username"
          class="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          class="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold"
        >
          Masuk
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')

function handleLogin() {
  if (username.value.trim()) {
    localStorage.setItem('user', username.value)
    router.push('/')
  }
}
</script>

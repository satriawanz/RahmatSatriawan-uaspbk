<template>
  <div class="min-h-screen bg-gradient-to-tr from-[#f9fafb] to-[#e2e8f0] flex items-center justify-center px-4">
    <div class="bg-white/80 backdrop-blur-lg shadow-2xl rounded-xl p-10 w-full max-w-md transition duration-300">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">👤 Login</h2>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <input
          v-model="username"
          type="text"
          placeholder="Masukkan nama kamu"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
          required
        />

        <button
          type="submit"
          class="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition duration-300"
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

const username = ref('')
const router = useRouter()

function handleLogin() {
  if (username.value.trim()) {
    localStorage.setItem('user', username.value)
    router.push('/')
  }
}
</script>

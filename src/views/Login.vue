<template>
  <div class="min-h-screen bg-gradient-to-tr from-[#0f172a] to-[#1e293b] flex items-center justify-center px-4">
    <div class="bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 rounded-2xl p-10 w-full max-w-md text-white animate-fade-in">
      <h2 class="text-3xl font-bold mb-8 text-center tracking-wide">🔐 Login ke Sistem</h2>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <input
          v-model="username"
          type="text"
          placeholder="Nama pengguna"
          class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          class="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold shadow-md transition duration-300"
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

<style scoped>
@keyframes fadein {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fade-in {
  animation: fadein 0.8s ease-out forwards;
}
</style>

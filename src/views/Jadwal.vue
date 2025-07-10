<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 px-4 text-gray-800">
    <h2 class="text-4xl font-bold text-center mb-6 animate-fade-in">📅 Jadwal Booking Lapangan</h2>

    <!-- FORM -->
    <form @submit.prevent="handleSubmit" class="flex flex-wrap gap-4 justify-center mb-10 animate-fade-in delay-200">
      <input
        v-model="tanggal"
        type="date"
        required
        class="p-3 border rounded-lg w-[200px] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        v-model="jam"
        type="text"
        placeholder="Contoh: 08:00 - 09:00"
        required
        class="p-3 border rounded-lg w-[200px] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        v-model="user"
        type="text"
        placeholder="Nama Pemesan"
        required
        class="p-3 border rounded-lg w-[200px] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300"
      >
        ➕ Booking
      </button>
    </form>

    <!-- LIST -->
    <div class="max-w-3xl mx-auto bg-white/70 backdrop-blur-lg border border-gray-200 shadow-xl rounded-xl p-6 animate-fade-in delay-300">
      <ul v-if="jadwalStore.data.length" class="divide-y">
        <li
          v-for="item in jadwalStore.data"
          :key="item.id"
          class="py-4 flex justify-between items-center hover:bg-gray-50 transition duration-300 px-2"
        >
          <div>
            <p class="font-semibold text-lg">{{ item.tanggal }} | {{ item.jam }}</p>
            <p class="text-gray-600 text-sm">👤 {{ item.user }}</p>
          </div>
          <button
            @click="handleDelete(item.id)"
            class="text-sm text-red-600 hover:text-red-800 transition duration-200"
          >
            🗑️ Hapus
          </button>
        </li>
      </ul>
      <p v-else class="text-center text-gray-500 italic py-6">
        Tidak ada data booking 😴
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useJadwalStore } from '../stores/jadwalStore'

const jadwalStore = useJadwalStore()
const tanggal = ref('')
const jam = ref('')
const user = ref('')

async function handleSubmit() {
  const newBooking = {
    tanggal: tanggal.value,
    jam: jam.value,
    user: user.value
  }

  await jadwalStore.addBooking(newBooking)
  tanggal.value = ''
  jam.value = ''
  user.value = ''
}

async function handleDelete(id) {
  const yakin = confirm('Yakin ingin menghapus booking ini?')
  if (yakin) {
    await jadwalStore.deleteBooking(id)
  }
}

onMounted(() => {
  jadwalStore.fetchJadwal()
})
</script>

<style scoped>
@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadein 1s ease-out forwards;
}
.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
}
</style>

<template>
  <div class="min-h-screen bg-gradient-to-br from-white to-blue-50 py-10 px-4">
    <h2 class="text-4xl font-extrabold text-blue-700 text-center mb-6">
      🗓️ Daftar Booking Lapangan
    </h2>

    <!-- FORM -->
    <form @submit.prevent="handleSubmit" class="flex flex-wrap gap-4 justify-center mb-10">
      <input
        v-model="tanggal"
        type="date"
        required
        class="p-3 border rounded w-[200px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <select
        v-model="jam"
        required
        class="p-3 border rounded-lg w-[200px] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="" disabled selected>Pilih Jam</option>
        <option value="07:00 - 08:00">07:00 - 08:00</option>
        <option value="08:00 - 09:00">08:00 - 09:00</option>
        <option value="09:00 - 10:00">09:00 - 10:00</option>
        <option value="10:00 - 11:00">10:00 - 11:00</option>
        <option value="13:00 - 14:00">13:00 - 14:00</option>
        <option value="14:00 - 15:00">14:00 - 15:00</option>
        <option value="15:00 - 16:00">15:00 - 16:00</option>
      </select>
      
      <input
        v-model="user"
        type="text"
        placeholder="Nama Pemesan"
        required
        class="p-3 border rounded w-[200px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        type="submit"
        class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded shadow-md transition duration-300"
      >
        ➕ Tambah Booking
      </button>
    </form>

    <!-- LIST -->
    <div class="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6 transition duration-300">
      <ul v-if="jadwalStore.data.length" class="divide-y">
        <li
          v-for="item in jadwalStore.data"
          :key="item.id"
          class="py-4 flex justify-between items-center hover:bg-gray-50 transition duration-300"
        >
          <div>
            <p class="font-semibold text-gray-800">{{ item.tanggal }} | {{ item.jam }}</p>
            <p class="text-gray-500 text-sm">Pemesan: {{ item.user }}</p>
          </div>
          <button
            @click="handleDelete(item.id)"
            class="text-sm text-red-600 hover:text-red-800 transition duration-300"
          >
            🗑️ Hapus
          </button>
        </li>
      </ul>
      <p v-else class="text-center text-gray-500 italic py-6">
        Belum ada booking nih. Yuk, isi sekarang! 😁
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

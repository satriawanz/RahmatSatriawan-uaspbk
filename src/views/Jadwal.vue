<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <h2 class="text-3xl font-bold text-center text-blue-700 mb-8">Daftar Booking Lapangan</h2>

    <!-- FORM -->
    <form @submit.prevent="handleSubmit" class="flex flex-wrap gap-4 justify-center mb-10">
      <input v-model="tanggal" type="date" required class="p-3 border rounded w-[200px]" />
      <input v-model="jam" type="text" placeholder="Jam (08:00 - 09:00)" required class="p-3 border rounded w-[200px]" />
      <input v-model="user" type="text" placeholder="Nama" required class="p-3 border rounded w-[200px]" />
      <button type="submit" class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded">
        Tambah Booking
      </button>
    </form>

    <!-- LIST -->
    <div class="max-w-4xl mx-auto bg-white shadow-md rounded p-6">
      <ul v-if="jadwalStore.data.length" class="divide-y">
        <li
          v-for="item in jadwalStore.data"
          :key="item.id"
          class="py-4 flex justify-between items-center"
        >
          <div>
            <p class="font-medium text-gray-800">{{ item.tanggal }} | {{ item.jam }}</p>
            <p class="text-gray-500 text-sm">Pemesan: {{ item.user }}</p>
          </div>
          <button
            @click="handleDelete(item.id)"
            class="text-sm text-red-600 hover:text-red-800"
          >
            Hapus
          </button>
        </li>
      </ul>
      <p v-else class="text-center text-gray-500">Belum ada data booking</p>
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
  console.log('Booking yang dikirim:', newBooking)
  
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

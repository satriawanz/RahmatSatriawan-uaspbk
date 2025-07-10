<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-blue-100 text-center p-8">
    <h1 class="text-4xl font-extrabold text-blue-700 mb-4">Selamat Datang di Sistem Booking Lapangan 🏸</h1>
    <p class="text-gray-600 mb-8 text-lg">UAS Pemrograman Berbasis Komponen</p>

    <div class="flex gap-6">
      <router-link to="/login" class="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded shadow">
        Login
      </router-link>
      <router-link to="/jadwal" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow">
        Lihat Jadwal
      </router-link>
    </div>
  </div>
</template>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] px-4 py-16">
    <h1 class="text-5xl font-extrabold text-gray-800 mb-4 leading-tight drop-shadow-sm">
      Booking Lapangan Badminton 🏸
    </h1>
    <p class="text-gray-600 text-lg mb-10 max-w-xl">
      Aplikasi sederhana berbasis komponen dengan teknologi modern: Vue.js, Tailwind, dan Pinia.
    </p>

    <div class="flex gap-6">
      <router-link
        to="/login"
        class="bg-gray-900 hover:bg-black text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
      >
        Login
      </router-link>

      <router-link
        to="/jadwal"
        class="border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
      >
        Lihat Jadwal
      </router-link>
    </div>
  </div>
</template>

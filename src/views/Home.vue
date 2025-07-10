<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center px-4 relative overflow-hidden text-white">

    <!-- Typing animation -->
    <h1 class="text-4xl md:text-6xl font-extrabold text-center mb-6 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-white">
      Booking Lapangan Badminton 🏸
    </h1>

    <p class="text-center text-lg md:text-xl text-gray-300 max-w-xl mb-10 animate-fade-in">
      Sistem modern berbasis Vue.js + Tailwind, dibangun dengan pendekatan komponen yang clean dan performa tinggi.
    </p>

    <div class="flex gap-4 animate-fade-in delay-300">
      <router-link
        to="/login"
        class="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
      >
        Login
      </router-link>

      <router-link
        to="/jadwal"
        class="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300"
      >
        Lihat Jadwal
      </router-link>
    </div>

    <!-- Animated background blur elements -->
    <div class="absolute top-[-80px] left-[-80px] w-60 h-60 bg-purple-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
    <div class="absolute bottom-[-80px] right-[-80px] w-60 h-60 bg-blue-400 opacity-30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
  </div>
</template>

<style scoped>
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

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

.animate-typing {
  animation: typing 3s steps(40, end) 1, blink 0.75s step-end infinite;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid white;
}

@keyframes blink {
  0%, 100% {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}

.animate-fade-in {
  animation: fadein 1s ease-out forwards;
}
.delay-300 {
  animation-delay: 0.3s;
}
</style>

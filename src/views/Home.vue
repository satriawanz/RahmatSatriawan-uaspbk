<template>
  <div class="bg-white min-h-screen text-gray-800">
    <!-- HERO -->
    <div class="bg-red-700 py-16 px-4 text-center text-white">
      <h1 class="text-4xl font-bold mb-4">BOOKING LAPANGAN ONLINE TERBAIK</h1>
      <button class="bg-yellow-400 hover:bg-yellow-500 text-red-900 font-semibold px-6 py-3 rounded-lg shadow transition">
        Daftarkan Venue
      </button>
    </div>

    <!-- FILTER SEARCH -->
    <div class="flex flex-wrap gap-4 justify-center py-8 px-4 bg-gray-50">
      <input
        type="text"
        placeholder="Cari nama venue"
        class="px-4 py-3 w-[220px] border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
      />
      <select class="px-4 py-3 w-[180px] border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300">
        <option disabled selected>Pilih Kota</option>
        <option>Jakarta</option>
        <option>Bandung</option>
        <option>Surabaya</option>
      </select>
      <select class="px-4 py-3 w-[200px] border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300">
        <option disabled selected>Pilih Cabang Olahraga</option>
        <option>Badminton</option>
        <option>Futsal</option>
        <option>Basket</option>
      </select>
      <button class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded shadow transition">
        Cari Venue
      </button>
    </div>

    <!-- LIST VENUE -->
    <div class="max-w-6xl mx-auto px-4 pb-12">
      <h2 class="text-lg font-medium mb-4 text-gray-600">Menampilkan 3 venue tersedia</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="n in 3" :key="n" class="bg-white border rounded-lg shadow-md overflow-hidden">
          <img
            src="https://source.unsplash.com/400x250/?badminton,court"
            class="w-full h-48 object-cover"
            alt="Venue"
          />
          <div class="p-4">
            <h3 class="font-bold text-lg">Venue {{ n }}</h3>
            <p class="text-sm text-gray-500 mb-2">Jakarta • Badminton</p>
            <button class="text-sm text-red-600 hover:underline">Lihat Detail</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

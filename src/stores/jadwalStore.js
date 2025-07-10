import { defineStore } from 'pinia'
import axios from 'axios'

export const useJadwalStore = defineStore('jadwal', {
  state: () => ({
    data: [],
  }),
  actions: {
    async fetchJadwal() {
      const res = await axios.get('http://localhost:3000/jadwal')
      this.data = res.data
    },
    async addBooking(newBooking) {
      await axios.post('http://localhost:3000/jadwal', newBooking)
      this.fetchJadwal()
    },
    async deleteBooking(id) {
      await axios.delete(`http://localhost:3000/jadwal/${id}`)
     this.fetchJadwal()
    }

    
  }
})

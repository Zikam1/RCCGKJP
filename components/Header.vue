<template>
  <header class="bg-blue-900 text-white">
    <div class="container mx-auto px-12 py-4 md:px-72 flex justify-between items-center">
      <!-- Logo Section -->
      <div class="flex items-center">
        <nuxt-link to="/">
          <!-- Church Logo -->
          <img src="/assets/kjp-logo.jpg" alt="Church Logo" class="h-24 w-auto" />
        </nuxt-link>
      </div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex space-x-6 ml-6">
        <nuxt-link to="/" class="text-yellow-500 hover:text-yellow-600">Home</nuxt-link>
        <nuxt-link to="/about" class="hover:text-yellow-500">About Us</nuxt-link>
        <nuxt-link to="/ministries" class="hover:text-yellow-500">Ministries</nuxt-link>
        <nuxt-link to="/mission" class="hover:text-yellow-500">Mission & Vision</nuxt-link>
        
      </nav>

      <!-- Donate and Contact Buttons (Hidden on Mobile) -->
      <div class="hidden md:flex items-center space-x-4">
        <nuxt-link to="/prayer" class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full text-sm transition duration-300">
        Prayers
        </nuxt-link>
        <nuxt-link to="/contact" class="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-full text-sm transition duration-300">
          Contact Us
        </nuxt-link>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden text-white hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-if="menuOpen" class="md:hidden bg-blue-800 text-white">
      <ul class="space-y-4 py-4 px-6">
        <li><nuxt-link to="/" @click="closeMenu" class="text-yellow-500 hover:text-yellow-600">Home</nuxt-link></li>
        <li><nuxt-link to="/about" @click="closeMenu" class="hover:text-yellow-500">About Us</nuxt-link></li>
        
        <li><nuxt-link to="/ministries" @click="closeMenu" class="hover:text-yellow-500">Ministries</nuxt-link></li>
      
        <li><nuxt-link to="/mission" @click="closeMenu" class="hover:text-yellow-500">Mission and vision</nuxt-link></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

// New method to close the menu
const closeMenu = () => {
  menuOpen.value = false
}
</script>

<style scoped>
header {
  transition: background-color 0.3s;
}
</style>

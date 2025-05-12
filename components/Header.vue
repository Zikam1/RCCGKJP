<template>
  <header class="bg-blue-800 text-white">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo Section -->
      <div class="flex items-center">
        <nuxt-link to="/">
          <!-- Church Logo -->
          <img src="/assets/kjj.png" alt="Church Logo" class="h-16 w-auto md:h-24" />
        </nuxt-link>
      </div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex space-x-4 ml-4">
        <nuxt-link to="/" class="text-yellow-500 hover:text-yellow-600">Home</nuxt-link>
        <nuxt-link to="/about" class="hover:text-yellow-500">About Us</nuxt-link>
        <nuxt-link to="/ministries" class="hover:text-yellow-500">Ministries</nuxt-link>
        <nuxt-link to="/mission" class="hover:text-yellow-500">Mission & Vision</nuxt-link>
        <nuxt-link to="/departments" class="hover:text-yellow-500">Departments</nuxt-link>
      </nav>

      <!-- Donate and Contact Buttons (Hidden on Mobile) -->
      <div class="hidden md:flex items-center space-x-3">
        <nuxt-link
          to="/prayer"
          class="bg-yellow-500 hover:bg-yellow-700 text-white px-3 py-1.5 rounded-full text-sm transition duration-300"
        >
          Prayers
        </nuxt-link>
        <nuxt-link
          to="/contact"
          class="border border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white px-3 py-1.5 rounded-full text-sm transition duration-300"
        >
          Contact Us
        </nuxt-link>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        class="md:hidden text-white hover:text-white"
        aria-label="Toggle menu"
        :aria-expanded="menuOpen"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-if="menuOpen" class="md:hidden bg-blue-800 text-white mobile-menu">
      <ul class="space-y-3 py-4 px-4">
        <li>
          <nuxt-link to="/" @click="closeMenu" class="text-yellow-500 hover:text-yellow-600">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about" @click="closeMenu" class="hover:text-yellow-500">About Us</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/ministries" @click="closeMenu" class="hover:text-yellow-500">Ministries</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/mission" @click="closeMenu" class="hover:text-yellow-500">Mission and Vision</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/departments" @click="closeMenu" class="hover:text-yellow-500">Departments</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/prayer" @click="closeMenu" class="hover:text-yellow-500">Prayers</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact" @click="closeMenu" class="hover:text-yellow-500">Contact</nuxt-link>
        </li>
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

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<style scoped>
header {
  transition: background-color 0.3s;
}

/* Ensure the container doesn't overflow on small screens */
.container {
  max-width: 80%;
  overflow-x: hidden;
}

/* Adjust font sizes for smaller screens */
nav a {
  font-size: 1rem;
}

/* Mobile menu animation */
.mobile-menu {
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);
}

.mobile-menu.hidden {
  transform: translateY(-100%);
}

@media (max-width: 640px) {
  nav a {
    font-size: 0.875rem;
  }
}
</style>
<template>
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <!-- Section Heading -->
        <div class="text-center mb-12">
          <h2 class="text-4xl font-extrabold text-gray-800">Contact Us</h2>
          <p class="text-xl text-gray-600 mt-3">Have questions? We're here to help!</p>
        </div>
  
        <!-- Contact Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <!-- Left Section: Contact Information -->
          <div class="bg-white p-8 rounded-2xl shadow-2xl">
            <h3 class="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
            <p class="text-gray-600 mb-6">Feel free to reach out to us through the form or our contact details below.</p>
            
            <div class="space-y-4">
              <!-- Address -->
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 11.001 12.001A6 6 0 0110 4z" clip-rule="evenodd" />
                </svg>
                <p class="text-gray-700 ml-3">1 Chief Tony Chuku Street, Alcon Road, Woji, Port Harcourt, Rivers State</p>
              </div>
  
              <!-- Phone -->
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M2.993 2.993a4.001 4.001 0 015.657 0l2.122 2.121a4 4 0 014.243.816l2.168 2.168c.423.423.765.94 1.017 1.482.148.273.279.554.393.84a4 4 0 011.267 2.2 8.68 8.68 0 01-.557 4.684A8.88 8.88 0 019.993 18.993a8.682 8.682 0 01-4.684-.557A8 8 0 01.607 12.21a4 4 0 01.816-4.243l2.169-2.168a3.99 3.99 0 012.4-.816 3.986 3.986 0 012.233-.049A6 6 0 1115 10h-1a5 5 0 10-7.087-3.85l-1.37-.703z" clip-rule="evenodd" />
                </svg>
                <p class="text-gray-700 ml-3">+1 (123) 456-7890</p>
              </div>
  
              <!-- Email -->
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M2.993 2.993a4.001 4.001 0 015.657 0l2.122 2.121a4 4 0 014.243.816l2.168 2.168c.423.423.765.94 1.017 1.482.148.273.279.554.393.84a4 4 0 011.267 2.2 8.68 8.68 0 01-.557 4.684A8.88 8.88 0 019.993 18.993a8.682 8.682 0 01-4.684-.557A8 8 0 01.607 12.21a4 4 0 01.816-4.243l2.169-2.168a3.99 3.99 0 012.4-.816 3.986 3.986 0 012.233-.049A6 6 0 1115 10h-1a5 5 0 10-7.087-3.85l-1.37-.703z" clip-rule="evenodd" />
                </svg>
                <p class="text-gray-700 ml-3">info@riversprovince5kingjesus.org</p>
              </div>
            </div>
          </div>
  
          <!-- Right Section: Contact Form -->
          <div class="bg-white p-8 rounded-2xl shadow-2xl">
            <h3 class="text-2xl font-semibold text-gray-800 mb-6">Send Us A Message</h3>
            <form @submit.prevent="submitForm">
              <!-- Full Name -->
              <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" v-model="form.name" required class="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              </div>
  
              <!-- Email Address -->
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" v-model="form.email" required class="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              </div>
  
              <!-- Message -->
              <div class="mb-4">
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" v-model="form.message" required class="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
              </div>
  
              <!-- Submit Button -->
              <button type="submit" class="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  });
  
  const submitForm = () => {
    console.log('Form submitted:', form.value);
    // You can integrate API or submission logic here
  };
  </script>
  
  <style scoped>
  /* Optional custom styles here */
  </style>
  
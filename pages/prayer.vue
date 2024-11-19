<template>
    <section class="py-20 bg-gradient-to-r from-blue-300 to-indigo-200">
      <div class="container mx-auto px-6">
        <!-- Section Heading -->
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white">Prayer Counseling</h2>
          <p class="text-xl text-white mt-4">Reach out to us for spiritual support, prayer, and guidance during difficult times.</p>
        </div>
  
        <!-- Counseling Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Left Section: Prayer Guidance -->
          <div class="bg-white bg-opacity-70 p-8 rounded-xl shadow-lg backdrop-blur-md">
            <h3 class="text-2xl font-semibold text-gray-800 mb-6">How We Can Help You</h3>
            <p class="text-lg text-gray-700 mb-4">
              Prayer is a powerful tool for peace, clarity, and divine intervention. Our counseling team is available to pray with you, offering support for spiritual growth, healing, or any personal struggles you may face.
            </p>
            <p class="text-lg text-gray-700 mb-6">
              Whether it's healing, comfort, or guidance you seek, we are here for you. Reach out today, and let us stand in prayer with you.
            </p>
  
            <h4 class="text-xl font-semibold text-gray-800 mt-4">Contact Us</h4>
            <p class="text-lg text-gray-700">
              You can connect with us through the form below, or feel free to reach out directly for personalized prayer sessions.
            </p>
            <h2 class="text-xl font-semibold text-gray-800 mt-4">Call us on:</h2>
            <p class="text-lg text-gray-700">
                +(123) 456-7890.
            </p>
          </div>
  
          <!-- Right Section: Prayer Request Form -->
          <div class="bg-white bg-opacity-70 p-8 rounded-xl shadow-lg backdrop-blur-md">
            <h3 class="text-2xl font-semibold text-gray-800 mb-6">Submit Your Prayer Request</h3>
            <form @submit.prevent="submitPrayerRequest">
              <div class="mb-6">
                <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" v-model="prayerForm.name" required class="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div class="mb-6">
                <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" v-model="prayerForm.email" required class="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div class="mb-6">
                <label for="request" class="block text-sm font-medium text-gray-700">Prayer Request</label>
                <textarea id="request" v-model="prayerForm.request" required class="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" class="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Submit Prayer Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const prayerForm = ref({
    name: '',
    email: '',
    request: ''
  });
  
  const submitPrayerRequest = () => {
    console.log('Prayer Request Submitted:', prayerForm.value);
    // You can integrate an API or service to process prayer requests here
  };
  </script>
  
  <style scoped>
  /* Optional: Custom styles for the background and form inputs */
  </style>
  
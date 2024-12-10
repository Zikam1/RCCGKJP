<template>
  <section class="py-20 bg-gradient-to-r from-blue-300 to-indigo-200">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-white">Prayer Counseling</h2>
        <p class="text-xl text-white mt-4">
          Reach out to us for spiritual support, prayer, and guidance during difficult times.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Left Section -->
        <div class="bg-white bg-opacity-70 p-8 rounded-xl shadow-lg backdrop-blur-md">
          <h3 class="text-2xl font-semibold text-gray-800 mb-6">How We Can Help You</h3>
          <p class="text-lg text-gray-700 mb-4">
            Prayer is a powerful tool for peace, clarity, and divine intervention. Our counseling team is here to help.
          </p>
          <h4 class="text-xl font-semibold text-gray-800 mt-4">Call Us</h4>
          <p class="text-lg text-gray-700">+(123) 456-7890</p>
        </div>

        <!-- Right Section -->
        <div class="bg-white bg-opacity-70 p-8 rounded-xl shadow-lg backdrop-blur-md">
          <h3 class="text-2xl font-semibold text-gray-800 mb-6">Submit Your Prayer Request</h3>
          <form @submit.prevent="submitPrayerRequest">
            <div class="mb-6">
              <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" v-model="prayerForm.name" required class="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div class="mb-6">
              <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" v-model="prayerForm.email" required class="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
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

const submitPrayerRequest = async () => {
  try {
    const response = await fetch('/api/prayer-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prayerForm.value),
    });

    if (!response.ok) {
      throw new Error('Failed to submit prayer request');
    }

    const result = await response.json();
    alert('Your prayer request has been submitted successfully.');
    console.log(result);

    // Clear the form
    prayerForm.value = { name: '', email: '', request: '' };
  } catch (error) {
    console.error('Error submitting prayer request:', error);
    alert('An error occurred. Please try again later.');
  }
};
</script>

<style scoped>
/* Optional: Custom styles */
</style>

<template>
  <section class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <!-- Section Heading -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800">Contact Us</h2>
        <p class="text-xl text-gray-600 mt-3 max-w-2xl mx-auto">
          We're here to support you with prayer, guidance, or any questions you may have.
        </p>
      </div>

      <!-- Contact Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- Left Section: Welcome Message -->
        <div class="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">Reach Out to Us</h3>
          <p class="text-lg text-gray-600 mb-4">
            At RCCG King Jesus Parish, we are committed to walking with you in faith. Whether you need spiritual support, prayer, or information about our services, our team is ready to assist.
          </p>
          <p class="text-lg text-gray-600">
            Contact us today or visit us in person to experience the warmth of our community.
          </p>
        </div>

        <!-- Right Section: Contact Information -->
        <div class="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <h3 class="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
          <div class="space-y-6">
            <!-- Address -->
            <div class="flex items-start">
              <svg class="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <p class="text-gray-600">
                1 Chief Tony Chuku Street, Alcon Road, Woji, Port Harcourt, Rivers State
              </p>
            </div>

            <!-- Phone -->
            <div class="flex items-center">
              <svg class="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <p class="text-gray-600">+1 (123) 456-7890</p>
            </div>

            <!-- Email -->
            <div class="flex items-center">
              <svg class="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <p class="text-gray-600">info@riversprovince5kingjesus.org</p>
            </div>
          </div>
          <div class="mt-8 text-left">
            <a href="tel:+11234567890" class="inline-block py-3 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300">
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No scripts needed for this static template.
</script>

<style scoped>
/* Optional: Ensure hover effects are smooth */
.transition-all {
  transition: all 0.3s ease;
}
</style>
<template>
  <div class="bg-black bg-opacity-95 text-white py-12">
    <div class="container mx-auto px-6 lg:px-24 text-center">
      <!-- Church Logo Section -->
      <div class="mb-6">
        <!-- <img src="/assets/church-logo.png" alt="Church Logo" class="h-12 mx-auto" /> -->
      </div>

      <!-- Church Mission Statement or Verse -->
      <p class="text-lg italic text-gray-300 mb-8">
        “For where two or three gather in my name, there am I with them.” - Matthew 18:20
      </p>

      <!-- Quick Links for Church Pages -->
      <div class="flex flex-wrap justify-center space-x-6 mb-6">
        <nuxt-link to="/about" class="hover:text-yellow-400">About Us</nuxt-link>
        <nuxt-link to="/ministries" class="hover:text-yellow-400">Ministries</nuxt-link>
        <nuxt-link to="/mission" class="hover:text-yellow-400">Mission & vision</nuxt-link>
        <nuxt-link to="/contact" class="hover:text-yellow-400">Contact</nuxt-link>
      </div>

      <!-- Social Media Icons -->
      <div class="flex justify-center space-x-4 mb-6">
        <a href="https://www.facebook.com/rccgkingjesusfamily" target="_blank" aria-label="Facebook">
          <!-- Facebook SVG Icon -->
          <svg class="h-6 w-6 text-gray-400 hover:text-yellow-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.675 0H1.325C.593 0 0 .594 0 1.326v21.348C0 23.406.594 24 1.325 24h11.495v-9.294H9.689V10.61h3.131V8.044c0-3.1 1.894-4.788 4.66-4.788 1.324 0 2.463.099 2.795.143v3.241l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.309h3.587l-.467 3.096h-3.12V24h6.116c.73 0 1.325-.594 1.325-1.326V1.326C24 .594 23.406 0 22.675 0z"/>
          </svg>
        </a>
        <a href="https://instagram.com/rccgkingjesusparish" target="_blank" aria-label="Instagram">
          <!-- Instagram SVG Icon -->
          <svg class="h-6 w-6 text-gray-400 hover:text-yellow-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.75 2H16.25C20.4445 2 24 5.5555 24 9.75V16.25C24 20.4445 20.4445 24 16.25 24H7.75C3.5555 24 0 20.4445 0 16.25V9.75C0 5.5555 3.5555 2 7.75 2ZM12 7.5C9.5217 7.5 7.5 9.5217 7.5 12C7.5 14.4783 9.5217 16.5 12 16.5C14.4783 16.5 16.5 14.4783 16.5 12C16.5 9.5217 14.4783 7.5 12 7.5ZM16.875 4.875C17.4966 4.875 18 5.3784 18 6C18 6.6216 17.4966 7.125 16.875 7.125C16.2534 7.125 15.75 6.6216 15.75 6C15.75 5.3784 16.2534 4.875 16.875 4.875Z"/>
            <path d="M12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5Z"/>
          </svg>
        </a>
        <a href="https://www.youtube.com/@kingjesusparishtv" target="_blank" aria-label="YouTube">
  <!-- YouTube SVG Icon -->
  <svg class="h-6 w-6 text-gray-400 hover:text-red-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a2.886 2.886 0 0 0-2.031-2.043C19.225 3.5 12 3.5 12 3.5s-7.225 0-9.467.643A2.886 2.886 0 0 0 .502 6.186 30.87 30.87 0 0 0 0 12a30.87 30.87 0 0 0 .502 5.814 2.886 2.886 0 0 0 2.031 2.043C4.775 20.5 12 20.5 12 20.5s7.225 0 9.467-.643a2.886 2.886 0 0 0 2.031-2.043A30.87 30.87 0 0 0 24 12a30.87 30.87 0 0 0-.502-5.814ZM9.75 15.318V8.682l6.45 3.318-6.45 3.318Z"/>
  </svg>
</a>
      </div>

      <!-- Church Address and Contact Information -->
      <p class="text-sm text-gray-400 mb-2">1 Chief Tony Chuku Street, Alcon Road, Woji, Portharcourt River State</p>
      <p class="text-sm text-gray-400 mb-6">Phone: (123) 456-7890 | Email: info@riversprovince5kingjesus.org</p>

      <!-- Copyright Text -->
      <p class="text-sm text-gray-400">
        &copy; RCCG KJP RIVERS PROVINCE 5, HeadQuarters. All Rights Reserved.
      </p>
    </div>
  </div>
</template>

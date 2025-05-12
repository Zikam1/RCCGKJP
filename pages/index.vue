<template>
  <div class="bg-gray-100 text-gray-900">
    <section class="relative md:pb-96 bg-[url('/assets/kjp-logo.jpg')] bg-cover bg-center text-white h-80 flex items-center justify-center">
      <div class="absolute inset-0 bg-black bg-opacity-10"></div> 
    </section>

    <!-- Mission Statement Section -->
    <section class="py-16 bg-gray-50">  
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="flex justify-center mb-8">
          <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
        </div>
        <h2 class="text-4xl font-bold text-gray-800 text-center mb-6">Our Mission</h2>
        <!-- Mission Statement Card -->
        <div class="bg-white border border-gray-200 rounded-lg shadow-md p-8 text-center transition-all duration-300 hover:shadow-lg animate-fade-in">
          <p class="text-lg text-gray-700 max-w-2xl mx-auto">
            Our mission is to reach out to the world, bring them to Christ, and empower them to live victoriously.
          </p>
        </div>
      </div>
    </section>

    <!-- Service Times Section -->
    <section class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-semibold text-center mb-8">Service Times</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../assets/ss.png" alt="Service Image" class="w-full h-60 object-cover">
          <div class="p-6">
            <h3 class="text-xl text-center font-semibold mb-2">SUNDAY SERVICE</h3>
            <p class="text-gray-600 text-center">Timing: 8:00 AM - 11:30 AM</p>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../assets/DEEP.png" alt="" class="w-full h-60 object-cover">
          <div class="p-6">
            <h3 class="text-xl text-center font-semibold mb-2">DIGGING DEEP</h3>
            <p class="text-gray-600 text-center">Timing: 5:30 PM - 7:00 PM</p>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/assets/FC.jpg" alt="Service Image" class="w-full h-60 object-cover">
          <div class="p-6">
            <h3 class="text-xl text-center font-semibold mb-2">FAITH CLINIC</h3>
            <p class="text-gray-600 text-center">Timing: 5:30 PM - 7:00 PM</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Hour of Mercy Section -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto flex flex-col md:flex-row items-center max-w-5xl px-4 md:px-8">
        <div class="md:w-1/2">
          <img src="../assets/ui.jpg" alt="About Us" class="rounded-lg shadow-lg">
        </div>
        <div class="md:w-1/2 mt-8 md:mt-0 md:ml-10">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">HOUR OF MERCY</h2>
          <p class="text-lg text-gray-600 mb-4">
            We invite you to the Hour of Mercy, a life-transforming program where you can experience the boundless mercy of God.
            This special program is designed to bring divine intervention into every area of your life, including your family, business, career,
            and personal endeavors.
          </p>
          <p class="text-lg text-gray-600 mb-6">
            Join us every Wednesday from 10:00 AM to 12:00 Noon for a time of heartfelt worship, fervent prayers, and impactful teachings that will uplift your spirit and renew your hope. Don’t miss this opportunity to encounter God’s grace and mercy in a powerful way. Come and be blessed!
          </p>
          <div class="mt-4 flex space-x-4">
            <div class="mt-4">
              <!-- Buttons Section -->
              <div class="flex space-x-4">
                <div class="mt-4 flex items-center space-x-4">
                  <!-- Button -->
                  <NuxtLink 
                    to="/testimonies" 
                    class="bg-pink-400 hover:bg-pink-400 text-white py-2 px-4 rounded-lg">
                    Click to See Prayers / Testimonies
                  </NuxtLink>
                  <!-- Social Icons -->
                  <div class="flex space-x-2">
                    <a href="https://www.facebook.com/rccgkingjesusfamily" target="_blank" aria-label="Facebook"> 
                      <svg class="h-8 w-8 text-gray-900 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.675 0H1.325C.593 0 0 .594 0 1.326v21.348C0 23.406.594 24 1.325 24h11.495v-9.294H9.689V10.61h3.131V8.044c0-3.1 1.894-4.788 4.66-4.788 1.324 0 2.463.099 2.795.143v3.241l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.309h3.587l-.467  SOLID 3.096h-3.12V24h6.116c.73 0 1.325-.594 1.325-1.326V1.326C24 .594 23.406 0 22.675 0z"/>
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@kingjesusparishtv" target="_blank" aria-label="YouTube">
                      <svg class="h-8 w-8 text-gray-900 hover:text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a2.886 2.886 0 0 0-2.031-2.043C19.225 3.5 12 3.5 12 3.5s-7.225 0-9.467.643A2.886 2.886 0 0 0 .502 6.186 30.87 30.87 0 0 0 0 12a30.87 30.87 0 0 0 .502 5.814 2.886 2.886 0 0 0 2.031 2.043C4.775 20.5 12 20.5 12 20.5s7.225 0 9.467-.643a2.886 2.886 0 0 0 2.031-2.043A30.87 30.87 0 0 0 24 12a30.87 30.87 0 0 0-.502-5.814ZM9.75 15.318V8.682l6.45 3.318-6.45 3.318Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    

    

   

    <!-- Programs (Image) Section -->
    <section class="py-24 bg-white">
      <div class="container mx-auto text-center max-w-5xl px-4 md:px-8">
        <h2 class="text-4xl font-bold text-gray-800">PROGRAMS</h2>
        <div class="mt-10 overflow-hidden relative">
          <div class="whitespace-nowrap animate-slide-left flex items-center">
            <!-- Image 1 -->
            <div class="inline-block mx-4">
              <img
                src="../assets/healing.jpg"
                alt="Gallery Image 1"
                class="w-64 h-64 object-cover rounded-lg shadow-lg"
              />
              <div class="mt-4 text-gray-800 font-bold text-center">
                Healing & Miracle <br />Service
              </div>
            </div>
            <!-- Image 2 -->
            <div class="inline-block mx-4">
              <img
                src="../assets/noh.jpg"
                alt="Gallery Image 2"
                class="w-64 h-102 object-cover rounded-lg shadow-lg"
              />
              <div class="mt-4 text-gray-800 font-bold text-center">
                Night of Help, <br />Theme: GOD WILL DO MY OWN
              </div>
            </div>
          </div>
        </div>
        <!-- Centralized NuxtLink -->
        <div class="mt-12 flex justify-center">
        </div>
      </div>
    </section>

    <!-- Upcoming Events Section -->
    <section class="py-16 bg-white text-center">
      <div class="container mx-auto px-4 lg:px-8">
        <h2 class="text-3xl font-bold mb-8">Upcoming Programs</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          <div class="bg-gray-100 p-6 rounded-lg shadow">
            <h3 class="text-2xl font-semibold mb-2">Glory Ahead 2</h3>
            <p>7th Feb, 2025 </p>
            <p>Time: 7pm </p>
            <p class="mt-2">Redemption City, km 46, Lagos Ibadan express way.</p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow">
            <h3 class="text-2xl font-semibold mb-2">Youth (YAYA) Program</h3>
            <p>Every Monday</p>
            <p>Time: 5:30 PM - 6:30 PM</p>
            <p class="mt-2">A Gathering of Young believers focused on Spiritual Growth.</p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow">
            <h3 class="text-2xl font-semibold mb-2 text-gray-700">Night of Help</h3>
            <p class="text-gray-700 font-medium">📅 23rd May, 2025</p>
            <p class="mt-2 text-gray-600">
              Join us for a powerful night of divine intervention, breakthroughs, and answered prayers. 
              Come expectant and experience a night of transformation!
            </p>
          </div>
        </div>
      </div>
    </section>

     <!-- PORT HARCOURT HOLYGHOST RALLY Section -->
     <section class="py-24 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
      <div class="container mx-auto flex flex-col md:flex-row items-center max-w-5xl px-4 md:px-8">
        <!-- Text Section -->
        <div class="md:w-1/2 order-2 md:order-1 mt-8 md:mt-0 md:mr-10">
          <h2 class="text-4xl font-extrabold text-gray-800 mb-4">
            PORT HARCOURT HOLYGHOST RALLY!
          </h2>
          <h1 class="text-2xl font-semibold mb-2">Join us for an extraordinary spiritual experience at the Port Harcourt HolyGhost Rally with the theme: "DIVINE MANIFESTATION."</h1>
          <p class="text-lg text-gray-700 mb-2">
            This life-changing event will feature Pastor E.A. Adeboye, the General Overseer of the Redeemed Christian Church of God (RCCG), delivering a powerful message that will inspire, uplift, and transform your life.
          </p>
          <p class="text-lg text-gray-700 mb-2">Prepare to encounter God's divine power and glory as we worship, pray, and experience His mighty presence. Be sure to invite your friends,
            family, and loved ones to partake in this divine encounter.</p>
          <p class="text-lg text-gray-700 mb-2">Date: 26th Jan, 2025</p>
          <p class="text-lg text-gray-700 mb-2">Time: 7am</p>
          <p class="text-lg text-gray-700 font-semibold mb-2">Don’t miss this extraordinary opportunity to witness Divine Manifestation in your life.</p>
        </div>
        <!-- Image Section -->
        <div class="md:w-1/2 order-1 md:order-2">
          <div class="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            <img 
              src="../assets/RFM.jpg" 
              alt="About Us" 
              class="rounded-lg">
            <div class="absolute inset-0 bg-indigo-500 bg-opacity-30"></div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="bg-blue-900 mb-24 flex justify-center items-center">
        <img src="../assets/ds.JPG" alt="Centered Image" class="max-w-full max-h-full"/>
      </div>
    </section>
    <!-- Testimonies Section -->
    <section class="py-16 bg-gray-100 text-center">
      <h2 class="text-3xl font-semibold mb-8">Testimonies</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-gray-700">
        <div class="bg-white p-6 rounded-lg shadow">
          <p class="italic">"God answered my prayers through the church's prayer sessions, and my family has been blessed tremendously."</p>
          <p class="mt-4 text-right font-semibold">- John D.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <p class="italic">"Since joining RCCG, I’ve found a community of believers who support me in faith and friendship."</p>
          <p class="mt-4 text-right font-semibold">- Sarah W.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <p class="italic">"This church has helped me grow spiritually and has changed my life in ways I can’t even explain."</p>
          <p class="mt-4 text-right font-semibold">- Michael K.</p>
        </div>
      </div>
    </section>

    <!-- Centered Image Section -->
   
  </div>
</template>

<script setup>
// No additional scripts needed for this template.
</script>

<style>
  @keyframes slide-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-slide-left {
    display: inline-block;
    animation: slide-left 50s linear infinite;
  }
</style>
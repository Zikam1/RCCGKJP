<template>
  <div class="bg-gray-100  text-gray-900">
    <section class="relative md:pb-96 bg-[url('/assets/kjp-logo.jpg')] bg-cover bg-center text-white h-80 flex items-center justify-center">
  <div class="absolute inset-0 bg-black bg-opacity-10"></div> 
</section>

    <!-- Mission Statement Section -->
    <section class="py-16 bg-white text-center">
      <h2 class="text-3xl font-semibold mb-4">Our Mission</h2>
      <p class="text-lg max-w-2xl mx-auto text-gray-700">
        Our mission is to reach out to the world, bring them to Christ, and empower them to live victoriously.
      </p>
    </section>

    <!-- Service Times Section -->
    <section class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-semibold text-center mb-8">Service Times</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../assets/ss.jpeg" alt="Service Image" class="w-full h-60 object-cover">
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
            <p class="text-gray-600 text-center">Timing: 5:30 PM - 7:30 PM</p>
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
          <img src="../assets/hhmm.jpg" alt="About Us" class="rounded-lg shadow-lg">
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
          
              <NuxtLink 
        to="/testimonies" 
        class="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg mt-4">
        Click to See Testimonies
      </NuxtLink>
        </div>
        
      </div>
      
    </section>

    <!-- Image Section -->
    <section>
  <div class="mx-auto items-center max-w-3xl px-4 md:px-8">
    <div class="w-full mb-8">
      <img 
        src="../assets/to.jpg" 
        alt="About Us" 
        class="shadow-lg w-full max-h-[500px] object-cover object-center mx-auto rounded-lg">
    </div>
  </div>
</section>

    <!-- Upcoming Events Section -->
    <section class="py-16 bg-white text-center">
  <div class="container mx-auto px-4 lg:px-8">
    <h2 class="text-3xl font-semibold mb-8">Upcoming Programs</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
      <div class="bg-gray-100 p-6 rounded-lg shadow">
        <h3 class="text-2xl font-semibold mb-2">Monthly Revival</h3>
        <p>January 15, 2024 - 6:00 PM</p>
        <p class="mt-2">Join us for a night of worship, prayer, and revival in God’s presence.</p>
      </div>
      <div class="bg-gray-100 p-6 rounded-lg shadow">
        <h3 class="text-2xl font-semibold mb-2">Youth Conference</h3>
        <p>February 25, 2024 - 10:00 AM</p>
        <p class="mt-2">A gathering of young believers focused on spiritual growth and community.</p>
      </div>
      <div class="bg-gray-100 p-6 rounded-lg shadow">
        <h3 class="text-2xl font-semibold mb-2">Women's Retreat</h3>
        <p>March 10, 2024 - 9:00 AM</p>
        <p class="mt-2">Empowering women to live fully in Christ’s love and purpose.</p>
      </div>
    </div>
  </div>
</section>


    <!-- Centered Image Section -->
    <section>
      <div class="bg-blue-900 mb-24 flex justify-center items-center">
        <img src="../assets/DS.JPG" alt="Centered Image" class="max-w-full max-h-full"/>
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
  </div>
</template>

<script setup>
// No additional scripts needed for this template.
</script>

<style scoped>
</style>

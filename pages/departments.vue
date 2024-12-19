<template>
  <section class="bg-gray-100 py-16">
    <!-- Hero Section -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800">Our Departments</h1>
      <p class="text-lg text-gray-600 mt-4">
        Explore the vibrant ministries and departments that make our church family special.
      </p>
    </div>


  


  <div class="container mx-auto p-4">
    <!-- Grid Container -->
    <div class="grid grid-cols-3 gap-6">
      <!-- Column 1 - Department 1 -->
      <div>
        <h2 class="text-xl font-semibold text-center text-blue-600 mb-4">Department 1</h2>
        <div class="space-y-4">
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img src="/assets/youth-11.jpg" alt="Image 1" class="w-full h-auto object-cover">
          </div>
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img src="/assets/youth-11.jpg" alt="Image 2" class="w-full h-auto object-cover">
          </div>
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img src="/assets/youth-11.jpg" alt="Image 3" class="w-full h-auto object-cover">
          </div>
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img src="/assets/youth-11.jpg" alt="Image 4" class="w-full h-auto object-cover">
          </div>
        </div>
      </div>

      <!-- Column 2 - Department 2 -->
      <div>
        <h2 class="text-xl font-semibold text-center text-green-600 mb-4">Department 2</h2>
        <div class="space-y-4">
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img src="/assets/youth-11.jpg" alt="Image 5" class="w-full h-auto object-cover">
          </div>
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img src="/assets/youth-11.jpg" alt="Image 6" class="w-full h-auto object-cover">
          </div>
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img src="/assets/youth-11.jpg" alt="Image 7" class="w-full h-auto object-cover">
          </div>
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img src="/assets/youth-11.jpg" alt="Image 8" class="w-full h-auto object-cover">
          </div>
        </div>
      </div>

      <!-- Column 3 - Department 3 -->
      <div>
        <h2 class="text-xl font-semibold text-center text-red-600 mb-4">Department 3</h2>
        <div class="space-y-4">
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img src="/assets/youth-11.jpg" alt="Image 9" class="w-full h-auto object-cover">
          </div>
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img src="/assets/youth-11.jpg" alt="Image 10" class="w-full h-auto object-cover">
          </div>
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img src="/assets/youth-11.jpg" alt="Image 11" class="w-full h-auto object-cover">
          </div>
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img src="/assets/youth-11.jpg" alt="Image 12" class="w-full h-auto object-cover">
          </div>
        </div>
      </div>
    </div>
  </div>



    
  </section>
  <section class="bg-gray-50 py-12">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold text-center mb-8">Church Departments</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="department in departments"
          :key="department.name"
          class="bg-white p-6 shadow rounded-lg hover:shadow-lg transition"
        >
          <h2 class="text-2xl font-semibold text-blue-600 mb-4">
            {{ department.name }}
          </h2>
          <div class="flex gap-4 mb-4">
            <img
              :src="department.image1"
              :alt="`${department.name} image 1`"
              class="w-1/2 h-32 object-cover rounded-lg"
            />
            <img
              :src="department.image2"
              :alt="`${department.name} image 2`"
              class="w-1/2 h-32 object-cover rounded-lg"
            />
          </div>
          <p class="text-gray-700">{{ department.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const departments = [
  {
    name: "Choir",
    description:
      "Responsible for leading worship and music during church services and events.",
    image1: "/assets/choir-1.jpg",
    image2: "/images/choir2.jpg",
  },
  {
    name: "Ushering",
    description:
      "Ensures smooth organization of church services by guiding members to their seats and maintaining order.",
    image1: "/images/usher1.jpg",
    image2: "/images/usher2.jpg",
  },
  {
    name: "Children's Ministry",
    description:
      "Provides spiritual nurturing and teaching for children in an engaging and age-appropriate manner.",
    image1: "/images/children1.jpg",
    image2: "/images/children2.jpg",
  },
  {
    name: "Prayer Warriors",
    description:
      "Focuses on intercessory prayers for the church, members, and global concerns.",
    image1: "/images/prayer1.jpg",
    image2: "/images/prayer2.jpg",
  },
  {
    name: "Media & Technical Team",
    description:
      "Handles sound, lighting, and projection to ensure seamless audio-visual support for services.",
    image1: "/images/media1.jpg",
    image2: "/images/media2.jpg",
  },
  {
    name: "Hospitality",
    description:
      "Welcomes newcomers, organizes refreshments, and ensures a warm atmosphere in church events.",
    image1: "/images/hospitality1.jpg",
    image2: "/images/hospitality2.jpg",
  },
  {
    name: "Evangelism Team",
    description:
      "Organizes outreach programs to spread the Gospel and connect with the community.",
    image1: "/images/evangelism1.jpg",
    image2: "/images/evangelism2.jpg",
  },
  {
    name: "Sanctuary Keepers",
    description:
      "Ensures cleanliness and maintenance of the church premises.",
    image1: "/images/sanctuary1.jpg",
    image2: "/images/sanctuary2.jpg",
  },
  {
    name: "Welfare Department",
    description:
      "Supports members in need and organizes charitable outreach programs.",
    image1: "/images/welfare1.jpg",
    image2: "/images/welfare2.jpg",
  },
];
</script>

<style scoped>
section {
  background-image: url('/assets/bg-pattern.jpg');
  background-size: cover;
  background-position: center;
}
</style>

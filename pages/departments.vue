<template>
  <section class="bg-gray-100 py-16">
    <!-- Hero Section -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800">Our Departments</h1>
      <p class="text-lg text-gray-600 mt-4">
        Explore the vibrant ministries and departments that make our church family special.
      </p>
    </div>

    <!-- Department Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-24">
      <div
        v-for="department in departments"
        :key="department.id"
        class="bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <!-- Department Title -->
        <div class="p-6">
          <h2 class="text-2xl font-semibold text-gray-700">{{ department.name }}</h2>
          <p class="text-sm text-gray-500 mt-2">{{ department.description }}</p>
        </div>
        
        <!-- Department Images -->
        <div class="grid grid-cols-2 gap-2 p-4">
          <img
            v-for="(image, index) in department.images"
            :key="index"
            :src="image"
            alt="Department Image"
            class="rounded-lg object-cover h-32 w-full"
          />
        </div>
        
        <!-- Learn More Button -->
        <div class="p-4 text-center">
          <button
            class="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const departments = [
  {
    id: 1,
    name: "Choir Department",
    description: "Leading the congregation in worship through music and songs.",
    images: [
      "../assets/choir-1.jpg",
      "../assets/choir-2.jpg",
      "../assets/choir-3.jpg",
      "/assets/choir4.jpg",
    ],
  },
  {
    id: 2,
    name: "Youth Ministry",
    description: "Empowering and mentoring the next generation of leaders.",
    images: [
      "../assets/youth-1.jpg",
      "../assets/youth-2.jpg",
      "../assets/youth-3.jpg",
      "../assets/youth-4.jpg",
    ],
  },
  {
    id: 3,
    name: "Ushering Department",
    description: "Providing a warm welcome and ensuring order during services.",
    images: [
      "/assets/usher1.jpg",
      "/assets/usher2.jpg",
      "/assets/usher3.jpg",
      "/assets/usher4.jpg",
    ],
  },
  {
    id: 4,
    name: "Children's Ministry",
    description: "Teaching kids about the love of God in a fun environment.",
    images: [
      "/assets/children1.jpg",
      "/assets/children2.jpg",
      "/assets/children3.jpg",
      "/assets/children4.jpg",
    ],
  },
  {
    id: 5,
    name: "Prayer Warriors",
    description: "Interceding on behalf of the church and its members.",
    images: [
      "/assets/prayer1.jpg",
      "/assets/prayer2.jpg",
      "/assets/prayer3.jpg",
      "/assets/prayer4.jpg",
    ],
  },
  {
    id: 6,
    name: "Media and Technical",
    description: "Managing sound, visuals, and online streaming for services.",
    images: [
      "/assets/media1.jpg",
      "/assets/media2.jpg",
      "/assets/media3.jpg",
      "/assets/media4.jpg",
    ],
  },
  {
    id: 7,
    name: "Evangelism",
    description: "Sharing the Gospel and winning souls for Christ.",
    images: [
      "/assets/evangelism1.jpg",
      "/assets/evangelism2.jpg",
      "/assets/evangelism3.jpg",
      "/assets/evangelism4.jpg",
    ],
  },
  {
    id: 8,
    name: "Hospitality",
    description: "Welcoming guests and ensuring their comfort during events.",
    images: [
      "/assets/hospitality1.jpg",
      "/assets/hospitality2.jpg",
      "/assets/hospitality3.jpg",
      "/assets/hospitality4.jpg",
    ],
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

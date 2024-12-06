<template>
  <div class="container mx-auto p-8">
    <!-- Dashboard Header -->
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
      <button class="bg-blue-600 text-white py-2 px-4 rounded-md">New Message</button>
    </div>

    <!-- Month Selector -->
    <div class="mb-6">
      <select v-model="selectedMonth" class="border rounded-lg py-2 px-4">
        <option v-for="month in months" :key="month.value" :value="month.value">
          {{ month.label }}
        </option>
      </select>
    </div>

    <!-- Email Messages Section -->
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 class="text-2xl font-semibold text-gray-700">Emails for {{ selectedMonth }}</h2>
      <div v-if="emails.length" class="mt-4">
        <ul>
          <li v-for="email in emails" :key="email.id" class="mb-4">
            <div class="flex justify-between items-center">
              <p class="font-semibold">{{ email.subject }}</p>
              <span class="text-sm text-gray-500">{{ email.date }}</span>
            </div>
            <p class="mt-1 text-gray-700">{{ email.content }}</p>
          </li>
        </ul>
      </div>
      <p v-else class="text-gray-500">No emails for this month.</p>
    </div>

    <!-- Testimonies Section -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-gray-700">Testimonies for {{ selectedMonth }}</h2>
      <div v-if="testimonies.length" class="mt-4">
        <ul>
          <li v-for="testimony in testimonies" :key="testimony.id" class="mb-4">
            <div class="font-semibold">{{ testimony.title }}</div>
            <p class="mt-1 text-gray-700">{{ testimony.content }}</p>
          </li>
        </ul>
      </div>
      <p v-else class="text-gray-500">No testimonies for this month.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Generate months with year
const currentYear = new Date().getFullYear();
const months = [
  { value: '2024-01', label: 'January 2024' },
  { value: '2024-02', label: 'February 2024' },
  { value: '2024-03', label: 'March 2024' },
  { value: '2024-04', label: 'April 2024' },
  { value: '2024-05', label: 'May 2024' },
  { value: '2024-06', label: 'June 2024' },
  { value: '2024-07', label: 'July 2024' },
  { value: '2024-08', label: 'August 2024' },
  { value: '2024-09', label: 'September 2024' },
  { value: '2024-10', label: 'October 2024' },
  { value: '2024-11', label: 'November 2024' },
  { value: '2024-12', label: 'December 2024' }
];

const selectedMonth = ref(months[new Date().getMonth()].value); // Default to current month

const emails = ref([
  { id: 1, subject: 'Meeting Update', date: '2024-11-10', content: 'The meeting will be rescheduled next week.' },
  { id: 2, subject: 'Important Reminder', date: '2024-11-12', content: 'Don\'t forget to submit your reports.' }
]);

const testimonies = ref([
  { id: 1, title: 'Amazing Experience', content: 'This tool helped me manage my tasks efficiently.' },
  { id: 2, title: 'Highly Recommend', content: 'I can\'t imagine working without this feature now.' }
]);

// Update the data based on selected month (You can fetch this from an API or Database)
const updateData = () => {
  // Add your dynamic data fetching logic here
  // For simplicity, we just filter by the month in this example
  emails.value = emails.value.filter(email => email.date.includes(selectedMonth.value));
  testimonies.value = testimonies.value.filter(testimony => testimony.date?.includes(selectedMonth.value));
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

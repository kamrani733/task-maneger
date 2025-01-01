<template>
  <div class="flex">
    <div class="relative w-auto">
      <button
        @click="toggleDropdown"
        class="px-4 py-2 border w-full max-w-xs border-gray-300 bg-white text-gray-700 rounded-l-2xl shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center space-x-2"
      >
        <img width="20" :src="selectedCountry.icon" />
        <span>{{ selectedCountry.code }}</span>
      </button>
      <ul
        v-if="isDropdownOpen"
        class="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-300 rounded shadow-lg z-10"
      >
        <li
          v-for="country in countries"
          :key="country.code"
          @click="selectCountry(country)"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full flex items-center space-x-2"
        >
          <img width="20" :src="country.icon" />
          <span class="text-sm">{{ country.name }} ({{ country.code }})</span>
        </li>
      </ul>
    </div>
    <input
      type="text"
      v-model="phoneNumber"
      placeholder="123 456 789"
      class="w-1/5 px-4 py-2 border border-gray-300 rounded-r-2xl shadow-sm focus:outline-none"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
    const countries = ref([
      {
        name: "United States",
        code: "+1",
        icon: "/icon/us.png",
      },
      {
        name: "United Kingdom",
        code: "+44",
        icon: "/icon/uk.png",
      },
      {
        name: "Australia",
        code: "+61",
        icon: "/icon/ar.png",
      },
      {
        name: "Germany",
        code: "+49",
        icon: "/icon/gr.png",
      },
      {
        name: "France",
        code: "+33",
        icon: "/icon/fr.png",
      },
    ]);

    const selectedCountry = ref(countries.value[0]);
    const isDropdownOpen = ref(false);
    const phoneNumber = ref("");

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const selectCountry = (country) => {
      selectedCountry.value = country;
      isDropdownOpen.value = false;
    };

</script>

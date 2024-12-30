<template>
  <div class="flex flex-col items-start space-y-2">
    <div class="relative">
      <button
        @click="toggleDropdown"
        class="px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center space-x-2"
      >
        <IconLoader :name="selectedCountry.icon" :width="24" :height="24" />
        <span>{{ selectedCountry.name }} ({{ selectedCountry.code }})</span>
      </button>
      <ul
        v-if="isDropdownOpen"
        class="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-10"
      >
        <li
          v-for="country in countries"
          :key="country.code"
          @click="selectCountry(country)"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
        >
          <IconLoader :name="country.icon" :width="24" :height="24" />
          <span>{{ country.name }} ({{ country.code }})</span>
        </li>
      </ul>
    </div>
    <input
      type="text"
      v-model="phoneNumber"
      placeholder="Enter phone number"
      class="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import IconLoader from "../assets/icons/IconLoader.vue";

export default {
  name: "PhoneInput",
  components: { IconLoader },
  setup() {
    const countries = ref([
      {
        name: "United States",
        code: "+1",
        icon: "dashboard",  
      },
      {
        name: "United Kingdom",
        code: "+44",
        icon: "dashboard",  
      },
      {
        name: "Australia",
        code: "+61",
        icon: "dashboard", 
      },
      {
        name: "Germany",
        code: "+49",
        icon: "dashboard", 
      },
      {
        name: "France",
        code: "+33",
        icon: "dashboard", 
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

    return {
      countries,
      selectedCountry,
      isDropdownOpen,
      phoneNumber,
      toggleDropdown,
      selectCountry,
    };
  },
};
</script>


<script setup lang="ts">
import { defineEmits, defineProps, useAttrs } from "vue";
import type { PhoneInputProps } from "./PhoneInput.type";
import { ref, computed } from "vue";
import countries from "./country.json";

const selectedCountry = ref(countries[0]);
const isDropdownOpen = ref(false);

const props = defineProps<PhoneInputProps>();
const emit = defineEmits(["update:modelValue"]);
const attrs = useAttrs();

const phoneNumber = ref(props.modelValue || "");

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const labelFor = computed(() => {
  return (attrs.id as string) || (attrs.name as string) || "default-id";
});
const searchQuery = ref("");
const filteredCountries = computed(() => {
  return countries.filter(country => {
    return country.name.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});
const selectCountry = (country: (typeof countries)[number]) => {
  selectedCountry.value = country;
  isDropdownOpen.value = false;
};
const selectedCountryImg = computed(() => {
  return `https://flagcdn.com/${selectedCountry.value.code.toLowerCase()}.svg`;
});
</script>

<template>
  <div class="relative">
    <div class="flex items-center">
      <div class="relative">
        <button
          @click="toggleDropdown"
          class="h-12 p-4 bg-[#272e3c] text-white rounded-l-2xl hover:bg-[#434e62] flex items-center space-x-2"
        >
          <img width="20" :src="selectedCountryImg" alt="Country flag" />
          <span>{{ selectedCountry.code }}<span class="pl-2">{{ selectedCountry.dialling_code }}</span></span>
        </button>

        <ul
          v-if="isDropdownOpen"
          class="absolute top-full left-0 mt-1 max-h-[300px] overflow-y-scroll w-64 bg-[#272e3c] text-white rounded shadow-lg z-10"
        >
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search country"
            class="w-full p-2 bg-[#434e62] text-white rounded"
          />
          <li
            v-for="country in filteredCountries"
            :key="country.code"
            @click="selectCountry(country)"
            class="h-12 p-4 hover:bg-[#434e62] cursor-pointer flex items-center space-x-2"
          >
            <img
              width="20"
              :src="`https://flagcdn.com/${country.code.toLowerCase()}.svg`"
              alt="Country flag"
              loading="lazy"
            />
            <span class="text-sm">{{ country.name }} ({{ country.dialling_code }})</span>
          </li>
        </ul>
      </div>
      <input
        :id="(attrs.id as string) || (attrs.name as string)"
        v-bind="attrs"
        :value="phoneNumber"
        :placeholder="(attrs.placeholder as string) || ''"
        class="block w-full h-12 p-4 rounded-r-lg bg-[#272e3c] text-white text-base focus:outline-none caret-primary"
        :class="{
          'border-2 border-negative focus:ring-negative focus:border-negative':
            attrs.errorMessage,
          '   focus:ring-primary focus:border-primary': !attrs.errorMessage,
        }"
      />
    </div>

    <label
      v-if="attrs.label"
      :for="labelFor"
      class="block mb-1 text-sm font-medium text-gray-700"
    >
      {{ attrs.label }}
    </label>

    <p
      v-if="attrs.errorMessage"
      class="text-negative mt-2 text-sm"
      data-test="errorMessage"
    >
      {{ attrs.errorMessage }}
    </p>
  </div>
</template>
<style scoped>
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: #353030;
}

::-webkit-scrollbar-thumb {
  background: #777373;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

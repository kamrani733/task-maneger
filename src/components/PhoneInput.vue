<script setup lang="ts">
import { defineEmits, defineProps, useAttrs } from "vue";
import type { PhoneInputProps } from "./PhoneInput.type";
import { ref, computed } from "vue";
import countries from "./country.json";

const selectedCountry = ref(countries[0]);
const isDropdownOpen = ref(false);

const props = defineProps({
  modelValue: String,
  label: {
    type: String,
    default: "",
  },
  errorMessage: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "Enter phone number",
  },
});

const emit = defineEmits(["update:modelValue"]);
const attrs = useAttrs();

const phoneNumber = ref(props.modelValue);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const labelFor = computed(() => {
  return (attrs.id as string) || (attrs.name as string) || "default-id";
});

const searchQuery = ref("");
const filteredCountries = computed(() => {
  return countries.filter((country) => {
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
    <label
      v-if="props.label"
      :for="labelFor"
      class="block mb-1 text-sm font-medium text-gray-700"
    >
      {{ props.label }}
    </label>
    <div class="flex items-center   " :class="props.errorMessage ? 'border-2 border-red-500 rounded' : ''" >
      <div class="relative">
        <button
          @click="toggleDropdown"
          class="h-12 p-4 bg-[#272e3c] text-white rounded-l hover:bg-[#434e62] flex items-center space-x-2"
        >
          <img width="20" :src="selectedCountryImg" alt="Country flag" />
          <span class="flex ml-2 pl-2">
            <div>{{ selectedCountry.code }}</div>
            <span class="pl-1">{{ selectedCountry.dialling_code }}</span>
          </span>
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
            <div class="text-sm flex">
              <div>
                {{ country.name }}
              </div>
              <div class="mr-2">({{ country.dialling_code }})</div>
            </div>
          </li>
        </ul>
      </div>
      <input
        :id="(attrs.id as string) || (attrs.name as string)"
        v-bind="attrs"
        :value="phoneNumber"
        :placeholder="props.placeholder" 
        class="block w-full h-12 p-4 rounded-r bg-[#272e3c] text-white text-base focus:outline-none caret-primary"
        :class="{
          'border-2 border-negative focus:ring-negative focus:border-negative':
            attrs.errorMessage,
          'focus:ring-primary focus:border-primary': !attrs.errorMessage,
        }"
      />
    </div>
  
    <p
      v-if="props.errorMessage"
      class="text-negative font-semibold text-sm text-red-500"
      data-test="errorMessage"
    >
      {{ props.errorMessage }}
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

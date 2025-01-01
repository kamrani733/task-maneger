<script setup lang="ts">
import { defineEmits, defineProps, useAttrs } from "vue";
import type { PhoneInputProps } from "./PhoneInput.type";
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

const props = defineProps<PhoneInputProps>();
const emit = defineEmits(["update:modelValue"]);
const attrs = useAttrs();

const phoneNumber = ref(props.modelValue || "");

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
import { computed } from "vue";

const labelFor = computed(() => {
  return (attrs.id as string) || (attrs.name as string) || "";
});

const selectCountry = (country: (typeof countries.value)[number]) => {
  selectedCountry.value = country;
  isDropdownOpen.value = false;
};

const updatePhoneNumber = (event: Event) => {
  const target = event.target as HTMLInputElement;
  phoneNumber.value = target.value;
};
</script>

<template>
  <div class="relative">
    <div class="flex items-center">
      <div class="relative">
        <button
          @click="toggleDropdown"
          class="h-12 p-4 bg-[#272e3c] text-white  rounded-l-2xl hover:bg-[#434e62]   flex items-center space-x-2"
        >
          <img width="20" :src="selectedCountry.icon" alt="Country flag" />
          <span>{{ selectedCountry.code }}</span>
        </button>

        <ul
          v-if="isDropdownOpen"
          class="absolute top-full left-0 mt-1 w-64 bg-[#272e3c] text-white rounded shadow-lg z-10"
        >
          <li
            v-for="country in countries"
            :key="country.code"
            @click="selectCountry(country)"
            class="h-12 p-4 hover:bg-[#434e62] cursor-pointer flex items-center space-x-2"
          >
            <img width="20" :src="country.icon" alt="Country flag" />
            <span class="text-sm">{{ country.name }} ({{ country.code }})</span>
          </li>
        </ul>
      </div>
      <input
        :id="(attrs.id as string) || (attrs.name as string)"
        v-bind="attrs"
        :value="phoneNumber"
        :placeholder="(attrs.placeholder as string) || ''"
        class="block w-full h-12 p-4   rounded-r-lg  bg-[#272e3c]  text-white   text-base focus:outline-none caret-primary"
        :class="{
          'border-2 border-negative focus:ring-negative focus:border-negative':
            attrs.errorMessage,
          '   focus:ring-primary focus:border-primary':
            !attrs.errorMessage,
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
<template>
  <div class="font-sans bg-[#111130]   w-5/6">
    <div class="rounded-br-lg p-5">
      <h1 class="text-2xl font-bold text-white mb-4">Enter your phone number</h1>
      <div class="flex flex-col gap-6">
        <phoneInput />
      </div>
    </div>
  </div>
</template>
<script setup>
import inputPhone from "./inputPhone.vue";
import phoneInput from "./PhoneInput.vue";
 </script>

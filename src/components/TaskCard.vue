<template>
    <div class="border border-gray-300 rounded-lg p-4 shadow-md max-w-xs">
      <header class="font-bold mb-2 text-lg">
        <slot name="title">عنوان پیش‌فرض</slot>
      </header>
      <main class="mb-3 text-sm">
        <slot>محتوای پیش‌فرض</slot>
      </main>
      <footer>
        <slot name="actions">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
            @click="handleDefaultAction"
          >
            عمل پیش‌فرض
          </button>
        </slot>
      </footer>
    </div>
  </template>
  
  <script setup>
  function handleDefaultAction() {
    alert("عمل پیش‌فرض انجام شد!");
  }
  </script>
  
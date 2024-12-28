<template>
  <div class="font-sans p-6">
    <h1 class="text-2xl font-bold mb-4">مدیریت وظایف</h1>
    <div class="flex flex-wrap gap-6">
       <TaskCard>
        <template #title>
          <h3 class="text-lg font-semibold">وظیفه ۱: مطالعه Vue.js</h3>
        </template>
        <template #actions>
          <button
            @click="markAsDone('مطالعه Vue.js')"
            class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            انجام شد
          </button>
          <button
            @click="deleteTask('مطالعه Vue.js')"
            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            حذف
          </button>
        </template>
        <p class="text-sm text-gray-700">
          یادگیری اسلات‌ها و کامپوننت‌ها در Vue.js
        </p>
      </TaskCard>

       <TaskCard>
        <template #title>
          <h3 class="text-lg font-semibold">وظیفه ۲: تمرین برنامه‌نویسی</h3>
        </template>
        <template #actions>
          <button
            @click="markAsDone('تمرین برنامه‌نویسی')"
            class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            انجام شد
          </button>
          <button
            @click="deleteTask('تمرین برنامه‌نویسی')"
            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            حذف
          </button>
        </template>
        <p class="text-sm text-gray-700">
          حل چند سوال الگوریتمی از سایت LeetCode
        </p>
      </TaskCard>
    </div>
  </div>
</template>

<script setup>
import TaskCard from "./components/TaskCard.vue";

function markAsDone(task) {
  alert(`وظیفه "${task}" انجام شد!`);
}

function deleteTask(task) {
  alert(`وظیفه "${task}" حذف شد!`);
}
</script>

<style>
 </style>

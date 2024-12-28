<template>
  <div class="bg-[#ECECE5] min-h-screen flex items-center justify-center">
    <div class="w-[90%] max-w-[1800px] bg-white rounded-lg p-10">
      <Sidebar />
      <MainPage />
    </div>
  </div>
</template>


<script setup>
import Sidebar from "./components/sideBar.vue";
import MainPage from "./components/mainPage.vue";
</script>

<style></style>

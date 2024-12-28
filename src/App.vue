 <template>
  <div class="bg-Main min-h-screen flex flex-col p-10">
    <div class="w-[90%] m-auto flex flex-1 max-w-[1800px] bg-[#F4F4F4] rounded-2xl p-1">
     <div class="rounded-2xl  flex flex-1 max-w-[1800px] bg-white">
      <Sidebar />
      <MainPage />
     </div>
    </div>
  </div>
</template>

 

<script setup>
import Sidebar from "./components/sideBar.vue";
import MainPage from "./components/mainPage.vue";
</script>

<style></style>

<template>
  <n-config-provider
    :theme="selectedTheme === 'Dark' ? theme : null"
    :theme-overrides="selectedTheme === 'Dark' ? themeOverrides : null"
  >
    <div class="flex flex-row m-5">
      <tasks-sortie class="pr-10"/>
      <image-upload class="pl-10"/>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import type { GlobalTheme, GlobalThemeOverrides } from "naive-ui";
import TasksSortie from "./components/TasksSortie.vue";
import ImageUpload from "./components/ImageUpload.vue";
import { NConfigProvider } from "naive-ui";
import { useThemeStore } from "./stores/theme";
import { ref } from "vue";

const themeStore = useThemeStore();
const theme = ref<GlobalTheme>(themeStore.theme);
const selectedTheme = ref<string>(themeStore.getSelectedTheme);
const themeOverrides = ref<GlobalThemeOverrides>(themeStore.getThemeOverrides);
</script>

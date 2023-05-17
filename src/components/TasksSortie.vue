<!-- Replace all inputs in prod with translated input from dcs-web-editor -->

<template>
  <div class="flex flex-col full w-full">
    <n-input placeholder="Enter a sortie name" class="mb-14" />
    <n-grid :x-gap="12" :y-gap="50" :cols="1">
      <n-grid-item>
        <n-h4>Situation</n-h4>
        <n-input
          v-model:value="situation"
          class="h-full"
          type="textarea"
          placeholder="Situation"
          :resizable="false"
        />
      </n-grid-item>
      <n-grid-item>
        <n-h4>Blue Coalition Tasks</n-h4>
        <n-input
          v-model:value="blueTasks"
          class="h-full"
          type="textarea"
          placeholder="Blue Coalition Tasks"
          :resizable="false"
        />
      </n-grid-item>
      <n-grid-item>
        <n-h4>Red Coalition Tasks</n-h4>
        <n-input
          v-model:value="redTasks"
          class="h-full"
          type="textarea"
          placeholder="Red Coalition Tasks"
          :resizable="false"
        />
      </n-grid-item>
      <n-grid-item>
        <n-h4>Neutral Coalition Tasks</n-h4>
        <n-input
          v-model:value="neutralTasks"
          class="h-full"
          type="textarea"
          placeholder="Neutral Coalition Tasks"
          :resizable="false"
        />
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
import { NInput, NGrid, NGridItem, NH4 } from "naive-ui";
import { useTxtState } from "../stores/txtState";
import { ref } from "vue";

const txt = useTxtState();

const situation = ref(txt.txt.descriptionText);
const blueTasks = ref(txt.txt.descriptionBlueTask);
const redTasks = ref(txt.txt.descriptionText);
const neutralTasks = ref(txt.txt.descriptionNeutralsTask);
</script>

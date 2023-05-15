<!-- Replace Mocky.io/v2/... with prod upload  -->

<template>
  <n-tabs>
    <n-tab-pane name="blue" tab="Blue">
      <n-upload
        action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
        accept=".png, .jpeg, .jpg"
        :default-file-list="previewFileListBlue"
        list-type="image-card"
      />
      <img :src="previewImageUrlBlue" style="width: 100%" />
    </n-tab-pane>
    <n-tab-pane name="neutral" tab="Neutral">
      <n-upload
        action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
        accept=".png, .jpeg, .jpg"
        :default-file-list="previewFileListNeutral"
        list-type="image-card"
      />
      <img :src="previewImageUrlNeutral" style="width: 100%" />
    </n-tab-pane>
    <n-tab-pane name="red" tab="Red">
      <n-upload
        action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
        accept=".png, .jpeg, .jpg"
        :default-file-list="previewFileListRed"
        list-type="image-card"
      />
      <img :src="previewImageUrlRed" style="width: 100%" />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { type UploadFileInfo, NUpload, NTabs, NTabPane } from "naive-ui";

const previewImageUrlRed = ref("");
const previewFileListRed = ref<UploadFileInfo[]>([]);
const previewImageUrlBlue = ref("");
const previewFileListBlue = ref<UploadFileInfo[]>([]);
const previewImageUrlNeutral = ref("");
const previewFileListNeutral = ref<UploadFileInfo[]>([]);
</script>

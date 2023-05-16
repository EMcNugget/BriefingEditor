<template>
  <n-tabs>
    <n-tab-pane name="blue" tab="Blue">
      <n-upload
        accept=".png, .jpeg, .jpg"
        :default-file-list="previewFileListBlue"
        list-type="image-card"
        :custom-request="customRequestBlue"
        :on-remove="onRemove"
      />
    </n-tab-pane>
    <n-tab-pane name="neutral" tab="Neutral">
      <n-upload
        accept=".png, .jpeg, .jpg"
        :default-file-list="previewFileListNeutral"
        list-type="image-card"
        :custom-request="customRequestNeutral"
        :on-remove="onRemove"
      />
    </n-tab-pane>
    <n-tab-pane name="red" tab="Red">
      <n-upload
        accept=".png, .jpeg, .jpg"
        :default-file-list="previewFileListRed"
        list-type="image-card"
        :custom-request="customRequestRed"
        :on-remove="onRemove"
      />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup lang="ts">
import { Ref, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useMapRescStore } from "../stores/mapResourceState";
import {
  type UploadFileInfo,
  NUpload,
  NTabs,
  NTabPane,
  UploadCustomRequestOptions,
} from "naive-ui";

const map = useMapRescStore();

let id = 6;

const changeId = () => {
  return `ResKey_ImageBriefing_${id++}`;
};

const customRequest = (
  { file, onFinish }: UploadCustomRequestOptions,
  previewFile: Ref<UploadFileInfo[]>
) => {
  const reader = new FileReader();
  reader.onloadend = function () {
    const dataUrl = reader.result;
    const id = changeId();
    file.id = id;
    const file_data = {
      name: file.name,
      url: dataUrl as string,
    };
    localStorage.setItem(file.id, JSON.stringify(file_data));
    window.dispatchEvent(new Event("localStorageChange"));
    // console.log("File uploaded: ", file.id);
    // console.log("File name: ", file.name);
    previewFile.value = [
      {
        id: file.id,
        name: file.name,
        status: "finished",
        url: dataUrl as string,
      },
      ...previewFile.value,
    ];
    onFinish();
  };
  reader.readAsDataURL(file.file as Blob);
};

const onRemove = (data: {
  file: UploadFileInfo;
  fileList: UploadFileInfo[];
}) => {
  // console.log("Removing file: ", data.file.id);
  localStorage.removeItem(data.file.id);
  // console.log("localStorage after removal: ", localStorage);

  previewFileListRed.value = previewFileListRed.value.filter(
    (file) => file.id !== data.file.id
  );

  previewFileListBlue.value = previewFileListBlue.value.filter(
    (file) => file.id !== data.file.id
  );

  previewFileListNeutral.value = previewFileListNeutral.value.filter(
    (file) => file.id !== data.file.id
  );
  return true;
};

const customRequestRed = (options: UploadCustomRequestOptions) => {
  customRequest(options, previewFileListRed);
};

const customRequestBlue = (options: UploadCustomRequestOptions) => {
  customRequest(options, previewFileListBlue);
};

const customRequestNeutral = (options: UploadCustomRequestOptions) => {
  customRequest(options, previewFileListNeutral);
};

const previewFileListRed = ref<UploadFileInfo[]>([]);
const previewFileListBlue = ref<UploadFileInfo[]>([]);
const previewFileListNeutral = ref<UploadFileInfo[]>([]);

onMounted(() => {
  localStorage.clear();
  window.addEventListener("localStorageChange", () => {
    const keys = Object.keys(localStorage);
    keys
      .filter((key) => key.includes("ResKey_ImageBriefing_"))
      .map((key) => {
        const data = JSON.parse(localStorage.getItem(key));
        return {
          id: key,
          name: data.name,
          status: "finished",
          url: data.url,
        };
      });
  });
});

onBeforeUnmount(() => {
  localStorage.clear();
});
</script>

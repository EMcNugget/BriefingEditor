import { defineStore } from "pinia";
import { IBriefingImages } from "../types";

const defaultBriefing: IBriefingImages  = {
  pictureFileNameB: ["ResKey_ImageBriefing_6", "ResKey_ImageBriefing_7"],
  pictureFileNameN: ["ResKey_ImageBriefing_17", "ResKey_ImageBriefing_18"],
  pictureFileNameR: ["ResKey_ImageBriefing_14", "ResKey_ImageBriefing_15"],
};
export default defineStore("bf", {
  state: () => ({
    briefing: defaultBriefing,
  }),
  actions: {
    setBluePictures(keys: string[]) {
      this.briefing.pictureFileNameB = keys
    },
    setNeutralPictures(keys: string[]) {
      this.briefing.pictureFileNameN = keys
    },
    setRedPictures(keys: string[]) {
      this.briefing.pictureFileNameR = keys
    },
  }
});

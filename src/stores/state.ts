import { defineStore } from "pinia";
import IBriefing from "../types";

const defaultBriefing: IBriefing = {
  sortie: "DictKey_sortie_5",
  descriptionBlueTask: "DictKey_descriptionBlueTask_3",
  descriptionNeutralsTask: "DictKey_descriptionNeutralsTask_4",
  descriptionRedTask: "DictKey_descriptionRedTask_2",
  descriptionText: "DictKey_descriptionText_1",
  pictureFileNameB: ["ResKey_ImageBriefing_6", "ResKey_ImageBriefing_7"],
  pictureFileNameN: ["ResKey_ImageBriefing_17", "ResKey_ImageBriefing_18"],
  pictureFileNameR: ["ResKey_ImageBriefing_14", "ResKey_ImageBriefing_15"],
};
export default defineStore("bf", {
  state: () => ({
    briefing: defaultBriefing,
  }),
  // State is keys, the set should set the value of the key, everything but images are static keys
});

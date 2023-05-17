import { defineStore } from "pinia";
import { IBriefing } from "../types";

const textBriefing: IBriefing = {
  maxDictId: 6,
  sortie: "",
  descriptionBlueTask: "",
  descriptionNeutralsTask: "",
  descriptionRedTask: "",
  descriptionText: "",
};

export const useTxtState = defineStore("txt", {
  state: () => ({
    txt: textBriefing,
  }),
  actions: {
    setSortie(v: string) {
      this.txt.sortie = v;
    },
    setMaxDictId(v: number) {
      this.txt.maxDictId = v;
    },
    setBlueTask(v: string) {
      this.txt.descriptionBlueTask = v;
    },
    setNeutralTask(v: string) {
      this.txt.descriptionNeutralsTask = v;
    },
    setRedTask(v: string) {
      this.txt.descriptionRedTask = v;
    },
    setSituation(v: string) {
      this.txt.descriptionText = v;
    },
    getAll() {
      return this.txt;
    },
  },
});

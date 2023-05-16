import { IMapResourceInit, IMapResourceFinal } from "../types";
import { defineStore } from "pinia";

const defaultMapResource: IMapResourceFinal = {
  ResKey_ImageBriefing_6: "placeholder.png",
  ResKey_ImageBriefing_7: "placeholder.png",
  ResKey_ImageBriefing_8: "placeholder.png",
};

export const useMapRescStore = defineStore("map", {
  state: () => ({
    map: defaultMapResource,
  }),
  actions: {
    setAll(v: IMapResourceInit[]) {
      this.map = v.reduce<{ [key: string]: string }>((accumulator, current) => {
        accumulator[current.id] = current.name;
        return accumulator;
      }, {});
    },
  },
});

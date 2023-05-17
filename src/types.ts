export interface IBriefingImages {
  pictureFileNameB: string[];
  pictureFileNameN: string[];
  pictureFileNameR: string[];
}

export interface IMapResourceInit {
  id: string;
  name: string;
}


export interface IMapResourceFinal {
  [key: string]: string;
}

export interface IBriefing {
  maxDictId: number;
  sortie: string;
  descriptionBlueTask: string;
  descriptionNeutralsTask: string;
  descriptionRedTask: string;
  descriptionText: string; // Situation
}

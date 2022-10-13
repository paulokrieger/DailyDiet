export type MealDTO = {
  // title: string; // 2022-09-17T08:30:00.000Z
  id: string | number[];
  time: string;
  name: string;
  date: string;
  description: string;
  type: boolean;
};

export type MealGroupDTO = {
  title: string; // 2022-09-17T08:30:00.000Z
  data: MealDTO[];
};

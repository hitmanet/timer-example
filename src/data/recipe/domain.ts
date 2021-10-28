import { Step } from "../step";

export type Recipe = {
  id: string;
  duration: number;
  name: string;
  steps: Step[];
}
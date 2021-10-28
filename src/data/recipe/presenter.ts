import { getEndTime } from "../step/presenter";
import { Recipe } from "./domain";

export const getId = (recipe: Recipe) => recipe.id;
export const getDuration = (recipe: Recipe) => recipe.duration;
export const getSteps = (recipe: Recipe) => recipe.steps;

export const getActiveStep = (recipe: Recipe, currentTime: number) => {
  const steps = getSteps(recipe);

  const secondsGone = getDuration(recipe) - currentTime;

  return steps.find((s) => { 
    return s.startTime <= secondsGone && secondsGone <= getEndTime(s) 
  });
}
import { Step } from ".";

export const getId = (step: Step) => step.id;
export const getDuration = (step: Step) => step.duration;
export const getStartTime = (step: Step) => step.startTime;

export const getEndTime = (step: Step) => getStartTime(step) + getDuration(step);
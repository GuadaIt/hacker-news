import { formatDistance } from "date-fns";

export const dateDistance = (date: number): string => {
    return formatDistance(new Date(date), new Date(), { addSuffix: true });
};

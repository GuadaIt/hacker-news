import { formatDistance } from "date-fns";

export const dateDistance = (date) => {
    return formatDistance(new Date(date), new Date(), { addSuffix: true });
};

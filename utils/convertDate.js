export const convertDate = (isoDate) => {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

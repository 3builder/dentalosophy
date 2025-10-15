export const dateUnixFormat = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  const formatted = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
  return formatted;
};

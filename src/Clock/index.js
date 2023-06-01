import { useCurrentDate } from "./useCurrentDate";

const formatDate = (time) =>
  time.toLocaleDateString("eu-Eu", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

const Clock = () => {
  const date = useCurrentDate();
  return <span>{formatDate(date)}</span>;
};
export default Clock;

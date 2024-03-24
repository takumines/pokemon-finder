import { clsx } from "clsx";

type Props = {
  className?: string;
};

const Spinner = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        "animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent",
        className,
      )}
    />
  );
};

export default Spinner;

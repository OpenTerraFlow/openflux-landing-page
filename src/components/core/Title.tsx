import { JSX } from "react";
import clsx from "clsx";

type TitleProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: string | React.ReactNode;
  className?: string;
};

export const Title = (props: TitleProps) => {
  const { level = 1, children, className } = props;

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={clsx(`text-${level * 2}xl font-bold`, className)}>
      {children}
    </Tag>
  );
};

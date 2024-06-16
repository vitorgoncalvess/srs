import React from "react";

interface Props {
  children: React.ReactNode;
}

const CardTitle = ({ children }: Props) => {
  return <h1 className="text-2xl font-semibold">{children}</h1>;
};

export default CardTitle;

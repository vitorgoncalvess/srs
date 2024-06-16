import React from "react";

interface Props {
  children: React.ReactNode;
}

const CardSubtitle = ({ children }: Props) => {
  return <h2 className="opacity-50 text-sm">{children}</h2>;
};

export default CardSubtitle;

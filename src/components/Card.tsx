import React from "react";

interface Props {
  colSpan?: number;
  children: React.ReactNode;
}

const Card = ({ colSpan, children }: Props) => {
  return (
    <div
      style={{ gridColumn: `span ${colSpan || 1} / span ${colSpan || 1}` }}
      className={`bg-zinc-900 rounded-xl p-4`}
    >
      {children}
    </div>
  );
};

export default Card;

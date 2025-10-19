import React from "react";

interface CustomHeaderProps {
  tittle: string;
  description?: string;
}

export const CustomHeader = ({ tittle, description }: CustomHeaderProps) => {
  return (
    <>
      <div className="content-center">
        <h1>{tittle}</h1>
        <p>{description}</p>
      </div>
    </>
  );
};

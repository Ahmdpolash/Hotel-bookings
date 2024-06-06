import React, { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="px-4 lg:px-16 py-2 mx-auto">{children}</div>;
};

export default Wrapper;

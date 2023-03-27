import React from 'react';

type PropsType = {
  children: React.ReactNode;
};

export const Layout = (props: PropsType) => {
  const { children } = props;

  return (
    <>
      <main>{children}</main>
    </>
  );
};

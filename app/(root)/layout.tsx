import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div>
        Header
        {children}
      </div>
    </main>
  );
};

export default Layout;

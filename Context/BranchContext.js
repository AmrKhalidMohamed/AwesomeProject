import React, { createContext, useState, useContext } from 'react';

const BranchContext = createContext();

export const useBranch = () => {
  return useContext(BranchContext);
};

export const BranchProvider = ({ children }) => {
  const [branch, setBranch] = useState(null);

  return (
    <BranchContext.Provider value={{ branch, setBranch }}>
      {children}
    </BranchContext.Provider>
  );
};

import { createContext, ReactNode, useContext, useState } from "react";

type MembershipContextType = {
  price: number | null;
  period: string;
  setMembership: (price: number, period: string) => void;
};

const MembershipContext = createContext<MembershipContextType | undefined>(undefined);

export function MembershipProvider({ children }: { children: ReactNode }) {
  const [price, setPrice] = useState<number | null>(null);
  const [period, setPeriod] = useState("month");

  function setMembership(newPrice: number, newPeriod: string) {
    setPrice(newPrice);
    setPeriod(newPeriod);
  }

  return (
    <MembershipContext.Provider
      value={{ price, period, setMembership }}
    >
      {children}
    </MembershipContext.Provider>
  );
}

export function useMembership() {
  const context = useContext(MembershipContext);
  if (!context) {
    throw new Error("useMembership must be used inside MembershipProvider");
  }
  return context;
}
import type { ReactNode } from "react";

interface Props{
    children: ReactNode
}

export const SectionComponent = ({children}:Props) => {
  return (
    <section className="p-5 shadow-xl shadow-black/80 rounded-lg">
        {children}
    </section>
  );
};

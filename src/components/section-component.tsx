import type { ReactNode } from "react";

interface Props{
    children: ReactNode
}

export const SectionComponent = ({children}:Props) => {
  return (
    <section className="p-5 mb-10 section-shadow rounded-lg md:py-10">
        {children}
    </section>
  );
};

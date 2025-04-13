import { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren & {
  children: ReactNode;
};

export default function Container({ children }: Readonly<Props>) {
  return (
    <>
      <div className="grid lg:grid-cols-[0.2fr_1fr] mb-10 shadow-2xl shadow-gray-950 lg:rounded-4xl bg-gradient-to-r from-gray-900/60 to-gray-950/60">
        {children}
      </div>
    </>
  );
}

import { ReactNode } from "react";

type Props = {
  title: string;
  children?: ReactNode;
};

export default function Page({ title, children }: Props) {
  return (
    <main className="flex flex-1 flex-col gap-2 p-2">
      <h1 className="text-3xl">{title}</h1>
      {children}
    </main>
  );
}

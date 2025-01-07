export function PrettyObject({ children }: { children?: unknown }) {
  return (
    <div className="whitespace-pre-wrap rounded-md border border-primary p-2 font-mono">
      {JSON.stringify(children, null, "\t")}
    </div>
  );
}

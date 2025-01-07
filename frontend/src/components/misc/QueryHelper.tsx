import { useFetch } from "@/hooks/useFetch";
import { PrettyObject } from "./PrettyObject";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export function QueryHelper({ url }: { url: string }) {
  const result = useFetch(url);

  return (
    <Card className="flex flex-col gap-2 p-2">
      <Button
        variant="outline"
        disabled={result.loading}
        onClick={result.refetch}
      >
        {result.loading ? "Loading..." : `Refetch ${url}`}
      </Button>
      <PrettyObject>{result}</PrettyObject>
    </Card>
  );
}

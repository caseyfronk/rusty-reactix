import { Line, LineChart, Bar, BarChart } from "recharts";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import Page from "@/components/Page";
import { Card } from "@/components/ui/card";

export default function Charts() {
  return (
    <Page title="Dashboard">
      <Barchart />
      <Linechart />
    </Page>
  );
}

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function Barchart() {
  return (
    <Card>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </Card>
  );
}

export function Linechart() {
  return (
    <Card>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <LineChart accessibilityLayer data={chartData}>
          <Line dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Line dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </LineChart>
      </ChartContainer>
    </Card>
  );
}

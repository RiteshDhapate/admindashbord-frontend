"use client";
import { Pie, PieChart } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "General",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Motivation",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Sales",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Real Estate",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Marketing",
    color: "hsl(var(--chart-5))",
  },
};

export default function PaiChart({ aiUsedPer }) {
  const chartData = [
    {
      browser: "General",
      visitors: parseFloat(aiUsedPer["General"]) || 0,
      fill: "bg-green-800",
    },
    {
      browser: "Motivation",
      visitors: parseFloat(aiUsedPer["Motivation"]) || 0,
      fill: "#2DFFD9",
    },
    {
      browser: "Sales",
      visitors: parseFloat(aiUsedPer["Sales"]) || 0,
      fill: "#D3A3FF",
    },
    {
      browser: "Real Estate",
      visitors: parseFloat(aiUsedPer["Real Estate"]) || 0,
      fill: "#6200FF",
    },
    {
      browser: "Marketing",
      visitors: parseFloat(aiUsedPer["Marketing"]) || 0,
      fill: "#FF00C8",
    },
    {
      browser: "Negotiation",
      visitors: parseFloat(aiUsedPer["Negotiation"]) || 0,
      fill: "#729FFF",
    },
  ];

  return (
    <Card className="flex-1 flex flex-col bg-transparent">
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div>
          <div className="flex gap-x-5">
            <div className="flex justify-center items-center gap-x-2">
              <div className="w-[15px] h-[15px] bg-[#6200FF] rounded-sm"></div>
              <div className="text-[15px] font-medium">Real Estate</div>
            </div>
            <div className="flex justify-center items-center gap-x-2">
              <div className="w-[15px] h-[15px] bg-[#D3A3FF] rounded-sm"></div>
              <div className="text-[15px] font-medium">Sales</div>
            </div>
          </div>
          <div className="flex gap-x-5">
            <div className="flex justify-center items-center gap-x-2">
              <div className="w-[15px] h-[15px] bg-[#FF00C8] rounded-sm"></div>
              <div className="text-[15px] font-medium">Marketing</div>
            </div>
            <div className="flex justify-center items-center gap-x-2">
              <div className="w-[15px] h-[15px] bg-[#729FFF] rounded-sm"></div>
              <div className="text-[15px] font-medium">Negotiation</div>
            </div>
          </div>
          <div className="flex gap-x-5">
            <div className="flex justify-center items-center gap-x-2">
              <div className="w-[15px] h-[15px] bg-[#2DFFD9] rounded-sm"></div>
              <div className="text-[15px] font-medium">Motivation</div>
            </div>
            <div className="flex justify-center items-center gap-x-2">
              <div className="w-[15px] h-[15px] bg-green-800 rounded-sm"></div>
              <div className="text-[15px] font-medium">General</div>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

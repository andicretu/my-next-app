import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { type ChartConfig } from "@/components/ui/chart";

// Define Chart Data Type
interface ChartData {
  month: string;
  users: number;
}

// Sample Data
const chartData: ChartData[] = [
  { month: "Jan", users: 200 },
  { month: "Feb", users: 300 },
  { month: "Mar", users: 250 },
  { month: "Apr", users: 400 },
  { month: "May", users: 350 },
  { month: "Jun", users: 450 },
];

const chartConfig: ChartConfig = {
  users: {
    label: "Users",
    color: "#2563eb",
  },
};

export function UserStatisticsChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <BarChart data={chartData} width={500} height={300}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <Bar dataKey="users" fill={chartConfig.users.color} radius={4} />
        <ChartTooltip content={<ChartTooltipContent />} />
      </BarChart>
    </ChartContainer>
  );
}


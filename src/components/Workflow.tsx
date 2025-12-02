import { JSX } from "react";

type NodeColor = "neutral" | "blue" | "purple" | "indigo" | "green";

interface NodeProps {
  label: string;
  color: NodeColor;
}

interface ArrowProps {
  horizontal?: boolean;
}

export default function Workflow(): JSX.Element {
  return (
    <div className="w-full mx-auto py-8">
      <div className="bg-white p-4 md:p-8">
        <div className="md:hidden flex flex-col items-center gap-2">
          <Node label="Input" color="neutral" />
          <Arrow />
          <Node label="Pipeline 1" color="blue" />
          <Arrow />
          <Node label="Pipeline 2" color="purple" />
          <Arrow />
          <Node label="Pipeline 3" color="indigo" />
          <Arrow />
          <Node label="Output" color="green" />
        </div>

        <div className="hidden md:flex items-center justify-center">
          <Node label="Input" color="neutral" />
          <Arrow horizontal />
          <div className="flex items-center gap-2">
            <Node label="Pipeline 1" color="blue" />
            <Arrow horizontal />
            <Node label="Pipeline 2" color="purple" />
            <Arrow horizontal />
            <Node label="Pipeline 3" color="indigo" />
          </div>
          <Arrow horizontal />
          <Node label="Output" color="green" />
        </div>
      </div>
    </div>
  );
}

const colorMap: Record<NodeColor, string> = {
  neutral: "bg-neutral-100 border-neutral-300 text-neutral-700",
  blue: "bg-blue-50 border-blue-200 text-blue-700",
  purple: "bg-purple-50 border-purple-200 text-purple-700",
  indigo: "bg-indigo-50 border-indigo-200 text-indigo-700",
  green: "bg-green-50 border-green-300 text-green-700",
};

function Node({ label, color }: NodeProps): JSX.Element {
  return (
    <div
      className={`rounded-lg px-2 py-2 border text-xs font-semibold ${colorMap[color]}`}
    >
      {label}
    </div>
  );
}

function Arrow({ horizontal = false }: ArrowProps): JSX.Element {
  return (
    <div
      className={`text-blue-400 ${
        horizontal ? "text-xl mx-2" : "text-xl my-2"
      }`}
    >
      {horizontal ? "→" : "↓"}
    </div>
  );
}

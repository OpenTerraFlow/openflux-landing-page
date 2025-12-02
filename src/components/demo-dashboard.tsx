import { WorkflowIcon } from "lucide-react";
import { Title } from "./core/Title";
import { Badge } from "./ui/badge";

export default function WorkflowBuilder() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Browser Frame */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Browser Bar */}
        <div className="bg-gray-100 px-6 py-3 flex items-center gap-3 bg-slate-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 rounded text-xs font-bold bg-slate-500 text-white">
              app.open-flux.io/workflows
            </div>
          </div>
        </div>

        <div className="bg-white min-h-full p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b border-gray-200 gap-4 md:gap-0">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 text-white p-3 rounded-xl font-bold text-lg w-12 h-12 flex items-center justify-center">
                <WorkflowIcon />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-medium">OpenFlux</p>
                <Title
                  level={1}
                  className="font-bold text-gray-900 text-lg md:text-2xl"
                >
                  Workflow builder
                </Title>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-green-200 text-green-700 font-bold px-3 py-1 rounded-full">
                Running
              </Badge>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Data Sources */}
            <div>
              <Title
                level={3}
                className="text-lg font-bold text-gray-900 mb-4 md:mb-6"
              >
                Data Sources
              </Title>
              <div className="space-y-4 md:space-y-5">
                <SourceItem
                  label="PostgreSQL"
                  status="connected"
                  color="blue"
                />
                <SourceItem label="AWS S3" status="connected" color="green" />
                <SourceItem label="MongoDB" status="connected" color="purple" />
              </div>
            </div>

            {/* Right: Workflow Nodes */}
            <div className="flex flex-col items-center justify-center bg-gray-50 px-5 py-6 rounded-xl">
              <div className="space-y-2 w-full overflow-x-auto">
                <div className="flex items-center justify-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 border-2 border-blue-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-md"></div>
                  </div>
                  <div className="text-gray-400 text-lg md:text-xl">→</div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-red-50 border-2 border-red-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-red-500 rounded-md"></div>
                  </div>
                  <div className="text-gray-400 text-lg md:text-xl">→</div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-50 border-2 border-green-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SourceItem({
  label,
  status,
  color,
}: {
  label: string;
  status: string;
  color: string;
}) {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    green: "bg-green-500",
    purple: "bg-purple-600",
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`w-2.5 h-2.5 rounded-full ${colorMap[color]}`}></div>
      <div>
        <p className="font-medium text-gray-900 text-sm">{label}</p>
        <p className="text-xs text-gray-500">{status}</p>
      </div>
    </div>
  );
}

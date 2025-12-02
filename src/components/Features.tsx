import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

export default function FeaturesSection() {
  const features = [
    {
      title: "Data Source Management",
      description:
        "Connect to IoT sensors, databases, APIs, and cloud services, enabling seamless data integration, real-time synchronization, and centralized management for all your datasets.",
      icon: "🗄️",
      link: "/sources",
    },
    {
      title: "Pipeline Execution",
      description:
        "Build, schedule, and monitor data pipelines with real-time status tracking and intelligent error handling.",
      icon: "⚡",
      link: "/pipelines",
    },
    {
      title: "Visual Workflow Builder",
      description:
        "Design complex data workflows with our intuitive drag-and-drop interface, no coding required.",
      icon: "🔧",
      link: "/workflow-builder",
    },
    {
      title: "Dataset Viewer",
      description:
        "Explore and analyze your tabular data with our powerful dataset viewer supporting CSV, Parquet, and more.",
      icon: "📊",
      link: "/dataset-viewer",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Visualize your data with interactive charts and dashboards for real-time business intelligence and impact tracking.",
      icon: "📈",
      link: "/analytics",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
      {features.map((feature, i) => (
        <Card
          key={i}
          className="cursor-pointer bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg gap-2 transition-shadow h-54"
        >
          <CardHeader className="flex items-center">
            <div className="text-2xl">{feature.icon}</div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-bold text-gray-900 ">
              {feature.title}
            </CardTitle>
            <CardDescription className="text-gray-600 leading-relaxed">
              {feature.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

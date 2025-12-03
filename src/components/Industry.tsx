import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function IndustryCards() {
  const industries = [
    {
      title: "Healthcare",
      description:
        "Integrate patient data, research findings, and clinical trials to improve healthcare outcomes and accelerate medical breakthroughs.",
      icon: "❤️",
      gradient: "from-red-50 to-pink-50",
      border: "border-red-100",
      link: "/industries/healthcare",
    },
    {
      title: "Agriculture",
      description:
        "Connect IoT sensors, weather data, and crop analytics to optimize farming practices and increase sustainable yields.",
      icon: "🌱",
      gradient: "from-green-50 to-emerald-50",
      border: "border-green-100",
      link: "/industries/agriculture",
    },
    {
      title: "Renewable Energy",
      description:
        "Monitor solar panels, wind turbines, and energy grids to maximize clean energy production and distribution.",
      icon: "☀️",
      gradient: "from-yellow-50 to-orange-50",
      border: "border-yellow-100",
      link: "/industries/renewable-energy",
    },
    {
      title: "Environmental",
      description:
        "Track water quality, air pollution, and ecosystem health to support conservation and sustainability efforts.",
      icon: "💧",
      gradient: "from-blue-50 to-cyan-50",
      border: "border-blue-100",
      link: "/industries/environmental",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {industries.map((industry, i) => (
        <Card
          key={i}
          className={`bg-gradient-to-br ${industry.gradient} ${industry.border} h-64 gap-2 space-y-0 hover:shadow-lg transition-shadow cursor-pointer`}
        >
          <CardHeader>
            <div className="text-4xl ">{industry.icon}</div>
            <CardTitle className="text-xl font-bold text-gray-900 mb-2">
              {industry.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 leading-relaxed text-sm">
              {industry.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

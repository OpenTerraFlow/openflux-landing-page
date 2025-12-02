import { MoveDown, MoveRight } from "lucide-react";

export default function Pipelines() {
  return (
    <div className=" w-full p-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
        <div className="flex flex-col items-center min-w-24">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center border-2 border-blue-200">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-neutral-700 mt-2">
            Source
          </span>
        </div>
        <div className="hidden md:flex items-center justify-center pb-5 w-10 relative">
          <MoveRight className="h-6" />
        </div>
        <div className="md:hidden flex items-center justify-center h-8 relative">
          <MoveDown className="h-6" />
        </div>
        <div className="flex flex-col items-center min-w-24">
          <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center border-2 border-orange-200">
            <svg
              className="w-8 h-8 text-orange-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-neutral-700 mt-2">
            Transform
          </span>
        </div>
        <div className="hidden md:flex items-center justify-center pb-5 w-10 relative">
          <MoveRight className="h-6" />
        </div>
        <div className="md:hidden flex items-center justify-center h-8 relative">
          <MoveDown className="h-6" />
        </div>
        <div className="flex flex-col items-center min-w-24">
          <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center border-2 border-purple-200">
            <svg
              className="w-8 h-8 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-neutral-700 mt-2">
            Validate
          </span>
        </div>
        <div className="hidden md:flex items-center justify-center pb-5 w-10 relative">
          <MoveRight className="h-6" />
        </div>
        <div className="md:hidden flex items-center justify-center h-8 relative">
          <MoveDown className="h-6" />
        </div>
        <div className="flex flex-col items-center min-w-24">
          <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center border-2 border-green-200">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-neutral-700 mt-2">
            Export
          </span>
        </div>
      </div>
    </div>
  );
}

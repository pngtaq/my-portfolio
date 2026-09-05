import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4 font-geist text-black dark:bg-primary-dark dark:text-white">
      <div className="space-y-4 text-center">
        <p className="text-6xl font-bold sm:text-7xl">404</p>
        <h1 className="text-xl font-semibold sm:text-2xl">Page not found</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          The page you're looking for doesn't exist or has moved.
        </p>

        <Link
          to="/"
          className="mt-2 inline-flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 dark:bg-white dark:text-black"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </div>
  );
}

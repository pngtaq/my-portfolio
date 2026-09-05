import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";

export default function CertificateAndProjectsPageContainer({
  title,
  description,
  children,
}) {
  return (
    <div className="min-h-screen bg-white font-geist text-black dark:bg-primary-dark dark:text-white">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 pt-8">
        <main className="flex-1">
          <div className="pb-7">
            <Link
              to="/"
              className="inline-flex items-center gap-x-2 rounded-md text-sm text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              Back to home
            </Link>

            <h1 className="mt-4 text-2xl font-bold sm:text-3xl">{title}</h1>
            {description ? (
              <p className="mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
                {description}
              </p>
            ) : null}
          </div>

          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}

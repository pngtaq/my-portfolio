import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Hobby from "./components/Hobby.jsx";
import MyImage from "./components/MyImage.jsx";
import MyQuote from "./components/MyQuote.jsx";
import Projects from "./components/Projects.jsx";
import RecentCertification from "./components/RecentCertification.jsx";
import Recommendation from "./components/Recommendation.jsx";
import TechStack from "./components/TechStack.jsx";
import WorkExperience from "./components/WorkExperience.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-geist text-black dark:bg-primary-dark dark:text-white">
      <div className="mx-auto max-w-4xl px-4 pt-8">
        <MyImage />

        <main className="space-y-3">
          {/*
            Both columns are grid items, so they already share the row height.
            Making them flex columns and letting the last card `grow` means the
            shorter column's card absorbs the slack instead of leaving a gap of
            bare page background under it.
          */}
          <div className="grid gap-3 lg:grid-cols-3 lg:items-stretch">
            <div className="flex flex-col gap-3 lg:col-span-2">
              <About />
              <WorkExperience delay={0.05} className="lg:grow" />
            </div>

            <div className="flex flex-col gap-3 lg:col-span-1">
              <MyQuote />
              <TechStack delay={0.05} />
              <Experience delay={0.1} className="lg:grow" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <Hobby />
            <Projects delay={0.05} />
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <RecentCertification />
            <Education delay={0.05} />
          </div>

          {/* Renders only once src/data/recommendations.js has real entries. */}
          <Recommendation />

          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

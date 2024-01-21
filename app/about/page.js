import { Chip, Image, Link } from "@nextui-org/react";
import Navbar from "../Navbar";
import WorkEx from "../common/WorkEx";
import Edu from "./Edu";
import ContactForm from "../ContactForm";
import ContactSection from "../common/Contact";

export default function About() {
  const skillsList = [
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "NextJS",
    "Typescript",
    "Bootstrap",
    "TailwindCSS",
    "Django",
    "MySQL",
    "Python",
    "Git",
    "Github",
    "AWS",
    "Heroku",
    "Firebase",
  ];

  return (
    <>
      <Navbar />

      <section className="px-4 py-20 md:py-40 max-w-[1024px] mx-auto flex flex-col-reverse md:flex-row gap-6 justify-center items-center">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6 border-b-1 w-fit border-warning">
            Who am I?
          </h1>

          <div>
            <p className="mb-2">
              I am <Hlt>Karanjot Singh</Hlt>, a software developer skilled in{" "}
              <Hlt>Full Stack Development</Hlt>. Additionally I have worked in
              Node.JS, NextJS, Django, Flask, Docker, git/github, APIs. I have
              also worked in cloud platforms such as Google cloud and firebase.
            </p>
            <p>
              I offer <Hlt>versatile skill set</Hlt>, strong learning ability,
              problem-solving skills and a collaborative work ethic. I have{" "}
              <Hlt>more than 8 months</Hlt> of experience and am working on
              enhancing my industry level knowledge and contribute to new and
              upcoming technologies.
            </p>
          </div>
        </div>
        <div className="rounded-full overflow-hidden md:w-96 w-60 h-fit opacity-80">
          <Image
            src="/aboutpp.png"
            className="md:w-96 w-60 aspect-square"
            radius="none"
          />
        </div>
      </section>

      <section className="bg-warning-50">
        <div className="px-10 py-20 max-w-[1024px] mx-auto">
          <h1 className="text-4xl font-bold mb-16 border-b-1 border-warning w-fit  mx-auto">
            Key Skills
          </h1>
          <div className="flex flex-wrap gap-2">
            {skillsList.map((skill, index) => (
              <Chip
                key={`${skill}-${index}`}
                color="warning"
                variant="shadow"
                size="lg"
              >
                {skill}
              </Chip>
            ))}
          </div>
        </div>
      </section>

      <section id="work-ex" className="px-10 py-20 max-w-[1024px] mx-auto">
        <div className="px-10 py-40 max-w-[1024px] mx-auto">
          <h1 className="text-4xl font-bold mb-16 border-b-1 border-warning w-fit">
            Work Experience
          </h1>
          <WorkEx />
        </div>
      </section>

      <section id="education" className="bg-neutral-900 ">
        <div className="px-10 py-40 max-w-[1024px] mx-auto">
          <h1 className="text-4xl font-bold mb-16 border-b-1 border-warning w-fit">
            Education
          </h1>
          <Edu />
        </div>
      </section>

      <ContactSection />

      <footer className="px-2 py-4 max-w-[1024px] mx-auto flex justify-between items-center">
        <h2>Karanjot Singh</h2>
        <Link href="#" color="warning">
          Scroll to top
        </Link>
      </footer>
    </>
  );
}

function Hlt({ children }) {
  return <span className="text-xl text-warning">{children}</span>;
}

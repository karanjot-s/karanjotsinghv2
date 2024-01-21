"use client";

import {
  Button,
  Divider,
  Image,
  Input,
  Link,
  Textarea,
} from "@nextui-org/react";
import Navbar from "./Navbar";
import styles from "./page.module.css";
import WorkEx from "./common/WorkEx";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import { Icon } from "@iconify/react";
import ContactSection from "./common/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="px-2">
        <section
          id="hero"
          className="flex justify-center items-center flex-wrap-reverse gap-12 pb-28 pt-12 md:py-40"
        >
          <div className="flex flex-col gap-2 md:gap-4">
            <h3>Hello World!</h3>
            <h1 className="text-3xl md:text-6xl">
              I'm <span className="text-warning font-bold">Karanjot Singh</span>
            </h1>
            <p className="text-md md:text-xl">
              A <strong>Software Developer</strong> currently pursuing B.Tech.
            </p>
            <div className="flex gap-4 mt-6">
              <Button size="lg" color="warning" variant="shadow">
                My Resume
              </Button>
              <Button size="lg" variant="faded">
                Contact Me
              </Button>
            </div>
          </div>
          <div className={styles.imageAvtr}>
            <Image
              className="w-60 md:w-96 "
              alt="Karanjot Singh Avatar"
              src="/avatar.png"
            />
          </div>
        </section>

        <section
          id="about"
          className="bg-warning-50 relative py-40 flex items-center overflow-hidden group"
        >
          <div className="hidden md:flex opacity-50 rotate-90 w-fit absolute left-0 -translate-x-1/4 group-hover:translate-x-0 transition-transform">
            <Image src="/prof-pic.png" className="w-56 md:w-80" radius="none" />
          </div>
          <div className="max-w-[650px] px-4 md:px-0 md:pl-40 mx-auto">
            <h1 className="text-4xl font-bold mb-6 border-b-1 w-fit border-warning">
              Who am I?
            </h1>
            <div>
              <p className="mb-2">
                I am Karanjot Singh, a software developer skilled in Full Stack
                Developer. Additionally I have worked in Node.JS, NextJS,
                Django, Flask, Docker, git/github, APIs. I have also worked in
                cloud platforms such as Google cloud and firebase.
              </p>
              <p>
                I offer versatile skill set, strong learning ability,
                problem-solving skills and a collaborative work ethic. I have
                more than 7 months of experience and am working on enhancing my
                industry level knowledge and contribute to new and upcoming
                technologies.
              </p>
            </div>
            <Button variant="ghost" color="warning" size="lg" className="mt-10">
              View More
            </Button>
          </div>
        </section>

        <section id="work-ex" className="px-10 py-40 max-w-[1024px] mx-auto">
          <h1 className="text-4xl font-bold mb-16 border-b-1 border-warning w-fit">
            Work Experience
          </h1>
          <WorkEx />
        </section>

        <section id="projects" className="px-10 py-20 max-w-[1024px] mx-auto ">
          <h1 className="text-4xl font-bold mb-16 border-b-1 border-warning w-fit">
            A Few of my Projects
          </h1>
          <Projects />
        </section>

        <ContactSection />

        <footer className="px-2 py-4 max-w-[1024px] mx-auto flex justify-between items-center">
          <h2>Karanjot Singh</h2>
          <Link href="#" color="warning">
            Scroll to top
          </Link>
        </footer>
      </main>
    </>
  );
}

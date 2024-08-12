"use client";

import { Button, Chip, Image, Link } from "@nextui-org/react";
import Navbar from "../common/Navbar";
import ContactSection from "../common/Contact";
import { allProjects } from "../common/data";
import { useEffect } from "react";

export default function Projects() {
  const handleMouseMove = (ev) => {
    const allCards = document.querySelectorAll(".project-card");

    allCards.forEach((e) => {
      const blob = e.querySelector(".card-blob");
      const fakeBlob = e.querySelector(".card-blob-fake");

      const fakeRect = fakeBlob.getBoundingClientRect();

      const x = ev.clientX - fakeRect.left - fakeRect.width / 2;
      // const x = ev.clientX;
      const y = ev.clientY - fakeRect.top - fakeRect.height / 2;
      // const y = ev.clientY;

      // console.log(fakeRect.left, y);

      blob.animate(
        [
          {
            transform: `translate(${x}px, ${y}px)`,
          },
        ],
        {
          duration: 300,
          fill: "forwards",
        }
      );
    });
  };

  useEffect(() => {
    // window.addEventListener("mousemove", (e) => {e.x});
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="py-20">
        <h2 className="text-4xl font-bold mb-16 border-b-1 border-warning w-fit m-auto">
          My Projects
        </h2>
        <div className="max-w-[1024px] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
          {allProjects.map((project, index) => (
            <div className="bg-neutral-800 project-card p-[2px] rounded-xl relative overflow-hidden">
              <div className="card-blob blur-[40px] absolute top-0 left-0 w-[250px] h-[250px] rounded-full bg-warning-300 z-10"></div>
              <div className="card-blob-fake blur-[40px] absolute top-0 left-0 w-[250px] h-[250px] rounded-full bg-warning-200 opacity-0"></div>
              <div
                key={`${project.title}-${index}`}
                className="rounded-xl md:w-fit w-10/12 mx-auto bg-neutral-950 z-20 relative transition-transform-background hover:bg-opacity-90"
              >
                <Image src={project.image} className="w-full aspect-video" />

                <div className="p-4">
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tags.map((tag, index) => (
                      <Chip key={`${tag}-${index}`}>{tag}</Chip>
                    ))}
                  </div>
                  <h1 className="text-xl font-bold">{project.title}</h1>
                  <p className="text-sm mb-4">{project.desc}</p>
                  {project.links.map((link, index) => (
                    <Button
                      as={Link}
                      target="_blank"
                      href={link.link}
                      key={`${link.name}-${index}`}
                      className={`w-full ${
                        index !== project.links.length ? "mb-2" : ""
                      }`}
                      color={index === 0 ? "warning" : "default"}
                    >
                      {link.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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

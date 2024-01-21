import { Button, Chip, Image, Link } from "@nextui-org/react";
import Navbar from "../Navbar";
import ContactSection from "../common/Contact";
import { allProjects } from "../common/data";

export default function Projects() {
  return (
    <>
      <Navbar />

      <div className="py-20">
        <h2 className="text-4xl font-bold mb-16 border-b-1 border-warning w-fit m-auto">
          My Projects
        </h2>
        <div className="max-w-[1024px] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
          {allProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="border border-gray-600 rounded-xl md:w-fit w-10/12 mx-auto"
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

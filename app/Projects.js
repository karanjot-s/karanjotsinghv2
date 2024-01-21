import { Button, Image, Link } from "@nextui-org/react";
import { homeProjects } from "./common/data";

export default function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {homeProjects.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className="border border-warning-200 bg-neutral-900 flex flex-col items-center px-4 py-4 rounded-2xl w-fit mx-auto cursor-pointer link"
          >
            <Image
              src={project.image}
              className="w-full aspect-square"
              isZoomed
            />
            <div className="w-full mt-4 px2">
              <h2 className="text-xl font-medium">{project.title}</h2>
              <p className="opacity-80 text-md">{project.desc}</p>
              <div className="mt-4 flex gap-4">
                {project.links.map((link, index) =>
                  index === 0 ? (
                    <Button
                      key={`${link.name}-${index}`}
                      color="warning"
                      variant="flat"
                      as={Link}
                      href={link.link}
                      isExternal
                    >
                      {link.name}
                    </Button>
                  ) : (
                    <Link
                      key={`${link.name}-${index}`}
                      color="warning"
                      variant="flat"
                      underline="hover"
                      href={link.link}
                      isExternal
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button color="warning" variant="faded" as={Link} href="/work">
        View More
      </Button>
    </div>
  );
}

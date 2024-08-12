import { Button, Image, Link } from "@nextui-org/react";
import { homeProjects } from "../common/data";
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
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {homeProjects.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className="project-card bg-neutral-800 overflow-hidden p-[2px] rounded-2xl relative"
          >
            <div className="card-blob blur-[40px] absolute top-0 left-0 w-[250px] h-[250px] rounded-full bg-warning-300 z-10"></div>
            <div className="card-blob-fake blur-[40px] absolute top-0 left-0 w-[250px] h-[250px] rounded-full bg-warning-200 opacity-0"></div>
            <div className="bg-neutral-950 flex flex-col items-center px-4 py-4 rounded-2xl w-fit mx-auto h-full z-20 relative transition-transform-background hover:bg-opacity-90">
              <Image
                src={project.image}
                className="w-full aspect-square"
                isZoomed
              />
              <div className="w-full mt-4 px2 h-full">
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
          </div>
        ))}
      </div>
      <Button color="warning" variant="faded" as={Link} href="/work">
        View More
      </Button>
    </div>
  );
}

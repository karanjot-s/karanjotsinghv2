"use client";

import { usePathname } from "next/navigation";
import cn from "classnames";
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/work" },
  ];

  return (
    <NextNavbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">
            &lt;<span className="text-warning text-xl">Kjot.S</span> /&gt;
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* <NavbarContent className="sm:hidden pr-3" justify="start">
        
      </NavbarContent> */}

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">
            &lt;<span className="text-warning text-xl">Kjot.S</span> /&gt;
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarContent className="hidden sm:flex gap-6 mr-6" justify="end">
          {navItems.map((item, index) => (
            <NavbarItem key={`${item.name}-${index}`}>
              <Link
                color="foreground"
                href={item.path}
                isDisabled={pathname === item.path}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarItem>
          <Link color="warning" href="/resume.pdf" target="_blank">
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#contact" variant="flat">
            Let's Talk
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full"
              color={
                item.path === pathname
                  ? "warning"
                  : index === navItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.path}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextNavbar>
  );
}

// export default function Navbar() {
//   const pathname = usePathname();

//   console.log(pathname === "/");

//   return (
//     <>
//       <div className="flex justify-between items-center px-12 py-8 max-w-page mx-auto select-none">
//         <h1 className="text-white text-2xl font-bold">
//           &lt;<span className="text-accent">KjotS</span> /&gt;
//         </h1>
//         <div className="flex items-center gap-16">
//           <ul className="flex items-center gap-4">
//             <ListItem active={pathname === "/"}>Home</ListItem>
//             <ListItem>About</ListItem>
//             <ListItem>Projects</ListItem>
//             <ListItem>Resume</ListItem>
//           </ul>
//           <button className="border-accent border px-6 py-2 bg-primary400 opacity-100 hover:opacity-80 transition-opacity duration-200">
//             Let's Talk
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// function ListItem({ children, active }) {
//   return (
//     <li
//       className={cn(" font-medium transition-opacity duration-200 px-4", {
//         "opacity-100 cursor-default": active,
//         "opacity-50 cursor-pointer hover:opacity-90": !active,
//       })}
//     >
//       {children}
//     </li>
//   );
// }

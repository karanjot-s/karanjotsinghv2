"use client";

import { Divider, Link, Tooltip } from "@nextui-org/react";
import ContactForm from "../ContactForm";
import { Icon } from "@iconify/react";
import { socialLinks } from "./data";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-neutral-900">
      <div className="px-10 py-20 max-w-[1024px] mx-auto">
        <h1 className="text-4xl font-bold mb-16 border-b-1 border-warning w-fit">
          Let's Connect
        </h1>
        {/* <ContactForm />
        <Divider className="my-6" /> */}
        <div className="flex justify-center items-center gap-4 sm:gap-8">
          {socialLinks.map((social, index) => (
            <Tooltip
              content={`@${social.username}`}
              color="warning"
              closeDelay={800}
            >
              <Link
                href={social.link}
                key={`${social.username}-${index}`}
                target="_blank"
              >
                <Icon
                  icon={social.icon}
                  width={50}
                  height={50}
                  className="text-warning"
                />
              </Link>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
}

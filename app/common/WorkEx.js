"use client";

import { workEx } from "./data";

// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { Icon } from "@iconify/react";

export default function WorkEx() {
  return (
    <ol class="relative border-s border-gray-200 dark:border-gray-700">
      {workEx.map((item, index) => (
        <li class="mb-10 ms-6" key={`${item.title}-${item.index}`}>
          <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-warning-100 dark:bg-warning-50">
            <svg
              class="w-2.5 h-2.5 text-warning-800 dark:text-warning-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {item.title}{" "}
            <span class="bg-blue-100 text-warning-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-warning-50 dark:text-warning-300 ms-3">
              {item.company}
            </span>
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {item.duration}
          </time>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {item.desc}
          </p>
        </li>
      ))}
    </ol>
  );
}

// export default function WorkEx() {
//   return (
//     <VerticalTimeline>
//       <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
//         date="2011 - present"
//         iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         icon={<Icon icon="mdi-light:home" />}
//       >
//         <h3 className="vertical-timeline-element-title">Creative Director</h3>
//         <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//         <p>
//           Creative Direction, User Experience, Visual Design, Project
//           Management, Team Leading
//         </p>
//       </VerticalTimelineElement>
//     </VerticalTimeline>
//   );
// }

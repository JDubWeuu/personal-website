import React from "react";

const Used = ({ skills }: { skills: string[] }) => {
  return (
    <div className="w-11/12">
      <ul className="flex flex-wrap gap-2">
        {" "}
        {/* Ensures wrapping and spacing */}
        {skills.map((skill, i) => (
          <li
            className="border border-black px-2 py-1 text-white bg-black text-sm rounded-full"
            key={i}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Used;
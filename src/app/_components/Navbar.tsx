import React from 'react'

// type Props = {

// }

const Navbar = () => {
    const navElements: string[] = ["About Me", "Projects", "Experience", "Contact"];
  return (
    <nav className="w-full my-2">
      <ul className="flex justify-between items-center w-full max-w-6xl mx-auto gap-x-12 font-medium">
        {navElements.map((s, i) => (
          <li key={i} className="px-4 py-2">
            <button className="hover:underline">{s}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
import React from 'react'
import Link from 'next/link';

// type Props = {

// }

const Navbar = () => {
    const navElements: [string, string][] = [["About Me", "/about"], ["Projects", "/projects"], ["Experience", "/experience"], ["Contact", "/contact"]];
  return (
    <nav className="w-full my-2">
      <ul className="flex justify-between items-center w-full max-w-6xl mx-auto gap-x-12 font-medium">
        {navElements.map((s, i) => (
          <li key={i} className="px-4 py-2">
            <Link className="hover:underline" href={s[1]}>{s[0]}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
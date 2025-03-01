import React from 'react'
import Link from 'next/link';

type LinkProps = {
    GitHub?: string,
    DevPost?: string,
    videoLink?: string
}


const Links = (links: LinkProps) => {
  return (
    <div>
      <ul className="flex justify-between space-x-3 text-blue-500 font-bold underline underline-offset-2">
        {links.GitHub && (
          <>
            <li className="">
              <a href={links.GitHub} target="blank_">
                Github
              </a>
            </li>
          </>
        )}
        {links.DevPost && (
          <>
            <li>
              <Link href={links.DevPost} target="blank_">
                Devpost
              </Link>
            </li>
          </>
        )}
        {links.videoLink && (
          <>
            <li>
              <Link href={links.videoLink} target="blank_">
                Demo
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Links
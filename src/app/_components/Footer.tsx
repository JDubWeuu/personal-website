import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="border-t py-6 md:px-8 md:py-0 w-full">
      <div className="container mx-auto">
        <div className="text-balance text-sm leading-loose text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-y-4 pt-3 pb-6">
            {/* Logo on the left */}
            <div className="flex-shrink-0 md:w-1/4 translate-y-0.5">
              <Link href="/" className="text-lg font-bold">
                JW
              </Link>
            </div>

            {/* Centered Navigation Links */}
            <div className="flex flex-1 justify-center items-center gap-x-6">
              <Link
                href="/about"
                className="underline underline-offset-4 font-medium"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="underline underline-offset-4 font-medium"
              >
                Projects
              </Link>
              <Link
                href="/experience"
                className="underline underline-offset-4 font-medium"
              >
                Experience
              </Link>
              <Link
                href="/contact"
                className="underline underline-offset-4 font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Copyright on the right */}
            <div className="flex-shrink-0 md:w-1/4 text-right">
              2025 Jason Wu &copy; All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

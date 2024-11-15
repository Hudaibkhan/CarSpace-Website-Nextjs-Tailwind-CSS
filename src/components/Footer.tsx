import "../app/globals.css";
import Image from "next/image";

export default function Footer(){
    const currentYear = new Date().getFullYear();
    return(      
        <div className="footer flex flex-col md:flex-row justify-between bg-black text-white items-center px-[10px]">
        <p className="md:text-base text-center">© {currentYear} Hudaib Production &mdash; All rights reserved.</p>
        <div className="contact-links flex items-center gap-[30px]">
            <a
              href="https://github.com/Hudaibkhan"
              target="_blank"
              className="link-item"
            >
              <Image
                src="/github-icon.png"
                alt="GitHub"
                width={40}
                height={40}
                className="icon [border-radius:50%] hover:[box-shadow:0px_0px_5px_blue] md:w-auto w-5 h-auto"

              />
            </a>
            <a
              href="https://www.linkedin.com/in/hudaib-khan-383b21330/"
              target="_blank"
              className="link-item"
            >
              <Image
                src="/linkedin-icon.png"
                alt="LinkedIn"
                width={40}
                height={40}
                className="icon [border-radius:50%] hover:[box-shadow:0px_0px_5px_blue]  md:w-auto w-5 h-auto"

              />
            </a>
            <a
              href="https://www.npmjs.com/~hudaib"
              target="_blank"
              className="link-item"
            >
              <Image
                src="/npm-icon.png"
                alt="Gmail"
                width={30}
                height={30}
                className="icon [border-radius:50%] hover:[box-shadow:0px_0px_5px_blue]  md:w-auto w-5 h-auto"
              />
            </a>
          </div>
        </div>
    )
}
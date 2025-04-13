import { Mail, Phone, Link, Code2 } from "lucide-react";

export default function Contact() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 212, 255, 1) 0%, rgba(4, 60, 161, 0.4) 0%, rgba(2, 0, 36, 1) 93%), url('/images/cityNight.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" h-screen flex items-center justify-center text-white"
    >
      <div className="  z-100 bg-black/60 backdrop-blur-md p-10 rounded-3xl shadow-lg max-w-2xl w-full space-y-6">
        <h1 className="text-3xl font-bold text-center">Contact Me</h1>

        <div className="space-y-4 text-lg">
          <div className="flex items-center gap-3">
            <Mail className="text-cyan-400" />
            <a
              href="mailto:tom.nguyen@windowslive.com"
              className="hover:underline"
            >
              tom.nguyen@windowslive.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-cyan-400" />
            <span>+388 401 7111 04</span>
          </div>

          <div className="flex items-center gap-3">
            <Code2 className="text-cyan-400" />
            <a
              href="https://github.com/kouzber123?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/kouzber123
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link className="text-cyan-400" />
            <a
              href="https://www.linkedin.com/in/tom-nguyen-8a335417b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/tom-lee-nguyen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

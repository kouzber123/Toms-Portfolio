import { NavLink } from "react-router";
const skills = [
  "React",
  "TypeScript",
  "React Native",
  "C#",
  ".NET",
  "EntityFramework",
  "SQL",
  "AspNet",
  "Azure",
  "Microservices",
  "Redux",
  "gRPC",
  "Redis",
  "SignalR",
  "UI/UX Design",
  "DevOps",
  "A Lot More...",
];
export default function Landing() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 212, 255, 1) 0%, rgba(4, 60, 161, 0.4) 0%, rgba(2, 0, 36, 1) 93%), url('/images/cityNight.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-full z-10"
    >
      <div className=" z-10 flex flex-col items-center justify-center  min-h-screen  text-white px-6 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mt-45">
          Build. Innovate. Grow.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-6 max-w-2xl">
          Hi, I'm Tom Lee Nguyen – a passionate Software Developer who loves
          crafting digital experiences that make an impact. Let's create
          something amazing together.
        </p>
        <div className="z-10 mt-8 flex gap-6">
          <NavLink
            to="/portfolio"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all"
          >
            View My Work
          </NavLink>
          <NavLink
            to="/contact"
            className="border border-white text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all"
          >
            Get in Touch
          </NavLink>
        </div>
        <div className=" flex w-full justify-end">
          <div className="rounded-4xl mt-45 flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-24 py-20 bg-gradient-to-r from-gray-600/20 to-gray-700/40 text-white">
            <div className="p-6 rounded-4xl rounded-br-none bg-gradient-to-r from-gray-600/60 to-gray-700/60  flex flex-col max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-6">
                Hi, I'm Tom Lee Nguyen 👋
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                I'm a passionate{" "}
                <span className="text-blue-400 font-semibold">
                  Full-Stack Developer
                </span>{" "}
                with experience in building high-quality web & mobile
                applications. I specialize in creating modern, scalable, and
                user-friendly digital solutions.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mt-4">
                When I'm not coding, you'll find me exploring new tech,
                designing UI/UX, or learning new frameworks to stay ahead of the
                curve.
              </p>
            </div>
            <div className="w-70 h-70 lg:w-75 lg:h-75 rounded-full overflow-hidden shadow-lg">
              <img
                src="\images\cvPicture.jpg"
                alt="Picture of Tom Lee Nguyen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-10 mt-30 text-white py-20 px-6 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-10">
            My Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-center">
            {skills.map((skill) => (
              <div className="bg-blue-950 p-4 rounded-lg shadow-lg">
                <p className="text-xl font-semibold flex justify-center break-words leading-relaxed">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

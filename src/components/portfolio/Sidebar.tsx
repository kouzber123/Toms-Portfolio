import Icon from "../Icon";

export default function Sidebar() {
  return (
    <div className=" z-20 p-4 lg:rounded-4xl lg:rounded-r-none shadow-md shadow-gray-950 flex flex-col lg:w-full text-lg lg:gap-3 gap-4 pl-4">
      <div className="col-span-2 flex justify-center">
        <div className="w-70 h-70 lg:w-70 lg:h-70 rounded-full overflow-hidden shadow-lg">
          <img
            src="\images\cvPicture.jpg"
            alt="Picture of Tom Lee Nguyen"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="col-span-1 mt-4 flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Contact Me At</h2>
        <div className="flex gap-2">
          {<Icon iconName="Mail" iconColor="white" size={30} />}
          <a
            href="mailto:tom.nguyen@windowslive.com"
            className="text-blue-500 underline"
          >
            tom.nguyen@windowslive.com
          </a>
        </div>
        <div className="flex gap-2">
          {<Icon iconName="Phone" iconColor="white" size={30} />}
          <p>+388 401 7111 04</p>
        </div>
        <div className="flex gap-2">
          {<Icon iconName="Linkedin" iconColor="white" size={30} />}
          <a
            href="https://www.linkedin.com/in/tom-nguyen-8a335417b/"
            className="text-blue-500 underline"
            target="_blank"
          >
            https://www.linkedin.com/
          </a>
        </div>
        <div className="flex gap-2">
          {<Icon iconName="Github" iconColor="white" size={30} />}
          <a
            href="https://github.com/kouzber123?tab=repositories"
            target="_blank"
            className="text-blue-500 underline"
          >
            github.com/kouzber123
          </a>
        </div>
      </div>
      <div className="col-span-2 mt-4">
        <h2 className="text-xl font-semibold">Transferable Skills</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Teamwork</li>
          <li>Communication</li>
          <li>Adaptability</li>
          <li>Creativity</li>
          <li>Project Management</li>
          <li>Problem Solving</li>
        </ul>
      </div>
      <div className="col-span-2 mt-2">
        <h2 className="text-xl font-semibold">Personality Traits</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Enjoys challenges and facing adversities</li>
          <li>Deep diver – strong urge to explore topics in depth</li>
          <li>
            Entrepreneurial mindset – learns, grows, adapts, and takes
            accountability
          </li>
          <li>
            Campaigner – independent, creative, embraces bold ideas and action
          </li>
        </ul>
      </div>
    </div>
  );
}

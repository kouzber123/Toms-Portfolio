export default function AboutMe() {
  return (
    <div className="z-10 lg:rounded-4xl lg:rounded-l-none shadow-md shadow-gray-950 flex flex-col p-10 leading-relaxed text-lg gap-3 pl-4 break-words px-10 lg:px-20 lg:text-lg ">
      <h1 className="mt-18 text-2xl lg:text-4xl font-medium font-sans ">
        About me
      </h1>
      <p className="mt-4">
        In addition to my Bachelor’s degree in IT, I’ve been immersed in
        business from a young age, helping my father run our family business.
        This experience instilled in me the importance of delivering
        high-quality products, providing excellent service, and ensuring
        profitability.
      </p>
      <p className="">
        My professional journey has taken me from B2C and B2B roles at Posti,
        where I developed strong skills in independent work, teamwork, and
        customer service, to my current role as a Software Developer at Atea
        Finland.
      </p>
      <p className="">At Atea, I’ve contributed significantly by:</p>
      <ol className="ml-5 list-disc">
        <li>
          Developing high-performance code capable of running millions of
          parallel queries
        </li>
        <li>Creating a mobile application used by thousands of users.</li>
        <li>
          Collaborating with large enterprises to enhance their web services and
          infrastructure.
        </li>
      </ol>
      <p className="">
        With a passion for problem-solving, scalable software, and impactful
        technology, I strive to deliver efficient and innovative solutions that
        drive real value.
      </p>

      <h2 className="mt-10 text-2xl lg:text-3xl font-semibold font-sans">
        Work Experience
      </h2>

      <ul className="mt-4 list-disc ml-5 space-y-4 text-base">
        <li>
          <strong>Atea Finland – Software Developer</strong>
          <br />
          <em>Vantaa | present</em>
          <br />
          - Developed scalable, high-performance services capable of handling
          millions of parallel queries
          <br />
          - Created a mobile app used by thousands of users across Finland
          <br />
          - Collaborated with Global enterprise clients to enhance
          infrastructure and web services
          <br />- Led debugging sessions and performance optimizations on
          critical systems
        </li>
        <li>
          <strong>Experis Academy – .NET Full Stack Developer</strong>
          <br />
          <em>Helsinki | 2023</em>
          <br />
          - Built full-stack web applications using ASP.NET, React, and SQL
          <br />- Designed and implemented RESTful APIs and authentication with
          Keycloak
          <br />- Gained hands-on experience in Azure deployment and CI/CD
          workflows
          <br />- Participated in agile team sprints and code reviews
        </li>
        <li>
          <strong>Posti – Employee</strong>
          <br />
          <em>Järvenpää | 2018 - 2019</em>
          <br />
          - Mail sorting and delivering
          <br />- Customer service
        </li>
        <li>
          <strong>Posti – Employee (Summer Job)</strong>
          <br />
          <em>Espoo | Summer 2019</em>
          <br />- Mail sorting and delivery
        </li>
      </ul>

      <h2 className="mt-10 text-2xl lg:text-3xl font-semibold font-sans">
        Educational History
      </h2>

      <ul className="mt-4 list-disc ml-5 space-y-4 text-base">
        <li>
          <strong>Laurea University of Applied Sciences</strong>
          <br />
          <em>Feb 2019 – Aug 2023 (Ongoing)</em>
          <br />
          - Studied Business Management and Information Technology
          <br />
          - Completed 3 sprint projects with Kesko, Kespro, and Moor
          <br />- GPA: 4.12
        </li>
      </ul>

      <h3 className="mt-6 text-xl lg:text-2xl font-semibold font-sans">
        Technical Skills
      </h3>

      <ul className="mt-2 list-disc ml-5 space-y-2 text-base">
        <li>
          <strong>Extensive Knowledge:</strong> C#, .NET, Entity Framework, SQL,
          JavaScript, React, TypeScript, Angular, NodeJS, MongoDB, Git
        </li>
        <li>
          <strong>Experience:</strong> Python, Robot Framework, PHP
        </li>
      </ul>

      <h2 className="mt-10 text-2xl lg:text-3xl font-semibold font-sans">
        Notable Personal Projects
      </h2>

      <ul className="mt-4 list-disc ml-5 space-y-4 text-base">
        <li>
          <strong>Auction House – Personal Project</strong>
          <br />
          <em>Tech:</em> ASP.NET, C#, Microservices, TypeScript, NextJS,
          SignalR, RabbitMQ, gRPC, SQL
          <br />
          An Auction House App where users can submit vehicles for auction, set
          starting prices and schedules, and participate in real-time bidding.
          Other users can place competitive bids on listed vehicles, driving the
          price up until the auction closes. The platform also includes
          management features for auction house properties.
          <br />
          <a
            href="https://github.com/kouzber123/auctionhouse2.0"
            className="text-blue-500 underline"
          >
            GitHub Repo
          </a>
        </li>
        <li>
          <strong>Lagalt – Experis Academy</strong>
          <br />
          <em>Tech:</em> ASP.NET, KeyCloak, Azure, C#, React.js, MUI, SQL, SSMS
          <br />
          Developed a web platform to connect individuals in creative fields
          with projects that require their specific skillsets. Full-stack
          development including frontend, backend, database, and authentication.
          <br />
          <a
            href="https://github.com/kouzber123/Lagalt-UI"
            className="text-blue-500 underline"
          >
            Frontend Repo
          </a>{" "}
          |
          <a
            href="https://github.com/kouzber123/Lagalt"
            className="text-blue-500 underline"
          >
            {" "}
            Backend Repo
          </a>
        </li>

        <li>
          <strong>Reactivity – Personal Project</strong>
          <br />
          <em>Tech:</em> ASP.NET, C#, TypeScript, MUI, SQL
          <br />
          A social app that helps connect people for public activities. Includes
          features such as following and chat functionality.
          <br />
          <a
            href="https://github.com/kouzber123/Reactivity"
            className="text-blue-500 underline"
          >
            GitHub Repo
          </a>
        </li>

        <li>
          <strong>Restore – Personal Project</strong>
          <br />
          <em>Tech:</em> ASP.NET, C#, TypeScript, MUI, SQL
          <br />
          Developed an e-commerce platform where users can browse products, add
          them to a shopping cart, and purchase via Stripe.
          <br />
          <a
            href="https://github.com/kouzber123/Restore"
            className="text-blue-500 underline"
          >
            GitHub Repo
          </a>
        </li>

        <li>
          <strong>Dating App – Personal Project</strong>
          <br />
          <em>Tech:</em> ASP.NET, C#, Angular, MUI, SQL
          <br />
          A dating website allowing users to register, match, chat, and edit
          their profiles.
          <br />
          <a
            href="https://github.com/kouzber123/datingAPP"
            className="text-blue-500 underline"
          >
            GitHub Repo
          </a>
        </li>

        <li>
          <strong>Blog Website – Personal Project</strong>
          <br />
          <em>Tech:</em> PHP, Laravel, Blade
          <br />
          A Twitter-like blogging platform allowing users to write tweets, like,
          and follow others.
          <br />
          <a
            href="https://github.com/kouzber123/Laravalblogtwitter"
            className="text-blue-500 underline"
          >
            GitHub Repo
          </a>
        </li>
      </ul>
    </div>
  );
}

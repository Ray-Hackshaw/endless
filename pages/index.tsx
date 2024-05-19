import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "./components/ui/Layout";
import Head from "next/head";

const projectsArray = [
  {
    image: "/images/japantrip.png",
    title: "Japan Trip",
    description:
      "An interactive React web-application which visualises a trip in Japan I took in late 2019. Built using React, Mapbox GL JS, GeoJSON, GoogleMaps API and Mapbox API, the route was plotted with interactive 'visited' city markings along the way. Clicking them would pan to each marker, displaying a pop-up infographic which would describe the city and our activities during our time there. It is currently functional with just text, however later in the future I would like to add image galleries to each city to allow the project to be bit more visually interactive.",
    href: "https://japantrip.rayhackshaw.com",
  },
  {
    image: "/images/9spokes.png",
    title: "9Spokes",
    description:
      " As part of a recruitment challenge, I developed a JavaScript application that performed calculations on some basic common accounting metrics. The calculations themselves were all based on common accounting metrics; revenue, expenses, gross profit margin, net profit margin and working capital ratio. I opted to use JavaScript to develop a command line application for the challenge, using a vanilla Node environment with Mocha/Chai for my unit testing libraries. The challenge was deliberately not complex, however it was more aimed at understanding our approach to version control, coding etiquette and our recognition to best practices.",
    href: "https://github.com/Ray-Hackshaw/coding-challenge",
  },
  {
    image: "/images/assembly.png",
    title: "Assembly",
    description:
      "We were asked as a part of university assessment task to design assembly language routines to convert a digit string into an integer and it's subsequent 16-bit float value. We were tasked with designing several input handling methods, such as recognising valid input or finding the first significant bit of the value. This was done entirely through the LC-3 Simulator, which allowed us to recreate and design assembly language routines whilst demonstrating basic IO and variable handling funcionality of a standard IDE. In all honesty I hated a lot about this project. All university stress aside, I believed (and somewhat still do) that learning about assembly language - while in some ways valuable to fundamental computer science principles - did not warrant a project of this magnitude in a second year unversity course. The project itself was also incredibly difficult, as most students had only experienced Python related development up until this point, myself included. While completing the tasks were rewarding, I hope to never have to work in assembly if I can avoid it.",
  },
  {
    image: "/images/isohel2.png",
    title: "Isohel (wip)",
    description:
      "I want to build a React based web application which, using Mapbox and OpenWeatherMap API, is able to plot points between major cities across the world which share the same duration of sunshine. The site will be updated daily at 24:00NZT, with the previous days isohels plotted on a map of the world which the user can interact with and observe. Isohel calculation will be dependent on sunlight times relative to sunset and sunrise; i.e the difference in sunset and sunrise to calculate total sun duration for the given day. Each API call to OpenWeatherMap will return points that will be converted to plottable coordinates that MapBox is able to recognise and configure suitably to fit their own system. This project is currently a work in progress.",
    href: "https://isohel.rayhackshaw.com",
  },
  {
    image: "/images/readingsupply.png",
    title: "Reading Supply",
    description:
      "I maintain and update a readingsupply account, which I use to write about or discuss any ideas I find interesting. These blog style pieces are not exclusively related to computer science. I try and maintain a stable balance between writing creatively as well as programming and logical problem solving. In this field it is particularly easy to become tunnel-visioned on one side of this equation, however I believe that a large part of what makes computer science so interesting is the relationship between humanity and computing and how the two shape one another.",
    href: "https://reading.supply/@rhackshaw",
  },
];

interface Project {
  image: string;
  title: string;
  description: string;
  href?: string;
}

const defaultDescription =
  "I'm always trying to add to this but I can go a while without working on this, so I do apologise if it's not always up to date. Currently this is a mixture of personal projects done in and outside of uni. Hoping to add some more developed personal projects to this now that I have finished university. Feel free to click on any of these projects to bring up a short preview description about it, and also get a link to visit the project directly.";

const HomePage: NextPage = () => {
  const [readMore, setReadMore] = useState(
    "max-h-[130px] md:max-h-full overflow-hidden"
  );
  const [project, setProject] = useState<Project>();
  const [heightPrompt, setHeightPrompt] = useState<string>("Show more");

  // Todo: use a non-hacky solution later
  const handleHeightToggle = () => {
    if (heightPrompt === "Show more") {
      setReadMore("max-h-fit md:max-h-full overflow-hidden");
      setHeightPrompt("Show less");
    } else {
      setReadMore("max-h-[130px] md:max-h-full overflow-hidden");
      setHeightPrompt("Show more");
    }
  };

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My digital portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Layout> */}
        <main className="noise min-h-screen md:p-4 space-y-8 flex items-center justify-center">
          <p className="text-[#fdfdaf] text-3xl">Under construction!</p>

          {/* <div className="sticky top-0 z-40 bg-black bg-opacity-70 text-[#fdfdaf] md:rounded-2xl overflow-hidden border-2 border-[#fdfdaf] md:max-w-lg mx-auto">
            <p className="tracking-[1rem] text-center text-xl font-bold p-4 ">
              PORTFOLIO
            </p>
          </div> */}
          {/* <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 max-w-7xl lg:mx-auto m-8 gap-4">
            {projectsArray.map((project) => (
              <div
                className="relative border-4 shadow-2xl cursor-pointer border-[#fdfdaf] h-72 rounded-xl overflow-hidden card active:border-[#fdc0ad]"
                key={project.title}
                onClick={() => setProject(project)}
                // add toggle active state to keep elevated to -translate-y-20
              >
                <Image
                  src={project.image}
                  fill
                  alt={project.title}
                  quality={100}
                  className={"object-cover"}
                />
                <p className="absolute uppercase bottom-7 text-center text-xl text-black tracking-wider p-2 bg-[#fdfdaf] w-full">
                  {project.title}
                </p>
              </div>
            ))}
          </div>

          <div className="duration-200 sticky bottom-0 max-w-2xl mx-auto shadow-lg overlflow-hidden md:rounded-2xl p-4 leading-tight border-2 border-[#fdfdaf] space-y-4 bg-black bg-opacity-90 text-[#fdfdaf]">
            {!project && (
              <>
                <p className="font-semibold text-center ">
                  Welcome to my portfolio
                </p>
                <p>{defaultDescription}</p>
              </>
            )}
            {project && (
              <div className="space-y-2 min-h-[200px] overflow-hidden">
                <p
                  className="absolute top-2 right-2 p-2 text-white cursor-pointer"
                  onClick={() => setProject(undefined)}
                >
                  X
                </p>
                <p className="text-center text-2xl">{project.title}</p>
                <p className={readMore}>{project.description}</p>
                <div className="flex max-w-2xl mx-auto justify-between md:justify-end pt-2">
                  <button
                    onClick={() => handleHeightToggle()}
                    className="md:hidden border-2 bg-opacity-70 hover:bg-opacity-100 duration-200 border-white text-[#fdfdaf] px-2 py-1 rounded-xl"
                  >
                    {heightPrompt}
                  </button>
                  {project.href && (
                    <button
                      onClick={() => router.replace(project.href!)}
                      className="border-2 bg-opacity-70 hover:bg-opacity-100 duration-200 border-white text-[#fdfdaf] px-2 py-1 rounded-xl"
                    >
                      Go to project &gt;
                    </button>
                  )}
                </div>
              </div>
            )}
          </div> */}
        </main>
      {/* </Layout> */}
    </>
  );
};

export default HomePage;

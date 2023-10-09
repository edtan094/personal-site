import Image from "next/image";
import HelloThere from "./src/images/hello-there.gif";

export default async function Home() {
  return (
    <>
      <main>
        <div className="flex-none md:flex pb-5">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-5xl text-primary text-center">
              Edwin Tan
            </h1>
            <div className="flex justify-center pt-5">
              <Image
                alt="hello there gif"
                src={HelloThere}
                height={300}
                width={300}
                className="mx-auto md:mx-0"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 pt-5 md:pt-0">
            <p>
              Hello there! I currently hold the role of Front End Developer at
              Applied Medical. In 2021, I made a pivotal career decision fueled
              by my desire for more substantial challenges and growth. This led
              me to discover web development, a field that intrigued me with its
              blend of rewards and complexities. I enrolled in a comprehensive
              three-month full stack web development bootcamp. Shortly
              thereafter, I secured my initial position as a Front End
              Developer. However, my thirst for knowledge and dedication to
              continuous improvement persistently drives me forward. This web
              portfolio serves as a platform for showcasing my acquired skills,
              as well as my exploration of new technologies beyond my
              professional responsibilities.
            </p>
            <p className="pt-5">
              Outside of work, I love working out, One Piece is my favorite
              anime, and you might find me at some cool bar or restaurant trying
              new foods
            </p>
          </div>
        </div>
        <div className="w-full md:flex">
          <div className="md:w-1/2"></div>
          <div className="md:w-1/2">
            <div className="md:w-1/2 pt-10 flex-col items-center justify-center">
              <div className="flex flex-col">
                <p>2022 - Present</p>
                <p>Front End Developer - Applied Medical</p>
                <p className="opacity-60">Junior Front End Developer</p>
                <p className="pt-5 text-sm">
                  Developed the front end interface for the company's internal
                  web applications. Other responsibilities included writing unit
                  tests and developing the front end team's CI/CD pipeline
                </p>
              </div>
              <div className="flex flex-col pt-5">
                <p>2021 - 2022</p>
                <p>Teacher Aide for Bootcamp - LearningFuze</p>
                <p className="pt-5 text-sm">
                  Mentored and assisted students 10-15 students a week on HTML,
                  CSS, JavaScript, Node, React, and PostgreSQL. Challenged
                  students to think logically on reaching solutions by
                  practicing pseudo-code. Code reviewed student's code to
                  enforce and teach best practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

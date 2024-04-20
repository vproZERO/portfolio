import { GitHub } from "../assets/github";
import { Netlify } from "../assets/netlify";

export const Card = ({
  title,
  aosData,
  aosDuration,
  description,
  img,
  github,
  netlify,
  frameworks,
}) => {
  return (
    <div
      className="rounded-xl pt-1 px-4 pb-4 bg-primaryBg flex flex-col justify-between aos-init aos-animate"
      data-aos={aosData}
      data-aos-duration={aosDuration}
    >
      <div>
        <h2 className="text-white text-2xl md:text-3xl pb-2 mb-2 border-b-2 border-primary font-bold">
          {title}
        </h2>
        <p className="text-text font-medium text-start text-lg md:text-xl mb-5 md:mb-8">
          {description}
        </p>
        <div className="flex items-center gap-2 flex-wrap mb-8">
          {frameworks?.map((item) => (
            <div
              key={item.id}
              className="bg-primary rounded-2xl text-white capitalize px-3 py-1"
            >
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <h2 className="text-white font-bold text-xl md:text-2xl">
          Source Code :
        </h2>

        <a
          target="_blank"
          className="block  hover:-translate-y-1 transition hover:text-white"
          href={github}
        >
          <GitHub />
        </a>
        <a
          target="_blank"
          className="block w-[30px] hover:-translate-y-1 transition hover:text-white"
          href={netlify}
        >
          <Netlify />
        </a>
      </div>
    </div>
  );
};

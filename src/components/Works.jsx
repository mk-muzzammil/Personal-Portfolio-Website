import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full bg-[#333333] rounded-2xl p-5 sm:w-[360px]"
      >
        <div className="realtive w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-2xl object-cover"
          />
          <div className="absolute inset-0 flex justify-end m-8 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_black")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-[#ffe3e0] font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-[#ffe3e0] text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> My Work </p>
        <h2 className={styles.sectionHeadText}> Projects </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className=" mt-4 text-[17px] text-[#ffe3e0] leading-[30px] max-w-6xl"
        >
          My portfolio highlights a variety of projects that reflect my
          expertise in full-stack and frontend development. From building
          scalable digital libraries with the MERN stack and Next.js to creating
          efficient payroll and event management systems, each project
          demonstrates my ability to deliver user-focused, high-performance
          solutions. Explore my work below to see how I’ve utilized technologies
          like React, Next.js, Node.js, and AWS to solve complex challenges and
          drive results for clients across industries.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href="https://github.com/mk-muzzammil?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-blue-400 hover:text-blue-600 font-semibold underline"
        >
          View All Projects →
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

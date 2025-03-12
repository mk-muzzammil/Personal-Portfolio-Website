import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-[#f05454] p-10 rounded-3xl w-full xs:w-[320px] h-full flex flex-col"
    >
      <p className="text-[#ffe3e0] font-black text-[48px]">"</p>

      {/* This div will grow and push the bottom content down */}
      <div className="flex-grow">
        <p className="text-[#ffe3e0] text-[16px] leading-relaxed">
          {testimonial}
        </p>
      </div>

      {/* User Info - Always at Bottom */}
      <div className="mt-7 flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-[#ffe3e0] font-medium text-[16px]">
            <span className="text-[#121212]">@</span> {name}
          </p>
          <p className="mt-1 text-[#121212] text-[12px]">
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-[#E0E0E0] rounded-[20px]">
      <div
        className={`${styles.padding} bg-[#333333] rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-[#f05454]`}>
            What Others Say?
          </p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

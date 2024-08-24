import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
import { useState } from "react";

const Experience = () => {
  // State to keep track of the selected technology for filtering
  const [selectedTech, setSelectedTech] = useState('');

  // Function to filter experiences based on the selected technology
  const filteredExperiences = selectedTech
    ? EXPERIENCES.filter(experience =>
        experience.technologies.includes(selectedTech))
    : EXPERIENCES;

  // Function to handle technology selection change
  const handleTechChange = (event) => {
    setSelectedTech(event.target.value);
  };

  // Extract all unique technologies from experiences for the filter options
  const allTechnologies = [...new Set(EXPERIENCES.flatMap(experience => experience.technologies))];

  return (
    <div className='pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>
        Experience
      </motion.h2>

      {/* Dropdown for selecting technology */}
      <div className="flex justify-end mb-8 text-black">
          <select className=" bg-peach rounded-sm" onChange={(e) => handleTechChange(e.target.value)} value={selectedTech}>
            <option value="">All</option>
            {allTechnologies.map((tech, index) => (
              <option key={index} value={tech}>{tech}</option>
            ))}
          </select>
        </div>

      <div>
        {filteredExperiences.map((experience, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-neutral-300'>{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold text-peach'>
                {experience.role} - <span className='text-sm text-mauve'>
                  {experience.company}
                </span>
              </h6>
              <p className='mb-4 text-neutral-300'>{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span key={index} className='mr-2 mt-4 rounded bg-mauve-700 px-2 py-1 text-sm font-medium text-neutral-950'>{tech}</span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
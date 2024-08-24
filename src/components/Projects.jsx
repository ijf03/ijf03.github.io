import { PROJECTS } from "../constants";
import {motion} from 'framer-motion'
import { FaLink, FaGlobe } from "react-icons/fa";
import { useState } from "react";


const Projects = () => {
    // State to keep track of the selected technology for filtering
    const [selectedTech, setSelectedTech] = useState('');

    // Function to filter projects based on the selected technology
    const filteredProjects = selectedTech
      ? PROJECTS.filter(project =>
          project.technologies.includes(selectedTech))
      : PROJECTS;
  
    // Function to handle technology selection change
    const handleTechChange = (tech) => {
      setSelectedTech(tech);
    };
  
    // Extract all unique technologies from projects for the filter options
    const allTechnologies = [...new Set(PROJECTS.flatMap(project => project.technologies))];
  
  return (
    <div className="pb-4">
      <div className="my-20">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl">Projects</motion.h2>
        
        <div className="flex justify-end mb-8 text-black">
          <select className=" bg-peach rounded-sm" onChange={(e) => handleTechChange(e.target.value)} value={selectedTech}>
            <option value="">All</option>
            {allTechnologies.map((tech, index) => (
              <option key={index} value={tech}>{tech}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        {filteredProjects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:-100}}
              transition={{duration: 0.5}}
              className="w-full lg:w-1/4">
              <img 
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:100}}
              transition={{duration: 0.5}}
              className="w-full max-w-xl lg:-3/4">
              <h6 className="mb-2 font-semibold text-peach flex items-center">
                {project.title}
                {project.code_link && (
                  <a href={project.code_link} target="_blank" rel="noopener noreferrer" className="ml-4 text-peach">
                    <FaLink className="text-lg" title="Code Link" />
                  </a>
                )}
                {project.live_link && (
                  <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="ml-2 text-peach">
                    <FaGlobe className="text-lg" title="Live Link" />
                  </a>
                )}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className='flex flex-wrap'>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='mr-2 mt-4 rounded bg-mauve-700 px-2 py-1 text-sm font-medium text-neutral-950'>{tech}</span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
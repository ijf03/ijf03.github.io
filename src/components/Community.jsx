import { COMMUNITY } from '../constants';
import { motion } from 'framer-motion';
import { useState } from "react";

const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredCommunity = selectedCategory
    ? COMMUNITY.filter(community =>
        community.category.includes(selectedCategory))
    : COMMUNITY;

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const allCategories = [...new Set(COMMUNITY.flatMap(community => community.category))];

  return (
    <div className='pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>
        Community Involvement
      </motion.h2>

      {/* Dropdown for filtering */}
      <div className="flex justify-end mb-8 text-black">
        <select className="bg-peach rounded-sm" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">All</option>
          {allCategories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col items-center gap-8">
        {filteredCommunity.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl px-4"
          >
           <h6 className='mb-2 font-semibold text-center text-mauve text-lg'>
                {item.title} <span className='text-sm text-peach font-normal'> {item.role || 'Member'}</span>
            </h6>
            <p className='mb-4 text-neutral-300 text-center'>{item.description}</p>
            {item.social_link && (
              <p className="text-center">
                <a href={item.social_link} className="text-sm underline text-blue-300" target="_blank" rel="noreferrer">View more</a>
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Community;

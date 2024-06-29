import {RiReactjsLine} from 'react-icons/ri';
import {TbBrandNextjs} from 'react-icons/tb';
import {SiMongodb} from 'react-icons/si';
import {DiRedis} from 'react-icons/di';
import {FaNodeJs, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const Technologies = () => {
    return (
        <div className='pb-24'>
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-mauve p-4">
                    <RiReactjsLine className="text-7xl text-mauve"/>
                </div>
                <div className="rounded-2xl border-4 border-mauve p-4">
                    <FaPython className="text-7xl text-mauve"/>
                </div>
                <div className="rounded-2xl border-4 border-mauve p-4">
                    <SiMongodb className="text-7xl text-mauve"/>
                </div>
                <div className="rounded-2xl border-4 border-mauve p-4">
                    <DiRedis className="text-7xl text-mauve"/>
                </div>
                <div className="rounded-2xl border-4 border-mauve p-4">
                    <FaNodeJs className="text-7xl text-mauve"/>
                </div>
                <div className="rounded-2xl border-4 border-mauve p-4">
                    <FaHtml5 className="text-7xl text-mauve"/>
                </div>
                <div className="rounded-2xl border-4 border-mauve p-4">
                    <FaCss3Alt className="text-7xl text-mauve"/>
                </div>
            </div>
        </div>
  );
}

export default Technologies;

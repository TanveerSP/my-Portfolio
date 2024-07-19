// ProjectsList.jsx
import React from 'react';
import HoverCard from '../core/HoverCard';
import projects from '../../data/projects';

const ProjectsList = () => {
    return (

        <div className="w-[600px] mx-auto py-8 rounded-2xl ">
            <div className=" grid place-items-center grid-cols-1 grid-rows-2 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {
                    projects.map((projects, index) => (
                        <HoverCard
                            key={index}
                            image={projects.image}
                            title={projects.title}
                            description={projects.description}
                            demoLink={projects.demoLink}
                            codeLink={projects.codeLink}
                        />
                    ))
                }
            </div>
        </div>

    );
};

export default ProjectsList;

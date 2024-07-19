import React from 'react';
import Card from './Card';
import projects from '../../data/projects';

const CardGrid = () => {
    return (
        <div className="w-[600px] mx-auto py-2 rounded-md ">
            <div className=" grid place-items-center grid-cols-1 grid-rows-2 sm:grid-cols-2 lg:grid-cols-2 gap-2">
                {projects.slice(0, 4).map((projects, index) => (
                    <Card
                        key={index}
                        image={projects.image}
                        title={projects.title}
                        description={projects.description}
                        demoLink={projects.demoLink}
                        codeLink={projects.codeLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardGrid;

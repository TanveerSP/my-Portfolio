import React from 'react';
import Card from './Card';
import { projects } from '../../data/projects';

const CardGrid = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        demoLink={project.demoLink}
                        codeLink={project.codeLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardGrid;
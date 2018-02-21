import * as React from 'react';
import './ProjectsCard.scss';
import ProjectItem, { ProjectItemProps } from './ProjectItem/ProjectItem';
import { MdDirectionsCar, MdVideogameAsset, MdLens } from 'react-icons/lib/md';

const projects: ProjectItemProps[] = [
    {
        image: <MdDirectionsCar/>,
        title: 'Filter My Drive',
        desc: 'An app to filter unimportant incoming texts while driving ' +
        'and speech to text important messages using machine learning.',
    },
    {
        image: <MdVideogameAsset/>,
        title: 'LOL Ping Checker',
        desc: 'As manually pinging Riot Games\' servers gets annoying, ' +
        'I developed a GUI to streamline the process for all users checking their terrible ping. ',
    },
    {
        image: <MdLens/>,
        title: 'Naomi',
        desc: 'A chatbot within an app to track and reach your fitness, nutrition and mental health goals.',
    },
];

class ProjectsCard extends React.Component {

    render() {
        return (
            <div className="projects-card">
                {
                    projects.map((projectItem: ProjectItemProps, key: number) => {
                        return (
                        <ProjectItem {...projectItem} key={key}/>
                            );
                        })
                    }
            </div>
        );
    }
}

export default ProjectsCard;
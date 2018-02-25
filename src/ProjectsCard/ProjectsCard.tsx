import * as React from 'react';
import './ProjectsCard.scss';
import ProjectItem, { ProjectItemProps } from './ProjectItem/ProjectItem';
import { MdDirectionsCar, MdVideogameAsset, MdLens } from 'react-icons/lib/md';
import ExpansionCard from '../General/ExpansionCard/ExpansionCard';
import ExpandButton from '../General/ExpandButton/ExpandButton';

interface ProjectsCardProps {
    expanded: boolean;

    toggleExpand: () => void;
}

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

const moreProjects = [
    ...projects,
];

class ProjectsCard extends React.Component<ProjectsCardProps> {

    render() {
        return (
            <div className="projects-card">
                <ExpandButton toggleExpand={this.props.toggleExpand}/>
                {
                    this.props.expanded ?
                        <ExpansionCard
                            title="Projects"
                            desc="Some projects I've made and short descriptions"
                            listOfProps={moreProjects}
                            Component={ProjectItem}
                            toggleExpanded={this.props.toggleExpand}
                        />
                        :
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
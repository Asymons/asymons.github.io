import * as React from 'react';
import './ProjectsCard.scss';
import ProjectItem, { ProjectItemProps } from './ProjectItem/ProjectItem';
import { MdCloud, MdVideogameAsset, MdLens } from 'react-icons/lib/md';
import ExpansionCard from '../General/ExpansionCard/ExpansionCard';
import ExpandButton from '../General/ExpandButton/ExpandButton';

interface ProjectsCardProps {
    expanded: boolean;

    toggleExpand: () => void;
}

const projects: ProjectItemProps[] = [
    {
        image: <MdCloud/>,
        title: 'Interviewtracker.ca',
        desc: 'A website to track the job application process and store recruiter information.',
    },
    {
        image: <MdVideogameAsset/>,
        title: '1v1memid',
        desc: 'An exploration into GraphQl. It\'s a website that pairs league of legends players together ' +
        'for spontaneous 1v1s. ',
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
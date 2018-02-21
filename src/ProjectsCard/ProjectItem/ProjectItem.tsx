import * as React from 'react';
import './ProjectItem.scss';

export interface ProjectItemProps {
    image: JSX.Element;
    title: string;
    desc: string;
}

class ProjectItem extends React.Component<ProjectItemProps> {

    render() {
        return (
            <div className="project-item">
                <div className="project-image">
                    {this.props.image}
                </div>
                <div className="project-info-container">
                    <div className="project-title">
                        {this.props.title}
                    </div>
                    <div className="project-desc">
                        {this.props.desc}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectItem;
import React from 'react';
import PropTypes from 'prop-types';
import {Collapsible, CollapsibleItem} from 'react-materialize';

function MyWork(props){
  return (
    <div>
      <h5>{props.header}</h5>
      <Collapsible accordion>
        {props.projects.map((project, index) => 
          <CollapsibleItem key={index} header={project.name}>
            <p>{project.description}</p>
            {project.link ? <a href={project.link}>Deployed here</a>: null}
          </CollapsibleItem>
        )}
      </Collapsible>
    </div>
  );
}
MyWork.propTypes = {
  header: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string
  })).isRequired
};
export default MyWork;

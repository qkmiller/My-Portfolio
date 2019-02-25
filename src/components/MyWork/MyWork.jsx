import React from 'react';
import PropTypes from 'prop-types';
import {Collapsible, CollapsibleItem} from 'react-materialize';

function MyWork(props){
  return (
    <div class="row container">
      <h5>Here is some of my work as a programmer</h5>
      <Collapsible accordion>
        {props.projects.map((project, index) => 
          <CollapsibleItem key={index} header={project.name}>
            {project.description}
          </CollapsibleItem>
        )}
      </Collapsible>
    </div>
  );
}
MyWork.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};
export default MyWork;

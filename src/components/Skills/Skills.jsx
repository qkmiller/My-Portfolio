import React from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import PropTypes from 'prop-types';

function Skills(props){
  return (
    <CollapsibleItem onSelect={()=>{}} header='Skills'>
      <Collapsible accordion defaultActiveKey={1}>
        {props.skills.map((skill, index) => 
          <CollapsibleItem key={index} header={skill.name}>
            {skill.description}
          </CollapsibleItem>
        )}
      </Collapsible>
    </CollapsibleItem>
  );
}
Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};


export default Skills;
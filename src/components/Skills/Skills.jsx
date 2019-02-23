import React from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import PropTypes from 'prop-types';


function Skills(props){
  return (
    <CollapsibleItem onSelect={()=>{}} header="Skills" icon='filter_drama'>
      <Collapsible accordion defaultActiveKey={1}>
        {props.skills.map((skill, index) => 
          <CollapsibleItem key={index} header={skill.name} icon='filter_drama'>
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
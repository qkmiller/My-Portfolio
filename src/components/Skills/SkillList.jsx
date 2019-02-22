import React from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import PropTypes from 'prop-types';

function SkillList(props){
  return (
    <div>
      <Collapsible popout defaultActiveKey={1}>
        <CollapsibleItem header="Skills" icon='filter_drama'>
          <Collapsible accordion defaultActiveKey={1}>
            {props.skills.map((skill, index) => 
              <CollapsibleItem key={index} header={skill.name} icon='filter_drama'>
                {skill.description}
              </CollapsibleItem>
            )}
          </Collapsible>
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
}
SkillList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};


export default SkillList;
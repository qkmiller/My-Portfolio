import React from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import PropTypes from 'prop-types';

function Skills(props){

  return (
    <div>
      <h4>Skills</h4>
      <Collapsible accordion defaultActiveKey={1}>
        {}
        <CollapsibleItem header={props.skills.javascript.name} icon='filter_drama'>
          {props.skills.javascript.description}
        </CollapsibleItem>
        <CollapsibleItem header={props.skills.ruby.name} icon='place'>
          {props.skills.ruby.description}
        </CollapsibleItem>
        <CollapsibleItem header={props.skills.sql.name} icon='whatshot'>
          {props.skills.sql.description}
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
}

Skills.PropTypes = {
  skills: PropTypes.object
};

export default Skills;
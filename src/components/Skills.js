import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const skills = [
  {name: '#HTML5',},{name: '#CSS3',},{name: '#jQuery',},{name: '#React',}
  ,{name: '#Front-end',},{name: '#Express',},{name: '#MongoDB',},{name: '#NodeJS',},{name: '#Back-end',}
  ,{name: '#JavaScript',},{name: '#SASS',},{name: '#Bootstrap 3/4',},{name: '#Responsive',}
  ,{name: '#Git',},{name: '#Github',},{name: '#Mocha',},{name: '#Linux',},{name: '#Jasmine',}
  ,{name: '#TDD'}
]

export default class Skills extends React.Component {

  render() {
    return (
      <div style={styles.wrapper} className="mobile-competences">
        {skills.map((data) => (
          <Chip style={styles.chip}>
            {data.name}
          </Chip>
        ))}
      </div>
    );
  }
}

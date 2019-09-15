import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/css/projects.css';

class Projects extends Component {
  componentDidMount() {
    document.title = "Alec Cuccia • Projects";
    this.props._setHeader('Projects');
  }

  render() {
    const projects = [
      { name: 'enjambment', designation: 'enjambment' },
      { name: 'Neon Circles', designation: 'neon_circles' },
      { name: 'Ruby Chess', designation: 'ruby_chess' },
    ];

    return(
      <section className={ `portfolio portfolio--${this.props.navbarLarge ? 'invisible' : 'visible'}`} >
        {
          projects.map((project, idx) => (
            <Link key={ `pro-${ idx }` } to={ `/projects/${ project.designation }` } className="portfolio__link">
              <img
                className="portfolio__link__img"
                src={ `img/portfolio/${ project.designation }.png` }
                alt={ `Logo for ${ project.name }. Click to view project.` } />
            </Link>
          ))
        }
      </section>
    );
  }
}

export default Projects;

import React from 'react';

function ProjectItem({ href, imgSrc, alt, title, category }) {
  return (
    <li
      className="project-item active"
      data-filter-item
      data-category={category.toLowerCase()}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <figure className="project-img">
          <div className="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src={imgSrc} alt={alt} loading="lazy" />
        </figure>

        <h3 className="project-title">{title}</h3>

        <p className="project-category">{category}</p>
      </a>
    </li>
  );
}

export default ProjectItem;
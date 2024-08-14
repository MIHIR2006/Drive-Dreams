import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('tabs-1');

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="more-info">
      <div className="container">
        <div className="section-heading">
          <h2>Read our <em>Blog</em></h2>
          <span>Aliquam id urna imperdiet libero mollis hendrerit</span>
        </div>

        <div className="row" id="tabs">
          <div className="col-md-4">
            <ul>
              <li>
                <Link to="#tabs-1" onClick={() => handleTabClick('tabs-1')}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing <br/>
                  <small>John Doe &nbsp;|&nbsp; 27.07.2020 10:10</small>
                </Link>
              </li>
              <li>
                <Link to="#tabs-2" onClick={() => handleTabClick('tabs-2')}>
                  Mauris lobortis quam id dictum dignissim <br/>
                  <small>John Doe &nbsp;|&nbsp; 27.07.2020 10:10</small>
                </Link>
              </li>
              <li>
                <Link to="#tabs-3" onClick={() => handleTabClick('tabs-3')}>
                  Class aptent taciti sociosqu ad litora torquent per <br/>
                  <small>John Doe &nbsp;|&nbsp; 27.07.2020 10:10</small>
                </Link>
              </li>
            </ul>

            <br/>

            <div className="text-center">
              <Link to="/" className="filled-button">Read More</Link>
            </div>

            <br/>
          </div>

          <div className="col-md-8">
            <section className="tabs-content">
              <article id="tabs-1" style={{ display: activeTab === 'tabs-1' ? 'block' : 'none' }}>
                <img src={require("../images/blog-image-1-940x460.jpg")} alt=""/>
                <h4><Link to="blog-details.html">Lorem ipsum dolor sit amet, consectetur adipisicing.</Link></h4>
                <p>Sed ut dolor in augue cursus ultrices. Vivamus mauris turpis, auctor vel facilisis in, tincidunt vel diam. Sed vitae scelerisque orci. Nunc non magna orci. Aliquam commodo mauris ante, quis posuere nibh vestibulum sit amet.</p>
              </article>
              <article id="tabs-2" style={{ display: activeTab === 'tabs-2' ? 'block' : 'none' }}>
                <img src={require("../images/blog-image-2-940x460.jpg")} alt=""/>
                <h4><Link to="blog-details.html">Mauris lobortis quam id dictum dignissim</Link></h4>
                <p>Sed ut dolor in augue cursus ultrices. Vivamus mauris turpis, auctor vel facilisis in, tincidunt vel diam. Sed vitae scelerisque orci. Nunc non magna orci. Aliquam commodo mauris ante, quis posuere nibh vestibulum sit amet</p>
              </article>
              <article id="tabs-3" style={{ display: activeTab === 'tabs-3' ? 'block' : 'none' }}>
                <img src={require("../images/blog-image-3-940x460.jpg")} alt=""/>
                <h4><Link to="/">Class aptent taciti sociosqu ad litora torquent per</Link></h4>
                <p>Mauris lobortis quam id dictum dignissim. Donec pellentesque erat dolor, cursus dapibus turpis hendrerit quis. Suspendisse at suscipit arcu. Nulla sed erat lectus. Nulla facilisi. In sit amet neque sapien. Donec scelerisque mi at gravida efficitur. Nunc lacinia a est eu malesuada. Curabitur eleifend elit sapien, sed pulvinar orci luctus eget.
                </p>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

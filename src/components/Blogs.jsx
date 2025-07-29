import React from "react";

function Blogs() {
  return (
    <article className="blogs active" data-page="blogs">
      <header>
        <h2 className="h2 article-title">Blogs</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          <li className="blog-post-item">
            <a href="https://omm-pani-blogs.hashnode.dev/how-i-built-my-own-llm-from-scratch-a-students-deep-dive-into-ai">
              <figure className="blog-banner-box">
                <img
                  src="/assets/images/LLM_blog.png"
                  alt="How I Built My Own LLM From Scratch"
                  loading="lazy"
                />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">AI</p>
                  <p className="blog-category">LLM</p>
                  {/* <span className="dot"></span> */}
                </div>
                <h3 className="h3 blog-item-title">
                  How I Built My Own LLM From Scratch
                </h3>
                <p className="blog-text">
                  A student's deep dive into the world of Large Language Models.
                </p>
              </div>
            </a>
          </li>

          <li className="blog-post-item">
            <a href="https://omm-pani-blogs.hashnode.dev/react-under-the-hood-of-usestate">
              <figure className="blog-banner-box">
                <img
                  src="/assets/images/useState_blog.png"
                  alt="Another Blog Post"
                  loading="lazy"
                />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Web Dev</p>
                  <p className="blog-category">React</p>
                  {/* <span className="dot"></span> */}
                </div>
                <h3 className="h3 blog-item-title">
                  React: UseState Under the Hood
                </h3>
                <div className="blog-text">
                  <strong>
                    Did you know React doesn't store state in plain variables?
                  </strong>
                  <p>
                    Under the hood, it uses linked lists, update queues, and
                    slot-based lookups — even your humble{" "}
                    <code>useState(0)</code> kicks off a mini linked list behind
                    the scenes.
                  </p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Blogs;

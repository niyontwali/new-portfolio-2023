import Link from "next/link";
const Blog = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Latest Posts
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-1.png" alt="" />
              </span>
              <div className="content">
                <span className="category">Web Dev</span>
                <span className="title">
                  Getting started with Next.Js
                </span>
                <p>
                  Nextjs is a React fronted development web framework which enables functionality such as server-side rendering and static site generation
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>11 June 2023</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-user" />
                    <span>John Niyontwali</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */} 
         {/* POST ITEM STARTS */}
         <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-1.png" alt="" />
              </span>
              <div className="content">
                <span className="category">Web Dev</span>
                <span className="title">
                  Getting started with Next.Js
                </span>
                <p>
                  Nextjs is a React fronted development web framework which enables functionality such as server-side rendering and static site generation
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>11 June 2023</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-user" />
                    <span>John Niyontwali</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */} 
      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};
export default Blog;

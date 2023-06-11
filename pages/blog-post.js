import { Fragment, useEffect } from "react";

const BlogPost = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div className="blog-content">
        <h1>My Blog</h1>
        {/* ARTICLE STARTS */}
        <div className="main-post">
          {/* META STARTS */}
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
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>Getting started with Next.Js</h3>
          <img src="assets/blog/blog-post-1.png" alt="Blog image" />
          <div className="post-content">
            <p>
              <h4>Introduction</h4>
              <br />
              Nextjs is a React frontend development web framework that enables functionality such as server-side rendering and static site generation. It is open-source and is built using Node.js and Babel and connects with React to create Single Page Apps (SPA). In the other words its a framework built on top of react to give you extra features. Due to server-side rendering and static generation, next.js applications are incredibly faster that react.js applications.
            </p>
            <p>
            <br />
            <h4>Pros of Next.js</h4>
            <br />
              1. Next.js apps are fast and give a more logical approach to data management due to Server-side Rendering and Static Generation. Native image optimization features improve performance as well.
              <br />
              2. Next.js, applications are easy to create. To build pages, for example, simply add the page to the pages folder and the necessary header component link. This simplifies your life since you write less code, and the project is easier to follow, resulting in better project management.
              <br />
              3. Images are scaled and sent in the best, latest formats, such as WebP, and are tailored to fit into smaller viewports.
              <br />
              4. Vercel, the startup behind Next.js, wanted to make it as simple as possible to deploy React projects. And they succeeded, which means you're only a few clicks away from being ready for deployment.
              <br />
              5. One of the reasons Next.js is so popular among developers is that it supports Typescript.
            </p>
            <p>
              <h4>Cons of Next.js</h4>
              <br />
            1. Next.js routing system is just a file system, which is insufficient for some tasks but not all. Node.js is the technology to have on hand for creating dynamic routes, therefore developers must be familiar with it.
            <br />
            2. It is modest but expanding by the day as Next.js becomes one of the most popular online building pieces. The skill pool and demand for Next.js developers is growing, which means there are more options for individuals wishing to make a name for themselves in modern application development.
            <br />
            <br />
            <h4>Which is the right framework to use React or Next?</h4>
            <br /> 
            In their ways, both React and Next.js present excellent options for developers. React allows you to construct things exactly as you want them to be and is backed by a large community. Next.js makes your life simpler by providing several tools and standards out of the box, and it is also backed by a thriving open source community. They're simple to get started with and easy to obtain support with, whether through documentation or community resources.
            <br />
            React is a wonderful complement to any project. What's more, if, given the chance, it can scale as well. React is more adaptable than Next.js simply because it is a library. It is up to the engineer to decide whether to implement it.
            <br />
            <br />
            <h4>Installation</h4>
              <br />
            
            1. You need to have Node.js
            <br />
            2. You also need to have a code editor, i would recommend you to use VScode
            <br />
            3. Head to your terminal and cd into the project repo and run the following npx create-next-app ./
            <br />
            4. To run the development app npm run dev
            <br />
            5. After than you can now change the index.js file in the pages to include your code. You can also create a component folder in the root directory where you can include all your component files
            <br />
            6. Note that whatever file you include in the pages is considered as a route itself eg. If we have a file named about.js in the pages folder. The about page can be reached by just visiting base_url/about
            <br />

            </p>
          </div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
      </div>
    </Fragment>
  );
};
export default BlogPost;

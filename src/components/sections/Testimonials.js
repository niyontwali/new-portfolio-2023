const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " I worked with John, he was very helpful and fast to respond
                to my inquiry to help with frontend development issues and all
                related technical problems. "
              </span>
              <span className="person">JC Mugisha</span>
              <span className="job">Bizcotap - Backend Dev</span>
            </p>
            <img src="assets/testimonials/testimonial-1.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                "John is a skilled and passionate developer who consistently delivers exceptional results. His technical expertise, love for his work, and positive attitude make him a valuable asset to any team"
              </span>
              <span className="person">Eric Ku</span>
              <span className="job">Cofounder - Bizcotap</span>
            </p>
            <img src="assets/testimonials/testimonial-2.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;

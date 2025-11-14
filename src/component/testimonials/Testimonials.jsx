import React from "react";
import "./testimonials.css";


const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Nabiul",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "pic/andrew-power-y9L5-wmifaY-unsplash.jpg",
    },
    {
      id: 2,
      name: "IFTY",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "pic/christian-buehner-DItYlc26zVI-unsplash.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "pic/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg",
    },
    {
      id: 4,
      name: "Jane Smith",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "pic/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg",
    },
  ];
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

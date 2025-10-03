
// src/pages/Home.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [count, setCount] = useState(0);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  // simple counter animation for stats
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < 100) {
        current++;
        setCount(current);
      } else {
        clearInterval(interval);
      }
    }, 40);
  }, []);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", lineHeight: 1.6 }}>
      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          textAlign: "center",
          padding: "140px 20px",
          background: "linear-gradient(135deg, #6c63ff, #00bcd4)",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        {/* floating shapes */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            left: "-50px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
          }}
        />
<h1 style={{ 
  fontSize: "72px", 
  fontWeight: 300, 
  marginBottom: "30px",
  color: "#ffffff",
  lineHeight: "1.1",
  fontFamily: "'Georgia', 'Times New Roman', serif",
  letterSpacing: "-0.5px"
}}>
  Find Your <span style={{fontWeight: "700", color: "#e3f2fd"}}>Calm</span>,<br />
  Learn at Your <span style={{fontWeight: "700", color: "#e3f2fd"}}>Own Pace</span>
</h1>
<p style={{ 
  margin: "30px auto", 
  fontSize: "24px", 
  maxWidth: "700px",
  lineHeight: "1.7",
  color: "rgba(255, 255, 255, 0.9)",
  padding: "20px 0",
  fontFamily: "'Helvetica Neue', Arial, sans-serif",
  fontWeight: "300",
  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
}}>
  Discover <strong style={{fontWeight: "600", color: "#ffffff"}}>guided mindfulness lessons</strong>, 
  master <em style={{fontStyle: "italic", color: "#e3f2fd"}}>breathing techniques</em>, 
  and join a <strong style={{fontWeight: "600", color: "#ffffff"}}>supportive community </strong> 
  to cultivate <strong style={{fontWeight: "700", color: "#e3f2fd"}}>peace and focus</strong>.
</p>
        <div style={{ marginTop: "40px" }}>
          <Link
            to="/lessons"
            className="btn"
            style={{
              marginRight: "20px",
              background: "#fff",
              color: "#6c63ff",
              padding: "14px 28px",
              borderRadius: "10px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Start Learning
          </Link>
          <Link
            to="/register"
            className="btn"
            style={{
              background: "#ff6b6b",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "10px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Join Free
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="container" style={{ margin: "100px auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "40px",
            fontWeight: 700,
            marginBottom: "50px",
          }}
        >
          Why Choose <span style={{ color: "#6c63ff" }}>MyTranquilMind?</span>
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              title: "Guided Lessons",
              text: "Step-by-step lessons tailored for beginners and advanced practitioners alike.",
              icon: "📘",
            },
            {
              title: "Track Progress",
              text: "Visualize your journey with interactive progress charts and milestones.",
              icon: "📊",
            },
            {
              title: "Community Support",
              text: "Connect with a vibrant community of learners sharing the same path.",
              icon: "🤝",
            },
            {
              title: "Mobile Friendly",
              text: "Learn anywhere with a fully responsive design optimized for all devices.",
              icon: "📱",
            },
          ].map((feature, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "40px",
                borderRadius: "20px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  marginBottom: "20px",
                }}
              >
                {feature.icon}
              </div>
              <h3 style={{ color: "#6c63ff", marginBottom: "15px" }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: "16px", color: "#555" }}>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section
        style={{
          background: "#f3f4f6",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>Our Impact</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "80px",
            flexWrap: "wrap",
          }}
        >
          {[
            { number: "50K+", label: "Happy Learners" },
            { number: "120+", label: "Lessons" },
            { number: "35+", label: "Expert Teachers" },
            { number: "99%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "44px", color: "#6c63ff" }}>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "50px" }}>
          <p style={{ fontWeight: 600, fontSize: "20px" }}>
            Platform Growth: {count}%
          </p>
          <div
            style={{
              width: "300px",
              height: "12px",
              background: "#ddd",
              borderRadius: "10px",
              margin: "10px auto",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${count}%`,
                height: "100%",
                background: "#6c63ff",
                transition: "width 0.4s ease",
              }}
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container" style={{ margin: "100px auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "40px", marginBottom: "40px" }}>
          What Our Learners Say
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              name: "Vespers Makado.",
              text: "This platform changed my mornings! I start each day with focus and calmness.",
              avatar: "https://i.pravatar.cc/100?img=1",
            },
            {
              name: "Elshar.",
              text: "The lessons are short and effective. Tracking progress keeps me motivated.",
              avatar: "https://i.pravatar.cc/100?img=2",
            },
            {
              name: "Uphold Chiodza.",
              text: "I’ve connected with so many like-minded people. It feels like family here.",
              avatar: "https://i.pravatar.cc/100?img=3",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              }}
            >
              <p style={{ fontStyle: "italic", marginBottom: "20px" }}>
                “{testimonial.text}”
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <h4 style={{ color: "#6c63ff" }}>{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ background: "#f9fafc", padding: "100px 20px" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "38px", marginBottom: "50px" }}>
            Frequently Asked Questions
          </h2>
          {[
            {
              q: "Is MyTranquilMind free?",
              a: "Yes, we offer a free plan with access to basic lessons. You can upgrade anytime for more features.",
            },
            {
              q: "Can I use it on mobile?",
              a: "Absolutely! Our platform is optimized for phones, tablets, and desktops.",
            },
            {
              q: "How long are the lessons?",
              a: "Most lessons are 5–15 minutes, designed to fit into your busy schedule.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 3px 8px rgba(0,0,0,0.05)",
              }}
            >
              <h4
                style={{ cursor: "pointer", color: "#6c63ff" }}
                onClick={() => toggleFaq(index)}
              >
                {faq.q}
              </h4>
              {faqOpen === index && (
                <p style={{ marginTop: "10px", color: "#555" }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER SIGNUP */}
      <section
        style={{
          background: "linear-gradient(135deg, #00bcd4, #6c63ff)",
          color: "#fff",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          Stay Updated with New Lessons
        </h2>
        <p style={{ marginBottom: "30px" }}>
          Subscribe to our newsletter and never miss out on new content and
          community events.
        </p>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "14px 16px",
              borderRadius: "10px",
              border: "none",
              width: "280px",
              maxWidth: "100%",
            }}
          />
          <button
            type="submit"
            className="btn"
            style={{
              background: "#fff",
              color: "#6c63ff",
              padding: "14px 28px",
              borderRadius: "10px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* CALL TO ACTION */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 20px",
          background: "#fff",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
          Ready to Begin Your Mindfulness Journey?
        </h2>
        <p style={{ marginBottom: "30px", fontSize: "18px" }}>
          Join thousands of learners and bring calmness into your daily life.
        </p>
        <Link
          to="/register"
          className="btn"
          style={{
            background: "#6c63ff",
            color: "#fff",
            padding: "14px 28px",
            borderRadius: "10px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Get Started Today
        </Link>
      </section>
    </div>
  );
};

export default Home;
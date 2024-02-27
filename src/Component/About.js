import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About Us</h2>
      <p style={styles.paragraph}>Welcome to Ecommerce House, your one-stop destination for all your online shopping needs!</p>
      
      <h3 style={styles.subHeading}>Our Mission</h3>
      <p style={styles.paragraph}>At Ecommerce House, our mission is to provide customers with a seamless and enjoyable shopping experience. We strive to offer a wide range of high-quality products at competitive prices.</p>
      
      <h3 style={styles.subHeading}>Our Team</h3>
      <p style={styles.paragraph}>We have a dedicated team of professionals who are passionate about delivering excellent service to our customers. From customer support to logistics, each member of our team plays a crucial role in ensuring your satisfaction.</p>
      
      <h3 style={styles.subHeading}>Our Products</h3>
      <p style={styles.paragraph}>From electronics to fashion, home goods to beauty products, we offer a diverse selection of items to suit every need and budget. Our curated collections are constantly updated to bring you the latest trends and innovations.</p>
      
      <h3 style={styles.subHeading}>Contact Us</h3>
      <p style={styles.paragraph}>If you have any questions, feedback, or concerns, please don't hesitate to contact us. We're here to help!</p>
      <p style={styles.contactInfo}>Email: info@ecommercehouse.com</p>
      <p style={styles.contactInfo}>Phone: 123-456-7890</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '30px',
    color: '#222',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#555',
  },
  paragraph: {
    fontSize: '18px',
    marginBottom: '15px',
    lineHeight: '1.6',
  },
  contactInfo: {
    marginBottom: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default About;

import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import contact from "../../../assets/images/contact.png";
import cbanner from '../../../assets/images/cbanner.png'
import './contact.css'
const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('https://formspree.io/f/mvgprzla', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        form.reset();
      } else {
        alert('Failed to send the message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending the message:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  return (
    <div>
      <div>
        <img src={cbanner} alt="" />
      </div>
      <div className="md:flex  my-12 justify-center items-center gap-6">
        <div className="relative">
          <img className=" max-h-[83vh] w-[420px] mx-auto" src={contact} alt="" />
          <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
            <div className="w-[350px]">
              <h2 className="uppercase  text-4xl  font-sand mb-9">
                Contact us
              </h2>
              <div className="">
                <div className="p-3 my-4 flex flex-col justify-center items-center gap-4 border-[1px] border-[#ccc]">
                  <p className="text-center">
                    <FaMapMarkerAlt className="  text-2xl" />
                  </p>
                  <p>Mirpur 10, Dhaka</p>
                </div>
                <div className="p-3 my-4 flex flex-col justify-center items-center gap-4 border-[1px] border-[#ccc]">
                  <p>
                    <FaPhone className=" text-2xl" />
                  </p>
                  <p>+880 18734-36908</p>
                </div>
                <div className="p-3 my-4 flex flex-col justify-center items-center gap-4 border-[1px] border-[#ccc]">
                  <p>
                    <FaEnvelope className="  text-2xl" />
                  </p>
                  <p>shahadathossainsiambd08@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[650px] w-full p-5">
          <div className="  bg-[#f6f0e7] "> 
            <h2 className="text-4xl font-sand uppercase pt-5 ">any  message!</h2>
            <form className="contact-form p-5" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Contact;

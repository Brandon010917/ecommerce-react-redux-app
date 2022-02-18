import React from "react";
//Components
import Newsletter from "../components/Custom/Newsletter";

const Contact = () => {
  return (
    <div className="font-literation">
      <div className="contact container-content">
        <div className="grid md:grid-cols-2">
          <h2 className="font-teimer text-3xl">Contact</h2>
          <div className="pl-4 text-sm">
            <p className="mb-3.5">
              For all customer and sales inquiries, please contact:
            </p>
            <div className="mb-3.5">
              <p> Customer service</p>
              <p>email@example.com</p>
            </div>
            <div className="mb-3.5">
              <p> Wholesale inquiries</p>
              <p>email@example.com</p>
            </div>
            <div className="mb-3.5">
              <p> Press inquiries</p>
              <p>email@example.com</p>
            </div>

            <div className="mt-8">
              <p>Follow us</p>

              {/* Icons */}
              <div className="text-gray-600 flex gap-4 mt-8">
                <i className="fab fa-instagram text-xl cursor-pointer"></i>
                <i className="fab fa-pinterest text-xl cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default Contact;

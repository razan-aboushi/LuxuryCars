import React from "react";
import Swal from "sweetalert2";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import "./contact.css";

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;

    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);

    name.value = "";
    email.value = "";
    message.value = "";
    setFormStatus("Send");

    Swal.fire({
      title: "<strong>Your message has been sent successfully</strong>",
      text: "Thank You!",
      icon: "success",
    });
  };

  return (
    <>

      <div class="container-fluid bg-primary py-5 mb-3 page-headerContact" style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1416335096/photo/businessman-hand-holding-smart-phone-with-icon-mobile-phone-mail-telephone-and-address.jpg?b=1&s=170667a&w=0&k=20&c=O39_wq7HB2oZHV3pyeZDxFAq0Xb_zNvLKrAIEWDVveY=')`, backgroundRepeat: "no-repeat" ,backgroundSize:"cover"
      }}>
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-lg-10 text-center">
              <h1 class="display-3 text-white animated slideInDown">Contact US</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="white" href="/">
                      <h5 className="text-white">Home</h5>
                    </Link>
                    <Typography color="text.white">
                      {" "}
                      <h5 className="text-white">Contact</h5>
                    </Typography>
                  </Breadcrumbs>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>



      <div className="container my-5 shadow-lg p-5 contact-form bg-light rounded-4">
        <p className="text-start w-responsive fw-bold fs-3">
          Do you have any questions?
        </p>
        <p className="text-start w-responsive fw-bold mb-5 fs-6">
          Please do not hesitate to contact us directly. Our team will come back
          to you within a matter of hours to help you.
        </p>
        <form id="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label
              for="name"
              className="form-label fw-bold text-black"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              className="form-control p-3"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label
              for="email"
              className="form-label fw-bold text-black"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control p-3"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label
              for="message"
              className="form-label fw-bold text-black"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="form-control p-3"
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-lg fw-bold">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Contact;

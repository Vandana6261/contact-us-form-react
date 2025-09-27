import { useState } from "react";
import "./App.css";
import { toast } from "react-toastify";

function App() {

  const notify = () => toast("Wow so easy!");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    query: "",
    message: "",
    checkBox: false,
  });
  const [error, setError] = useState({})

  const handleChange = (e) => {
    // console.log(e.target)
    const {name, type, value, checked} = e.target;
    setFormData({
      ...formData,
      // [e.target.name]: e.target.value,
      [name] : type === "checkbox" ? checked : value,
    });
  };

  const submitHandler = (e) => {
   
    console.log("cliked")
    e.preventDefault();
    console.log(formData)

    // if(!formData.firstName.trim()) {
    //   toast.error("First Name is Required!")
    //   return;
    // }
    // if(!formData.lastName.trim()) {
    //   toast.error("Last Name is Required!")
    //   return;
    // }
    // if(!formData.email.trim()) {
    //   toast.error("Email is Required1")
    //   return;
    // }
    // if(!/\S+@\S+\.\S+/.test(formData.email)) {
    //   toast.error("Please enter a valid email address!");
    //   return;
    // }
    // if(!formData.query) {
    //   toast.error("Please enter a query type!")
    //   return;
    // }
    // if(!formData.checkBox){
    //   toast.error("Please accept the term!")
    //   return;
    // }

    let newError = {};
    if(!formData.firstName.trim()) newError.firstName = "First Name is Required"
    if(!formData.lastName.trim()) newError.lastName = "Last Name is Required"
    if(!formData.email.trim()) newError.email = "Email is Required"
    else if(!/\S+@\S+\.\S+/.test(formData.email))  newError.email = "Invalid Email"

    setError(newError)
    if(Object.keys(newError).length > 0) return;


    setFormData({
    firstName: "",
    lastName: "",
    email: "",
    query: "",
    message: "",
    checkBox: false,
    })
    toast.success("Your form submitted successfully")
  };
  return (
    <>
      <div className="bg-[hsl(148,38%,91%)] w-full min-h-screen overflow-x-hidden overflow-y-auto flex justify-center items-center text-[hsl(187,24%,22%)]">
        <div className="bg-white py-3 px-6 rounded-2xl min-h-[90%] w-full md:w-3/4 lg:w-1/2">
          <form
            action="#"
            className="flex flex-col gap-4"
            onSubmit={submitHandler}
          >
            <h2 className="text-2xl text-[hsl(169,82%,27%)] font-semibold text-center">
              Contact Us
            </h2>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={handleChange}
                  value={formData.firstName}
                  
                  className="border border-[hsl(186,15%,59%)] py-2 px-4 rounded-md shadow-md outline-[hsl(186,15%,59%)]"
                />
                {error.firstName && <p className="text-red-500 text-sm">{error.firstName}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={handleChange}
                  value={formData.lastName}
                  
                  className="border border-[hsl(186,15%,59%)] py-2 px-4 rounded-md shadow-md outline-[hsl(186,15%,59%)]"
                />
                {error.lastName && <p className="text-red-500 text-sm">{error.lastName}</p>}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={formData.email}
                
                className="border border-[hsl(186,15%,59%)] py-2 px-4 rounded-md shadow-md outline-[hsl(186,15%,59%)]"
              />
              {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="query">Query Type</label>
              <div>
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="flex gap-2 border  border-[hsl(186,15%,59%)] py-2 px-4 rounded-md">
                    <input
                      type="radio"
                      name="query"
                      onChange={handleChange}
                      value="General Enquiry"
                      checked={formData.query === "General Enquiry"}
                      className="border border-[hsl(186,15%,59%)] py-2 px-4 rounded-md shadow-md hover:cursor-pointer"
                    />
                    <span>General Enquiry</span>
                  </div>
                  <div className="flex gap-2 border  border-[hsl(186,15%,59%)] py-2 px-4 rounded-md">
                    <input
                      type="radio"
                      name="query"
                      onChange={handleChange}
                      value="Support Request"
                      checked={formData.query === "Support Request"}
                      className="border border-[hsl(186,15%,59%)] py-2 px-4 rounded-md shadow-md hover:cursor-pointer"
                    />
                    <span>Support Request</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="border-1 border-[hsl(186,15%,59%)] rounded-md shadow-md outline-[hsl(186,15%,59%)]"
              ></textarea>
            </div>
            <div className="flex gap-4">
              <input
                type="checkbox"
                name="checkBox"
                onChange={handleChange}
                checked={formData.checkBox}
              />
              <p>I consent to being contacted by the team</p>
            </div>
            <div>
              <button type="submit" className="bg-[hsl(169,82%,27%)] hover:scale-95 hover:cursor-pointer py-2 px-4 w-full rounded-md">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

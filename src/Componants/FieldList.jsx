import { useState } from 'react';
import OfferLetterPreview from './OfferletterPreview';
import TextArea from './TextArea';

const FieldList = (props) => {

  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    position: "",
    salary: "",
    joiningDate: "",
    lastAcceptanceDate: "",
    additionalComments: ""
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValues({ ...inputValues, [name]: value });
  };

  const [formFilled, setFormFilled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormFilled(true)
    console.log(inputValues);
  };

  const today = new Date();
  const date = `${today.getDate()} / ${today.getMonth() + 1} / ${today.getFullYear()}`;

  const companyName = "XYZ TECHNOLOGIES PVT. LTD.";




  return (
    <>
      {
        formFilled === false ?
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <TextArea date={date} companyName={companyName} inputValues={inputValues} />
                </div>

                <div className="col-md-6">
                  <div className="container mt-5 px-5">
                    <h2>Employee Information Form</h2>
                    <form className="container" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control text-capitalize"
                          id="firstName"
                          name="firstName"
                          value={inputValues.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control text-capitalize"
                          id="lastName"
                          name="lastName"
                          value={inputValues.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="position" className="form-label">
                          Job Title
                        </label>
                        <select
                          className="form-select"
                          id="position"
                          name="position"
                          value={inputValues.position}
                          onChange={handleInputChange}
                          required
                        >
                          <option disabled value="">
                            Select a job position
                          </option>
                          <option value="Full Stack Developer">Full Stack Developer</option>
                          <option value="Front-End Developer">Front-End Developer</option>
                          <option value="Back-End Developer">Back-End Developer</option>
                          <option value="UI/UX Designer">UI/UX Designer</option>
                          <option value="MLO(Machine Learning Operator)">MLO(Machine Learning Operator)</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="salary" className="form-label">
                          Salary
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="salary"
                          name="salary"
                          value={inputValues.salary}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="joiningDate" className="form-label">
                          Joining Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="joiningDate"
                          name="joiningDate"
                          value={inputValues.joiningDate}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="lastAcceptanceDate" className="form-label">
                          Last Acceptance Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="lastAcceptanceDate"
                          name="lastAcceptanceDate"
                          value={inputValues.lastAcceptanceDate}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="additionalComments" className="form-label">
                          Additional Comments
                        </label>
                        <textarea
                          className="form-control"
                          rows={4}
                          id="additionalComments"
                          name="additionalComments"
                          value={inputValues.additionalComments}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Next
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          :
          <OfferLetterPreview handleSubmit date={date} inputValues={inputValues} />
      }
    </>
  );
}

export default FieldList;

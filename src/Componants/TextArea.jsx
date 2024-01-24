import React from 'react';

const JobOfferLetter = ({ inputValues, date }) => {
  const {
    firstName,
    lastName,
    position,
    salary,
    joiningDate,
    lastAcceptanceDate,
    additionalComments
  } = inputValues;

  const companyName = "XYZ TECHNOLOGIES PVT. LTD.";

  return (
    <div className="sm-5">
      <h2 className='text-center mt-5'>Offer Letter Preview</h2>
      <textarea
        className="form-control p-2"
        rows="30"
        value={`
          Date : ${date}

          Dear ${firstName.length && lastName.length ? `${firstName} ${lastName}` : 'Participant Name'},

          We are pleased to offer you the position of "${position.length ? position : 'Position'}" with ${companyName}. 
          We are all excited about the potential that you will bring to our organization.

          As we discussed during your interview, your initial compensation package includes an annual salary of INR ${salary.length ? salary : 'Salary'}/- CTC.

          Your tentative date of joining is on ${joiningDate.length ? joiningDate : 'Joining Date'} beyond which this offer stands canceled unless either party communicates the said delay beforehand.

          We look forward to your arrival as an employee of our organization and are confident that you will play a key role in our company's expansion into national and international markets. 
          Your detailed offer letter will be issued to you at the time of your joining. If this employment offer is acceptable to you, please sign a copy of this letter and return it to us by ${lastAcceptanceDate.length ? lastAcceptanceDate : 'Till You Accept'}.

          ${additionalComments}

          Your Truly,

          For XYZ TECHNOLOGIES PVT. LTD.

          Authorized Signatory
        `}
        readOnly
      />
    </div>
  );
};

export default JobOfferLetter;

import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import coLogo from './img/company.jpg';
import stamp from './img/stamp.png'

const OfferLetterPreview = ({ inputValues, date }) => {
  const {
    firstName,
    lastName,
    position,
    salary,
    joiningDate,
    lastAcceptanceDate,
    additionalComments
  } = inputValues;

  const CompanyName = "XYZ TECHNOLOGIES PVT. LTD.";

  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector('.offer-letter');
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('offer_letter.pdf');
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-10 me-5 my-3  text-end">
          <button className="btn btn-success me-3" onClick={downloadPDF}>
            Download Offer Letter PDF
          </button>
        </div>
        <div className="col-lg-8  offset-lg-2">
          <div className="offer-letter mt-2">
            <div className='bg-light'>
              <div className="row">
                <div className="col-md-3">
                  <img src={coLogo} alt="Company Logo" className="img-fluid" />
                </div>
                <div className="col-md-8 ps-2 ms-2">
                  <h2 className='pt-4'>
                    <span className='text-danger'>XYZ</span>
                    <span className='text-primary'> TECHNOLOGIES PVT. LTD.</span>
                  </h2>
                  <p><strong>REGISTER ADDRESS : </strong>1234, Elm Street Suite, 567 Citytown, Stateville, Zip Code: 67890, Countryland.</p>
                  <p><strong>TELEPHONE : </strong>+91 12345 67890</p>
                </div>
              </div>
            </div>
            <div className="container px-3 px-sm-5">
              <h2 className="mb-4 text-center text-danger my-3"><u >JOB OFFER LETTER</u></h2>
              <div className='py-2 text-capitalize'>
                <div className='px-4 fw-bold text-end'>{date}</div>
                Dear, <br /><strong>{firstName} {lastName}</strong>,
              </div>
              <p className='py-2'>
                We are pleased to offer you the position of <strong>"{position}"</strong> with <strong>{CompanyName}</strong>. We are all excited about the potential that you will bring to our organization.
              </p>
              <p className='py-2'>
                As we discussed during your interview, your initial compensation package includes an annual salary of INR <strong>{salary}</strong>/- CTC.
              </p>
              <p className='py-2'>
                Your tentative date of joining is on <strong>{joiningDate}</strong>. Beyond which, this offer stands cancelled unless either party communicates the said delay beforehand.
              </p>
              <p className='py-2'>
                We look forward to your arrival as an employee of our organization and are confident that you will play a key role in our company's expansion into national and international markets. Your detailed Offer letter will be issued to you at the time of your joining. If this employment offer is acceptable to you, please sign a copy of this letter and return it to us by <strong>{lastAcceptanceDate}</strong>.
              </p>
              {additionalComments && (
                <p className='py-2'>
                  {additionalComments}
                </p>
              )}
              <p className='py-2'>
                <strong>Your Truly,</strong>
              </p>
              <p className='py-2'>
                For <strong>{CompanyName}</strong>
              </p>

              <p className='py-2'>
                <img src={stamp} style={{ height: "150px", width: "150px" }} alt='stamp' />
              </p>
              <p className='py-1'>
                Authorized Signatory
              </p>
              <hr className='my-5' />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OfferLetterPreview;




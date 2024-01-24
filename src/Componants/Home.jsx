import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <> <div className="maindiv">
            <div className="container p-5">
                <div className="bg-img ">
                    <div className="row">
                        <div className="col-xl-8 px-5 pt-5 text-clr">
                            <h1 className='pt-5 text-red'>Generate your offer letter online now</h1>

                            <p className='pt-4 p-home px-4 fw-bold h4'>Attract the best candidates with a professional offer</p>
                            <ul className='pt-4 px-4 fw-bold ' >
                                <li className='p-2 px-4'><i class="fa fa-check p-1 i-home"></i> Use our recommended template  or upload your own template</li>
                                <li className='p-2 px-4'><i class="fa fa-check p-1 i-home"></i> Fill the template with candidate Information</li>
                                <li className='p-2 px-4'><i class="fa fa-check p-1 i-home"></i> Download offer letter pdf and send immediately</li>
                            </ul>

                            <Link to="/fields" className='btn btn-danger px-5 m-2 mx-4'><h5 className='p-2'>Generate Offer Letter NOW</h5></Link>

                        </div>

                        <div className="col-xl-4">
                            <img src='https://www.adobe.com/acrobat/guides/media_1e3d969fc76d460ba59da12ceb0dcca131eb375d3.png?width=750&format=png&optimize=medium' className='img-home p-2' alt='img'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
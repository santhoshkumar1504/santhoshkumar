import React from 'react'
import '../Stylesheets/certificateStyle.css'
import certificate1 from '../assets/certificate/uxui.jpg'
const Certificate = () => {
    const certificateData=[
        {
            "cid":201,
            "cetificateimg":certificate1,
            "certifyName":"Fundamentals of UI/UX Design",
            "certifcateLink":"https://www.coursera.org/account/accomplishments/verify/894ZQ70Y7GVC?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
        }
    ]
  return (
    <>
        <div id='certificates'>
        <div className='certificate-container'>
            <h2 className='text-center head mb-2'>Certificates</h2>
            <div className="row certificate-row">
                <div className="col-md-12 col-lg-4 certificate-col">
                    
                        {certificateData.map((item)=>(
                            <div className="certificate-box">
                                    <img src={item.cetificateimg} className='certify-img'/>
                                    <h4 className='certify-name'>{item.certifyName}</h4>
                                    <a href={item.certifcateLink}>
                                        <button className='btn certify-btn'>View Certificate</button>
                                    </a>
                            </div>
                        ))}
                    
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Certificate
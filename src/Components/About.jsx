import '../Stylesheets/aboutStyle.css';
import resume from '../assets/Resume-santhosh.pdf'
import interndata from '../Datas/internshipData.json'

const About = () => {
  const certificateData=[
        {
            "cid":200,
            // "cetificateimg":mernstack,
            "certifyName":"Full Stack-MERN",
        },
        {
            "cid":201,
            // "cetificateimg":certificate1,
            "certifyName":"Fundamentals of UI/UX Design",
            // "certifcateLink":"https://www.coursera.org/account/accomplishments/verify/894ZQ70Y7GVC?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
        },
        {
            "cid":202,
            "certifyName":"Advanced Diploma in Python Programming [ ADPP ]"
        },
        {
            "cid":203,
            "certifyName":"Postgraduate in Diploma Computer Application [ PGDCA ]"
        }

    ]
  return (
    <div id="about">
        
    <div className='about-container'>
        <h2 className='text-center head mb-2'>About</h2>
        <p className='text-justify mx-3 px-3 para'>
         Hi, I'm <span className='highlight'>Santhoshkumar</span> , a passionate and aspiring Web Developer currently pursuing my <span className='highlight'>Master of Computer Applications (M.C.A.)</span> at Alagappa University.
I specialize in building beautiful, responsive, and user-friendly websites. With a solid foundation in <span className='highlight'>HTML5, CSS3, JavaScript, React JS, Node.JS, Express.JS and MongoDB</span>  I enjoy turning ideas into interactive digital experiences. I'm also proficient with modern frameworks like Bootstrap 5, which help me streamline development and ensure cross-platform compatibility.
<br />
Currently, I’m sharpening my skills as a  <span className='highlight'>Software Development Intern at Visval Career Solutions Private Limited</span> , where I contribute to real-world projects and gain valuable hands-on experience in building scalable and innovative web solutions.
I’m always eager to learn new technologies, tackle challenging problems, and contribute to impactful projects. My goal is to grow as a developer, continuously improve my craft, and help create meaningful digital experiences that make a difference.
        </p>

             <div className="d-flex buttonsGroup-about">
               <a href={resume} className='text-decoration-none' download={resume}>
  <button className='btn resume-btn mb-3 d-flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='me-2'><path d="M352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 306.7L246.6 265.3C234.1 252.8 213.8 252.8 201.3 265.3C188.8 277.8 188.8 298.1 201.3 310.6L297.3 406.6C309.8 419.1 330.1 419.1 342.6 406.6L438.6 310.6C451.1 298.1 451.1 277.8 438.6 265.3C426.1 252.8 405.8 252.8 393.3 265.3L352 306.7L352 96zM160 384C124.7 384 96 412.7 96 448L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 448C544 412.7 515.3 384 480 384L433.1 384L376.5 440.6C345.3 471.8 294.6 471.8 263.4 440.6L206.9 384L160 384zM464 440C477.3 440 488 450.7 488 464C488 477.3 477.3 488 464 488C450.7 488 440 477.3 440 464C440 450.7 450.7 440 464 440z"/></svg>
                  My Resume</button>
               </a>
              
                </div>
        {/* Education */}

        <div className="row w-100 card-container fs-6">
          <div className="col-12 col-md-4">
                    <div className="card about-card">
                      <div className="card-title text-center fw-bold">         
                          Education</div>
                      <div className="card-text">
                        <ul>
                          <li><b>Master of Computer Application</b>,<br/>Alagappa University,<br/>Karaikudi.<br/>July 2024 - April 2026</li>

                          <li><b>Bachelor of Science (Mathematics)</b>,<br/>Alagappa Government Arts & Science College,<br/>Karaikudi.<br/>July 2021 - April 2024</li>
                        </ul>
                      </div>
                    </div>

          </div>
          <div className="col-12 col-md-4">
            <div className="card about-card">
              <div className="card-title text-center fw-bold">
                Experience
                 </div>
                <ul>
                  {interndata.map((data)=>(
                    <li key={data.id}>
                     <b> {data['intern-role']}</b>
                      ,<br/>{data.company},<br/>{data.place}.<br/>
                  {data.duration && `Duration: ${data.duration} Months`}
                  </li>
                  ))}
                  
                </ul>
             
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card about-card">
              <div className="card-title text-center fw-bold">
                Certifications
                 </div>
                <ul>
                  {certificateData.map((data)=>(
                    <li key={data.id}>
                     {data.certifyName}
                  </li>
                  ))}
                  
                </ul>
             
            </div>
          </div>
        </div>

        {/* Internship */}
    </div>

    </div>
  )
}

export default About
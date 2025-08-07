import '../Stylesheets/aboutStyle.css'
import interndata from '../Datas/internshipData.json'

const About = () => {
  console.log(interndata[0].company);
  
  return (
    <div id='about'>
    <div className='about-container'>
        <h2 className='text-center head'>About Me</h2>
        <p className='text-justify mx-3 px-3 para'>
          I'm Santhoshkumar.  Currently pursuing M.C.A. at Alagappa University.  I'm a passionate and aspiring web developeer with a keen interest in creating beautiful, responsive and user-friendly websites.  With a strong foundation in <b>HTML5, CSS3, Javascript, React JS and modern frameworks like Bootstrap5 </b>.  Currently, I am honing my skills as a Software Development intern at Visval Career Solutions Private Limited, where I work on innovative projects and gain hands-on experience in developing scalable solutions.  My goal is to continuously learn, innovate and contribute to impactful projects in the field of web development.
        </p>

        {/* Education */}

        <div className="row w-100 card-container">
          <div className="col-12 col-md-6">
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
          <div className="col-12 col-md-6">
            <div className="card about-card">
              <div className="card-title text-center fw-bold">
                Internship
                 </div>
                <ul>
                  {interndata.map((data)=>(
                    <li key={data.id}>
                     <b> {data['intern-role']}</b>
                      ,<br/>{data.company},<br/>{data.place}.<br/>
                  Duration: {data.duration} Months</li>
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
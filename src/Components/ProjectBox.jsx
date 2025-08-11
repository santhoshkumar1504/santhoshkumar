
const ProjectBox = (props) => {


    
  return (
    <>
      <div className="col-sm-10 col-md-6 col-lg-4 card-contain">
            <div className="cards project-col">

              <img src={props.file} alt= {props.projecttitle} className='card-img'/>

              <div className="cart-title">
                {props.projecttitle}
              </div>
              <div className="card-subtitle m-2">
               {props.projectdesc}
              </div>

                <div className="project-btn-group">
                   <a href={props.github}>
                    <button type="button" className='btn project-btn'>
                        Github Link
                    </button>
                    </a> 
                    <a href={props.website}>
                    <button type="button" className='btn project-btn'>
                        Live Link
                    </button>
                    </a> 
                </div>

            </div>
          </div>
    </>
  )
}

export default ProjectBox
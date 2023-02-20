import './experience.css'
import frontend from './frontEnd'
import backend from './backEnd'



const Experience: React.FC = () => {
   
      return (
        <section id="experience">
          <h5>What Skills I have</h5>
          <h2>My TechStack</h2>
          <div className="container experience__container">
            <div className="experience__frontend">
              <h3>Front End & Framework</h3>
              <div className="experience__content">
                {frontend.map(item=><article key={item.id} className={item.articleClass}>{item.icon}<div><h4>{item.title}</h4><small className={item.smallClass}>{item.experience}</small></div></article>)}
              </div>
            </div>
            <div className="experience__backend">
              <h3>Back End, Framework & Database</h3>
              <div className="experience__content">
              {backend.map(item=><article key={item.id} className={item.articleClass}>{item.icon}<div><h4>{item.title}</h4><small className={item.smallClass}>{item.experience}</small></div></article>)}
              </div>
            </div>
          </div>
        </section>
        
      )
    }
    

export default Experience;

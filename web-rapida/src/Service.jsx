import { version } from "react";


const Service = () => {

    let classP = "text-xl pb-5 px-20 " 
    let clasSpan = "text-2xl font-bold pt-3 px-20  "

    let devSkills = {
        frontEnd:[`🎨 Expertise in React, Angular, 
            or Vue.js, with strong knowledge of HTML5,
             CSS3, and RESTful APIs.`],
        backEnd:[` ⚙️ Proficient in Node.js and frameworks
             like Express for building robust servers and APIs.`],
        fullStack:[``],
        dataBases:[`🗄️ Experienced with relational 
            databases (MySQL, PostgreSQL) and NoSQL solutions 
            (MongoDB, Firebase).`],
        versionControl:[`🔄 Skilled in Git and platforms 
            like GitHub, GitLab, or Bitbucket.`],

    }


    return ( 
        <div id="Services" className="block w-[90%] h-full space-y-4" >
           <h2 className=" w-full h-20 text-3xl px-10 py-3 font-bold ">
           const <span className="text-yellow-400">Core Skills </span>{'()=> {'}
          </h2>
         
          <span className={clasSpan}  > FrontEnd: </span><p className={classP}>  {devSkills.frontEnd}   </p>
          <span className={clasSpan} > BackEnd: </span>  <p className={classP}> {devSkills.backEnd}   </p>
          <span className={clasSpan} > DataBases: </span>  <p className={classP}>{devSkills.dataBases}   </p>
          <span className={clasSpan} > VersionControl: </span> <p className={classP}>  {devSkills.versionControl}   </p>
           
           
           <span className="text-4xl px-10 py-3 font-bold">{'}'}</span>
        </div>
     );
}
 
export default Service  ;
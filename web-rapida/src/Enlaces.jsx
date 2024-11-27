

const Enlaces = () => {
    let clasSpan = "text-2xl font-bold pt-3 px-20 text-yellow-300  "
    let classP = "text-xl pb-5 px-40 text-red-900 " 
    return (
        <div id="Enlaces" >
            <h2 className="flex text-3xl px-10 py-4  font-bold " >
            Lenguajes de programación 🔗
            </h2>
            <span className={clasSpan} >Javascript</span>
             <p className={classP} ><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">. MDN Web Docs (Documentación oficial) </a></p>
             <p className={classP} ><a href="https://javascript.info/"> . JavaScript.info (Guía completa) </a></p>
             <p className={classP} ><a href="https://eloquentjavascript.net/"> . Eloquent JavaScript (Libro gratuito) </a></p>
            <span className={clasSpan} >Python</span> 
             <p className={classP} ><a href="https://docs.python.org/3/"> . Documentación oficial </a></p>
             <p className={classP} ><a href="https://realpython.com/">. Real Python (Tutoriales prácticos) </a></p>
             <span className={clasSpan} >Java</span> 
             <p className={classP} ><a href="https://docs.oracle.com/javase/8/docs/"> . Documentación oficial </a></p>
             <span className={clasSpan} >C#</span> 
             <p className={classP} ><a href="https://learn.microsoft.com/en-us/dotnet/csharp/"> . Documentación oficial de Microsoft </a></p>
             <span className={clasSpan} >Ruby</span> 
             <p className={classP} ><a href="https://www.ruby-lang.org/es/"> . Documentación oficial </a></p>
             <h2 className="flex text-3xl px-10 py-3  font-bold " >
              Frameworks de programación 🔗
             </h2>
             <span className={clasSpan} >React.js</span> 
             <p className={classP} ><a href="https://react.dev/"> . Documentación oficial </a></p>
             <p className={classP} ><a href="https://www.frontendmentor.io/"> . Frontend Mentor  </a></p>
             <span className={clasSpan} >Angular</span> 
             <p className={classP} ><a href="https://angular.dev/">. Documentación oficial</a></p>
             <p className={classP} ><a href="https://www.youtube.com/watch?v=3qBXWUpoPHo"> . Angular Crash Course - Traversy Media (YouTube)  </a></p>
             <span className={clasSpan} >Vue.js</span> 
             <p className={classP} ><a href="https://vuejs.org/">. Documentación oficial</a></p>
             <p className={classP} ><a href="https://www.vuemastery.com/">. Vue Mastery (Tutoriales interactivos) </a></p>
             <p className={classP} ><a href="https://www.youtube.com/watch?v=ZqgiuPt5QZo"> . Learn Vue 3 in 5 Hours (YouTube) </a></p>
             <span className={clasSpan} >Express.js (Node.js)</span> 
             <p className={classP} ><a href="https://expressjs.com/"> . Documentación oficial </a></p>
             <p className={classP} ><a href="https://www.youtube.com/watch?v=Oe421EPjeBE"> . Node.js + Express Full Tutorial - FreeCodeCamp </a></p>


            

        </div>
      );
}
 
export default Enlaces;






const Enlaces = () => {
    let clasSpan = "text-2xl font-bold pt-3 px-20  "
    let classP = "text-xl pb-5 px-40 text-yellow-200 " 
    return (
        <div>
            <h2 className="flex text-3xl px-10 py-3  font-bold " >
            Lenguajes de programación 🔗
            </h2>
            <span className={clasSpan} >Javascript</span>
             <p className={classP} ><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">. MDN Web Docs (Documentación oficial) </a></p>
             <p className={classP} ><a href="https://javascript.info/"> JavaScript.info (Guía completa) </a></p>
             <p className={classP} ><a href="https://eloquentjavascript.net/"> Eloquent JavaScript (Libro gratuito) </a></p>
            <span className={clasSpan} >Python</span> 
             <p className={classP} ><a href="https://docs.python.org/3/"> Documentación oficial </a></p>
             <p className={classP} ><a href="https://realpython.com/"> Real Python (Tutoriales prácticos) </a></p>
             <span className={clasSpan} >Java</span> 
             <p className={classP} ><a href="https://docs.oracle.com/javase/8/docs/"> Documentación oficial </a></p>
             <span className={clasSpan} >C#</span> 
             <p className={classP} ><a href="https://learn.microsoft.com/en-us/dotnet/csharp/"> Documentación oficial de Microsoft </a></p>
             <span className={clasSpan} >Ruby</span> 
             <p className={classP} ><a href="https://www.ruby-lang.org/es/"> Documentación oficial </a></p>
             <h2 className="flex text-3xl px-10 py-3  font-bold " >
              Frameworks de programación 🔗
             </h2>
             <span className={clasSpan} ></span> 
             <p className={classP} ><a href=""> Documentación </a></p>
             <p className={classP} ><a href=""> javascript </a></p>
             <p className={classP} ><a href=""> javascript </a></p>
             <span className={clasSpan} ></span> 
             <p className={classP} ><a href=""> Documentación </a></p>
             <p className={classP} ><a href=""> javascript </a></p>
             <p className={classP} ><a href=""> javascript </a></p>


            

        </div>
      );
}
 
export default Enlaces;




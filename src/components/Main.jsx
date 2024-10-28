
import articles from '../data/articles.json';
export default function Main(){    
    
    return(        
        
        <section className="articulos">
            {articles.map((article) => (
                <article key={article.id} className='entrada'>
                    <h2>{article.title === "Viajar a Londres" ? article.title : article.title === "Viajar a Londres intenerario 3" ? "Puente De la Torre" : "Metro de Londres"}</h2>
                    <p><img src={article.img} alt ='Viaje a Londres'></img>Lorem ipsum dolor sit amet, ï í ñ consectetur
                        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <a href="#" className="boton">Leer Más</a>
                </article>
            ))}
        </section>
                
     
        
    );
}


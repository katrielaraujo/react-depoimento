import './App.css';
import Depoimento from './components/Depoimento'

function App() {
  return (
    <div className='App'>
      <div className='container-principal'>
        <h1>Isso é o que nossos alunos dizem sobre o freeCodeCamp:</h1>
        <Depoimento
        img='emma'
        nome='Emma Bostian'
        pais='Suecia'
        cargo='Engenheira de Software'
        empresa='Spotify'
        depoimento='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'/>

        <Depoimento
        img='sarah'
        nome='Sarah Chima'
        pais='Nigeria'
        cargo='Engenheira de Software'
        empresa='ChatDesk'
        depoimento='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'/>

        <Depoimento
        img='shawn1'
        nome='Shawn Wang'
        pais='Singapur'
        cargo='Engenheira de Software'
        empresa='Amazon'
        depoimento='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'/>

      </div>
    </div>
  );
}

export default App;

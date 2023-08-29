import imgCard from './components/imgCard';
import './App.css';
import data from './data';
function App() {
  return (
    <div className='container'>
      <h1>Hello this is JSR</h1>
      <div className="row">
        {
          data.map((card, index) => {
            <div key={index}>
              <imgCard
              title = {card.title}
              desc = {card.desc}
              imgurl = {card.imgurl}
               />
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;

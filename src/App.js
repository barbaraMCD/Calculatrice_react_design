import './App.css';
import { useState }  from 'react';
import Numbers from './components/Numbers/Numbers';
import Result from './components/Result/Result';
import Soustraction from './components/Operations/soustraction';
import Addition from './components/Operations/addition';
import Multi from './components/Operations/multi';
import Egal from './components/Operations/egal';
import Clear from './components/Operations/clear';

function App() {
  
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [results, setResults] =useState(0);

const Add = () => {
  setResults(results + " + ")
}

const Sous = () => {
  setResults(results + " - ")
}

const Multiplication = () => {
  setResults(results + " * ")
}

const Reset = () => {
  setResults(0)
}


const FinalResult = () => {
  if(results.includes("+")) {
    const tab2= [];
    for(let valeur of tab) {
      if(results.includes(valeur)) {
        tab2.push(valeur)
        if(tab2.includes(valeur) && results.includes(valeur)) {
          tab2.push(valeur)
        }
      } 
    } if(tab2.length == 2) {
      setResults(tab2[0] + tab2[1])
    } 
    else if (tab2.length == 4) {
      setResults(tab2[0] + tab2[2])
    }
  } else if(results.includes("-")) {
    const tab3= [];
    for(let valeur of tab) {
      if(results.includes(valeur)) {
        tab3.push(valeur)
        if(tab3.includes(valeur) && results.includes(valeur)) {
          tab3.push(valeur)
        }
      } 
    } if(tab3.length == 2) {
      setResults(tab3[0] - tab3[1]);
    } 
    else if (tab3.length == 4) {
      setResults(tab3[2] - tab3[0]);
    }
  } else if(results.includes("*")) {
    const tab4= [];
    for(let valeur of tab) {
      if(results.includes(valeur)) {
        tab4.push(valeur)
        if(tab4.includes(valeur) && results.includes(valeur)) {
          tab4.push(valeur)
        }
      } 
    } if(tab4.length == 2) {
      setResults(tab4[0] * tab4[1])
    } 
    else if (tab4.length == 4) {
      setResults(tab4[0] * tab4[2])
    }
  }
}

const Resultat = (number) => {
  if(results === 0) {
    setResults(number)
  } else if(results.includes("-") || results.includes("+") || results.includes("*")) {
    setResults(results + number)
  }

}
return (
  <div className="App">
      <div className="calculatrice">
          <Result results={results}/>
        <div className="border"></div>
        <Clear operation={ "Clear" } opeCallBack={Reset}/>
          <div className ="all-button">
            <div className="button-number">
             <Numbers number={1} clickCallBack={() => {Resultat(tab[0])}}/>
             <Numbers number={2} clickCallBack={() => {Resultat(tab[1])}}/>
             <Numbers number={3} clickCallBack={() => {Resultat(tab[2])}}/>
             </div>
             <div className="button-number">
             <Numbers number={4} clickCallBack={() => {Resultat(tab[3])}}/>
             <Numbers number={5} clickCallBack={() => {Resultat(tab[4])}}/>
             <Numbers number={6} clickCallBack={() => {Resultat(tab[5])}}/>
             </div>
             <div className="button-number">
             <Numbers number={7} clickCallBack={() => {Resultat(tab[6])}}/>
             <Numbers number={8} clickCallBack={() => {Resultat(tab[7])}}/>
             <Numbers number={9} clickCallBack={() => {Resultat(tab[8])}}/>
             </div>
             <div>
            <Addition operation={"+"} opeCallBack={Add}/>
            <Soustraction operation={"-"} opeCallBack={Sous}/>
            <Multi operation={"*"} opeCallBack={Multiplication}/>
            <Egal operation={"="} opeCallBack={FinalResult}/>
            </div>
          </div>
      </div>
    </div> 
  );
}

export default App;



import "./App.css";
import {Button,Input} from "./components/atoms"
import { operationList } from "./utils/calculator.ts"
import useCalculator from "./hooks/useCalculator.tsx"

function App() {
  const { num1, setNum1, num2, setNum2, result, handleOperation } = useCalculator();
  

  return (
    <>
      <div className="">
        <div className="px-4 py-5 sm:p flex flex-col space-y-4">
          <Input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter first number" />
          <Input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter second number" />
         
        
          <div className="flex gap-3">  
          {operationList.map((operation) => (
            <Button  key={operation} onClick={() => handleOperation(operation)} >
              {operation}
            </Button>
          ))}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold">Resultado: {parseInt(result)}</h2>
      </div>
    </>
  );
}

export default App;

import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { useState } from "react";
import { CalculatorClient } from "../calculator.client";
import { operationListToMethod } from "../utils/calculator";

const useCalculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState<BigInt>(BigInt(0));

  const transport = new GrpcWebFetchTransport({
    baseUrl: "http://[::1]:50051",
  });

  const client = new CalculatorClient(transport);

  const handleOperation = (operation) => {
    client[operationListToMethod[operation]]({
      a: BigInt(num1),
      b: BigInt(num2),
    }).then((response) => {
      setResult(BigInt(response.response.result));
    });
  };

  return { num1, setNum1, num2, setNum2, result, handleOperation };
};

export default useCalculator;

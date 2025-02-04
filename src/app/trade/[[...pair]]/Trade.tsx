"use client";
import { useParams } from "next/navigation";


export const Trade = () => {
  const params = useParams();
  const pair = params.pair;

  const displayPair = Array.isArray(pair)
    ? pair.join('/')
    : typeof pair === 'string'
      ? pair
      : null;

  return (
    <div>
      <h1 className="text-2xl font-bold">Trading Page</h1>
      {displayPair ? (
        <p>Current trading pair: {displayPair}</p>
      ) : (
        <p>Select a trading pair</p>
      )}
      {/* Add your trading content here */}
    </div>
  );
};
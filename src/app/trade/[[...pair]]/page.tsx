import { useParams } from "next/navigation";
import { Trade } from "./Trade";

export function generateStaticParams() {
  return [
    { pair: ["btc", "usdt"] },
    { pair: ["eth", "usdt"] },
    // Add more trading pairs as needed
  ];
}

export default function TradingPage() {
  return (
    <div className="min-h-screen bg-app-dark">
      <Trade />
    </div>
  );
}

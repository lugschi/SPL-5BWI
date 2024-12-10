import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { fetchCards } from "./services/directus";

interface Card {
  id: number;
  firstname: string;
  lastname: string;
  image: string;
}

const API_URL = "http://10.115.1.38:8055";

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCards = async () => {
      try {
        const data = await fetchCards();
        setCards(data);
      } catch (error) {
        console.error("Fehler beim Laden der Daten:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCards();
  }, []);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen p-8 flex flex-col items-center">
      <div className="w-full flex justify-end">
        <h1 className="text-4xl font-bold mb-8">HTL Dornbirn 5bWI</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
        {cards.map((card) => (
          <Card
            key={card.id}
            image={`${API_URL}/assets/${card.image}`}
            name={`${card.firstname} ${card.lastname}`}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

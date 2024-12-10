const API_URL = "http://10.115.1.38:8055";

interface Card {
  id: number;
  firstname: string;
  lastname: string;
  image: string;
}

export const fetchCards = async (): Promise<Card[]> => {
  try {
    const response = await fetch(`${API_URL}/items/people`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
    }

    const result = await response.json();
    const cards = result.data.map((card: any) => ({
      ...card,
      lastname: card.lastname || "",
    }));

    return cards as Card[];
  } catch (error) {
    console.error("Error fetching cards from Directus:", error);
    throw error;
  }
};


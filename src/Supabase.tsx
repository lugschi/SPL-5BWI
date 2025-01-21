import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://bjefnzrinfedgloftgpu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZWZuenJpbmZlZGdsb2Z0Z3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NTI0NDYsImV4cCI6MjA1MzAyODQ0Nn0.czW09e1GdEFTMJtxuUcYXOvF6_bo8P-YVljjTPwDxBc"
);

function HomeworkApp() {
  const [subjects, setSubjects] = useState<any[]>([]);

  useEffect(() => {
    getSubjects();
  }, []);

  async function getSubjects() {
    const { data, error } = await supabase.from("subject").select("*");

    setSubjects(data ?? []);
  }

  return (
    <div>
      <h1>Hausaufgabenliste</h1>
      <div>
        <h2>Alle Aufgaben</h2>
        {subjects.map((subject) => (
          <div key={subject.id}>
            <h2>{subject.name}</h2>
            <p>{subject.task || "Keine Aufgaben"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeworkApp;

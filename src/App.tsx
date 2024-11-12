import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="bg-black text-white min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">HTL Dornbirn 5bWI</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
        <Card
          image="https://picsum.photos/300/200?random=1"
          name="Noel Riedmann"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac volutpat leo. Etiam ac nunc eget ligula dapibus."
        />
        <Card
          image="https://picsum.photos/300/200?random=2"
          name="Jonas Nigg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac volutpat leo. Etiam ac nunc eget ligula dapibus."
        />
        <Card
          image="https://picsum.photos/300/200?random=3"
          name="Jonas Kronabitter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac volutpat leo. Etiam ac nunc eget ligula dapibus."
        />
        <Card
          image="https://picsum.photos/300/200?random=4"
          name="Luca Grabherr"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac volutpat leo. Etiam ac nunc eget ligula dapibus."
        />
        <Card
          image="https://picsum.photos/300/200?random=5"
          name="Ian Felder"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac volutpat leo. Etiam ac nunc eget ligula dapibus."
        />
        <Card
          image="https://picsum.photos/300/200?random=6"
          name="Moritz Brandner"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac volutpat leo. Etiam ac nunc eget ligula dapibus."
        />
        <Card
          image="https://picsum.photos/300/200?random=7"
          name="Diego Zechner"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac volutpat leo. Etiam ac nunc eget ligula dapibus."
        />
        <Card
          image="https://picsum.photos/300/200?random=8"
          name="Ronny Kostmann"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac volutpat leo. Etiam ac nunc eget ligula dapibus."
        />
      </div>
    </div>
  );
}

export default App;

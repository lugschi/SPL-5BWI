type Props = {
  image: string;
  name: string;
};

export default function Card({ image, name }: Props) {
  return (
    <div className="bg-white text-black rounded-lg">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4 flex items-center justify-center">
        <h2 className="font-semibold text-lg">{name}</h2>
      </div>
    </div>
  );
}

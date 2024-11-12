type Props = {
  image: string;
  name: string;
  description: string;
};

export default function Card({ image, name, description }: Props) {
  return (
    <div className="bg-white text-black rounded-lg">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}

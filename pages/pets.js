import Image from "next/image";
import img from '../public/1.jpg';

const PetsPage = () => {
  return (
    <div>
    <Image src={img} placeholder="blur" alt="pet" width="400" height="420" />
      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="pet" width="400" height="420" />
          </div>
        );
      })}
    </div>
  );
};

export default PetsPage;

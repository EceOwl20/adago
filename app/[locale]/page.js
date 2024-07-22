import Values from "./component/common/Values.jsx";
import HomeVilla from "./component/common/HomeVilla.jsx";

export default function Home() {
  return (
    <div className="flex flex-col gap-72">
      <HomeVilla/>
      <Values/>

    </div>
  );
}

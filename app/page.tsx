import Game from "./components/game";

export default function Home() {
  return (
    <div className="py-20 lg:py-36 min-h-screen flex justify-center items-center">
      <div>
        <Game />
      </div>
    </div>
  );
}

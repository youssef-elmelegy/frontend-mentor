import omelette from "./assets/images/image-omelette.jpeg";

export default function App() {
  return (
    <div className="min-h-screen bg-Stone-100 p-0 md:p-6 lg:p-16">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
        <div className="p-6 sm:p-8 lg:p-10">
          <img
            src={omelette}
            alt="Simple Omelette"
            className="w-full h-64 sm:h-80 object-cover rounded-xl mb-6"
          />
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-Stone-900 mb-4">
            Simple Omelette Recipe
          </h1>
          <p className="text-Stone-600 text-base text-sm mb-6">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <div className="bg-Rose-50 rounded-lg p-5 mb-6">
            <p className="text-Rose-800 font-Outfit font-bold text-lg mb-3">
              Preparation time
            </p>
            <ul className="text-Stone-600 text-sm space-y-1 list-disc list-inside">
              <li>
                <span className="font-bold text-Stone-900">Total:</span>
                Approximately 10 minutes
              </li>
              <li>
                <span className="font-bold text-Stone-900">Preparation:</span> 5
                minutes
              </li>
              <li>
                <span className="font-bold text-Stone-900">Cooking:</span> 5
                minutes
              </li>
            </ul>
          </div>

          <h2 className="font-serif font-bold text-2xl text-Brown-800 mb-4">
            Ingredients
          </h2>
          <ul className="text-Stone-600 text-sm mb-6 space-y-2 list-disc list-inside">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>

          <hr className="border-Stone-150 mb-6" />

          <h2 className="font-serif font-bold text-2xl text-Brown-800 mb-4">
            Instructions
          </h2>
          <ol className="text-Stone-600 text-sm mb-6 space-y-3 list-decimal list-inside">
            <li>
              <span className="font-bold text-Stone-900">Beat the eggs:</span>{" "}
              In a bowl, beat the eggs with a pinch of salt and pepper until
              they are well-mixed. You can add a tablespoon of water or milk for
              a fluffier texture.
            </li>
            <li>
              <span className="font-bold text-Stone-900">Heat the pan:</span>{" "}
              Place a non-stick frying pan over medium heat and add butter or
              oil.
            </li>
            <li>
              <span className="font-bold text-Stone-900">
                Cook the omelette:
              </span>{" "}
              Once the butter is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
              <span className="font-bold text-Stone-900">
                Add fillings (optional):
              </span>{" "}
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </li>
            <li>
              <span className="font-bold text-Stone-900">Fold and serve:</span>{" "}
              As the omelette continues to cook, carefully lift one edge and
              fold it over the fillings. Let it cook for another minute, then
              slide it onto a plate.
            </li>
            <li>
              <span className="font-bold text-Stone-900">Enjoy:</span> Serve
              hot, with additional salt and pepper if needed.
            </li>
          </ol>

          <hr className="border-Stone-150 mb-6" />

          <h2 className="font-serif font-bold text-2xl text-Brown-800 mb-4">
            Nutrition
          </h2>
          <p className="text-Stone-600 text-sm mb-4">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>

          <div className="">
            <div className=" flex py-3 text-sm ">
              <span className=" pl-4 flex-1 text-Stone-600">Calories</span>
              <span className="font-bold text-Rose-800">277kcal</span>
            </div>
            <div className="flex py-3 border-t border-Stone-150 text-sm">
              <span className="pl-4 flex-1 text-Stone-600">Carbs</span>
              <span className="font-bold text-Rose-800">0g</span>
            </div>
            <div className="flex py-3 border-t border-Stone-150 text-sm">
              <span className=" pl-4 flex-1 text-Stone-600">Protein</span>
              <span className="font-bold text-Rose-800">20g</span>
            </div>
            <div className="flex py-3 border-t border-Stone-150 text-sm">
              <span className=" pl-4 flex-1 text-stone-600">Fat</span>
              <span className="font-bold text-Rose-800">22g</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

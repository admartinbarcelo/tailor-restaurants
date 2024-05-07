import api from "../api";
import Image from "next/image";
import Link from "next/link";

export default async function Restaurants() {
  const restaurants = await api.list();

  return (
    <section className="container mx-auto  py-8">
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {restaurants.map((restaurant) => {
          // Calcular el promedio de calificaciones
          const totalRatings = restaurant.reviews.length;
          const totalScore = restaurant.reviews.reduce(
            (acc, review) => acc + review.rating,
            0
          );
          const averageRating = totalScore / totalRatings || 0;

          return (
            <article
              key={restaurant.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Link href={`/restaurants/${restaurant.id}`}>
                <div className="relative h-60 md:h-80">
                  <Image
                    alt={restaurant.name}
                    className="object-cover w-full h-full rounded-t-lg"
                    src={restaurant.image}
                    layout="fill"
                  />
                </div>

                <div className="p-4">
                  <h2 className="text-gray-700 text-lg font-bold mb-2">
                    <span>{restaurant.name}</span>

                    <span className="text-yellow-500 text-lg ml-2">
                      {averageRating.toFixed(1)}
                    </span>
                    <span className="text-gray-600 ml-1">⭐</span>
                    <span className="text-gray-600 ml-2">{`(${totalRatings})`}</span>
                  </h2>
                  <p className="text-sm text-gray-700">{restaurant.address}</p>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}


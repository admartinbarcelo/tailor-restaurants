"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import api from "../../api";

const RestaurantPage = ({ params: { id } }: { params: { id: string } }) => {
  const [restaurant, setRestaurant] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const data = await api.fetch(Number(id));
        setRestaurant(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching restaurant:", error);
      }
    };

    fetchRestaurant();
  }, [id]);

  const deleteRestaurant = async () => {
    try {
      await api.delete(Number(id));
      alert("Restaurant deleted successfully");
      window.location.href = "/restaurants"; // Redirige al usuario a otra página después de eliminar el restaurante
    } catch (error) {
      console.error("Error deleting restaurant:", error);
      alert("Failed to delete restaurant");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!restaurant) return <p>No restaurant found!</p>;

  return (
    <article
      key={restaurant.id}
      className="rounded-lg shadow-md overflow-hidden mx-16"
    >
      <Image
        alt={restaurant.name}
        className="mb-3 h-[300px] w-full object-cover rounded-lg mt-20"
        src={restaurant.image}
        width={300}
        height={300}
      />
      <h2 className="inline-flex gap-2 font-bold text-4xl text-yellow-400 mt-2 mb-4">
        <span>{restaurant.name}</span>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span className="font-normal opacity-75">
            ({restaurant.reviews.length})
          </span>
        </small>
      </h2>
      <div className="mt-3">
        <h3 className="text-xl font-semibold text-yellow-400 mt-2 mb-4">
          Operating Hours:
        </h3>

        <ul>
          {Object.entries(restaurant.operating_hours).map(([day, hours]) => (
            <li key={day} className="text-white">
              <span className="font-bold">{day}:</span>
              <span className="text-blue-300 italic ml-2">{String(hours)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3">
        <h3 className="text-xl font-semibold text-yellow-400 mt-2 mb-4">
          Reviews:
        </h3>
        {(restaurant.reviews as any[]).map((review: any, index: number) => (
          <div key={index} className="mb-3">
            <p className="font-bold">{review.name}</p>
            <p className="text-gray-500">{review.date}</p>
            <p>{review.comments}</p>
          </div>
        ))}
      </div>
      <button
        onClick={deleteRestaurant}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 mb-4"
      >
        Delete Restaurant
      </button>
    </article>
  );
};

export default RestaurantPage;

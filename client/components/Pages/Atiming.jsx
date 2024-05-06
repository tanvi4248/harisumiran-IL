import { useGetAllAtimingsQuery } from "../../api/harisumiranApi";

export default function Timing() {
  const { data: atiming, error, isLoading } = useGetAllAtimingsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !atiming) {
    return <div>Failed to load Timings. Try again later.</div>;
  }
  return (
    <div className="atiming w-1/4 bg-secondary mx-3 p-4 rounded-lg text-center">
      <h3 className="p-1 font-semibold bg-title text-white rounded-md">
        Aarti Timing
      </h3>
      {atiming.map((time) => {
        return (
          <div key={time.id} className="py-3">
            <p className="capitalize text-secondary">{time.title}</p>
            <p className="text-primary">{time.day}</p>
          </div>
        );
      })}
    </div>
  );
}

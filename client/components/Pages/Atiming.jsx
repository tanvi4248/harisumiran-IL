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
      <h2>Aarti Timing</h2>
      {atiming.map((time) => {
        return (
          <div key={time.id}>
            <p>{time.title}</p>
            <p>{time.day}</p>
          </div>
        );
      })}
    </div>
  );
}

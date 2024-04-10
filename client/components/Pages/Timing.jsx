import { useGetAllTimingsQuery } from "../../api/harisumiranApi";

export default function Timing() {
  const { data: timing, error, isLoading } = useGetAllTimingsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !timing) {
    return <div>Failed to load Timings. Try again later.</div>;
  }
  return (
    <div className="timing w-1/4 bg-secondary mx-3 p-4  text-center">
      <h2 className="font-bold">Darshan Timing</h2>
      {timing.map((time) => {
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

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
    <div className="timing w-1/4 bg-secondary mx-3 p-4 text-center rounded-lg">
      <h3 className="p-1 font-semibold bg-title text-white rounded-md">
        Darshan Timing
      </h3>
      {timing.map((time) => {
        return (
          <div key={time.id} className="py-3">
            <p className="capitalize">{time.title}</p>
            <p>{time.day}</p>
          </div>
        );
      })}
    </div>
  );
}

import { useGetAllTtimingsQuery } from "../../api/harisumiranApi";

export default function Ttiming() {
  const { data: ttiming, error, isLoading } = useGetAllTtimingsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !ttiming) {
    return <div>Failed to load Timings. Try again later.</div>;
  }
  return (
    <div className="ttiming w-1/4 bg-secondary mx-3 p-4 rounded-lg text-center">
      <h2>Thaal Timing</h2>
      <h3>Darshan will be closed during thaal</h3>
      {ttiming.map((time) => {
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

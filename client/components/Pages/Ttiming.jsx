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
      <h3 className="p-1 font-semibold bg-title text-white rounded-md">
        Thaal Timing
      </h3>
      <h3 className="my-3 text-red-700">Darshan will be closed during thaal</h3>
      {ttiming.map((time) => {
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

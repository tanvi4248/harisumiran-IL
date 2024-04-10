import { useGetAllStimingsQuery } from "../../api/harisumiranApi";

export default function Stiming() {
  const { data: stiming, error, isLoading } = useGetAllStimingsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !stiming) {
    return <div>Failed to load Timings. Try again later.</div>;
  }
  return (
    <div className="stiming w-1/4 bg-secondary mx-3 p-4 rounded-lg text-center">
      <h2>Sabha Timing</h2>
      {stiming.map((time) => {
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
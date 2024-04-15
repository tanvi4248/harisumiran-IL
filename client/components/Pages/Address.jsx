import temple from "../../src/assets/temple.jpg";
export default function Address() {
  return (
    <div className="address-main">
      <h1>Address</h1>
      <div className="address-inner flex w-1/2 justify-center">
        <img src={temple} className="w-1/2"></img>
        <div className="address"> 1670 Checker Rd, Long Grove, IL 60047</div>
      </div>
    </div>
  );
}

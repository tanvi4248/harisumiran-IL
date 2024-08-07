import lswami from "../../src/assets/lord_swaminarayan.png";
import gswami from "../../src/assets/gunatitanand_swami.png";
import sswami from "../../src/assets/shastriji_maharaj.png";
import yswami from "../../src/assets/yogiji_maharaj.png";
import hswami from "../../src/assets/hariprasad_swamiji.png";
import pswami from "../../src/assets/Prabodh-Swamiji-Maharaj.png";
import { Link } from "react-router-dom";

export default function Founder() {
  return (
    <div className="founder-successors mb-8">
      <h1 className="font-['Playfair_Display'] text-title mb-3 title">
        Founder and successors
      </h1>
      <div className="flex items-end justify-center flex-wrap mb-4">
        <div className="w-48 justify-center flex flex-col px-8">
          <Link to="/bhagwan_swaminarayan" className="text-center">
            <img src={lswami} className="rounded-full" />
            <span className="text-center mt-2 float-left">
              BHAGWAN SWAMINARAYAN
            </span>
          </Link>
        </div>
        <div className="w-48 justify-center flex flex-col px-8">
          <Link to="/gunatit_swami" className="text-center">
            <img src={gswami} className="rounded-full" />
            <span className="text-center mt-2 float-left">
              GUNATITANAND SWAMI
            </span>
          </Link>
        </div>
      </div>
      <div className="flex items-end justify-center flex-wrap">
        <div className="w-48 justify-center flex flex-col px-8">
          <Link to="/shastriji" className="text-center">
            <img src={sswami} className="rounded-full" />
            <span className="text-center mt-2 float-left">
              SHASTRIJI MAHARAJ
            </span>
          </Link>
        </div>
        <div className="w-48 justify-center flex flex-col px-8">
          <Link to="/yogiji" className="text-center">
            <img src={yswami} className="rounded-full" />
            <span className="text-center mt-2 float-left">YOGIJI MAHARAJ</span>
          </Link>
        </div>
        <div className="w-48 justify-center flex flex-col px-8">
          <Link to="/hariprasad" className="text-center">
            <img src={hswami} className="rounded-full" />
            <span className="text-center mt-2 float-left">
              HARIPRASAD SWAMIJI
            </span>
          </Link>
        </div>
        <div className="w-48 justify-center flex flex-col px-8">
          <Link to="/prabodh" className="text-center">
            <img src={pswami} className="rounded-full" />
            <span className="text-center mt-2 float-left">PRABODH SWAMIJI</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Typography } from "@material-tailwind/react";
import Divider from "./Divider";

export default function Billet() {
  return (
    <>
      <div>
        <div className="w-full flex justify-between">
          <Typography variant="small">OFPPT / DRPS / ISGI LAAYOUNE</Typography>
          <Typography variant="small">2022/2023</Typography>
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <Typography variant="h3" color="blue">
            Biellet D'Excuse
          </Typography>
          <div className="mt-2">
            <Typography variant="paragraph" className="text-gray-700">
              Priére d'accepter la reprise des cours
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full flex items-start justify-between mt-6 px-4">
          <Typography variant="paragraph" className="text-gray-900">
            Date du: <span>{"..............."}</span>
          </Typography>
          <Typography variant="paragraph" className="text-gray-900">
            Heure: <span>{"......."}</span> h <span>{"......."}</span> mn
          </Typography>
        </div>
        <div className="w-full flex items-start justify-between mt-2 px-4">
          <p className="text-gray-900 font-semibold text-lg">
            {"Fahd AHSAYNI"}
          </p>
          <p className="text-gray-900 font-semibold text-lg">{"DEVOWF 202"}</p>
        </div>
        <div className="mt-8 px-4">
          <Divider />
          <div className="mt-5">
            <Typography variant="h5" color="green">
              Retard
            </Typography>
            <div className="mt-4 flex items-center justify-between px-4">
              <div>
                <input type="radio" name="radio-1" className="radio" checked />
                <span className="ml-4 text-gray-700">Retard Non Justifiée</span>
              </div>
              <div>
                <input type="radio" name="radio-1" className="radio" />
                <span className="ml-4 text-gray-700">Retard Justifiée</span>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Typography variant="h5" color="green">
              Absence
            </Typography>
            <div className="mt-4 flex flex-col items-start justify-between px-4">
              <div className="mb-4">
                <input type="radio" name="radio-1" className="radio" checked />
                <span className="ml-4 text-gray-700">
                  Absence Non Justifiée
                </span>
              </div>
              <div>
                <input type="radio" name="radio-1" className="radio" />
                <span className="ml-4 text-gray-700">Absence Justifiée</span>
              </div>
              <select className="select select-bordered mt-4 w-full">
                <option disabled selected>
                  choisissez la justicatfion
                </option>
                <option>Autorisation</option>
                <option>Maladie</option>
                <option>Présence du Tuteur</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
        >
          Sauvegarder
        </button>
      </div>
    </>
  );
}

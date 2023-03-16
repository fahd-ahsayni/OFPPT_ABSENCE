import React from "react";
import InputSelect from "./inputs/InputSelect";
import { Typography } from "@material-tailwind/react";

const FormInsertion = () => {
  return (
    <div className="flex-1 xl:overflow-y-auto">
      <Typography variant="h2" className="text-blue-600">
        Insertion des stagiaires
      </Typography>

      <form className="divide-gray-200 mt-6 space-y-8 divide-y">
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6 px-2">
          <div className="sm:col-span-6">
            <Typography variant="h4" className="text-green-600">
              Les informations personnelles
            </Typography>
            <Typography variant="small" className="text-gray-600">
              Veuillez entrer toutes les informations du stagiaire afin d'être
              ajouté a l'application
            </Typography>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-900"
            >
              Prénom
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="mt-1 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-900"
            >
              Nom
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="mt-1 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-900"
            >
              Carte d'identité nationale
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                CIN
              </span>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-900"
            >
              Choisissez le groupe
            </label>
            <InputSelect />
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="photo"
              className="block text-sm font-medium mb-2.5 text-gray-900"
            >
              Photo de Stagiaire
            </label>
            <div className="mt-1 flex items-center">
              <img
                className="inline-block h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                alt=""
              />
              <div className="ml-4 flex">
                <div className="relative flex cursor-pointer items-center rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-50 hover:bg-gray-50">
                  <label
                    htmlFor="user-photo"
                    className="pointer-events-none relative text-sm font-medium text-gray-900"
                  >
                    <span>Change</span>
                    <span className="sr-only">user photo</span>
                  </label>
                  <input
                    id="user-photo"
                    name="user-photo"
                    type="file"
                    className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-6 pt-8 sm:grid-cols-6 sm:gap-x-6 px-2">
          <div className="sm:col-span-6">
            <Typography variant="h4" className="text-green-600">
              Autre Informations
            </Typography>
            <Typography variant="small" className="text-gray-600">
              This information will be displayed publicly so be careful what you
              share
            </Typography>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-900"
            >
              Adresse Email
            </label>
            <input
              type="text"
              name="email-address"
              id="email-address"
              autoComplete="email"
              className="mt-1 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium text-gray-900"
            >
              Mobile
            </label>
            <input
              type="text"
              name="phone-number"
              id="phone-number"
              autoComplete="tel"
              className="mt-1 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-900"
            >
              Nationalité
            </label>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="mt-1 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option />
              <option>Maroc</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-900"
            >
              CEF
            </label>
            <input
              type="text"
              name="language"
              id="language"
              className="mt-1 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <Typography variant="small" className="text-gray-600 sm:col-span-6">
            Veuillez vous assurer que les informations sont correctes avant
            d'enregistrer
          </Typography>
        </div>

        <div className="flex justify-end pt-8">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormInsertion;

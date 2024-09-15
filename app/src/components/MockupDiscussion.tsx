import React from "react";

const MockupDiscussion: React.FC = () => {
  return (
    <div id="results" className="w-full rounded text-left align-right">
      <div id="session-history" className="mb-4">
        {/* User Message */}
        <div className="flex transition-opacity duration-500 ease-in-out fade-in">
          <div id="icon" className="flex items-start pt-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 text-primary mb-4 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <span className="text-xs text-gray-500 mb-1">
              15/09/2024 19:09:50
            </span>
            <div className="mb-4 p-4 rounded-lg w-full border border-primary text-primary">
              <div className="flex flex-col">
                <div className="flex-1">
                  <p>
                    Quelle est ma couverture pour mon rendez-vous chez
                    l'ostéopathe ?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex transition-opacity duration-500 ease-in-out fade-in">
          <div id="icon" className="flex items-start pt-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 text-primary mb-4 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <span className="text-xs text-gray-500 mb-1">
              15/09/2024 19:09:55
            </span>
            <div className="mb-4 p-4 rounded-lg w-full border border-primary text-primary">
              <div className="flex flex-col">
                <div className="flex-1">
                  <p>
                    Votre contrat Visanté vous permet de bénéficier d'un
                    remboursement pour des séances d'ostéopathie. Toutefois, la
                    prise en charge est limitée à 4 séances par an et par
                    bénéficiaire. Le montant remboursé est de 20 € par séance
                    selon les documents fournis.
                  </p>
                  <p>
                    Il est important de noter que pour le remboursement, il vous
                    faudra fournir des factures pour chaque séance. De plus, les
                    remboursements s'effectuent après déduction de ce que vous
                    pourriez recevoir du régime obligatoire, qui ne couvre pas
                    généralement ce type de soins.
                  </p>
                  <p>
                    Si vous avez besoin d'une couverture plus complète pour
                    l'ostéopathie, vous pourriez envisager des options
                    additionnelles dans votre contrat ou un autre niveau de
                    garantie qui pourrait offrir des remboursements supérieurs.
                    N’hésitez pas à me solliciter si vous souhaitez explorer ces
                    possibilités.
                  </p>
                </div>
                {/* sources */}
                <div className="flex flex-col mt-4 space-y-2 justify-end items-end">
                  <h2 className="text-lg font-semibold">Sources</h2>
                  <button className="btn btn-primary btn-outline w-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                    CG_Visanté_2024.pdf
                  </button>
                  <button className="btn btn-primary btn-outline w-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                    Limites_Visanté_2024.pdf
                  </button>
                  <button className="btn btn-primary btn-outline w-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                    Exclusions_Visanté_2024.pdf
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional extra content */}
        <div className="mt-5">
          {/* Additional content can be inserted here */}
        </div>
      </div>
    </div>
  );
};

export default MockupDiscussion;

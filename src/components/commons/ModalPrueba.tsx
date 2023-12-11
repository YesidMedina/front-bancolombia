type propType = {
  props:any,
  open: boolean;
  onclose: () => void;
  
};

export const ModalPrueba: React.FC<propType> = ({props, open, onclose }) => {
  return (
    <div className="w-full sticky">
      <div
        className={`fixed inset-0 flex justify-center items-center
     transition-colors ${open ? "visible" : "invisible"}`}
        onClick={onclose}
      >
        <div
          className={`rounded-lg shadow p-2 transition-all w-11/12 border-black border-1 dark:border-gray-300 bg-gray-400 dark:bg-gray-900
        ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400
            bg-white hover:bg-gray-50 hover:text-gray-600"
            onClick={onclose}
          >
            x
          </button>
          <div className="">
            <div className="grid grid-cols-4 gap-4 w-full dark:text-gray-100 text-sm">
              <div>
                <div className="relative mb-2">
                  <h2 className="">ID </h2>
                  {/* {info.maintenance === true ? (
                    <p className="bg-violet-700 rounded-lg w-12 h-6 text-white text-center">
                      {props.id}
                    </p>
                  ) : (
                    <p className="bg-green-600 rounded-lg w-12 h-6 text-white text-center">
                      {props.id}
                    </p>
                  )} */}
                </div>
                <div className="relative mb-2">
                  <h2 className="">{props.A}</h2>
                  <p>{props.infoA}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">{props.B}</h2>
                  <p className="text-gray-600">{props.infoB}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">{props.C}</h2>
                  <p className="text-gray-600">{props.infoC}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">{props.D}</h2>
                  <p className="text-gray-600">{props.infoD}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">{props.E}</h2>
                  <p className="text-gray-600">{props.infoE}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">{props.F}</h2>
                  <p className="text-gray-600">{props.infoF}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">{props.G}</h2>
                  <p className="text-gray-600">{props.infoG}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">{props.H}</h2>
                  <p className="text-gray-600">{props.infoH}</p>
                </div>
              </div>

              <div>
                <div className="relative mb-2">
                  <h2 className="">{props.I}</h2>
                  <p className="text-gray-600">{props.infoI}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">{props.J}</h2>
                  <p className="text-gray-600">{props.infoJ}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">{props.K}</h2>
                  <p className="text-gray-600">{props.infoK}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">{props.L}</h2>
                  <p className="text-gray-600">{props.infoL}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">{props.M}</h2>
                  <p className="text-gray-600">{props.infoM}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">{props.N}</h2>
                  <p className="text-gray-600">{props.infoN}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">{props.O}</h2>
                  <p className="text-gray-600">{props.infoO}</p>
                </div>
              </div>

              <div>
                <div className="relative mb-2">
                  <h2 className="">{props.P}</h2>
                  <p className="text-gray-600">{props.infoP}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">{props.Q}</h2>
                  <p className="text-gray-600">{props.infoQ}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">{props.R}</h2>
                  <p className="text-gray-600">{props.infoR}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">{props.S}</h2>
                  <p className="text-gray-600">{props.infoS}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">{props.T}</h2>
                  <p className="text-gray-600">{props.infoT}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">{props.U}</h2>
                  <p className="text-gray-600">{props.infoU}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">{props.V}</h2>
                  <p className="text-gray-600">{props.infoV}</p>
                </div>
              </div>
              <div>
                <div className="relative mb-2">
                  <h2 className="">{props.W}</h2>
                  <p className="text-gray-600">{props.infoW}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">{props.X}</h2>
                  <p className="text-gray-600">{props.infoX}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">{props.Y}</h2>
                  <p className="text-gray-600">{props.infoY}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">{props.Z}</h2>
                  <p className="text-gray-600">{props.infoZ}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">{props.AA}</h2>
                  <p className="text-gray-600">{props.infoAA}</p>
                </div>

                <div className="relative mb-2">
                  <h2 className="">{props.BB}</h2>
                  <p className="text-gray-600">{props.infoBB}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">{props.CC}</h2>
                  <p className="text-gray-600">{props.infoCC}</p>
                </div>
                <div className="relative mb-2">
                  <h2 className="">{props.DD}</h2>
                  <p className="text-gray-600">{props.infoDD}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

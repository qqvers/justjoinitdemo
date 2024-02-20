import { forwardRef } from "react";

const ModalTechnologies = forwardRef(function ModalTechnologies(
  { handleSelect, data_array, generateRandomColor },
  ref
) {
  return (
    <div className="dialog_technologies_wrapper">
      <dialog
        ref={ref}
        onClick={() => {
          handleSelect(null);
        }}
        className="dialog_technologies"
      >
        <div className="button_lang_wrapper_modal">
          {data_array.map((tech) => (
            <div
              to="/settings"
              key={tech.id}
              onClick={() => handleSelect(tech.name)}
            >
              <div className="technology_img_bg_modal">
                <div
                  className="technology_img_modal"
                  style={{ backgroundColor: generateRandomColor() }}
                >
                  <img src={tech.logo} alt="technology_logo" />
                </div>

                <div className="technology_name_modal">{tech.name}</div>
              </div>
            </div>
          ))}
        </div>
      </dialog>
    </div>
  );
});

export default ModalTechnologies;

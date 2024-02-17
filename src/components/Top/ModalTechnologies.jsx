import { forwardRef } from "react";

const ModalTechnologies = forwardRef(function ModalTechnologies(
  { handleSelect, data_array },
  ref
) {
  return (
    <dialog
      ref={ref}
      onClick={() => {
        handleSelect(null);
      }}
    >
      <div className="button_lang_wrapper">
        {data_array.map((tech) => (
          <div
            to="/settings"
            key={tech.id}
            onClick={() => handleSelect(tech.id)}
          >
            <div className="technology_img_bg">
              <div className="technology_img">
                <img
                  src={tech.logo}
                  className="technology_logo"
                  alt="technology_logo"
                />
              </div>
            </div>
            <div className="technology_name">{tech.name}</div>
          </div>
        ))}
      </div>
    </dialog>
  );
});

export default ModalTechnologies;

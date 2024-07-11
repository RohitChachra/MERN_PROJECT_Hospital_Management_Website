import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h3>Who We Are</h3>
          <p>
            With the mission to serve the Nation, Healing Touch Ambala Hospital opened its doors in Ambala with an experienced
            team of doctors and experts with a well-equipped facility.Healing Touch indomitably provides quality patient care with wavered attention
            to clinical excellence, patient safety, affordability and an undying passion to assure the very best health care for those
            whom we serve and thereby enhance longevity and quality of human life. The state of the art hospital is driven to match the
            International medical standards and services, ever ready to handle any aspect of an emergency.</p>
          <p> Our salient features include-
            70 bedded ICU, 5 bedded NICU, 4 Operation Theatre, 1 Cath Lab, 32 slice Ct/ Advanced MRI, digital X-RAY, DR & CR system,
            Echocardiography and dialysis centre. Healing Touch Hospital is also the home to Ambala's first true trauma centre! With a strong
            focus on preventive health care, Healing touch undauntingly moves ahead in the direction of delivering quality healthcare
            services to every patient. Walking towards achieving excellence in health care, Healing Touch only envisions for a new
            horizon - a future where the nation is healthy, where its people are fighting fit, and India emerges as the preferred global
            healthcare destination.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;

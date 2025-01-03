import React from "react";
import "./Special.scss";
import SpecialBox from "./SpecialBox/SpecialBox";
import specialImgBg1 from "../../../assets/img/specialImgBg1.png";
import specialImgBg2 from "../../../assets/img/specialImgBg2.png";

import specialImg1 from "../../../assets/img/specialImg1.png";
import specialImg2 from "../../../assets/img/specialImg2.png";

export default function Special() {
  const testImg = 'https://s3-alpha-sig.figma.com/img/0a38/e4b6/27c828e2d747a73618eb8e3b5ec2a80e?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ertA~XflqtTGkaZyTNgWhFfmkXapbtb9DRCoJ-jeNwO~m5NSItt1fCz4YpCGwDxHQw8q2lARKMmsgMdY1Vq8qDzFDSV8FaJtgUxWmG4DhjpXbCIwBeC439T8d-6bNzQK4ANKC9HBb4OvFQ0C0sShhhfEGC3qKMJIdcFTyi3kClZ9QDZO255-G1w6uEGkdru6f3567fh~EhoKEtbQ7-4UeP3riG3KTy12KDCEzLXYSQCpmJIoOhlaHkOMI1KP-WXRUW7UXY4V7GZrp8j01ZqAnwBwZVqayRw3d0cGEgaEgTGKiaf4DM1o8cORRwp23EpHs30JyHRSpQunj~LWACMh~g__'
  return (
    <section className="special">
      <h2 className="title">Специальные предложения</h2>
      <div className="special__general">
        <SpecialBox
          bgImg={specialImgBg1}
          title="Оформите карту «Северяночка»"
          text="И получайте бонусы при покупке в магазинах и на сайте"
          img={testImg}
        />
        <SpecialBox
          bgImg={specialImgBg2}
          title="Покупайте акционные товары"
          text="И получайте вдвое больше бонусов"
          img={specialImg2}
        />
      </div>
    </section>
  );
}

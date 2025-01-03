import React from "react";
import "./NewItems.scss";
import useFetch from "../../../useFetch";

import Cart from "../../Cart/Cart";
import HomeTitle from "../HomeTitle/HomeTitle";

export default function NewItems() {
  // const data = useFetch("https://597440ea-7b01-4e0f-847c-6ed453d5004b.mock.pstmn.io/products2").data;
  const data = [
    {
      discount: null,
      id: "b1",
      like: false,
      img: "https://s3-alpha-sig.figma.com/img/99ce/a554/fb0392557de1c2a79808b1a718e015cf?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dx0~WlR6bX7-IQBZbrCPTw2ydOLNS27GvaDawEXi-J79sa3PFmyFkPOAoJ8pAT-KWKV1VX81nedz0-6fEGTyRcIH65BLlSBTcaUYBn1hEoL80j7P6BelA-WXso~RJURzIfTa7yisQjFwOXHju~~p14N6MKzLGxJFCKg8gBAGqXjx1ZQDo2~SUSvinPNIS6Gv~04rMWELmGvB4fhN3X-m4w3lhYOhdZ4-NOu-kAPwIr4cbDXK0~bgI1j~6ECEXgoHglJxGRlrkOuF4~5HYKvgh6uhqd9QZCM8wfu5ve1~KBWKswfReHVBswHs78EWAZuO6L3yZ4pcilozfhu5STQXBQ__",
      cartPirce: null,
      regularPrice: null,
      price: 599.99,
      name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: false,
        },
        {
          star: false,
        },
        {
          star: false,
        },
      ],
    },
    {
      discount: null,
      id: "b2",
      like: false,
      img: "https://s3-alpha-sig.figma.com/img/c3eb/db29/53087affaab802491eed306dac7b151e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TVGi5b1FdiLDGRVzpQL2o1dFmwnSkA2v41MxR2y3-qxUoQ2ZkghW7tZLUiqi6Azj5aMNRCRg7JbGvncqfXLnghUO09u6znqdWFW9~aKZOTPAWbEn4EQE45KBmhRPpu~Ru8wzG1UCL4LWXNASN1gJDRIHU5t4lexjjXWOJpCII3O68rPG6mp~oBv~Hun8FzGSD4GT9AO3cawwNhphBatv-WYpn0gFZNWX9zLpK51VTTNRDO~rMruWo30sff52BTBqFnIWUi6O9M2kfYZI16Kn0giVTtnvZFZUASIdQLQWtAP8quti5YVpHIvNF6xMgh-j7N1KDxwQM29DPQTQLxYU4g__",
      cartPirce: null,
      regularPrice: null,
      price: 44.5,
      name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: true,
        },
      ],
    },
    {
      discount: null,
      id: "b3",
      like: false,
      img: "https://s3-alpha-sig.figma.com/img/42e5/bebe/c7f4a09ca6f08b72069d9e268e8e27c9?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kTB1~x2Wr8VooyOBL3CgwYKkezg1W97zEsPbpAQO0ZuwwugW9Df12pYC3F8QnU~Z4EwwSRhzE-Ga6I~JCY8OT6YFKUF0EGh7EjN6f6Z1c6bp-19Wyd7Izzlu9jVzkFweF~dvws9RHQr8BbbYLVZ-SeOWjZmC0c4GPhY8YXtURiA1rsJLcIMUFdPCk0P1tB5lAQFK9plHN8fCG2v3hwRJLHbP98rDPXFti78xk-8YEVdlT4W2Ojo09QiUBOEjDTLiVf4mVBpz4TGLFM-hzOGwAI7fktr5EkjQpS9P0kS4zMTpK8d1sGTOrjOCZlMU5-bFQRaaU9f7Qje1VyB-S0OUGA__",
      cartPirce: null,
      regularPrice: null,
      price: 159.99,
      name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: false,
        },
        {
          star: false,
        },
        {
          star: false,
        },
      ],
    },
    {
      discount: null,
      id: "b4",
      like: false,
      img: "https://s3-alpha-sig.figma.com/img/426b/682e/3c7d59fec09bf772f11bc4d84b0d2a2a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BmKSb2Y1q-RoeIlx00BQ7gR8gUBtO-mk3jthO2J0HDmIEZO5lwHDmOqDU2cNHBjNgNMHrufV08sbv5TYi0KXd~kNte0HgxqJHTmJqucZL8SFIjHiKj4WA74GFv3me5qvyuv8qOMH5bTiFPFkjqmFaAhMBpdEHQ8nokdUigRve5Dvu-TzEMiY31Gbop4ORSv4fOFs89v0HC9FKe57cQib0C49EnHxTFedZT0zbpN9pSLnWthvi3HRb~3zwU1C-vITCsmcVqgW4Nv8ESZ4CVrJ9izL9Jm1UWzIB3tNIPvMX3VqPKezDArQa1ReAD462KT3AcCJNZyAtk88X-zk8qeobA__",
      cartPirce: null,
      regularPrice: null,
      price: 49.39,
      name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      stars: [
        {
          star: true,
        },
        {
          star: true,
        },
        {
          star: false,
        },
        {
          star: false,
        },
        {
          star: false,
        },
      ],
    },
  ];
  console.log(data);

  return (
    <section className="newItems">
      <HomeTitle title="Новинки" link="/" />

      <div className="general">
        {data.map((item) => (
          <Cart things={item} />
        ))}
      </div>
    </section>
  );
}

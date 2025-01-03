import React from "react";
import "./Stock.scss";
import useFetch from "../../../useFetch";
import Cart from "../../Cart/Cart";
import { Link } from "react-router";
import HomeTitle from "../HomeTitle/HomeTitle";
export default function Stock() {
  // const data = useFetch("https://597440ea-7b01-4e0f-847c-6ed453d5004b.mock.pstmn.io/products1");

  const data = [
    {
      "discount":50,
      "id":"Stock1",
      "like":false,
      "img": "https://s3-alpha-sig.figma.com/img/ad29/ef5c/b5c10bd68b9f6dd7934d9a84ebc9b9cc?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LvbagFiJAudyfMOdV~KMmJv0-zZEe0YoG8~ZoULU-726QH3RoqzqP3DweyE0ZnPamB5oD9LDaqpbsVDeLkLo7pqh1eNHY1iG0hJrk-vl0uDYmaFcdPG6nyQmFZzNKzftn3t9jxN~DeqP4EggAl8q5mCnazIFxUkIjX6dTc4EG7wv1eI82-TnA63YAdv9THoqBGu8QwnpPlH9erdvH-KHVGzt52F34lMft~8fvHzIYMrTODHdrAp0QFTM5ocmv7XB-JUuh578bPcVEkBazVAi4ZI8h8ipUhzum3lAtSU7mbOpEpHO2Kzz4lspycKm3Hc-JVbKuvE5bt-wf0caikd6Wg__",
      "cartPirce": 44.50,
      "regularPrice": 50.50,
      "name": "Г/Ц Блинчики с мясом вес, Россия",
      "stars": [
          {
              "star": true
          },
          {
              "star": true
          },
          {
              "star": false
          },
          {
              "star": false
          },
          {
              "star": false
          }
      ]
  },
  {
      "discount":50,
      "id":"Stock2",
      "like":false,
      "img": "https://s3-alpha-sig.figma.com/img/426b/682e/3c7d59fec09bf772f11bc4d84b0d2a2a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BmKSb2Y1q-RoeIlx00BQ7gR8gUBtO-mk3jthO2J0HDmIEZO5lwHDmOqDU2cNHBjNgNMHrufV08sbv5TYi0KXd~kNte0HgxqJHTmJqucZL8SFIjHiKj4WA74GFv3me5qvyuv8qOMH5bTiFPFkjqmFaAhMBpdEHQ8nokdUigRve5Dvu-TzEMiY31Gbop4ORSv4fOFs89v0HC9FKe57cQib0C49EnHxTFedZT0zbpN9pSLnWthvi3HRb~3zwU1C-vITCsmcVqgW4Nv8ESZ4CVrJ9izL9Jm1UWzIB3tNIPvMX3VqPKezDArQa1ReAD462KT3AcCJNZyAtk88X-zk8qeobA__",
      "cartPirce": 44.50,
      "regularPrice": 50.50,
      "name": "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
      "stars": [
          {
              "star": true
          },
          {
              "star": true
          },
          {
              "star": true
          },
          {
              "star": false
          },
          {
              "star": false
          }
      ]
  },
  {
      "id":"Stock3",
      "like":false,
      "img": "https://s3-alpha-sig.figma.com/img/c3eb/db29/53087affaab802491eed306dac7b151e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TVGi5b1FdiLDGRVzpQL2o1dFmwnSkA2v41MxR2y3-qxUoQ2ZkghW7tZLUiqi6Azj5aMNRCRg7JbGvncqfXLnghUO09u6znqdWFW9~aKZOTPAWbEn4EQE45KBmhRPpu~Ru8wzG1UCL4LWXNASN1gJDRIHU5t4lexjjXWOJpCII3O68rPG6mp~oBv~Hun8FzGSD4GT9AO3cawwNhphBatv-WYpn0gFZNWX9zLpK51VTTNRDO~rMruWo30sff52BTBqFnIWUi6O9M2kfYZI16Kn0giVTtnvZFZUASIdQLQWtAP8quti5YVpHIvNF6xMgh-j7N1KDxwQM29DPQTQLxYU4g__",
      "cartPirce": 44.50,
      "regularPrice": 50.50,
      "name": "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
      "stars": [
          {
              "star": true
          },
          {
              "star": true
          },
          {
              "star": true
          },
          {
              "star": true
          },
          {
              "star": true
          }
      ]
  },
  {
      "discount":50,
      "id":"Stock4",
      "like":false,
      "img": "https://s3-alpha-sig.figma.com/img/42e5/bebe/c7f4a09ca6f08b72069d9e268e8e27c9?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kTB1~x2Wr8VooyOBL3CgwYKkezg1W97zEsPbpAQO0ZuwwugW9Df12pYC3F8QnU~Z4EwwSRhzE-Ga6I~JCY8OT6YFKUF0EGh7EjN6f6Z1c6bp-19Wyd7Izzlu9jVzkFweF~dvws9RHQr8BbbYLVZ-SeOWjZmC0c4GPhY8YXtURiA1rsJLcIMUFdPCk0P1tB5lAQFK9plHN8fCG2v3hwRJLHbP98rDPXFti78xk-8YEVdlT4W2Ojo09QiUBOEjDTLiVf4mVBpz4TGLFM-hzOGwAI7fktr5EkjQpS9P0kS4zMTpK8d1sGTOrjOCZlMU5-bFQRaaU9f7Qje1VyB-S0OUGA__",
      "cartPirce": 44.50,
      "regularPrice": 50.50,
      "name": "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
      "stars": [
          {
              "star": true
          },
          {
              "star": true
          },
          {
              "star": false
          },
          {
              "star": false
          },
          {
              "star": false
          }
      ]
  }
  ]

  console.log(data);

  return (
    <section className="stock">
     <HomeTitle title='Акции' link='/' />

      <div className="general">
        {data.map((item) => (
          <Cart key={item.id} things={item} />
        ))}
      </div>
    </section>
  );
}

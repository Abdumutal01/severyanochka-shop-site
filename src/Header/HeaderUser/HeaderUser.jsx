import React from 'react'
import './HeaderUser.scss'

export default function HeaderUser() {
    return (
        <div className='header__user-box'>
            <div className="header__user-div">
                <img
                    src="https://s3-alpha-sig.figma.com/img/73a7/2afa/3b3294ff7bb2f45d2d03ac0d0fee5e5f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b3cWhC4Nt7bThqh1m7HV56Di6~-7RAjyznwA35AdHp41nTqNM-Gw-3Yu1Jmk5DXU4BxDcqtOaV3g2d8S8xRPSx3gr18LVgdWA4jnVcRYY7d4HKJMEdBwMeNzSOANbUmmT36LJzZGhy68Ciqc3itUv~3V7XB50UWn1zN1wsS0k~rLqMehtUesqENnyNp7JxrGwCS~k0LlQ93EU7piy3S6KfipytmysNU7RH3AqERQkZ8pv0gfX~~lKJ5-WjMcANIwzQYw-HBbNoi3lOfp4uCxw0Ssmvi9x7svX3RAwqSffVwiS3iJA~Zmq~x~P~Ak6HRXQ7eQMElIALBn7SElL-eohg__"
                    alt=""
                    className="header__user-img"
                />
                <h3 className='header__user-name'>
                    Алексей
                </h3>
            </div>
            <button className='header__user-btn'>
                <i class="fa-solid fa-chevron-down"></i>
            </button>
        </div>
    )
}

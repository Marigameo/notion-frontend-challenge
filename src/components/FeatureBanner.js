import React from 'react'
import BannerImage from './bannerImage.png'
import './header.css'

export default function FeatureBanner() {
    return (
        <div className="bannerWrapper">
            <div className="bannerContent">
                <div className="primaryContent">
                    Find the university that’s right for you.
                </div>
                <p className="secondaryText">Tenetur ex explicabo et illo. Recusandae fugit eius voluptatem. Voluptas atque autem totam.</p>
            </div>
            <img src={BannerImage} alt="bannerImg"></img>
        </div>
    )
}

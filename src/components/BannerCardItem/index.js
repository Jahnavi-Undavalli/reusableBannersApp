// Write your code here.

import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {id, headerText, description, className} = bannerDetails

  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="paragraph">{description}</p>
      <button className="button">Show more</button>
    </li>
  )
}

export default BannerCardItem

import ToglerBox from "./ToglerBox"
import "./ToglersContainer.css"
const ToglersContainer = () => {
  return (
    <div className="expanding-boxes-container">
    <ToglerBox
      boxIcon="../images/BoxiconOne.png"
      boxHeader="Контрола на квалитет"
    />
    <ToglerBox
      boxIcon="../images/BoxiconTwo.png"
      boxHeader="Политика на враќање"
    />
    <ToglerBox
      boxIcon="../images/BoxiconThree.png"
      boxHeader="Достава"
    />
    <ToglerBox
      boxIcon="../images/BoxiconFour.png"
      boxHeader="Помош"
    />
  </div>  )
}

export default ToglersContainer
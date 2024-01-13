import Lottie from "lottie-react";
import batBall from "../../../public/lotties/batBall.json"

export default function BatBallLottie() {
    return (
        <Lottie
            style={{ height: 200 }}
            className='m-auto'
            animationData={batBall} />)
}

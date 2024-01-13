import Lottie from "lottie-react";
import jumpingBall from "../../../public/lotties/jumpingBall.json"

export default function JumpingBallLottie() {
    return (
        <Lottie
            style={{ height: 200 }}
            className='m-auto'
            animationData={jumpingBall} />
    )
}

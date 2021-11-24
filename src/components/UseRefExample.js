import { useRef } from "react";
const UseRefExampleComponent = () => {
    const imageRef = useRef(null);
    const changeToColorImage = () => {
        imageRef.current.src = 'color.png'
    }
    const changeToBlankAndWhite = () => {
        imageRef.current.src = 'bw.png';
    }
    return (
        <div data-testid="use-ref-example-container">
            <div>
                <h2>useRef Hook Example</h2>
            </div>
            <div>
                <img
                    alt="use-ref-example"
                    src="bw.png"
                    data-testid="ref-image"
                    onMouseOut={changeToBlankAndWhite}
                    onMouseOver={changeToColorImage}
                    ref={imageRef}/>
            </div>
        </div>
     );
}
 
export default UseRefExampleComponent;
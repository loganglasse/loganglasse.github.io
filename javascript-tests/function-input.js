window.onload = () => {
    const feetToInchesAction = 
    document.getElementById('feetToInchesAction');

    feetToInchesAction.onclick = () => {
        const feetToInchesInput = document.getElementById('feetToInchesInput');
        const feetToInchesDisplay = document.getElementById('feetToInchesDisplay');

        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    };
    const feetToInches = (feet) => {
        return feet * 12;
    };
    const milesToFeetAction = 
        document.getElementById('milesToFeetAction');

    milesToFeetAction.onclick = () => {
        const milesToFeetInput = document.getElementById('milesToFeetInput');
        const milesToFeetDisplay = document.getElementById('milesToFeetDisplay');

        milesToFeetDisplay.textContent = milesToFeet(milesToFeetDisplay.value);
    };
    const milesToFeet = (miles) => {
        return miles * 5280;
    };
    const areaOfTriangleAction = 
    document.getElementById('areaOfTriangleAction');

    areaOfTriangleAction.onclick = () => {
    const areaOfTriangleInput = document.getElementById('areaOfTriangleInput');
    const areaOfTriangleDisplay = document.getElementById('areaOfTriangleDisplay');

    areaOfTriangleDisplay.textContent = areaOfTriangle(areaOfTriangle.value);
    };
    const areaOfTriangle = (base, height) => {
        return area = base * height % 2
    };
    const areaOfCircleAction = 
document.getElementById('areaOfCircle');

areaOfCircleAction.onclick = () => {
const areaOfCircleInput = document.getElementById('areaOfCircleInput');
const areaOfCircleDisplay = document.getElementById('areaOfCircleDisplay');

areaOfCircleDisplay.textContent = areaOfCircle(areaOfCircleInput.value);
};
    const areaOfCircle = (radius) => {
        return area = Math.PI * Math.sqrt(radius)
    };
}
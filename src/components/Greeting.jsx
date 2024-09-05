import day from '../assets/day.svg';
import evening from '../assets/evening.svg';
import night from '../assets/night.svg';

export function Greeting() {
    const time = new Date();
    const currentTime = time.getHours();
    let displayImage;
    let displayText;

    if (currentTime >= 6 && currentTime < 12) {
        displayImage = day;
        displayText = 'Good Morning!';
    }
    if (currentTime >= 12 && currentTime < 17) {
        displayImage = day;
        displayText = 'Good Afternoon!';
    }
    if (currentTime >= 17 && currentTime < 21) {
        displayImage = evening;
        displayText = 'Good Evening!';
    } else {
        displayImage = night;
        displayText = 'Good Night!';
    }

    return (
        <h1 className='greeting'>
            <img src={displayImage} />
            <div>{displayText}</div>
        </h1>
    );
}

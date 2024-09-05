import headshot from '../assets/headshot.jpg';

export function AboutMe(props) {
    return (
        <div className='about-me'>
            <img src={headshot} />
            {props.children}
        </div>
    );
}

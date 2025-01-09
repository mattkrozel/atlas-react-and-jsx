import links from '../assets/links.json'

export function Footer() {
    return (
        <footer>
            <ul>
                {links.map(item => (
                    <li key={item.label}><a href={item.link}>{item.label}</a></li>
                ))}
            </ul>
            © {currentYear} Atlas School
        </footer>
    );
}
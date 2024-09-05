import { Header } from './components/Header';
import { Section } from './components/Section';

function App() {
  return (
    <div>
      <Header />
      <Section title='What is React?'>
      React is a open-source front-end JavaScript library for building UI based on components by Facebook which is the orignal developer of React.
      </Section>
      <Section title='Benefits of React'>
        <ul>
          <li>Faster debugging and rendering</li>
          <li>Reusability of code components</li>
          <li>Readily available JavaScript Libraries</li>
          <li>Use of Virtual Document Object Model or V-DOM</li>
          <li>Great for SEOs</li>
        </ul>
      </Section>
    </div>
  )
}

export default App;

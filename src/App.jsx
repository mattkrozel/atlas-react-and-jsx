import { Header } from './components/Header';
import { Section } from './components/Section';
import { HelpfulResource } from './components/HelpfulResource';
import { AboutMe } from './components/AboutMe';

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
      <Section title='Helpful Resources'>
        <HelpfulResource label='React Documentation - Quickstart' link='https://react.dev/learn' />
        <HelpfulResource label='React Tutorial - Geeks for Geeks' link='https://www.geeksforgeeks.org/react-tutorial/?ref=shm' />
        <HelpfulResource label='What is React - Epic React' link='https://www.epicreact.dev/what-is-react' />
      </Section>
      <AboutMe>
        Hello my name is Matt Krozel, and I am in my fifth trimester at Atlas where I am going to school
        for Full Stack Web Development. Some of my favorite languages to work this thus far include python, javascript, and so far React
        has been very neat too. After I finish school I hope to apply my newly learned skills in a real world enviroment, where maybe my work
        can directly impact and help others. Outside of school I enjoy spending time with my family, I love doing various activities with my kids
        that keep us active and outside, whether its us hiking, bike riding, playing sports, etc.
      </AboutMe>
    </div>
  );
}

export default App;

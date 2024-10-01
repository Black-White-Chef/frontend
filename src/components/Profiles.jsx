import Profile from './Profile';
import { blackData } from '../utills/black';

export default function Profiles() {
  return (
    <section>
      <h2>Core Concepts</h2>
      <ul>
        {blackData.map((item) => (
          <Profile key={item.name} {...item} />
        ))}
      </ul>
    </section>
  );
}

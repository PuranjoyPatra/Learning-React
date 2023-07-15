import { getImageUrl } from "./Url.js";

export default function Avatar({ person, size }) {
  return (
    <div>
      <img
        className='avatar'
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />

      <div className='pfName'>{person.name}</div>
    </div>
  );
}

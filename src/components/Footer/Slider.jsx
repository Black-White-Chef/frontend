import './Slider.scss';

const texts = [
  'Text 1',
  'Text 2',
  'Text 3',
  'Text 4',
  'Text 5',
  'Text 6',
  'Text 7',
  'Text 8',
  'Text 9',
  'Text 10',
  'Text 11',
  'Text 12',
];

export default function Slider() {
  return (
    <div className="slider">
      <div className="slide-track">
        {texts.concat(texts).map((text, index) => (
          <div className="slider" key={index}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

import { marqueeItems } from '../data';

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div className="marquee-group" key={group}>
            {marqueeItems.map((item, index) => (
              <span className="marquee-unit" key={`${group}-${item}`}>
                <span className={`marquee-item ${index % 2 === 1 ? 'alt' : ''}`}>{item}</span>
                <span className="marquee-dot" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

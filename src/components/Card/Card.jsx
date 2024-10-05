import React from 'react';
import './Card.css'; // External CSS for styling

const Card = () => {
  return (
    <div className="bahia-palace">
      <img
        src="https://via.placeholder.com/1024x400" // Replace with actual image source
        alt="Bahia Palace, Marrakech"
        className="bahia-image"
      />
      <div className="bahia-content">
        <h1>Bahia Palace, Marrakech</h1>
        <p>
          Thanks to its architectural beauty and historic significance, the Bahia Palace in Marrakech is unquestionably one of the best places to visit in Morocco.
        </p>
        <p>
          Built in the 19th century for the grand vizier of the sultan, it was designed to be the most impressive palace of its time.
        </p>
        <p>
          Today its intricately carved stucco, tilework, and beautifully painted wood ceilings certainly live up to the meaning of its name — “brilliance” — with its combination of Moroccan and Islamic architecture displaying extraordinary craftsmanship.
        </p>
        <p>
          The Courtyard of Honor, with its vast marble floor and central fountain, is especially breathtaking, as are the palace’s peaceful gardens.
        </p>

        <div className="editor-tips">
          <strong>Editor's tip:</strong> Fancy doing a deep dive into Morocco's magnificent cities? Our <a href="#!">Imperial Cities of Morocco</a> itinerary has you covered.
        </div>
        <p>
          Short on time? Here's how to enjoy the <a href="#!">perfect weekend in Marrakech</a>. Try to fit in visiting one of the <a href="#!">best luxury hammams in Marrakech</a>.
        </p>
      </div>
    </div>
  );
};

export default Card;

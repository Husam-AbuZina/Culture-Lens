// File: src/components/Card/Card.jsx
import React from 'react';
import './Card.css';

const places = [
  {
    name: "Al-Ibrahimi Mosque (Cave of the Patriarchs)",
    imgSrc: "https://arabicpost.net/wp-content/uploads/2022/05/istock-516622868-1170x600.jpg",
    description: [
      "The Al-Ibrahimi Mosque, also known as the Cave of the Patriarchs, is one of the most significant religious and historical sites in Hebron. It holds great importance for Muslims, Christians, and Jews alike.",
      "The mosque is built over a cave believed to be the burial site of the biblical patriarchs Abraham, Isaac, and Jacob, making it a revered pilgrimage site.",
      "With its stunning architecture and profound spiritual significance, the mosque is a must-visit for anyone traveling to Hebron."
    ],
    editorTip: "Make sure to visit early in the morning to experience the peaceful atmosphere and avoid crowds.",
    shortTimeTip: "If you're short on time, take a guided tour to learn about the rich history of the mosque and its significance."
  },
  {
    name: "Old City of Hebron",
    imgSrc: "https://www.hebronrc.ps/sites/default/files/styles/flexslider_full/public/images/pages/2022-05/old-city_0.jpg?itok=44wP7mIl",
    description: [
      "The Old City of Hebron is a UNESCO World Heritage site, renowned for its ancient stone streets, markets (souks), and historic buildings.",
      "Walking through the Old City, you can experience the vibrant culture and history of the city, from traditional handicrafts to local foods.",
      "The Old City is also known for its unique glass and ceramic workshops, where you can observe artisans at work."
    ],
    editorTip: "Don't miss out on visiting a glass workshop to see traditional Hebron glass-making in action.",
    shortTimeTip: "If you're short on time, explore the main souk and visit a few historical sites in the Old City for a quick yet immersive experience."
  },
  {
    name: "Hebron Glass and Ceramics Factory",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Hebron_glass_display.jpg",
    description: [
      "Hebron is famous for its traditional glass and ceramic craftsmanship, with some workshops dating back centuries.",
      "At the Hebron Glass and Ceramics Factory, you can witness skilled artisans creating beautiful glass and ceramic items using techniques passed down through generations.",
      "The factory is not only a place to see the artistry but also a great place to buy souvenirs that reflect the city's cultural heritage."
    ],
    editorTip: "Consider purchasing a unique hand-blown glass item or hand-painted ceramic piece as a memento of your trip to Hebron.",
    shortTimeTip: "If you're in a hurry, make sure to visit the workshop demonstration and the gift shop for quick but memorable experiences."
  },
  {
    name: "Hebron Rehabilitation Committee Museum",
    imgSrc: "https://www.hebronrc.ps/sites/default/files/styles/safe_original/public/2022-12/261793842_111178234733575_3467551833535361441_n.jpg?itok=yHHP7g6_",
    description: [
      "The Hebron Rehabilitation Committee Museum is dedicated to preserving the history, architecture, and culture of Hebron’s Old City.",
      "The museum showcases traditional Palestinian homes, clothing, and artifacts, offering a glimpse into life in Hebron over the centuries.",
      "Through its exhibitions, the museum also sheds light on efforts to restore and maintain Hebron's historic sites."
    ],
    editorTip: "The museum provides a deep dive into Hebron's cultural and architectural restoration efforts—make sure to take your time exploring.",
    shortTimeTip: "If you are short on time, focus on the exhibitions related to the Old City's restoration and traditional Palestinian life."
  }
];


const Card = () => {
  return (
    <div className="cards-container" id='explore'>
      {places.map((place, index) => (
        <div className="place-card" key={index}>
          <img
            src={place.imgSrc}
            alt={place.name}
            className="place-image"
          />
          <div className="place-content">
            <h1>{place.name}</h1>
            {place.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            <div className="editor-tips">
              <strong>Editor's tip:</strong> {place.editorTip}
            </div>
            <p>{place.shortTimeTip}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

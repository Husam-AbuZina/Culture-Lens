// File: src/components/Card/Card.jsx
import React, { useState } from 'react';
import './Card.css';

const places = {
  en: [
    {
      name: "Al-Ibrahimi Mosque (Cave of the Patriarchs)",
      imgSrc: "https://arabicpost.net/wp-content/uploads/2022/05/istock-516622868-1170x600.jpg",
      description: [
        "The Al-Ibrahimi Mosque, also known as the Cave of the Patriarchs, is one of the most significant religious and historical sites in Hebron.",
        "It holds great importance for Muslims, Christians, and Jews alike.",
        "With its stunning architecture and profound spiritual significance, the mosque is a must-visit for anyone traveling to Hebron."
      ],
      editorTip: "Visit early to avoid crowds.",
      shortTimeTip: "Take a guided tour to learn about the rich history."
    },
    {
      name: "Old City of Hebron",
      imgSrc: "https://www.hebronrc.ps/sites/default/files/styles/flexslider_full/public/images/pages/2022-05/old-city_0.jpg?itok=44wP7mIl",
      description: [
        "The Old City of Hebron is a UNESCO World Heritage site, known for its ancient streets and markets.",
        "It’s a great place to experience the culture and history of Hebron."
      ],
      editorTip: "Don’t miss the traditional glass and ceramic workshops.",
      shortTimeTip: "Explore the main souk for an immersive experience."
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
  ],
  ar: [
    {
      name: "مسجد الحرم الإبراهيمي",
      imgSrc: "https://arabicpost.net/wp-content/uploads/2022/05/istock-516622868-1170x600.jpg",
      description: [
        "يعد مسجد الحرم الإبراهيمي واحدًا من أهم المواقع الدينية والتاريخية في الخليل.",
        "له أهمية كبيرة لدى المسلمين والمسيحيين واليهود.",
        "بفضل هندسته المعمارية الرائعة وأهميته الروحية العميقة، يعد المسجد مكانًا لا بد من زيارته."
      ],
      editorTip: "قم بزيارة المسجد في الصباح الباكر لتجنب الزحام.",
      shortTimeTip: "احجز جولة مع مرشد للتعرف على تاريخ المسجد."
    },
    {
      name: "البلدة القديمة في الخليل",
      imgSrc: "https://www.hebronrc.ps/sites/default/files/styles/flexslider_full/public/images/pages/2022-05/old-city_0.jpg?itok=44wP7mIl",
      description: [
        "تعد البلدة القديمة في الخليل موقعًا تراثيًا عالميًا تابعًا لليونسكو، تشتهر بشوارعها وأسواقها القديمة.",
        "إنها مكان رائع لتجربة ثقافة وتاريخ الخليل."
      ],
      editorTip: "لا تفوت زيارة ورش العمل التقليدية للزجاج والسيراميك.",
      shortTimeTip: "استكشف السوق الرئيسي لتجربة غامرة."
    },
    {
      name: "مصنع زجاج وسيراميك الخليل",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Hebron_glass_display.jpg",
      description: [
        "تشتهر الخليل بحرفية الزجاج والسيراميك التقليدية، حيث يعود تاريخ بعض الورش إلى قرون مضت.",
        "في مصنع زجاج وسيراميك الخليل، يمكنك مشاهدة الحرفيين المهرة وهم يصنعون قطعًا جميلة من الزجاج والسيراميك باستخدام تقنيات تم تناقلها عبر الأجيال.",
        "المصنع ليس فقط مكانًا لرؤية الحرف اليدوية، بل هو أيضًا مكان رائع لشراء الهدايا التذكارية التي تعكس التراث الثقافي للمدينة."
      ],
      editorTip: "فكر في شراء قطعة زجاج منفوخة يدويًا أو قطعة سيراميك مطلية يدويًا كتذكار لرحلتك إلى الخليل.",
      shortTimeTip: "إذا كنت في عجلة من أمرك، تأكد من زيارة عرض الورشة ومحلات الهدايا لتجربة سريعة ولكن لا تُنسى."
    },
    {
      name: "متحف لجنة إعمار الخليل",
      imgSrc: "https://www.hebronrc.ps/sites/default/files/styles/safe_original/public/2022-12/261793842_111178234733575_3467551833535361441_n.jpg?itok=yHHP7g6_",
      description: [
        "يخصص متحف لجنة إعمار الخليل للحفاظ على تاريخ وهندسة وثقافة البلدة القديمة في الخليل.",
        "يعرض المتحف منازل فلسطينية تقليدية، وملابس، وتحف أثرية، مما يقدم لمحة عن الحياة في الخليل عبر القرون.",
        "من خلال معارضه، يسلط المتحف الضوء أيضًا على الجهود المبذولة لترميم وصيانة المواقع التاريخية في الخليل."
      ],
      editorTip: "يوفر المتحف نظرة عميقة على جهود ترميم الخليل الثقافية والمعمارية - تأكد من تخصيص وقت لاستكشافه.",
      shortTimeTip: "إذا كنت ضيق الوقت، ركز على المعارض المتعلقة بترميم البلدة القديمة والحياة الفلسطينية التقليدية."
    }
    
  ]
};

const Card = () => {
  const [language, setLanguage] = useState('en'); // Default to English

  // Toggle language between Arabic and English
  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'ar' : 'en'));
  };

  return (
    <div>
      <div className='btn-language'>
      <button className="toggle-button" onClick={toggleLanguage}>
        {language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
      </button>
      </div>

      <div className="cards-container" id='explore'>
        {places[language].map((place, index) => (
          <div className="place-card" key={index}>
            <img src={place.imgSrc} alt={place.name} className="place-image" />
            <div className="place-content">
              <h1>{place.name}</h1>
              {place.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
              <div className="editor-tips">
                <strong>{language === 'en' ? "Editor's tip:" : "نصيحة المحرر:"}</strong> {place.editorTip}
              </div>
              <p>{place.shortTimeTip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

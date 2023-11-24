import { useSearchParams } from "react-router-dom";
import './Home.css'

const GREETING = [
    
  "पहीला दिवा आज लागला दारी सुखाची किरणे येई घरी पूर्ण होवो तुमच्या सर्व इच्छ दिपावलीच्या हार्दिक शुभेच्छा.",
  "दारी दिव्यांची आरास अंगणी फुललेला सडा रांगोळीचा खास आनंद बहरलेला सर्वत्र आणि हर्षलेले मन आला आला दिवाळी सण करा प्रेमाची उधळण…",
  "उत्कर्षाची वाट उमटली विरला गर्द कालचा काळोख… क्षितिजावर पहाट उगवली घेऊनिया नवा उत्साह सोबत… दीपावलीच्या हार्दिक शुभेच्छा…",
  "आनंदाचे गाणे गात दिवाळी येते अंगणात सुखाची मग होते बरसात तेजाची मिळते साथ हि दिवाळी आनंदाची, सुखसमृध्दीची जावो"

]


function Home() {

  const [SearchParams] = useSearchParams();
  const to = SearchParams.get("to");
  const from = SearchParams.get("from");
  const greetingnumber = SearchParams.get("g") > GREETING.length ? 0 :SearchParams.get("g") || 0;
 
  return (
    <div className="greetings-container">
      <h1> Dear {to}</h1>
      <p>
        {GREETING[greetingnumber]}
      </p>

        <span className="from-text">आपले शुभेच्छुक {from}</span>
    </div>
  )
}

export default Home
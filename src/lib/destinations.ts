export type Language = 'en' | 'te';

export type TranslatedText = {
  [key in Language]: string;
};

export interface Destination {
  id: string;
  slug: string;
  name: TranslatedText;
  description: TranslatedText;
  image: string;
  dataAiHint: string;
  regionTags: string[];
  historicalSignificance: TranslatedText;
  bestTimeToVisit: TranslatedText;
  localCuisine: TranslatedText;
  culturalEvents: TranslatedText;
  distanceFromHyderabad: string | null;
  extraImages: { url: string, hint: string }[];
  type: 'telangana' | 'india';
}

export const telanganaDestinations: Destination[] = [
  {
    id: "charminar",
    slug: "charminar",
    name: { en: "Charminar", te: "చార్మినార్" },
    description: { en: "A historic monument and mosque in Hyderabad, an icon of the city.", te: "హైదరాబాద్‌లోని ఒక చారిత్రాత్మక స్మారక చిహ్నం మరియు మసీదు, నగరానికి ఒక చిహ్నం." },
    image: "https://placehold.co/600x400.png",
    dataAiHint: "charminar hyderabad",
    regionTags: ["Telangana", "Hyderabad"],
    historicalSignificance: { en: "Built in 1591 by Muhammad Quli Qutb Shah, it is a symbol of Hyderabad's rich past.", te: "1591లో ముహమ్మద్ కులీ కుతుబ్ షాచే నిర్మించబడినది, ఇది హైదరాబాద్ యొక్క గొప్ప గతానికి చిహ్నం." },
    bestTimeToVisit: { en: "October to March, to avoid the heat.", te: "వేడిని నివారించడానికి అక్టోబర్ నుండి మార్చి వరకు." },
    localCuisine: { en: "Hyderabadi Biryani, Haleem, Irani Chai.", te: "హైదరాబాదీ బిర్యానీ, హలీమ్, ఇరానీ చాయ్." },
    culturalEvents: { en: "Ramadan festivities, various cultural festivals.", te: "రంజాన్ ఉత్సవాలు, వివిధ సాంస్కృతిక పండుగలు." },
    distanceFromHyderabad: "Located in the heart of Hyderabad city.",
    extraImages: [{ url: "https://placehold.co/400x300.png", hint: "charminar architecture" }, { url: "https://placehold.co/400x300.png", hint: "hyderabad market" }],
    type: 'telangana',
  },
  {
    id: "golconda-fort",
    slug: "golconda-fort",
    name: { en: "Golconda Fort", te: "గోల్కొండ కోట" },
    description: { en: "A magnificent fortress complex known for its acoustics and grandeur.", te: "ధ్వనిశాస్త్రం మరియు వైభవానికి ప్రసిద్ధి చెందిన అద్భుతమైన కోట సముదాయం." },
    image: "https://placehold.co/600x400.png",
    dataAiHint: "golconda fort",
    regionTags: ["Telangana", "Hyderabad"],
    historicalSignificance: { en: "Originally a mud fort, it was rebuilt by the Qutb Shahi dynasty and was a famous diamond market.", te: "వాస్తవానికి మట్టి కోట, ఇది కుతుబ్ షాహీ రాజవంశంచే పునర్నిర్మించబడింది మరియు ప్రసిద్ధ వజ్రాల మార్కెట్‌గా ఉంది." },
    bestTimeToVisit: { en: "September to March.", te: "సెప్టెంబర్ నుండి మార్చి వరకు." },
    localCuisine: { en: "Pathar ka Gosht, Kebabs.", te: "పత్తర్ కా గోష్ట్, కబాబ్స్." },
    culturalEvents: { en: "Sound and Light Show in the evenings.", te: "సాయంత్రం సౌండ్ అండ్ లైట్ షో." },
    distanceFromHyderabad: "Approx. 11 km from Hyderabad city center.",
    extraImages: [{ url: "https://placehold.co/400x300.png", hint: "fortress walls" }, { url: "https://placehold.co/400x300.png", hint: "fort ruins" }],
    type: 'telangana',
  },
  {
    id: "husain-sagar-lake",
    slug: "husain-sagar-lake",
    name: { en: "Hussain Sagar Lake", te: "హుస్సేన్ సాగర్ సరస్సు" },
    description: { en: "A heart-shaped lake with a large monolithic statue of the a Buddha in its center.", te: "మధ్యలో గౌతమ బుద్ధుని పెద్ద ఏకశిలా విగ్రహంతో ఉన్న హృదయాకార సరస్సు." },
    image: "https://placehold.co/600x400.png",
    dataAiHint: "hussain sagar",
    regionTags: ["Telangana", "Hyderabad"],
    historicalSignificance: { en: "Built in 1563 by Ibrahim Quli Qutb Shah, it is an artificial lake fed by the River Musi.", te: "1563లో ఇబ్రహీం కులీ కుతుబ్ షాచే నిర్మించబడినది, ఇది మూసీ నది ద్వారా నీరు అందించబడే ఒక కృత్రిమ సరస్సు." },
    bestTimeToVisit: { en: "All year round, especially evenings.", te: "ఏడాది పొడవునా, ముఖ్యంగా సాయంత్రం వేళల్లో." },
    localCuisine: { en: "Street food around the lake, various restaurants nearby.", te: "సరస్సు చుట్టూ వీధి ఆహారం, సమీపంలోని వివిధ రెస్టారెంట్లు." },
    culturalEvents: { en: "Lumbini Park events, boating.", te: "లుంబిని పార్క్ కార్యక్రమాలు, బోటింగ్." },
    distanceFromHyderabad: "Located in the heart of Hyderabad.",
    extraImages: [{ url: "https://placehold.co/400x300.png", hint: "buddha statue" }, { url: "https://placehold.co/400x300.png", hint: "lake boating" }],
    type: 'telangana',
  },
  {
    id: "warangal-fort",
    slug: "warangal-fort",
    name: { en: "Warangal Fort", te: "వరంగల్ కోట" },
    description: { en: "An ancient fort known for its impressive stone gateways (Kakatiya Kala Thoranam).", te: "దాని ఆకట్టుకునే రాతి ముఖద్వారాలకు (కాకతీయ కళా తోరణం) ప్రసిద్ధి చెందిన ఒక పురాతన కోట." },
    image: "https://placehold.co/600x400.png",
    dataAiHint: "warangal fort",
    regionTags: ["Telangana", "Warangal"],
    historicalSignificance: { en: "The fort was the capital of the Kakatiya dynasty. The architectural remnants are a testament to their skill.", te: "ఈ కోట కాకతీయ రాజవంశానికి రాజధానిగా ఉండేది. వాస్తుశిల్ప అవశేషాలు వారి నైపుణ్యానికి నిదర్శనం." },
    bestTimeToVisit: { en: "September to April.", te: "సెప్టెంబర్ నుండి ఏప్రిల్ వరకు." },
    localCuisine: { en: "Local Telangana cuisine.", te: "స్థానిక తెలంగాణ వంటకాలు." },
    culturalEvents: { en: "Local festivals and jatras.", te: "స్థానిక పండుగలు మరియు జాతరలు." },
    distanceFromHyderabad: "Approx. 145 km.",
    extraImages: [{ url: "https://placehold.co/400x300.png", hint: "kakatiya thoranam" }, { url: "https://placehold.co/400x300.png", hint: "fort ruins" }],
    type: 'telangana',
  },
  {
    id: "thousand-pillar-temple",
    slug: "thousand-pillar-temple",
    name: { en: "Thousand Pillar Temple", te: "వెయ్యి స్తంభాల గుడి" },
    description: { en: "A star-shaped temple renowned for its Kakatiyan architecture.", te: "కాకతీయ వాస్తుశిల్పానికి ప్రసిద్ధి చెందిన నక్షత్రాకార ఆలయం." },
    image: "https://placehold.co/600x400.png",
    dataAiHint: "pillar temple",
    regionTags: ["Telangana", "Warangal"],
    historicalSignificance: { en: "Built by King Rudra Deva in 1163 AD, it is dedicated to Lord Shiva, Vishnu, and Surya.", te: "క్రీ.శ. 1163లో రాజు రుద్ర దేవునిచే నిర్మించబడినది, ఇది శివుడు, విష్ణువు మరియు సూర్యునికి అంకితం చేయబడింది." },
    bestTimeToVisit: { en: "October to March.", te: "అక్టోబర్ నుండి మార్చి వరకు." },
    localCuisine: { en: "Warangal specialties.", te: "వరంగల్ ప్రత్యేకతలు." },
    culturalEvents: { en: "Maha Shivaratri is celebrated with great pomp.", te: "మహా శివరాత్రిని అత్యంత వైభవంగా జరుపుకుంటారు." },
    distanceFromHyderabad: "Approx. 150 km.",
    extraImages: [{ url: "https://placehold.co/400x300.png", hint: "temple carving" }, { url: "https://placehold.co/400x300.png", hint: "temple nandi" }],
    type: 'telangana',
  },
   {
    id: "birla-mandir",
    slug: "birla-mandir",
    name: { en: "Birla Mandir", te: "బిర్లా మందిర్" },
    description: { en: "A magnificent Hindu temple dedicated to Lord Venkateswara, built entirely of white marble.", te: "పూర్తిగా తెల్లని పాలరాతితో నిర్మించబడిన, శ్రీ వెంకటేశ్వర స్వామికి అంకితం చేయబడిన ఒక అద్భుతమైన హిందూ దేవాలయం." },
    image: "https://placehold.co/600x400.png",
    dataAiHint: "birla mandir",
    regionTags: ["Telangana", "Hyderabad"],
    historicalSignificance: { en: "Constructed in 1976 by the Birla Foundation, it blends Dravidian, Rajasthani and Utkala architectures.", te: "1976లో బిర్లా ఫౌండేషన్ ద్వారా నిర్మించబడినది, ఇది ద్రావిడ, రాజస్థానీ మరియు ఉత్కళ వాస్తుశిల్పాలను మిళితం చేస్తుంది." },
    bestTimeToVisit: { en: "Throughout the year, especially serene in the evenings.", te: "ఏడాది పొడవునా, ముఖ్యంగా సాయంత్రం వేళల్లో ప్రశాంతంగా ఉంటుంది." },
    localCuisine: { en: "Various restaurants are available in the vicinity.", te: "సమీపంలో వివిధ రెస్టారెంట్లు అందుబాటులో ఉన్నాయి." },
    culturalEvents: { en: "Major Hindu festivals like Janmashtami and Diwali are celebrated grandly.", te: "జన్మాష్టమి మరియు దీపావళి వంటి ప్రధాన హిందూ పండుగలను వైభవంగా జరుపుకుంటారు." },
    distanceFromHyderabad: "Located within Hyderabad city.",
    extraImages: [{ url: "https://placehold.co/400x300.png", hint: "temple marble" }, { url: "https://placehold.co/400x300.png", hint: "hyderabad skyline" }],
    type: 'telangana',
  },
  {
    id: "swarnagiri-temple",
    slug: "swarnagiri-temple",
    name: { en: "Swarnagiri Temple", te: "స్వర్ణగిరి దేవాలయం" },
    description: { en: "A recently constructed temple complex with impressive gopurams and architecture.", te: "ఆకట్టుకునే గోపురాలు మరియు వాస్తుశిల్పంతో ఇటీవల నిర్మించిన ఆలయ సముదాయం." },
    image: "https://placehold.co/600x400.png",
    dataAiHint: "swarnagiri temple",
    regionTags: ["Telangana"],
    historicalSignificance: { en: "A modern architectural marvel, it has become a significant pilgrimage site in Telangana.", te: "ఒక ఆధునిక వాస్తుశిల్ప అద్భుతం, ఇది తెలంగాణలో ఒక ముఖ్యమైన పుణ్యక్షేత్రంగా మారింది." },
    bestTimeToVisit: { en: "October to February.", te: "అక్టోబర్ నుండి ఫిబ్రవరి వరకు." },
    localCuisine: { en: "Temple prasadam and nearby local eateries.", te: "ఆలయ ప్రసాదం మరియు సమీపంలోని స్థానిక తినుబండారాలు." },
    culturalEvents: { en: "Major temple festivals and religious ceremonies.", te: "ప్రధాన ఆలయ ఉత్సవాలు మరియు మతపరమైన కార్యక్రమాలు." },
    distanceFromHyderabad: "Approx. 100 km.",
    extraImages: [{ url: "https://placehold.co/400x300.png", hint: "temple gopuram" }, { url: "https://placehold.co/400x300.png", hint: "temple sculpture" }],
    type: 'telangana',
  }
];

export const indiaDestinations: Destination[] = [
  {
    id: "taj-mahal",
    slug: "taj-mahal",
    name: { en: "Taj Mahal", te: "తాజ్ మహల్" },
    description: { en: "An ivory-white marble mausoleum on the south bank of the Yamuna river in Agra.", te: "ఆగ్రాలోని యమునా నది దక్షిణ ఒడ్డున ఉన్న ఒక దంతపు-తెలుపు పాలరాతి సమాధి." },
    image: "https://placehold.co/600x400.png",
    dataAiHint: "taj mahal",
    regionTags: ["India", "Agra"],
    historicalSignificance: { en: "Commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal.", te: "1632లో మొఘల్ చక్రవర్తి షాజహాన్ చే తన అభిమాన భార్య ముంతాజ్ మహల్ సమాధిని ఉంచడానికి నిర్మించబడింది." },
    bestTimeToVisit: { en: "October to March.", te: "అక్టోబర్ నుండి మార్చి వరకు." },
    localCuisine: { en: "Petha, Mughlai cuisine.", te: "పేఠా, ముఘలాయ్ వంటకాలు." },
    culturalEvents: { en: "Taj Mahotsav in February.", te: "ఫిబ్రవరిలో తాజ్ మహోత్సవ్." },
    distanceFromHyderabad: null,
    extraImages: [{ url: "https://placehold.co/400x300.png", hint: "mausoleum detail" }, { url: "https://placehold.co/400x300.png", hint: "yamuna river" }],
    type: 'india',
  },
  {
    id: "jaipur-city-palace",
    slug: "jaipur-city-palace",
    name: { en: "Jaipur City Palace", te: "జైపూర్ సిటీ ప్యాలెస్" },
    description: { en: "A palace complex in Jaipur, the capital of the Rajasthan state.", te: "రాజస్థాన్ రాష్ట్ర రాజధాని జైపూర్‌లోని ఒక రాజభవన సముదాయం." },
    image: "https://placehold.co/600x400.png",
    dataAiHint: "jaipur palace",
    regionTags: ["India", "Jaipur"],
    historicalSignificance: { en: "Established at the same time as the city of Jaipur, by Maharaja Sawai Jai Singh II.", te: "జైపూర్ నగరంతో పాటు అదే సమయంలో మహారాజా సవాయ్ జై సింగ్ II చే స్థాపించబడింది." },
    bestTimeToVisit: { en: "October to March.", te: "అక్టోబర్ నుండి మార్చి వరకు." },
    localCuisine: { en: "Dal Baati Churma, Ghewar.", te: "దాల్ బాటీ చుర్మా, ఘేవర్." },
    culturalEvents: { en: "Gangaur festival, Teej festival.", te: "గంగౌర్ పండుగ, తీజ్ పండుగ." },
    distanceFromHyderabad: null,
    extraImages: [{ url: "https://placehold.co/400x300.png", hint: "palace courtyard" }, { url: "https://placehold.co/400x300.png", hint: "palace gates" }],
    type: 'india',
  },
  {
    id: "varanasi-ghats",
    slug: "varanasi-ghats",
    name: { en: "Varanasi Ghats", te: "వారణాసి ఘాట్లు" },
    description: { en: "Riverfront steps leading to the banks of the River Ganges.", te: "గంగా నది ఒడ్డుకు దారితీసే నదీతీర మెట్లు." },
    image: "https://placehold.co/600x400.png",
    dataAiHint: "varanasi ghats",
    regionTags: ["India", "Varanasi"],
    historicalSignificance: { en: "The ghats are an integral part of Varanasi's religious and cultural life, used for everything from bathing to cremation.", te: "ఈ ఘాట్లు వారణాసి యొక్క మత మరియు సాంస్కృతిక జీవితంలో ఒక అంతర్భాగం, స్నానం నుండి దహనం వరకు అన్నింటికీ ఉపయోగిస్తారు." },
    bestTimeToVisit: { en: "October to March.", te: "అక్టోబర్ నుండి మార్చి వరకు." },
    localCuisine: { en: "Kachori Sabzi, Lassi, Chaat.", te: "కచోరీ సబ్జీ, లస్సీ, చాట్." },
    culturalEvents: { en: "Ganga Aarti every evening, Dev Deepawali.", te: "ప్రతి సాయంత్రం గంగా హారతి, దేవ్ దీపావళి." },
    distanceFromHyderabad: null,
    extraImages: [{ url: "https://placehold.co/400x300.png", hint: "ganga aarti" }, { url: "https://placehold.co/400x300.png", hint: "river boats" }],
    type: 'india',
  },
   {
    id: "goa-beaches",
    slug: "goa-beaches",
    name: { en: "Goa Beaches", te: "గోవా బీచ్‌లు" },
    description: { en: "Famous for its stunning coastline, vibrant nightlife, and Portuguese heritage.", te: "దాని అద్భుతమైన తీరప్రాంతం, ఉత్సాహభరితమైన రాత్రి జీవితం మరియు పోర్చుగీస్ వారసత్వానికి ప్రసిద్ధి." },
    image: "https://placehold.co/600x400.png",
    dataAiHint: "goa beach",
    regionTags: ["India", "Goa"],
    historicalSignificance: { en: "A former Portuguese colony, Goa's culture is a unique blend of Indian and European influences.", te: "ఒకప్పుడు పోర్చుగీస్ కాలనీ, గోవా సంస్కృతి భారతీయ మరియు యూరోపియన్ ప్రభావాల యొక్క ఒక ప్రత్యేకమైన మిశ్రమం." },
    bestTimeToVisit: { en: "November to February.", te: "నవంబర్ నుండి ఫిబ్రవరి వరకు." },
    localCuisine: { en: "Seafood, Vindaloo, Bebinca.", te: "సముద్రపు ఆహారం, విందాలూ, బెబింకా." },
    culturalEvents: { en: "Goa Carnival, Sunburn Festival.", te: "గోవా కార్నివాల్, సన్‌బర్న్ ఫెస్టివల్." },
    distanceFromHyderabad: null,
    extraImages: [{ url: "https://placehold.co/400x300.png", hint: "beach sunset" }, { url: "https://placehold.co/400x300.png", hint: "goa church" }],
    type: 'india',
  }
];

export const allDestinations = [...telanganaDestinations, ...indiaDestinations];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return allDestinations.find((dest) => dest.slug === slug);
}

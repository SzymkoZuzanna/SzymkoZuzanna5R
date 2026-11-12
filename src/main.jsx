import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// tablica tytułów: tytuł, opis, ciekawostka, kategoria (Manga/Komiks), rok wydania, dłuższy opis, ocena
const listaTytulow = [
  [
    'Overlord',
    'Gracz zostaje uwięziony w świecie ulubionej gry MMORPG jako potężny nieumarły władca.',
    'Autor Kugane Maruyama zaczął pisać tę historię jako powieść internetową, ponieważ rozpadła się jego ekipa do gry w D&D.',
    'Manga',
    '2014',
    'Momonga nie wylogowuje się w momencie zamknięcia serwerów gry Yggdrasil i odkrywa, że jego postać oraz strażnicy grobowca Nazarick ożyli. Postanawia podbić nowy świat i odnaleźć innych graczy.',
    9,
  ],
  [
    'Dragon Ball',
    'Przygody Son Goku, który od dzieciństwa trenuje sztuki walki i szuka siedmiu Smoczych Kul.',
    'Akira Toriyama wzorował postać Goku i fabułę na klasycznej chińskiej powieści „Wędrówka na Zachód”.',
    'Manga',
    '1984',
    'Kultowa seria, która zdefiniowała gatunek shōnen. Zaczyna się jako lekka przygodówka z humorem, a z czasem zmienia w widowiskowe starcia o losy całej Ziemi i wszechświata.',
    8,
  ],
  [
    'Great Teacher Onizuka',
    'Były członek gangu motocyklowego postanawia zostać najlepszym nauczycielem w liceum.',
    'Tytułowy Eikichi Onizuka był wcześniej bohaterem innej mangi tego samego autora – „Shonan Junai Gumi”.',
    'Manga',
    '1997',
    'Dwudziestodwuletni Onizuka dostaje pod opiekę najbardziej zbuntowaną klasę w szkole. Zamiast zwykłych lekcji rozwiązuje prawdziwe problemy uczniów niekonwencjonalnymi metodami.',
    9,
  ],
  [
    'Kaiju No. 8',
    'Pracownik ekipy sprzątającej po atakach potworów sam zyskuje moc zamiany w jednego z nich.',
    'Manga pobiła rekord najszybszego osiągnięcia miliona sprzedanych egzemplarzy w serwisie Shonen Jump+.',
    'Manga',
    '2020',
    'Kafka Hibino marzył o dołączeniu do Sił Obronnych walczących z kaiju, ale skończył przy sprzątaniu pobojowisk. Po połknięciu tajemniczego pasożyta staje się tytułowym Potworem nr 8 i musi ukrywać swoją tożsamość.',
    9,
  ],
  [
    'Ao no Exorcist',
    'Nastolatek odkrywa, że jest synem Szatana, i postanawia zostać egzorcystą, by go pokonać.',
    'Autorka Kazue Kato stworzyła wcześniej one-shot o podobnym pomyśle, który bardzo spodobał się czytelnikom.',
    'Manga',
    '2009',
    'Rin Okumura budzi w sobie demoniczne moce niebieskiego płomienia. Zapisuje się do Akademii Prawdziwego Krzyża, gdzie uczy się walki z demonami u boku swojego brata bliźniaka Yukio.',
    8,
  ],
  [
    'Tokyo Ghoul',
    'Student z Tokio po tragicznym wypadku staje się pół-ghulem i musi przetrwać między dwoma światami.',
    'Autor Sui Ishida ukrywa w ilustracjach karty tarota, które zapowiadają przyszłe losy bohaterów.',
    'Manga',
    '2011',
    'Ken Kaneki trafia na granicę świata ludzi oraz ghuli – istot żywiących się ludzkim mięsem. Mroczna, psychologiczna historia o poszukiwaniu własnego miejsca i moralnych wyborach.',
    10,
  ],
  [
    'Transformers (Energon Universe)',
    'Nowe, brutalne i pełne emocji otwarcie historii Autobotów i Decepticonów rozbitych na Ziemi.',
    'Seria zadebiutowała w 2023 roku pod szyldem Skybound, a jej scenarzystą i rysownikiem jest Daniel Warren Johnson.',
    'Komiks',
    '2023',
    'Optimus Prime i jego nieliczni towarzysze budzą się na Ziemi bez zapasów energonu, musząc chronić ludzkość przed bezwzględnym Starscreamem. Komiks należy do wspólnego uniwersum razem z Void Rivals i G.I. Joe.',
    10,
  ],
  [
    'Joker: Zabójczy uśmiech',
    'Mroczny thriller psychologiczny o psychiatrze z Azylu Arkham, który próbuje wyleczyć Jokera.',
    'Komiks ukazał się w prestiżowej linii DC Black Label, przeznaczonej dla dojrzalszych czytelników.',
    'Komiks',
    '2019',
    'Doktor Ben Arnell jest przekonany, że jako jedyny potrafi przebić się przez szaleństwo Księcia Zbrodni. Z każdą kolejną sesją granica między lekarzem a pacjentem zaczyna się jednak niebezpiecznie zacierać.',
    10,
  ],
  [
    'Batman: Biały Rycerz',
    'Alternatywna historia Gotham, w której wyleczony Joker staje się politykiem i chce oczyścić miasto z Batmana.',
    'Autorem zarówno scenariusza, jak i rysunków jest Sean Murphy, który zaprojektował też własną wersję Batmobilu.',
    'Komiks',
    '2017',
    'Jack Napier odzyskuje poczytalność i zaczyna legalną walkę z korupcją oraz brutalnymi metodami Mrocznego Rycerza. Komiks odwraca klasyczne role bohatera i złoczyńcy.',
    9,
  ],
  [
    'Batman, który się śmieje',
    'Przerażająca wersja Batmana z Mrocznego Multiwersum, który został zainfekowany toksyną Jokera.',
    'Postać zadebiutowała w wydarzeniu „Dark Nights: Metal” i szybko stała się jednym z najpopularniejszych złoczyńców DC.',
    'Komiks',
    '2018',
    'Łączy genialny umysł i wyszkolenie Bruce’a Wayne’a z całkowitym brakiem hamulców Jokera. Prawdziwy Batman musi powstrzymać swoje wypaczone odbicie, zanim zniszczy całe Gotham.',
    9,
  ],
  [
    'Dylan Dog: Długie pożegnanie',
    'Detektyw koszmarów bada sprawę związaną ze swoją dawną miłością z czasów młodości.',
    'Dylan Dog to najsłynniejszy włoski komiks grozy, wydawany nieprzerwanie od 1986 roku.',
    'Komiks',
    '1993',
    'Jedna z najbardziej melancholijnych i cenionych historii o londyńskim detektywie od zjawisk nadprzyrodzonych. Zamiast klasycznych potworów na pierwszym planie są tu wspomnienia i przemijanie.',
    7,
  ],
  [
    'Amazing Fantasy #15 (Spider-Man, 1962)',
    'Historyczny debiut Petera Parkera – nastolatka ugryzionego przez radioaktywnego pająka.',
    'Wydawca Martin Goodman początkowo uważał, że komiks o pająku się nie sprzeda, bo ludzie ich nie lubią.',
    'Komiks',
    '1962',
    'Komiks Stana Lee i Steve’a Ditko, w którym po raz pierwszy padają słynne słowa o wielkiej mocy i wielkiej odpowiedzialności. Zrewolucjonizował świat superbohaterów.',
    8,
  ],
]

// 12 ciekawostek do losowania, każda z tytułem
const ciekawostkiDnia = listaTytulow.map(([tytul, , ciekawostka]) => `${tytul}: ${ciekawostka}`)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tytuly={listaTytulow} ciekawostki={ciekawostkiDnia} />
  </StrictMode>,
)
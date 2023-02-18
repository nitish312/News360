import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  articles = [
    {
        "source": {
            "id": "associated-press",
            "name": "Associated Press"
        },
        "author": "Michael Goldberg",
        "title": "Sheriff: Gunman kills 6, including ex-wife, in Mississippi - The Associated Press - en Español",
        "description": "ARKABUTLA, Miss. (AP) — A lone gunman killed six people including his ex-wife and stepfather Friday at multiple locations in a tiny rural community in northern Mississippi, the sheriff said, leaving investigators searching for clues to what motivated the ramp…",
        "url": "https://apnews.com/article/shootings-mississippi-town-arkabutla-caf3fbdbfcb31a3f8e4e3c3e777089ee",
        "urlToImage": "https://storage.googleapis.com/afs-prod/media/f375459ed6b24d16bad5652fa7bce2e6/3000.webp",
        "publishedAt": "2023-02-18T06:19:45Z",
        "content": "ARKABUTLA, Miss. (AP) A lone gunman killed six people including his ex-wife and stepfather Friday at multiple locations in a tiny rural community in northern Mississippi, the sheriff said, leaving in… [+4910 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Natasha Bertrand, Oren Liebermann",
        "title": "Chinese spy balloon recovery operation has concluded - CNN",
        "description": "The US military has concluded its recovery operations for the suspected Chinese spy balloon that was shot down off the coast of South Carolina earlier this month, as well as the search for flying objects it later downed off the coast of Alaska and over Lake H…",
        "url": "https://www.cnn.com/2023/02/17/politics/china-spy-balloon-recovery/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230209132835-03-suspected-chinese-spy-balloon-handout.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-02-18T04:29:00Z",
        "content": "The US military has concluded its recovery operations for the suspected Chinese spy balloon that was shot down off the coast of South Carolina earlier this month, as well as the search for flying obj… [+4434 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "DW (English)"
        },
        "author": "Deutsche Welle",
        "title": "Munich Security Conference: Zelenskyy urges speedier support – DW – 02/18/2023 - DW (English)",
        "description": "Ukraine's president said there is \"no alternative\" to victory. Representatives from 96 different countries are attending the summit. The IMF has hinted at further support for Kyiv.",
        "url": "https://www.dw.com/en/munich-security-conference-zelenskyy-urges-speedier-support/a-64739355",
        "urlToImage": "https://static.dw.com/image/64748423_6.jpg",
        "publishedAt": "2023-02-18T03:33:41Z",
        "content": "The annual Munich Security Conference (MSC) began on Friday against the backdrop of Russia's invasion of Ukraine, which is top of the agenda at this year's high-level meeting.\r\nUkrainian President Vo… [+7922 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Yahoo Sports Staff",
        "title": "2023 NBA All-Star: Follow the Rising Stars tournament with Team Pau vs. Team Joakim for title - Yahoo Sports",
        "description": "The NBA All-Star weekend begins with the Rising Stars competition. First- and second-year NBA players and G League players will participate in a three-game...",
        "url": "https://sports.yahoo.com/2023-nba-all-star-team-pau-wins-rising-stars-tournament-on-jose-alvarado-3-pointer-035447981.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Qsy3ct4kJGZoqvTIO8QG1w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-02/43873bd0-af3f-11ed-a3df-3d73bb7b1ab3",
        "publishedAt": "2023-02-18T03:17:00Z",
        "content": "The 2023 NBA All-Star weekend began with the Rising Stars competition. First- and second-year NBA players and G League players participated in a three-game mini-tournament. Four teams competed in two… [+825 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ESPN"
        },
        "author": "Mark Schlabach",
        "title": "Tiger Woods likely to make cut at Genesis Invitational - ESPN",
        "description": "Tiger Woods is likely to make the cut at the Genesis Invitational at Riviera Country Club after shooting a 3-over 74 in the second round Friday.",
        "url": "https://www.espn.com/golf/story/_/id/35681576/tiger-woods-1-miss-cut-genesis-invitational",
        "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0217%2Fr1132853_1296x729_16%2D9.jpg",
        "publishedAt": "2023-02-18T03:00:00Z",
        "content": "LOS ANGELES -- Tiger Woods, playing in an official PGA Tour event for the first time in more than seven months, is likely to be around for the weekend at the Genesis Invitational at Riviera Country C… [+4729 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Page Six"
        },
        "author": "Nicki Cox",
        "title": "Paul Wesley officially files for divorce from Ines de Ramon - Page Six",
        "description": "The pair announced their separation in September 2022, despite having actually broken up around May. Both de Ramon and Wesley have since moved on.",
        "url": "https://pagesix.com/2023/02/17/paul-wesley-officially-files-for-divorce-from-ines-de-ramon/",
        "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/02/Paul-Wesley-divorce-Ines-de-Ramon-2.jpg?quality=75&strip=all&w=1200",
        "publishedAt": "2023-02-18T02:47:00Z",
        "content": "It’s officially over between Paul Wesley and Ines de Ramon despite both of them already moving on. \r\nThe “Vampire Diaries” star filed for divorce from his estranged wife on Friday after five years of… [+1836 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Megan Thomas",
        "title": "Kyle Jacobs, songwriter and husband of singer Kellie Pickler, dead at 49 - CNN",
        "description": "Kyle Jacobs, a country music producer and songwriter, who co-starred with his wife, singer Kellie Pickler, in a CMT docuseries, has died, according to Nashville police. He was 49.",
        "url": "https://www.cnn.com/2023/02/17/entertainment/kyle-jacobs-death/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230217172356-kyle-jacobs-kellie-pickler.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-02-18T02:02:00Z",
        "content": "Editors Note: If you or someone you know is struggling with suicidal thoughts or mental health matters, please call or text the 988 Suicide &amp; Crisis Lifeline to connect with a trained counselor o… [+2318 chars]"
    },
    {
        "source": {
            "id": "fox-news",
            "name": "Fox News"
        },
        "author": "Chantz Martin",
        "title": "Eric Bieniemy agrees in principle on deal to become Commanders' new OC: report - Fox News",
        "description": "Eric Bieniemy has agreed in principle on a multi-year deal that will make him the Washington Commanders' next offensive coordinator and assistant head coach, ESPN reported.",
        "url": "https://www.foxnews.com/sports/eric-bieniemy-agrees-to-become-commanders-new-oc",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/02/Eric-Bieniemy2.jpg",
        "publishedAt": "2023-02-18T01:43:00Z",
        "content": "The Washington Commanders and two-time Super Bowl winning coach Eric Bieniemy have agreed in principle on a contract that will make him the team's new offensive coordinator and assistant head coach, … [+2828 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Brenda Goodman, Caroll Alvarado",
        "title": "East Palestine residents worry rashes, headaches and other symptoms may be tied to chemicals from train crash - CNN",
        "description": "Some residents of East Palestine, Ohio, say they have developed rashes, sore throats, nausea and headaches after returning to their homes this week, and they're worried these new symptoms are related to chemicals released after a train derailment two weeks ag…",
        "url": "https://www.cnn.com/2023/02/17/health/ohio-derailment-rashes-health-impacts/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230217195938-01-ohio-derailment-rashes-health-impacts.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-02-18T01:40:00Z",
        "content": "Some residents of East Palestine, Ohio, say they have developed rashes, sore throats, nausea and headaches after returning to their homes this week, and theyre worried these new symptoms are related … [+9718 chars]"
    },
    {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": "John Dias, Carolyn Gusoff",
        "title": "International flights at JFK Airport canceled for second day in a row due to power disruption - CBS New York",
        "description": "A damaged electrical panel has been repaired, but it's not enough to fully restore operations at the terminal.",
        "url": "https://www.cbsnews.com/newyork/news/international-flights-canceled-at-jfk-airport-for-second-day-in-a-row-due-to-power-disruption/",
        "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/02/16/49e4ad05-4db2-46e9-908e-a4b330f04383/thumbnail/1200x630/3e2c4eedc9831dd85519bca8ebb16caf/jfk-terminal-1-power-outage.jpg",
        "publishedAt": "2023-02-18T01:38:00Z",
        "content": "NEW YORK -- International flights were canceled at John F. Kennedy International Airport for a second day in a row Friday due to a power disruption.\r\nSo far Friday, at least 44 flights were delayed a… [+3744 chars]"
    },
    {
        "source": {
            "id": "abc-news",
            "name": "ABC News"
        },
        "author": "The Associated Press",
        "title": "Family: Boy, 11, dies of infection after sprained ankle - ABC News",
        "description": "Family members say an 11-year-old Florida boy has died just days after a sprained ankle led to a flesh-eating bacterial infection",
        "url": "https://abcnews.go.com/US/wireStory/family-boy-11-dies-infection-after-sprained-ankle-97300901",
        "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
        "publishedAt": "2023-02-18T00:53:58Z",
        "content": "WINTER PARK, Fla. -- An 11-year-old Florida boy died just days after a sprained ankle led to a flesh-eating bacterial infection, family members said.\r\nJesse Brown, a fifth grader at Lakemont Elementa… [+1197 chars]"
    },
    {
        "source": {
            "id": "independent",
            "name": "Independent"
        },
        "author": "Gustaf Kilander",
        "title": "Trump news – live: Tucker Carlson said Trump was 'demonic force' after 2020 election, Fox News lawsuit shows - The Independent",
        "description": "Follow all the latest developments in Trumpworld",
        "url": "https://www.independent.co.uk/news/world/americas/us-politics/trump-fox-news-today-georgia-grand-jury-texts-b2284453.html",
        "urlToImage": "https://static.independent.co.uk/2023/02/12/19/GettyImages-1460359013.jpg?quality=75&width=1200&auto=webp",
        "publishedAt": "2023-02-18T00:52:24Z",
        "content": "Trump ally Kari Lake loses election lawsuit \r\nAn Arizona appeals court has rejected Republican Kari Lakes challenge of her defeat in the Arizona governors race to Democrat Katie Hobbs, denying her re… [+1571 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "S&P 500 ends down as investors fret about interest rates - Reuters",
        "description": "The S&P 500 ended lower on Friday, weighed down by Microsoft and Nvidia as investors worried that inflation and a strong U.S. economy could put the Federal Reserve on pace for more interest rate hikes.",
        "url": "https://www.reuters.com/markets/us/futures-fall-fears-about-hawkish-fed-grow-2023-02-17/",
        "urlToImage": "https://www.reuters.com/resizer/Uh58-QihHN3fGMXXwZyoq6BCuCI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SS5YUH7PABIFRIG45QA3SM4Z6I.jpg",
        "publishedAt": "2023-02-18T00:50:00Z",
        "content": "Feb 17 (Reuters) - The S&amp;P 500 ended lower on Friday, weighed down by Microsoft and Nvidia as investors worried that inflation and a strong U.S. economy could put the Federal Reserve on pace for … [+3653 chars]"
    },
    {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": "Imtiaz Tyab, Tucker Reals",
        "title": "Survivors still being rescued from the rubble 11 days after Turkey earthquakes, but some in rebel-held Syria \"have no hope left\" - CBS News",
        "description": "One harrowing video shows a dust-covered man being pulled from debris in Turkey asking to borrow a phone to check on his family.",
        "url": "https://www.cbsnews.com/news/turkey-earthquake-syria-deaths-survivors-rescue-videos-civil-war/",
        "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/02/17/c6ee96fa-4024-459f-add0-d0ee1d074e5a/thumbnail/1200x630/266b1819cff23d5e84412d82d7542624/turkey-earthquake-rescue-1247220428.jpg",
        "publishedAt": "2023-02-18T00:14:00Z",
        "content": "Rescuers have pulled a child, a woman and two men alive from the wreckage of buildings in Turkey almost 11 full days after devastating earthquakes hit the region. The massive 7.8-magnitude temblor an… [+4615 chars]"
    },
    {
        "source": {
            "id": "nfl-news",
            "name": "NFL News"
        },
        "author": "Bucky Brooks",
        "title": "NFL's eight biggest Super Bowl windows right now? Chiefs, Eagles and Bengals top list; Bills at No. 7 - NFL.com",
        "description": "With the 2022 NFL campaign in the books, it's time to look forward to next season -- and beyond. Who currently has the biggest Super Bowl window? Bucky Brooks provides his ranking of the top eight contenders for the next few Lombardi Trophies.",
        "url": "https://www.nfl.com/news/nfl-s-eight-biggest-super-bowl-windows-right-now-chiefs-eagles-and-bengals-top-l",
        "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/uanimanxasvhy9lrgid5",
        "publishedAt": "2023-02-18T00:13:00Z",
        "content": "The NFL is the undisputed king of American sports. This is at least partially due to league parity -- the promise that anything can happen on any given Sunday.\r\nBut does that parity extend all the wa… [+942 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Alta Spells, Dianne Gallagher, Christina Maxouris",
        "title": "Paul Murdaugh confronted his father about finding pills a month before he and his mom were killed, prosecutors say - CNN",
        "description": "Before prosecutors rested their case on Friday, they presented evidence in court showing Paul Murdaugh -- son of disgraced South Carolina attorney Alex Murdaugh -- confronted his father about pills about one month before both he and his mother were found fata…",
        "url": "https://www.cnn.com/2023/02/17/us/alex-murdaugh-trial-friday/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230217141325-05-murdaugh-0216.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-02-18T00:10:00Z",
        "content": "Editors Note: The HBO docuseries Low Country: The Murdaugh Dynasty chronicles the familys influence in South Carolina. It airs on CNN Sunday, February 19, at 8 p.m. ET.\r\nBefore prosecutors rested the… [+5354 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Raechal Shewfelt",
        "title": "Jen Shah explains why it took her so long to apologize in pre-prison interview: 'I was absolutely in denial' - Yahoo Entertainment",
        "description": "The \"Real Housewives of Salt Lake City\" star entered the FPC Bryan, in Bryan, Tex., on Friday.",
        "url": "https://www.yahoo.com/entertainment/jen-shah-pre-prison-interview-apology-000635266.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2023-02/d8c78230-af0e-11ed-afd5-f1c8bfaa4567",
        "publishedAt": "2023-02-18T00:06:00Z",
        "content": "Jen Shah promotes The Real Housewives of Salt Lake City. (Photo: Chris Haston/Bravo via Getty Images)\r\nHours before reality TV star Jen Shahreported to federal prison on Friday, the Real Housewives o… [+3714 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "SpaceNews"
        },
        "author": "Jeff Foust",
        "title": "First crewed Starliner mission on track for April - SpaceNews",
        "description": "Preparations for the first crewed flight of Boeing’s CST-100 Starliner vehicle to the ISS remain on schedule for a launch in mid to late April.",
        "url": "https://spacenews.com/first-crewed-starliner-mission-on-track-for-april/",
        "urlToImage": "https://spacenews.com/wp-content/uploads/2023/02/cst100-cst-processing.jpg",
        "publishedAt": "2023-02-17T23:30:37Z",
        "content": "WASHINGTON Preparations for the first crewed flight of Boeings CST-100 Starliner vehicle to the International Space Station remain on schedule for a launch in mid to late April, company and NASA offi… [+5237 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Spaceflight Now"
        },
        "author": null,
        "title": "Watch live: SpaceX to complete Friday doubleheader with launch for Inmarsat – Spaceflight Now - Spaceflight Now",
        "description": null,
        "url": "https://spaceflightnow.com/2023/02/17/falcon-9-inmarsat-6-f2-coverage/",
        "urlToImage": null,
        "publishedAt": "2023-02-17T23:03:45Z",
        "content": "Watch our live coverage of the countdown and launch of a SpaceX Falcon 9 rocket from Space Launch Complex 40 at Cape Canaveral Space Force Station, Florida. The Falcon 9 rocket will launch the Inmars… [+13505 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Philadelphia Inquirer"
        },
        "author": "Alison McCook",
        "title": "Bruce Willis has frontotemporal dementia. So did my dad. | Opinion - The Philadelphia Inquirer",
        "description": "It's not Alzheimer's. Here's what caring for someone with frontotemporal dementia looks like.",
        "url": "https://www.inquirer.com/opinion/commentary/bruce-willis-frontotemporal-dementia-dad-20230217.html",
        "urlToImage": "https://www.inquirer.com/resizer/5rm0deu-zLtgSNDleFq5--rbQIA=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/4HFFR5UJXVEBXCEXPCCUZELYAQ.jpg",
        "publishedAt": "2023-02-17T22:38:23Z",
        "content": "Like the rest of the world, I learned Thursday that Bruce Willis the man we all know from Die Hard and Moonlightinghas frontotemporal dementia. I caught my breath at the headline but didnt process th… [+4803 chars]"
    }
]

  
  constructor(){
    super();
    console.log("constructor called")
    this.state = {
      articles : this.articles, 
      loading : false
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News360 - Latest Headlines</h2>
        
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              {/* <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/> */}

              <NewsItem title={element.title !== null ? element.title.slice(0, 40) : element.title} discription={element.description !== null ? element.description.slice(0, 60) : element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}          
        </div>
        
      </div>
    )
  }
}

export default News
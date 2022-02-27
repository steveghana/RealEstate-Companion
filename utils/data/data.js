useEffect(() => {
  var options = {
    method: "GET",
    url: "https://chelsea-fc-news-live.p.rapidapi.com/news/NewsNow",
    headers: {
      "x-rapidapi-host": "chelsea-fc-news-live.p.rapidapi.com",
      "x-rapidapi-key": "b5143b76dfmshdf9866dbee9bf98p1c34eajsn631b3255ff5e",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

[
  {
    title: "Chelsea",
    url: "/h/Sport/Football/Premier+League/Chelsea",
    sourceName: "NewsNow",
  },
  {
    title: "Chelsea",
    url: "/h/Sport/Football/Premier+League/Chelsea",
    sourceName: "NewsNow",
  },
  {
    title:
      "Chelsea's billionaire owner Roman Abramovich 'has been effectively BARRED from living in…",
    url: "https://c.newsnow.co.uk/A/1117505173?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Jamie Carragher: What I really think about Christian Pulisic at Chelsea FC",
    url: "https://c.newsnow.co.uk/A/1117504211?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "(Video): Chelsea should sell Romelu Lukaku as soon as possible says TalkSport pundit",
    url: "https://c.newsnow.co.uk/A/1117502471?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Romelu Lukaku given honest assessment of his Chelsea challenge by Cesar Azpilicueta",
    url: "https://c.newsnow.co.uk/A/1117496683?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      'Romelu Lukaku\'s "tough" Chelsea situation assessed by Cesar Azpilicueta after Lille blow',
    url: "https://c.newsnow.co.uk/A/1117496603?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Liverpool make strong statement to Chelsea ahead of Carabao Cup final amid major Wembley boost",
    url: "https://c.newsnow.co.uk/A/1117492976?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title: "Chelsea’s defensive resurgence evident in improved xG numbers",
    url: "https://c.newsnow.co.uk/A/1117492868?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Liverpool's next six Premier League fixtures compared to Man City and Chelsea",
    url: "https://c.newsnow.co.uk/A/1117490719?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Chelsea, Manchester United and Real Madrid tracking 19-year-old Ligue 1 defensive prodigy",
    url: "https://c.newsnow.co.uk/A/1117489570?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title: "Fabio Capello explains why Romelu Lukaku is struggling at Chelsea",
    url: "https://c.newsnow.co.uk/A/1117486932?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Joe Cole compares 'brilliant' Chelsea hero Kai Havertz to Liverpool star",
    url: "https://c.newsnow.co.uk/A/1117486931?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Former Chelsea assistant drops Romelu Lukaku selection hint with Mason Mount message",
    url: "https://c.newsnow.co.uk/A/1117483941?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Chelsea transfer news: Serge Gnabry action, Ousmane Dembele decision, Xavier Simons future",
    url: "https://c.newsnow.co.uk/A/1117482660?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Chelsea To Rival Manchester United In Pursuit Of This Ligue 1 Defender: Right Fit For Tuchel?",
    url: "https://c.newsnow.co.uk/A/1117482415?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title: "Chelsea keen on signing 26-year-old prolific Bundesliga winger",
    url: "https://c.newsnow.co.uk/A/1117482349?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Trio could be sacrificed, as Chelsea keep in contact with high-profile free target to spice up…",
    url: "https://c.newsnow.co.uk/A/1117482327?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Chelsea showing interest in signing £63m star with 21 goal contributions - report",
    url: "https://c.newsnow.co.uk/A/1117482050?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      '"He would choose Chelsea" - Transfer insider drops major summer transfer claim on £100m star',
    url: "https://c.newsnow.co.uk/A/1117481486?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Contract News: Chelsea finally ready to cede ground to ace defender’s salary demands",
    url: "https://c.newsnow.co.uk/A/1117479920?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "'Impressive player': Lille manager names the one Chelsea player who really caught his eye last night",
    url: "https://c.newsnow.co.uk/A/1117478969?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title: "Silva namechecks Lampard and Granovskaia amid Chelsea ‘dream’",
    url: "https://c.newsnow.co.uk/A/1117477180?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title: "Keep or sell: Evaluating Armando Broja’s future at Chelsea",
    url: "https://c.newsnow.co.uk/A/1117475771?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Silva admits he's 'living in a dream' at Chelsea following latest faultless display",
    url: "https://c.newsnow.co.uk/A/1117475689?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title: "Chelsea defender wanted in Bosman move by Serie A giants",
    url: "https://c.newsnow.co.uk/A/1117475354?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title: "Lampard’s Everton linked with Chelsea midfield swoops",
    url: "https://c.newsnow.co.uk/A/1117474465?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "'Makelele role' should be renamed 'Kante role', as Chelsea star labelled best ever",
    url: "https://c.newsnow.co.uk/A/1117473371?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Jamie Carragher and Thierry Henry disagree over whether 28-year-old will be at Chelsea next season",
    url: "https://c.newsnow.co.uk/A/1117472995?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Why Harvey Elliott is absent for Liverpool vs Leeds ahead of Chelsea final in Carabao Cup",
    url: "https://c.newsnow.co.uk/A/1117471319?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "What Lille failed to do when faced with Chelsea star N’Golo Kante during Champions League win",
    url: "https://c.newsnow.co.uk/A/1117471196?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title: "Injury concerns spoil Chelsea’s advantage",
    url: "https://c.newsnow.co.uk/A/1117470795?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Still no agreement in sight for Bayern Munich and Serge Gnabry as Chelsea and Tottenham Hotspur …",
    url: "https://c.newsnow.co.uk/A/1117469402?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      '"Right from the start": Arsenal legend questions Chelsea summer signing',
    url: "https://c.newsnow.co.uk/A/1117468733?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title: "Chelsea FC Caught In A Political Storm That Will Rage On",
    url: "https://c.newsnow.co.uk/A/1117467838?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "“It’s good”- 22-year-old Chelsea star sends Carabao Cup final message to Tuchel, Lukaku also…",
    url: "https://c.newsnow.co.uk/A/1117467019?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title: "Chelsea 1-2 Spurs: 2008 League Cup Final Vault",
    url: "https://c.newsnow.co.uk/A/1117466165?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Rio Ferdinand issues Chelsea warning after Kai Havertz's Champions League display against Lille",
    url: "https://c.newsnow.co.uk/A/1117466103?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Chelsea star ‘living a dream’ at Stamford Bridge, lauds special relationship with Blues fans",
    url: "https://c.newsnow.co.uk/A/1117465592?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Thiago Silva breaks his own personal Champions League record in Chelsea vs Lille match",
    url: "https://c.newsnow.co.uk/A/1117464195?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title: "Report: Romelu Lukaku won't make quick decision on Chelsea future",
    url: "https://c.newsnow.co.uk/A/1117463257?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Chelsea's true skill that gives them a Champions League edge and why Liverpool should beware",
    url: "https://c.newsnow.co.uk/A/1117461564?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Christian Pulisic reveals where Chelsea need to improve and hails 'amazing' team-mate",
    url: "https://c.newsnow.co.uk/A/1117459374?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Marcos Alonso makes Lionel Messi and Diego Maradona admission as Spaniard eyes new Chelsea deal",
    url: "https://c.newsnow.co.uk/A/1117456858?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Chelsea ‘considering’ move for Wolves starlet as Antonio Rudiger and Andreas Christensen exit…",
    url: "https://c.newsnow.co.uk/A/1117455281?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Report: Chelsea will only consider moving for 20-goal striker if they manage to sell Werner this summer",
    url: "https://c.newsnow.co.uk/A/1117454775?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "'A future manager' – Jody Morris amazed by Chelsea star's commitment",
    url: "https://c.newsnow.co.uk/A/1117454637?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Chelsea and Bayern Munich legend Michael Ballack set to appear on German Dragon's Den as…",
    url: "https://c.newsnow.co.uk/A/1117452567?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Southampton's fixtures with Leeds United and Chelsea set as Premier League confirm TV picks",
    url: "https://c.newsnow.co.uk/A/1117450227?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title: "Chelsea & PSG jostling for Ousmane Dembele free transfer",
    url: "https://c.newsnow.co.uk/A/1117447349?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "'I'd be worried': Thierry Henry makes claim about Chelsea star that could benefit Liverpool",
    url: "https://c.newsnow.co.uk/A/1117446106?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Jamie Carragher makes surprising Romelu Lukaku Chelsea prediction amid Thierry Henry verdict",
    url: "https://c.newsnow.co.uk/A/1117443943?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Jamie Carragher names Chelsea player who should be 'certain starter' under Thomas Tuchel",
    url: "https://c.newsnow.co.uk/A/1117443883?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "'Phenomenal again': Christian Pulisic in awe of Chelsea teammate's latest CL display",
    url: "https://c.newsnow.co.uk/A/1117443564?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title: "Ex-Chelsea coach explains why Thiago Silva keeps improving",
    url: "https://c.newsnow.co.uk/A/1117441347?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Thiago Silva ‘living a dream’ and feeling the trust as the pride of Chelsea",
    url: "https://c.newsnow.co.uk/A/1117440775?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Real Madrid duo gives Thomas Tuchel new Chelsea future after Champions League Lukaku revelation",
    url: "https://c.newsnow.co.uk/A/1117439365?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Joe Cole gives Chelsea vs Liverpool prediction and makes Roberto Firmino point",
    url: "https://c.newsnow.co.uk/A/1117437731?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Chelsea ‘show interest’ in prolific Germany international – ‘Knocked on door’, player likes…",
    url: "https://c.newsnow.co.uk/A/1117437195?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "'Phenomenally well': Rio Ferdinand thinks Chelsea prospect is about to follow in Mason Mount's footsteps",
    url: "https://c.newsnow.co.uk/A/1117436258?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      '"Living a dream": Chelsea defender revelling in spell with the Blues',
    url: "https://c.newsnow.co.uk/A/1117434756?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Romelu Lukaku will NOT make snap decision over Chelsea future after being dropped for Lille…",
    url: "https://c.newsnow.co.uk/A/1117431307?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Chelsea handed Club World Cup badge honour which Liverpool and Man Utd were denied",
    url: "https://c.newsnow.co.uk/A/1117427982?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "How Romelu Lukaku reacted to being axed by Thomas Tuchel for Chelsea win at Lille",
    url: "https://c.newsnow.co.uk/A/1117427726?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Report: Chelsea now want to sign 'phenomenal' 12-goal winger just two years after he trolled the club on social media",
    url: "https://c.newsnow.co.uk/A/1117426052?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "18-year-old Chelsea midfield prospect on the radars of several Premier League clubs",
    url: "https://c.newsnow.co.uk/A/1117426050?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "'World-class' Silva likened to Terry as Maguire told to learn from Chelsea veteran",
    url: "https://c.newsnow.co.uk/A/1117424867?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title: "Tuchel not happy talking about Lukaku after Chelsea win",
    url: "https://c.newsnow.co.uk/A/1117424134?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Gary Lineker delivers Thiago Silva verdict after what Chelsea star did in Champions League win",
    url: "https://c.newsnow.co.uk/A/1117422919?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Manager salary report claims Chelsea boss earns significantly less than his Premier League…",
    url: "https://c.newsnow.co.uk/A/1117421113?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "'The guy is amazing': Frank Leboeuf wowed by what £30m Chelsea player did during second half of Lille win",
    url: "https://c.newsnow.co.uk/A/1117420972?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "“Living a dream” – Chelsea star ‘flattered’ by support, thanks Lampard and Granovskaia for…",
    url: "https://c.newsnow.co.uk/A/1117420256?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "‘Won’t be at Chelsea next season’ – Carragher explains why ruthless Blues will axe major name",
    url: "https://c.newsnow.co.uk/A/1117419281?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "N'Golo Kante gives Thomas Tuchel major transfer problem that can see Chelsea sign Declan Rice",
    url: "https://c.newsnow.co.uk/A/1117418275?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "“Has been incredible” – Potential West Ham, Chelsea deal touted concerning Huddersfield player: The verdict",
    url: "https://c.newsnow.co.uk/A/1117416941?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "‘Forget about Inter, why did Chelsea sign him?’ Cole and Henry hit out at Lukaku",
    url: "https://c.newsnow.co.uk/A/1117416930?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      'Rio Ferdinand warns Chelsea have a "big problem" after Kai Havertz\'s Chelsea display',
    url: "https://c.newsnow.co.uk/A/1117357173?-1841:2178",
    sourceName: "NewsNow",
  },
  {
    title: "Chelsea",
    url: "/h/Sport/Football/Premier+League/Chelsea",
    sourceName: "NewsNow",
  },
  {
    title: "Chelsea",
    url: "/h/Sport/Football/Premier+League/Chelsea",
    sourceName: "NewsNow",
  },
  {
    title: "Chelsea v Liverpool",
    url: "/h/Sport/Football/Premier+League/Chelsea/Chelsea+v+Liverpool",
    sourceName: "NewsNow",
  },
  {
    title: "Chelsea v Lille",
    url: "/h/Sport/Football/Premier+League/Chelsea/Chelsea+v+Lille",
    sourceName: "NewsNow",
  },
  {
    title: "Chelsea Women",
    url: "/h/Sport/Football/Premier+League/Chelsea/Chelsea+Women",
    sourceName: "NewsNow",
  },
  {
    title: "Chelsea",
    url: "/h/Sport/Football/Premier+League/Chelsea",
    sourceName: "NewsNow",
  },
  {
    title: "Chelsea",
    url: "/h/Sport/Football/Premier+League/Chelsea",
    sourceName: "NewsNow",
  },
  {
    title: "Chelsea",
    url: "/h/Sport/Football/Premier+League/Chelsea",
    sourceName: "NewsNow",
  },
  {
    title:
      "'Impressive player': Lille manager names the one Chelsea player who really caught his eye last night",
    url: "https://c.newsnow.co.uk/A/1117478969?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      '"He would choose Chelsea" - Transfer insider drops major summer transfer claim on £100m star',
    url: "https://c.newsnow.co.uk/A/1117481486?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Report: Chelsea will only consider moving for 20-goal striker if they manage to sell Werner this summer",
    url: "https://c.newsnow.co.uk/A/1117454775?-11199:832",
    sourceName: "NewsNow",
  },
  {
    title:
      "Report: Chelsea now want to sign 'phenomenal' 12-goal winger just two years after he trolled the club on social media",
    url: "https://c.newsnow.co.uk/A/1117426052?-11199:832",
    sourceName: "NewsNow",
  },
];

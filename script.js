angular.module('galleryApp', [])
  .controller('galleryController', function() {
    var gallery = this;
    gallery.language = "en";

    gallery.title = {
      ro: "Minunile lui Isus",
      en: "Miracles of Jesus"
    };

    gallery.description = {
      ro: "pagini de colorat",
      en: "coloring pages"
    };

    gallery.languages = [
      {
        short: "ro",
        text: "Română"
      },
      {
        short: "en",
        text: "English"
      }
    ];

    gallery.change_language = function(language) {
      gallery.language = language;
      console.log(language);
    };

    // EDIT HERE
    gallery.items = [
      {
        id: 1,
        img: '01.png',
        done: 100,
        title: {
          ro: "Apa transformată în vin",
          en: "Changing water into wine"
        },
        text: {
          ro: "Ioan 2:1-11: A treia zi s-a făcut o nuntă în Cana din Galileea. Mama lui Isus era acolo. Şi la nuntă a fost chemat şi Isus cu ucenicii Lui. Când s-a isprăvit vinul, mama lui Isus I-a zis: \"Nu mai au vin.\" Isus i-a răspuns: \"Femeie, ce am a face Eu cu tine? Nu Mi-a venit încă ceasul.\" Mama Lui a zis slugilor: \"Să faceţi orice vă va zice.\" Şi acolo erau şase vase de piatră, puse după obiceiul de curăţare al iudeilor; şi în fiecare vas încăpeau câte două sau trei vedre. Isus le-a zis: \"Umpleţi vasele acestea cu apă.\" Şi le-au umplut până sus. \"Scoateţi acum\", le-a zis El, \"şi aduceţi nunului.\" Şi i-au adus: Nunul, după ce a gustat apa făcută vin - el nu ştia de unde vine vinul acesta (slugile însă, care scoseseră apa, ştiau) - a chemat pe mire şi i-a zis: \"Orice om pune la masă întâi vinul cel bun; şi, după ce oamenii au băut bine, atunci pune pe cel mai puţin bun; dar tu ai ţinut vinul cel bun până acum.\" Acest început al semnelor Lui l-a făcut Isus în Cana din Galileea. El Şi-a arătat slava Sa, şi ucenicii Lui au crezut în El.",
          en: "John 2:1-11: And the third day there was a marriage in Cana of Galilee; and the mother of Jesus was there: And both Jesus was called, and his disciples, to the marriage. And when they wanted wine, the mother of Jesus saith unto him, They have no wine. Jesus saith unto her, Woman, what have I to do with thee? mine hour is not yet come. His mother saith unto the servants, Whatsoever he saith unto you, do it. And there were set there six waterpots of stone, after the manner of the purifying of the Jews, containing two or three firkins apiece. Jesus saith unto them, Fill the waterpots with water. And they filled them up to the brim. And he saith unto them, Draw out now, and bear unto the governor of the feast. And they bare it. When the ruler of the feast had tasted the water that was made wine, and knew not whence it was: (but the servants which drew the water knew;) the governor of the feast called the bridegroom, And saith unto him, Every man at the beginning doth set forth good wine; and when men have well drunk, then that which is worse: but thou hast kept the good wine until now. This beginning of miracles did Jesus in Cana of Galilee, and manifested forth his glory; and his disciples believed on him."
        }
      },
      {
        id: 2,
        img: '02.png',
        done: 100,
        title: {
          ro: "Vindecarea fiului slujbașului împărătesc",
          en: "Healing of the royal official's son"
        },
        text: {
          ro: "Ioan 4:46-53: Isus S-a întors deci în Cana din Galileea, unde prefăcuse apa în vin. În Capernaum era un slujbaş împărătesc al cărui fiu era bolnav. Slujbaşul acesta a aflat că Isus venise din Iudeea în Galileea, s-a dus la El şi L-a rugat să vină şi să tămăduiască pe fiul lui care era pe moarte. Isus i-a zis: \"Dacă nu vedeţi semne şi minuni, cu niciun chip nu credeţi!\" Slujbaşul împărătesc I-a zis: \"Doamne, vino până nu moare micuţul meu.\" \"Du-te\", i-a zis Isus, \"fiul tău trăieşte.\" Şi omul acela a crezut cuvintele pe care i le spusese Isus şi a pornit la drum. Pe când se cobora el, l-au întâmpinat robii lui şi i-au adus vestea că fiul lui trăieşte. El i-a întrebat de ceasul în care a început să-i fie mai bine. Şi ei i-au zis: \"Ieri, în ceasul al şaptelea, l-au lăsat frigurile.\" Tatăl a cunoscut că tocmai în ceasul acela îi zisese Isus: \"Fiul tău trăieşte.\" Şi a crezut el şi toată casa lui.",
          en: "John 4:46-53: So Jesus came again into Cana of Galilee, where he made the water wine. And there was a certain nobleman, whose son was sick at Capernaum. When he heard that Jesus was come out of Judaea into Galilee, he went unto him, and besought him that he would come down, and heal his son: for he was at the point of death. Then said Jesus unto him, Except ye see signs and wonders, ye will not believe. The nobleman saith unto him, Sir, come down ere my child die. Jesus saith unto him, Go thy way; thy son liveth. And the man believed the word that Jesus had spoken unto him, and he went his way. And as he was now going down, his servants met him, and told him, saying, Thy son liveth. Then enquired he of them the hour when he began to amend. And they said unto him, Yesterday at the seventh hour the fever left him. So the father knew that it was at the same hour, in the which Jesus said unto him, Thy son liveth: and himself believed, and his whole house."
        }
      },
      {
        id: 3,
        img: '03.png',
        done: 100,
        title: {
          ro: "Pescuirea minunată",
          en: "Catching a large number of fish"
        },
        text: {
          ro: "Luca 5:1-11: Pe când Se afla lângă lacul Ghenezaret şi Îl îmbulzea norodul ca să audă Cuvântul lui Dumnezeu, Isus a văzut două corăbii la marginea lacului; pescarii ieşiseră din ele să-şi spele mrejele. S-a suit într-una din aceste corăbii, care era a lui Simon: şi l-a rugat s-o depărteze puţin de la ţărm. Apoi a şezut jos şi învăţa pe noroade din corabie. Când a încetat să vorbească, a zis lui Simon: \"Depărteaz-o la adânc şi aruncaţi-vă mrejele pentru pescuire.\" Drept răspuns, Simon I-a zis: \"Învăţătorule, toată noaptea ne-am trudit şi n-am prins nimic; dar, la cuvântul Tău, voi arunca mrejele!\" După ce le-au aruncat, au prins o aşa de mare mulţime de peşti că începeau să li se rupă mrejele. Au făcut semn tovarăşilor lor care erau în cealaltă corabie să vină să le ajute. Aceia au venit, şi au umplut amândouă corăbiile, aşa că au început să se afunde corăbiile. Când a văzut Simon Petru lucrul acesta, s-a aruncat la genunchii lui Isus şi I-a zis: \"Doamne, pleacă de la mine, căci sunt un om păcătos.\" Fiindcă îl apucase spaima, pe el şi pe toţi cei ce erau cu el, din pricina pescuirii pe care o făcuseră. Tot aşa şi pe Iacov şi pe Ioan, fiii lui Zebedei, tovarăşii lui Simon. Atunci Isus i-a zis lui Simon: \"Nu te teme; de acum încolo vei fi pescar de oameni.\" Ei au scos corăbiile la mal, au lăsat totul şi au mers după El.",
          en: "Luke 5:1-11: And it came to pass, that, as the people pressed upon him to hear the word of God, he stood by the lake of Gennesaret, And saw two ships standing by the lake: but the fishermen were gone out of them, and were washing their nets. And he entered into one of the ships, which was Simon's, and prayed him that he would thrust out a little from the land. And he sat down, and taught the people out of the ship. Now when he had left speaking, he said unto Simon, Launch out into the deep, and let down your nets for a draught. And Simon answering said unto him, Master, we have toiled all the night, and have taken nothing: nevertheless at thy word I will let down the net. And when they had this done, they inclosed a great multitude of fishes: and their net brake. And they beckoned unto their partners, which were in the other ship, that they should come and help them. And they came, and filled both the ships, so that they began to sink. When Simon Peter saw it, he fell down at Jesus' knees, saying, Depart from me; for I am a sinful man, O Lord. For he was astonished, and all that were with him, at the draught of the fishes which they had taken: And so was also James, and John, the sons of Zebedee, which were partners with Simon. And Jesus said unto Simon, Fear not; from henceforth thou shalt catch men. And when they had brought their ships to land, they forsook all, and followed him."
        }
      },
      {
        id: 4,
        img: '04.png',
        done: 100,
        title: {
          ro: "Vindecarea leprosului",
          en: "Healing a leper"
        },
        text: {
          ro: "Marcu 1:40-45: A venit la El un lepros, care s-a aruncat în genunchi înaintea Lui, Îl ruga şi-I zicea: \"Dacă vrei, poţi să mă cureţi.\" Lui Isus I s-a făcut milă de el, a întins mâna, S-a atins de el şi i-a zis: \"Da, voiesc, fii curăţat!\" Îndată l-a lăsat lepra, şi s-a curăţat. Isus i-a poruncit cu tot dinadinsul, i-a spus să plece numaidecât şi i-a zis: \"Vezi să nu spui nimănui nimic; ci du-te de te arată preotului şi adu pentru curăţarea ta ce a poruncit Moise, ca mărturie pentru ei.\" Dar omul acela, după ce a plecat, a început să vestească şi să spună în gura mare lucrul acesta, aşa că Isus nu mai putea să intre pe faţă în nicio cetate; ci stătea afară, în locuri pustii, şi veneau la El din toate părţile.",
          en: "Mark 1:40-45: And there came a leper to him, beseeching him, and kneeling down to him, and saying unto him, If thou wilt, thou canst make me clean. And Jesus, moved with compassion, put forth his hand, and touched him, and saith unto him, I will; be thou clean. And as soon as he had spoken, immediately the leprosy departed from him, and he was cleansed. And he straitly charged him, and forthwith sent him away; And saith unto him, See thou say nothing to any man: but go thy way, shew thyself to the priest, and offer for thy cleansing those things which Moses commanded, for a testimony unto them. But he went out, and began to publish it much, and to blaze abroad the matter, insomuch that Jesus could no more openly enter into the city, but was without in desert places: and they came to him from every quarter."
        }
      },
      {
        id: 5,
        img: '05.png',
        done: 100,
        title: {
          ro: "Vindecarea robului sutașului roman",
          en: "Miracle of healing a centurion's servant"
        },
        text: {
          ro: "Luca 7:1-10: După ce a sfârşit de rostit toate aceste cuvântări înaintea norodului care-L asculta, Isus a intrat în Capernaum. Un sutaş avea un rob la care ţinea foarte mult şi care era bolnav pe moarte. Fiindcă auzise vorbindu-se despre Isus, sutaşul a trimis la El pe nişte bătrâni ai iudeilor, ca să-L roage să vină să vindece pe robul lui. Aceştia au venit la Isus, L-au rugat cu tot dinadinsul şi au zis: \"Face să-i faci acest bine; căci iubeşte neamul nostru şi el ne-a zidit sinagoga.\" Isus a plecat cu ei; dar nu era departe de casă, când sutaşul a trimis la El pe nişte prieteni să-I spună: \"Doamne, nu Te mai osteni atâta, pentru că nu sunt vrednic să intri sub acoperământul meu. De aceea nici nu m-am socotit vrednic să vin eu însumi la Tine. Ci zi o vorbă, şi robul meu va fi tămăduit. Căci şi eu, care sunt sub stăpânirea altuia, am sub mine ostaşi. Şi zic unuia: \"Du-te!\", şi se duce; altuia: \"Vino!\", şi vine; şi robului meu: \"Fă cutare lucru!\", şi-l face.\" Când a auzit Isus aceste vorbe, S-a minunat de sutaş, S-a întors spre norodul care mergea după El şi a zis: \"Vă spun că nici chiar în Israel n-am găsit o credinţă atât de mare.\" Când s-au întors acasă, trimişii au găsit sănătos pe robul care fusese bolnav.",
          en: "Luke 7:1-10: Now when he had ended all his sayings in the audience of the people, he entered into Capernaum. And a certain centurion's servant, who was dear unto him, was sick, and ready to die. And when he heard of Jesus, he sent unto him the elders of the Jews, beseeching him that he would come and heal his servant. And when they came to Jesus, they besought him instantly, saying, That he was worthy for whom he should do this: For he loveth our nation, and he hath built us a synagogue. Then Jesus went with them. And when he was now not far from the house, the centurion sent friends to him, saying unto him, Lord, trouble not thyself: for I am not worthy that thou shouldest enter under my roof: Wherefore neither thought I myself worthy to come unto thee: but say in a word, and my servant shall be healed. For I also am a man set under authority, having under me soldiers, and I say unto one, Go, and he goeth; and to another, Come, and he cometh; and to my servant, Do this, and he doeth it. When Jesus heard these things, he marvelled at him, and turned him about, and said unto the people that followed him, I say unto you, I have not found so great faith, no, not in Israel. And they that were sent, returning to the house, found the servant whole that had been sick."
        }
      },
      {
        id: 6,
        img: '06.png',
        done: 100,
        title: {
          ro: "Învierea fiului văduvei din Nain",
          en: "Raising of the son of the widow of Nain"
        },
        text: {
          ro: "Luca 7:11-17: În ziua următoare, Isus Se ducea într-o cetate numită Nain. Împreună cu El mergeau ucenicii Lui şi norod mult. Când S-a apropiat de poarta cetăţii, iată că duceau la groapă pe un mort, singurul fiu al maicii lui, care era văduvă; şi cu ea erau o mulţime de oameni din cetate. Domnului, când a văzut-o, I S-a făcut milă de ea şi i-a zis: \"Nu plânge!\" Apoi S-a apropiat şi S-a atins de raclă. Cei ce o duceau s-au oprit. El a zis: \"Tinerelule, scoală-te, îţi spun!\" Mortul a şezut în capul oaselor şi a început să vorbească. Isus l-a dat înapoi maicii lui. Toţi au fost cuprinşi de frică, slăveau pe Dumnezeu şi ziceau: \"Un mare proroc S-a ridicat între noi; şi Dumnezeu a cercetat pe poporul Său.\" Vestea aceasta despre Isus s-a răspândit în toată Iudeea şi prin toate împrejurimile.",
          en: "Luke 7:11-17: And it came to pass the day after, that he went into a city called Nain; and many of his disciples went with him, and much people. Now when he came nigh to the gate of the city, behold, there was a dead man carried out, the only son of his mother, and she was a widow: and much people of the city was with her. And when the Lord saw her, he had compassion on her, and said unto her, Weep not. And he came and touched the bier: and they that bare him stood still. And he said, Young man, I say unto thee, Arise. And he that was dead sat up, and began to speak. And he delivered him to his mother. And there came a fear on all: and they glorified God, saying, That a great prophet is risen up among us; and, That God hath visited his people. And this rumour of him went forth throughout all Judaea, and throughout all the region round about."
        }
      },
      {
        id: 7,
        img: '07.png',
        done: 100,
        title: {
          ro: "Vindecarea îndrăcitului la Capernaum",
          en: "Healing of the Capernaum demoniac"
        },
        text: {
          ro: "Luca 4:31-37: S-a coborât în Capernaum, cetate din Galileea, şi acolo învăţa pe oameni în ziua Sabatului. Ei erau uimiţi de învăţătura Lui, pentru că vorbea cu putere. În sinagogă se afla un om care avea un duh de drac necurat şi care a strigat cu glas tare: \"Ah! Ce avem noi a face cu Tine, Isuse din Nazaret? Ai venit să ne prăpădeşti? Te ştiu cine eşti: Sfântul lui Dumnezeu.\" Isus l-a certat şi i-a zis: \"Taci şi ieşi afară din omul acesta!\" Şi dracul, după ce l-a trântit jos, în mijlocul adunării, a ieşit afară din el, fără să-i facă vreun rău. Toţi au fost cuprinşi de spaimă şi ziceau unii către alţii: \"Ce înseamnă lucrul acesta? El porunceşte cu stăpânire şi cu putere duhurilor necurate, şi ele ies afară!\" Şi I s-a dus vestea în toate împrejurimile.",
          en: "Luke 4:31-37: And came down to Capernaum, a city of Galilee, and taught them on the sabbath days. And they were astonished at his doctrine: for his word was with power. And in the synagogue there was a man, which had a spirit of an unclean devil, and cried out with a loud voice, Saying, Let us alone; what have we to do with thee, thou Jesus of Nazareth? art thou come to destroy us? I know thee who thou art; the Holy One of God. And Jesus rebuked him, saying, Hold thy peace, and come out of him. And when the devil had thrown him in the midst, he came out of him, and hurt him not. And they were all amazed, and spake among themselves, saying, What a word is this! for with authority and power he commandeth the unclean spirits, and they come out. And the fame of him went out into every place of the country round about."
        }
      },
      {
        id: 8,
        img: '08.png',
        done: 100,
        title: {
          ro: "Vindecarea soacrei lui Petru",
          en: "Healing of Peter's mother-in-law"
        },
        text: {
          ro: "Marcu 1:29-31: După ce a ieşit din sinagogă, a intrat împreună cu Iacov şi Ioan în casa lui Simon şi a lui Andrei. Soacra lui Simon zăcea în pat prinsă de friguri; şi îndată au vorbit lui Isus despre ea. El a venit, a apucat-o de mână, a ridicat-o în sus, şi au lăsat-o frigurile. Apoi ea a început să le slujească.",
          en: "Mark 1:29-31: And forthwith, when they were come out of the synagogue, they entered into the house of Simon and Andrew, with James and John. But Simon's wife's mother lay sick of a fever, and anon they tell him of her. And he came and took her by the hand, and lifted her up; and immediately the fever left her, and she ministered unto them."
        }
      },
      {
        id: 9,
        img: '09.png',
        done: 100,
        title: {
          ro: "Vindecarea slăbănogului",
          en: "Healing a paralyzed man"
        },
        text: {
          ro: "Luca 5:17-26: Într-una din zile, Isus învăţa pe noroade. Nişte farisei şi învăţători ai Legii, care veniseră din toate satele Galileii şi Iudeii şi din Ierusalim, stăteau acolo; iar puterea Domnului era cu El, ca să vindece. Şi iată că nişte oameni purtau într-un pat pe un slăbănog şi căutau să-l ducă înăuntru, ca să-l pună înaintea Lui. Fiindcă n-aveau pe unde să-l ducă înăuntru, din pricina norodului, s-au suit pe acoperişul casei şi l-au coborât cu patul printre cărămizi, în mijlocul adunării, înaintea lui Isus. Când le-a văzut credinţa, Isus a zis: \"Omule, păcatele îţi sunt iertate!\" Cărturarii şi fariseii au început să cârtească şi să zică în ei înşişi: \"Cine este Acesta, de rosteşte hule? Cine poate să ierte păcatele decât singur Dumnezeu?\" Isus, care le-a cunoscut gândurile, a luat cuvântul şi le-a zis: \"Pentru ce cârtiţi în inimile voastre? Ce este mai lesne, a zice: \"Păcatele îţi sunt iertate\" sau a zice: \"Scoală-te şi umblă\"? Dar, ca să ştiţi că Fiul omului are putere pe pământ să ierte păcatele: \"Ţie îţi poruncesc\", a zis El slăbănogului, \"scoală-te, ridică-ţi patul şi du-te acasă\". Şi, numaidecât, slăbănogul s-a sculat, în faţa lor, a ridicat patul pe care zăcea şi s-a dus acasă, slăvind pe Dumnezeu. Toţi au rămas uimiţi şi slăveau pe Dumnezeu; plini de frică, ziceau: \"Azi am văzut lucruri nemaipomenite.\"",
          en: "Luke 5:17-26: And it came to pass on a certain day, as he was teaching, that there were Pharisees and doctors of the law sitting by, which were come out of every town of Galilee, and Judaea, and Jerusalem: and the power of the Lord was present to heal them. And, behold, men brought in a bed a man which was taken with a palsy: and they sought means to bring him in, and to lay him before him. And when they could not find by what way they might bring him in because of the multitude, they went upon the housetop, and let him down through the tiling with his couch into the midst before Jesus. And when he saw their faith, he said unto him, Man, thy sins are forgiven thee. And the scribes and the Pharisees began to reason, saying, Who is this which speaketh blasphemies? Who can forgive sins, but God alone? But when Jesus perceived their thoughts, he answering said unto them, What reason ye in your hearts? Whether is easier, to say, Thy sins be forgiven thee; or to say, Rise up and walk? But that ye may know that the Son of man hath power upon earth to forgive sins, (he said unto the sick of the palsy,) I say unto thee, Arise, and take up thy couch, and go into thine house. And immediately he rose up before them, and took up that whereon he lay, and departed to his own house, glorifying God. And they were all amazed, and they glorified God, and were filled with fear, saying, We have seen strange things to day."
        }
      },
      {
        id: 10,
        img: '10.png',
        done: 100,
        title: {
          ro: "Vindecarea slăbănogului la Betesda",
          en: "Healing the paralytic at Bethesda"
        },
        text: {
          ro: "Ioan 5:1-9: După aceea era un praznic al iudeilor; şi Isus S-a suit la Ierusalim. În Ierusalim, lângă poarta oilor, este o scăldătoare, numită în evreieşte Betesda, care are cinci pridvoare. În pridvoarele acestea zăceau o mulţime de bolnavi, orbi, şchiopi, uscaţi, care aşteptau mişcarea apei. Căci un înger al Domnului se cobora, din când în când, în scăldătoare şi tulbura apa. Şi cel dintâi care se cobora în ea, după tulburarea apei, se făcea sănătos, orice boală ar fi avut. Acolo se afla un om bolnav de treizeci şi opt de ani. Isus, când l-a văzut zăcând, şi fiindcă ştia că este bolnav de multă vreme, i-a zis: \"Vrei să te faci sănătos?\" \"Doamne\", I-a răspuns bolnavul, \"n-am pe nimeni să mă bage în scăldătoare când se tulbură apa; şi, până să mă duc eu, se coboară altul înaintea mea.\" \"Scoală-te\", i-a zis Isus, \"ridică-ţi patul şi umblă.\" Îndată omul acela s-a făcut sănătos, şi-a luat patul şi umbla. Ziua aceea era o zi de Sabat.",
          en: "John 5:1-9: After this there was a feast of the Jews; and Jesus went up to Jerusalem. Now there is at Jerusalem by the sheep market a pool, which is called in the Hebrew tongue Bethesda, having five porches. In these lay a great multitude of impotent folk, of blind, halt, withered, waiting for the moving of the water. For an angel went down at a certain season into the pool, and troubled the water: whosoever then first after the troubling of the water stepped in was made whole of whatsoever disease he had. And a certain man was there, which had an infirmity thirty and eight years. When Jesus saw him lie, and knew that he had been now a long time in that case, he saith unto him, Wilt thou be made whole? The impotent man answered him, Sir, I have no man, when the water is troubled, to put me into the pool: but while I am coming, another steppeth down before me. Jesus saith unto him, Rise, take up thy bed, and walk. And immediately the man was made whole, and took up his bed, and walked: and on the same day was the sabbath."
        }
      },
      {
        id: 11,
        img: '11.png',
        done: 100,
        title: {
          ro: "Vindecarea omului cu mâna uscată",
          en: "Healing a withered hand"
        },
        text: {
          ro: "Luca 6:6-11: În altă zi de Sabat, s-a întâmplat că Isus a intrat în sinagogă şi învăţa pe norod. Acolo era un om care avea mâna dreaptă uscată. Cărturarii şi fariseii pândeau pe Isus, să vadă dacă-l va vindeca în ziua Sabatului, ca să aibă de ce să-L învinuiască. Dar El le ştia gândurile; şi a zis omului care avea mâna uscată: \"Scoală-te şi stai în mijloc.\" El s-a sculat şi a stat în picioare. Şi Isus le-a zis: \"Vă întreb: Este îngăduit în ziua Sabatului a face bine ori a face rău? A scăpa o viaţă sau a o pierde?\" Atunci, Şi-a rotit privirile peste toţi şi a zis omului: \"Întinde-ţi mâna!\" El a întins-o, şi mâna i s-a făcut sănătoasă ca şi cealaltă. Ei turbau de mânie şi s-au sfătuit ce ar putea să facă lui Isus.",
          en: "Luke 6:6-11: And it came to pass also on another sabbath, that he entered into the synagogue and taught: and there was a man whose right hand was withered. And the scribes and Pharisees watched him, whether he would heal on the sabbath day; that they might find an accusation against him. But he knew their thoughts, and said to the man which had the withered hand, Rise up, and stand forth in the midst. And he arose and stood forth. Then said Jesus unto them, I will ask you one thing; Is it lawful on the sabbath days to do good, or to do evil? to save life, or to destroy it? And looking round about upon them all, he said unto the man, Stretch forth thy hand. And he did so: and his hand was restored whole as the other. And they were filled with madness; and communed one with another what they might do to Jesus."
        }
      },
      {
        id: 12,
        img: '12.png',
        done: 100,
        title: {
          ro: "Vindecarea unui îndrăcit mut și orb",
          en: "Healing a blind and mute man who was demon-possessed"
        },
        text: {
          ro: "Matei 12:22-23: Atunci I-au adus un îndrăcit orb şi mut; şi Isus l-a tămăduit, aşa că mutul vorbea şi vedea. Toate noroadele, mirate, ziceau: \"Nu cumva este acesta Fiul lui David?\"",
          en: "Matthew 12:22-23: Then was brought unto him one possessed with a devil, blind, and dumb: and he healed him, insomuch that the blind and dumb both spake and saw. And all the people were amazed, and said, Is not this the son of David?"
        }
      },
      {
        id: 13,
        img: '13.png',
        done: 100,
        title: {
          ro: "Potolirea furtunii",
          en: "Calming the storm"
        },
        text: {
          ro: "Luca 8:22-25: Într-una din zile, Isus S-a suit într-o corabie împreună cu ucenicii Lui. El le-a zis: \"Haidem să trecem dincolo de lac.\" Şi au plecat. Pe când vâsleau ei, Isus a adormit. Pe lac s-a stârnit un aşa vârtej de vânt, că se umplea corabia cu apă; şi erau în primejdie. Au venit la El, L-au deşteptat şi au zis: \"Învăţătorule, Învăţătorule, pierim.\" Isus S-a sculat, a certat vântul şi valurile înfuriate, care s-au potolit: şi s-a făcut linişte. Apoi a zis ucenicilor Săi: \"Unde vă este credinţa?\" Plini de spaimă şi de mirare, ei au zis unii către alţii: \"Cine este Acesta de porunceşte chiar şi vânturilor şi apei, şi-L ascultă?\"",
          en: "Luke 8:22-25: Now it came to pass on a certain day, that he went into a ship with his disciples: and he said unto them, Let us go over unto the other side of the lake. And they launched forth. But as they sailed he fell asleep: and there came down a storm of wind on the lake; and they were filled with water, and were in jeopardy. And they came to him, and awoke him, saying, Master, master, we perish. Then he arose, and rebuked the wind and the raging of the water: and they ceased, and there was a calm. And he said unto them, Where is your faith? And they being afraid wondered, saying one to another, What manner of man is this! for he commandeth even the winds and water, and they obey him."
        }
      },
      {
        id: 14,
        img: '14.png',
        done: 100,
        title: {
          ro: "Vindecarea celor doi îndrăciți",
          en: "Healing two demon-possessed Men"
        },
        text: {
          ro: "Matei 8:28-34: Când a ajuns Isus de partea cealaltă, în ţinutul Gadarenilor, L-au întâmpinat doi îndrăciţi care ieşeau din morminte. Erau aşa de cumpliţi, că nimeni nu putea trece pe drumul acela. Şi iată că au început să strige: \"Ce legătură este între noi şi Tine, Isuse, Fiul lui Dumnezeu? Ai venit aici să ne chinuieşti înainte de vreme?\" Departe de ei era o turmă mare de porci care păşteau. Dracii rugau pe Isus şi ziceau: \"Dacă ne scoţi afară din ei, dă-ne voie să ne ducem în turma aceea de porci.\" \"Duceţi-vă\", le-a zis El. Ei au ieşit şi au intrat în porci. Şi deodată toată turma s-a repezit de pe râpă în mare, şi a pierit în ape.",
          en: "Matthew 8:28-34: And when he was come to the other side into the country of the Gergesenes, there met him two possessed with devils, coming out of the tombs, exceeding fierce, so that no man might pass by that way. And, behold, they cried out, saying, What have we to do with thee, Jesus, thou Son of God? art thou come hither to torment us before the time? And there was a good way off from them an herd of many swine feeding. So the devils besought him, saying, If thou cast us out, suffer us to go away into the herd of swine. And he said unto them, Go. And when they were come out, they went into the herd of swine: and, behold, the whole herd of swine ran violently down a steep place into the sea, and perished in the waters."
        }
      },
      {
        id: 15,
        img: '15.png',
        done: 100,
        title: {
          ro: "Învierea fiicei lui Iair",
          en: "Raising Jairus' daughter"
        },
        text: {
          ro: "Marcu 5:35-43: Pe când vorbea El încă, iată că vin nişte oameni de la fruntaşul sinagogii care-i spun: \"Fiica ta a murit; pentru ce mai superi pe Învăţătorul?\" Dar Isus, fără să ţină seamă de cuvintele acestea, a zis fruntaşului sinagogii: \"Nu te teme, crede numai!\" Şi n-a îngăduit nimănui să-L însoţească, afară de Petru, Iacov şi Ioan, fratele lui Iacov. Au ajuns la casa fruntaşului sinagogii. Acolo Isus a văzut o zarvă, şi pe unii care plângeau şi se tânguiau mult. A intrat înăuntru şi le-a zis: \"Pentru ce faceţi atâta zarvă şi pentru ce plângeţi? Copila n-a murit, ci doarme.\" Ei îşi băteau joc de El. Atunci, după ce i-a scos afară pe toţi, a luat cu El pe tatăl copilei, pe mama ei şi pe cei ce-L însoţiseră şi a intrat acolo unde zăcea copila. A apucat-o de mână şi i-a zis: \"Talita, cumi\", care tălmăcit înseamnă: \"Fetiţo, scoală-te îţi zic!\" Îndată fetiţa s-a sculat şi a început să umble; căci era de doisprezece ani. Ei au rămas încremeniţi. Isus le-a poruncit cu tărie să nu ştie nimeni lucrul acesta; şi a zis să dea de mâncare fetiţei.",
          en: "Mark 5:35-43: While he yet spake, there came from the ruler of the synagogue's house certain which said, Thy daughter is dead: why troublest thou the Master any further? As soon as Jesus heard the word that was spoken, he saith unto the ruler of the synagogue, Be not afraid, only believe. And he suffered no man to follow him, save Peter, and James, and John the brother of James. And he cometh to the house of the ruler of the synagogue, and seeth the tumult, and them that wept and wailed greatly. And when he was come in, he saith unto them, Why make ye this ado, and weep? the damsel is not dead, but sleepeth. And they laughed him to scorn. But when he had put them all out, he taketh the father and the mother of the damsel, and them that were with him, and entereth in where the damsel was lying. And he took the damsel by the hand, and said unto her, Talitha cumi; which is, being interpreted, Damsel, I say unto thee, arise. And straightway the damsel arose, and walked; for she was of the age of twelve years. And they were astonished with a great astonishment. And he charged them straitly that no man should know it; and commanded that something should be given her to eat."
        }
      },
      {
        id: 16,
        img: '16.png',
        done: 100,
        title: {
          ro: "Vindecarea femeii cu scurgere de sânge",
          en: "Healing the bleeding woman"
        },
        text: {
          ro: "Luca 8:43-48: Şi era o femeie care de doisprezece ani avea o scurgere de sânge; ea îşi cheltuise toată averea cu doctorii, fără s-o fi putut vindeca vreunul. Ea s-a apropiat pe dinapoi şi s-a atins de poala hainei lui Isus. Îndată, scurgerea de sânge s-a oprit. Şi Isus a zis: \"Cine s-a atins de Mine?\" Fiindcă toţi tăgăduiau, Petru şi cei ce erau cu El au zis: \"Învăţătorule, noroadele Te împresoară şi Te îmbulzesc, şi mai întrebi: \"Cine s-a atins de Mine\"? Dar Isus a răspuns: \"S-a atins cineva de Mine, căci am simţit că a ieşit din Mine o putere.\" Femeia, când s-a văzut dată de gol, a venit tremurând, s-a aruncat jos înaintea Lui şi a spus în faţa întregului norod din ce pricină se atinsese de El şi cum fusese vindecată numaidecât. Isus i-a zis: \"Îndrăzneşte, fiică; credinţa ta te-a mântuit, du-te în pace.\"",
          en: "Luke 8:43-48: And a woman having an issue of blood twelve years, which had spent all her living upon physicians, neither could be healed of any, Came behind him, and touched the border of his garment: and immediately her issue of blood stanched. And Jesus said, Who touched me? When all denied, Peter and they that were with him said, Master, the multitude throng thee and press thee, and sayest thou, Who touched me? And Jesus said, Somebody hath touched me: for I perceive that virtue is gone out of me. And when the woman saw that she was not hid, she came trembling, and falling down before him, she declared unto him before all the people for what cause she had touched him, and how she was healed immediately. And he said unto her, Daughter, be of good comfort: thy faith hath made thee whole; go in peace."
        }
      },
      {
        id: 17,
        img: '17.png',
        done: 100,
        title: {
          ro: "Vindecarea celor doi orbi",
          en: "Healing of the two blind men"
        },
        text: {
          ro: "Matei 9:27-31: Când a plecat de acolo, s-au luat după Isus doi orbi care strigau şi ziceau: \"Ai milă de noi, Fiul lui David!\" După ce a intrat în casă, orbii au venit la El. Şi Isus le-a zis: \"Credeţi că pot face lucrul acesta?\" \"Da, Doamne\", I-au răspuns ei. Atunci S-a atins de ochii lor şi a zis: \"Facă-vi-se după credinţa voastră!\" Şi li s-au deschis ochii. Isus le-a poruncit cu tot dinadinsul şi le-a zis: \"Vedeţi să nu ştie nimeni.\" Dar ei, cum au ieşit afară, au răspândit vestea despre El în tot ţinutul acela.",
          en: "Matthew 9:27-31: And when Jesus departed thence, two blind men followed him, crying, and saying, Thou Son of David, have mercy on us. And when he was come into the house, the blind men came to him: and Jesus saith unto them, Believe ye that I am able to do this? They said unto him, Yea, Lord. Then touched he their eyes, saying, According to your faith be it unto you. And their eyes were opened; and Jesus straitly charged them, saying, See that no man know it. But they, when they were departed, spread abroad his fame in all that country."
        }
      },
      {
        id: 18,
        img: '18.png',
        done: 100,
        title: {
          ro: "Vindecarea unui mut îndrăcit",
          en: "Healing the blind and dumb possessed"
        },
        text: {
          ro: "Matei 9:32-34: Pe când plecau orbii aceştia, iată că au adus la Isus un mut îndrăcit. După ce a fost scos dracul din el, mutul a vorbit. Şi noroadele, mirate, ziceau: \"Niciodată nu s-a văzut aşa ceva în Israel!\" Dar fariseii ziceau: \"Cu ajutorul domnului dracilor scoate El dracii!\"",
          en: "Matthew 9:32-34: As they went out, behold, they brought to him a dumb man possessed with a devil. And when the devil was cast out, the dumb spake: and the multitudes marvelled, saying, It was never so seen in Israel. But the Pharisees said, He casteth out devils through the prince of the devils."
        }
      },
      {
        id: 19,
        img: '19.png',
        done: 100,
        title: {
          ro: "Hrănirea celor cinci mii de oameni",
          en: "The feeding of the 5000"
        },
        text: {
          ro: "Ioan 6:1-14: După aceea Isus S-a dus dincolo de Marea Galileii, numită Marea Tiberiadei. O mare gloată mergea după El pentru că vedea semnele pe care le făcea cu cei bolnavi. Isus S-a suit pe munte şi şedea acolo cu ucenicii Săi. Paştile, praznicul iudeilor, era aproape. Isus Şi-a ridicat ochii şi a văzut că o mare gloată vine spre El. Şi a zis lui Filip: \"De unde avem să cumpărăm pâini ca să mănânce oamenii aceştia?\" Spunea lucrul acesta ca să-l încerce, pentru că ştia ce are de gând să facă. Filip I-a răspuns: \"Pâinile pe care le-am putea cumpăra cu două sute de lei, n-ar ajunge ca fiecare să capete puţintel din ele.\" Unul din ucenicii Săi, Andrei, fratele lui Simon Petru, I-a zis: \"Este aici un băieţel care are cinci pâini de orz şi doi peşti; dar ce sunt acestea la atâţia?\" Isus a zis: \"Spuneţi oamenilor să şadă jos.\" În locul acela era multă iarbă. Oamenii au şezut jos, în număr de aproape cinci mii. Isus a luat pâinile, a mulţumit lui Dumnezeu, le-a împărţit ucenicilor, iar ucenicii le-au împărţit celor ce şedeau jos; de asemenea, le-a dat şi din peşti cât au voit. După ce s-au săturat, Isus a zis ucenicilor Săi: \"Strângeţi firimiturile care au rămas, ca să nu se piardă nimic.\" Le-au adunat deci şi au umplut douăsprezece coşuri cu firimiturile care rămăseseră din cele cinci pâini de orz, după ce mâncaseră toţi. Oamenii aceia, când au văzut minunea pe care o făcuse Isus, ziceau: \"Cu adevărat, Acesta este Prorocul cel aşteptat în lume.\"",
          en: "John 6:1-14: After these things Jesus went over the sea of Galilee, which is the sea of Tiberias. And a great multitude followed him, because they saw his miracles which he did on them that were diseased. And Jesus went up into a mountain, and there he sat with his disciples. And the passover, a feast of the Jews, was nigh. When Jesus then lifted up his eyes, and saw a great company come unto him, he saith unto Philip, Whence shall we buy bread, that these may eat? And this he said to prove him: for he himself knew what he would do. Philip answered him, Two hundred pennyworth of bread is not sufficient for them, that every one of them may take a little. One of his disciples, Andrew, Simon Peter's brother, saith unto him, There is a lad here, which hath five barley loaves, and two small fishes: but what are they among so many? And Jesus said, Make the men sit down. Now there was much grass in the place. So the men sat down, in number about five thousand. And Jesus took the loaves; and when he had given thanks, he distributed to the disciples, and the disciples to them that were set down; and likewise of the fishes as much as they would. When they were filled, he said unto his disciples, Gather up the fragments that remain, that nothing be lost. Therefore they gathered them together, and filled twelve baskets with the fragments of the five barley loaves, which remained over and above unto them that had eaten. Then those men, when they had seen the miracle that Jesus did, said, This is of a truth that prophet that should come into the world."
        }
      },
      {
        id: 20,
        img: '20.png',
        done: 100,
        title: {
          ro: "Umblarea pe mare",
          en: "Walking on water"
        },
        text: {
          ro: "Matei 14:22-33: Îndată după aceea, Isus a silit pe ucenicii Săi să intre în corabie şi să treacă înaintea Lui de partea cealaltă, până va da drumul noroadelor. După ce a dat drumul noroadelor, S-a suit pe munte să Se roage, singur la o parte. Se înnoptase, şi El era singur acolo. În timpul acesta, corabia era învăluită de valuri în mijlocul mării; căci vântul era împotrivă. Când se îngâna ziua cu noaptea, Isus a venit la ei, umblând pe mare. Când L-au văzut ucenicii umblând pe mare, s-au înspăimântat şi au zis: \"Este o nălucă!\" Şi, de frică, au ţipat. Isus le-a zis îndată: \"Îndrăzniţi, Eu sunt; nu vă temeţi!\" \"Doamne\", I-a răspuns Petru, \"dacă eşti Tu, porunceşte-mi să vin la Tine pe ape.\" \"Vino!\", i-a zis Isus. Petru s-a coborât din corabie şi a început să umble pe ape ca să meargă la Isus. Dar, când a văzut că vântul era tare, s-a temut; şi, fiindcă începea să se afunde, a strigat: \"Doamne, scapă-mă!\" Îndată, Isus a întins mâna, l-a apucat şi i-a zis: \"Puţin credinciosule, pentru ce te-ai îndoit?\" Şi după ce au intrat în corabie, a stat vântul. Cei ce erau în corabie au venit de s-au închinat înaintea lui Isus şi I-au zis: \"Cu adevărat, Tu eşti Fiul lui Dumnezeu!\"",
          en: "Matthew 14:22-33: 22 And straightway Jesus constrained his disciples to get into a ship, and to go before him unto the other side, while he sent the multitudes away. And when he had sent the multitudes away, he went up into a mountain apart to pray: and when the evening was come, he was there alone. But the ship was now in the midst of the sea, tossed with waves: for the wind was contrary. And in the fourth watch of the night Jesus went unto them, walking on the sea. And when the disciples saw him walking on the sea, they were troubled, saying, It is a spirit; and they cried out for fear. But straightway Jesus spake unto them, saying, Be of good cheer; it is I; be not afraid. And Peter answered him and said, Lord, if it be thou, bid me come unto thee on the water. And he said, Come. And when Peter was come down out of the ship, he walked on the water, to go to Jesus. But when he saw the wind boisterous, he was afraid; and beginning to sink, he cried, saying, Lord, save me. And immediately Jesus stretched forth his hand, and caught him, and said unto him, O thou of little faith, wherefore didst thou doubt? And when they were come into the ship, the wind ceased. Then they that were in the ship came and worshipped him, saying, Of a truth thou art the Son of God."
        }
      },
      {
        id: 21,
        img: '21.png',
        done: 100,
        title: {
          ro: "Vindecarea fiicei femeii canaanite",
          en: "Healing the Canaanite woman's daughter"
        },
        text: {
          ro: "Matei 15:21-28: Isus, după ce a plecat de acolo, S-a dus în părţile Tirului şi ale Sidonului. Şi iată că o femeie canaanită a venit din ţinuturile acelea şi a început să strige către El: \"Ai milă de mine, Doamne, Fiul lui David! Fiica mea este muncită rău de un drac.\" El nu i-a răspuns niciun cuvânt. Şi ucenicii Lui s-au apropiat şi L-au rugat stăruitor: \"Dă-i drumul, căci strigă după noi.\" Drept răspuns, El a zis: \"Eu nu sunt trimis decât la oile pierdute ale casei lui Israel.\" Dar ea a venit şi I s-a închinat, zicând: \"Doamne, ajută-mi!\" Drept răspuns, El i-a zis: \"Nu este bine să iei pâinea copiilor şi s-o arunci la căţei!\" \"Da, Doamne\", a zis ea, \"dar şi căţeii mănâncă firimiturile care cad de la masa stăpânilor lor.\" Atunci Isus i-a zis: \"O, femeie, mare este credinţa Ta; facă-ţi-se cum voieşti.\" Şi fiica ei s-a tămăduit chiar în ceasul acela.",
          en: "Matthew 15:21-28: Then Jesus went thence, and departed into the coasts of Tyre and Sidon. And, behold, a woman of Canaan came out of the same coasts, and cried unto him, saying, Have mercy on me, O Lord, thou Son of David; my daughter is grievously vexed with a devil. But he answered her not a word. And his disciples came and besought him, saying, Send her away; for she crieth after us. But he answered and said, I am not sent but unto the lost sheep of the house of Israel. Then came she and worshipped him, saying, Lord, help me. But he answered and said, It is not meet to take the children's bread, and to cast it to dogs. And she said, Truth, Lord: yet the dogs eat of the crumbs which fall from their masters' table. Then Jesus answered and said unto her, O woman, great is thy faith: be it unto thee even as thou wilt. And her daughter was made whole from that very hour."
        }
      },
      {
        id: 22,
        img: '22.png',
        done: 100,
        title: {
          ro: "Vindecarea omului surd și mut",
          en: "Healing a deaf and mute man"
        },
        text: {
          ro: "Marcu 7:31-37: Isus a părăsit ţinutul Tirului şi a venit iarăşi prin Sidon la Marea Galileii, trecând prin ţinutul Decapole. I-au adus un surd care vorbea cu anevoie şi L-au rugat să-Şi pună mâinile peste el. El l-a luat la o parte din norod, i-a pus degetele în urechi şi i-a atins limba cu scuipatul Lui. Apoi, Şi-a ridicat ochii spre cer, a suspinat şi a zis: \"Efata\", adică: \"Deschide-te!\" Îndată i s-au deschis urechile, i s-a dezlegat limba şi a vorbit foarte desluşit. Isus le-a poruncit să nu spună nimănui; dar cu cât le poruncea mai mult, cu atât Îl vesteau mai mult. Ei erau uimiţi peste măsură de mult şi ziceau: \"Toate le face de minune; chiar şi pe surzi îi face să audă, şi pe muţi să vorbească.\"",
          en: "Mark 7:31-37: And again, departing from the coasts of Tyre and Sidon, he came unto the sea of Galilee, through the midst of the coasts of Decapolis. And they bring unto him one that was deaf, and had an impediment in his speech; and they beseech him to put his hand upon him. And he took him aside from the multitude, and put his fingers into his ears, and he spit, and touched his tongue; And looking up to heaven, he sighed, and saith unto him, Ephphatha, that is, Be opened. And straightway his ears were opened, and the string of his tongue was loosed, and he spake plain. And he charged them that they should tell no man: but the more he charged them, so much the more a great deal they published it; And were beyond measure astonished, saying, He hath done all things well: he maketh both the deaf to hear, and the dumb to speak."
        }
      },
      {
        id: 23,
        img: '23.png',
        done: 100,
        title: {
          ro: "Hrănirea celor patru mii de oameni",
          en: "The feeding of the four thousand"
        },
        text: {
          ro: "Matei 15:29-39: Isus a plecat din locurile acelea şi a venit lângă Marea Galileii. S-a suit pe munte şi a şezut jos acolo. Atunci au venit la El multe noroade, având cu ele şchiopi, orbi, muţi, ciungi şi mulţi alţi bolnavi. I-au pus la picioarele Lui, şi El i-a tămăduit; aşa că noroadele se mirau, când au văzut că muţii vorbesc, ciungii se însănătoşesc, şchiopii umblă, şi orbii văd; şi slăveau pe Dumnezeul lui Israel. Isus a chemat pe ucenicii Săi şi le-a zis: \"Mi-este milă de gloata aceasta; căci iată că de trei zile aşteaptă lângă Mine şi n-au ce mânca. Nu vreau să le dau drumul flămânzi, ca nu cumva să leşine de foame pe drum.\" Ucenicii I-au zis: \"De unde să luăm în pustiul acesta atâtea pâini ca să săturăm atâta gloată?\" \"Câte pâini aveţi?\", i-a întrebat Isus. \"Şapte\", I-au răspuns ei, \"şi puţini peştişori\". Atunci Isus a poruncit norodului să şadă pe pământ. A luat cele şapte pâini şi peştişorii şi, după ce a mulţumit lui Dumnezeu, a frânt şi a dat ucenicilor, iar ucenicii au împărţit norodului. Au mâncat toţi şi s-au săturat; şi s-au ridicat şapte coşniţe pline cu rămăşiţele de firimituri. Cei ce mâncaseră erau patru mii de bărbaţi, afară de femei şi de copii. În urmă Isus a dat drumul noroadelor, S-a suit în corabie şi a trecut în ţinutul Magdalei.",
          en: "Matthew 15:29-39: And Jesus departed from thence, and came nigh unto the sea of Galilee; and went up into a mountain, and sat down there. And great multitudes came unto him, having with them those that were lame, blind, dumb, maimed, and many others, and cast them down at Jesus' feet; and he healed them: Insomuch that the multitude wondered, when they saw the dumb to speak, the maimed to be whole, the lame to walk, and the blind to see: and they glorified the God of Israel. Then Jesus called his disciples unto him, and said, I have compassion on the multitude, because they continue with me now three days, and have nothing to eat: and I will not send them away fasting, lest they faint in the way. And his disciples say unto him, Whence should we have so much bread in the wilderness, as to fill so great a multitude? And Jesus saith unto them, How many loaves have ye? And they said, Seven, and a few little fishes. And he commanded the multitude to sit down on the ground. And he took the seven loaves and the fishes, and gave thanks, and brake them, and gave to his disciples, and the disciples to the multitude. And they did all eat, and were filled: and they took up of the broken meat that was left seven baskets full. And they that did eat were four thousand men, beside women and children. And he sent away the multitude, and took ship, and came into the coasts of Magdala."
        }
      },
      {
        id: 24,
        img: '24.png',
        done: 100,
        title: {
          ro: "Vindecarea orbului la Betsaida",
          en: "Healing the blind man at Bethsaida"
        },
        text: {
          ro: "Marcu 8:22-26: Au venit la Betsaida; au adus la Isus un orb şi L-au rugat să Se atingă de el. Isus a luat pe orb de mână şi l-a scos afară din sat; apoi i-a pus scuipat pe ochi, Şi-a pus mâinile peste el şi l-a întrebat: \"Vezi ceva?\" El s-a uitat şi a zis: \"Văd nişte oameni umblând, dar mi se par ca nişte copaci.\" Isus i-a pus din nou mâinile pe ochi; i-a spus să se uite ţintă; şi, când s-a uitat, a fost tămăduit şi a văzut toate lucrurile desluşit. Atunci Isus l-a trimis acasă şi i-a zis: \"Să nu intri în sat şi nici să nu spui cuiva în sat.\"",
          en: "Mark 8:22-26: And he cometh to Bethsaida; and they bring a blind man unto him, and besought him to touch him. And he took the blind man by the hand, and led him out of the town; and when he had spit on his eyes, and put his hands upon him, he asked him if he saw ought. And he looked up, and said, I see men as trees, walking. After that he put his hands again upon his eyes, and made him look up: and he was restored, and saw every man clearly. And he sent him away to his house, saying, Neither go into the town, nor tell it to any in the town."
        }
      },
      {
        id: 25,
        img: '25.png',
        done: 100,
        title: {
          ro: "Vindecarea unui copil lunatic",
          en: "Healing of the lunatic child"
        },
        text: {
          ro: "Marcu 9:14-27: Când au ajuns la ucenici, au văzut mult norod împrejurul lor, şi pe cărturari întrebându-se cu ei. De îndată ce a văzut norodul pe Isus, s-a mirat şi a alergat la El să I se închine. El i-a întrebat: \"Despre ce vă întrebaţi cu ei?\" Şi un om din norod I-a răspuns: \"Învăţătorule, am adus la Tine pe fiul meu care este stăpânit de un duh mut. Oriunde îl apucă, îl trânteşte la pământ. Copilul face spumă la gură, scrâşneşte din dinţi şi rămâne ţeapăn. M-am rugat de ucenicii Tăi să scoată duhul, şi n-au putut.\" \"O, neam necredincios!\", le-a zis Isus. \"Până când voi fi cu voi? Până când vă voi suferi? Aduceţi-l la Mine.\" L-au adus la El. Şi, cum a văzut copilul pe Isus, duhul l-a scuturat cu putere; copilul a căzut la pământ şi se zvârcolea făcând spumă la gură. Isus a întrebat pe tatăl lui: \"Câtă vreme este de când îi vine aşa?\" \"Din copilărie\", a răspuns el. \"Şi de multe ori duhul l-a aruncat când în foc, când în apă, ca să-l omoare. Dar dacă poţi face ceva, fie-Ţi milă de noi şi ajută-ne.\" Isus a răspuns: \"Tu zici: \"Dacă poţi!\"… Toate lucrurile sunt cu putinţă celui ce crede!\" Îndată tatăl copilului a strigat cu lacrimi: \"Cred, Doamne! Ajută necredinţei mele!\" Când a văzut Isus că norodul vine în fuga mare spre El, a mustrat duhul necurat şi i-a zis: \"Duh mut şi surd, îţi poruncesc să ieşi afară din copilul acesta şi să nu mai intri în el.\" Şi duhul a ieşit, ţipând şi scuturându-l cu mare putere. Copilul a rămas ca mort, aşa că mulţi ziceau: \"A murit!\" Dar Isus l-a apucat de mână şi l-a ridicat. Şi el s-a sculat în picioare.",
          en: "Mark 9:14-27: And when he came to his disciples, he saw a great multitude about them, and the scribes questioning with them. And straightway all the people, when they beheld him, were greatly amazed, and running to him saluted him. And he asked the scribes, What question ye with them? And one of the multitude answered and said, Master, I have brought unto thee my son, which hath a dumb spirit; And wheresoever he taketh him, he teareth him: and he foameth, and gnasheth with his teeth, and pineth away: and I spake to thy disciples that they should cast him out; and they could not. He answereth him, and saith, O faithless generation, how long shall I be with you? how long shall I suffer you? bring him unto me. And they brought him unto him: and when he saw him, straightway the spirit tare him; and he fell on the ground, and wallowed foaming. And he asked his father, How long is it ago since this came unto him? And he said, Of a child. And ofttimes it hath cast him into the fire, and into the waters, to destroy him: but if thou canst do any thing, have compassion on us, and help us. Jesus said unto him, If thou canst believe, all things are possible to him that believeth. And straightway the father of the child cried out, and said with tears, Lord, I believe; help thou mine unbelief. When Jesus saw that the people came running together, he rebuked the foul spirit, saying unto him, Thou dumb and deaf spirit, I charge thee, come out of him, and enter no more into him. And the spirit cried, and rent him sore, and came out of him: and he was as one dead; insomuch that many said, He is dead. But Jesus took him by the hand, and lifted him up; and he arose."
        }
      },
      {
        id: 26,
        img: '26.png',
        done: 100,
        title: {
          ro: "Moneda din gura peștelui",
          en: "Coin in the fish's mouth"
        },
        text: {
          ro: "Matei 17:24-27: Când au ajuns în Capernaum, cei ce strângeau darea pentru Templu au venit la Petru şi i-au zis: \"Învăţătorul vostru nu plăteşte darea?\" \"Ba da\", a zis Petru. Şi, când a intrat în casă, Isus i-a luat înainte şi i-a zis: \"Ce crezi, Simone? Împăraţii pământului de la cine iau dări sau biruri? De la fiii lor sau de la străini?\" Petru I-a răspuns: \"De la străini.\" Şi Isus i-a zis: \"Aşadar, fiii sunt scutiţi. Dar, ca să nu-i facem să păcătuiască, du-te la mare, aruncă undiţa şi trage afară peştele care va veni întâi; deschide-i gura şi vei găsi în ea o rublă pe care ia-o şi dă-le-o lor, pentru Mine şi pentru tine.\"",
          en: "Matthew 17:24-27: And when they were come to Capernaum, they that received tribute money came to Peter, and said, Doth not your master pay tribute? He saith, Yes. And when he was come into the house, Jesus prevented him, saying, What thinkest thou, Simon? of whom do the kings of the earth take custom or tribute? of their own children, or of strangers? Peter saith unto him, Of strangers. Jesus saith unto him, Then are the children free. Notwithstanding, lest we should offend them, go thou to the sea, and cast an hook, and take up the fish that first cometh up; and when thou hast opened his mouth, thou shalt find a piece of money: that take, and give unto them for me and thee."
        }
      },
      {
        id: 27,
        img: '27.png',
        done: 100,
        title: {
          ro: "Vindecarea orbului din naștere",
          en: "Healing the man blind from birth"
        },
        text: {
          ro: "Ioan 9:1-14: Când trecea, Isus a văzut pe un orb din naştere. Ucenicii Lui L-au întrebat: \"Învăţătorule, cine a păcătuit: omul acesta sau părinţii lui, de s-a născut orb?\" Isus a răspuns: \"N-a păcătuit nici omul acesta nici părinţii lui; ci s-a născut aşa, ca să se arate în el lucrările lui Dumnezeu. Cât este ziuă, trebuie să lucrez lucrările Celui ce M-a trimis; vine noaptea, când nimeni nu mai poate să lucreze. Cât sunt în lume, sunt Lumina lumii.\" După ce a zis aceste vorbe, a scuipat pe pământ şi a făcut tină din scuipat. Apoi a uns ochii orbului cu tina aceasta şi i-a zis: \"Du-te de te spală în scăldătoarea Siloamului\" (care tălmăcit înseamnă: Trimis). El s-a dus, s-a spălat şi s-a întors văzând bine. Vecinii şi cei ce-l cunoscuseră mai înainte ca cerşetor, ziceau: \"Nu este acesta cel ce şedea şi cerşea?\" Unii ziceau: \"El este.\" Alţii ziceau: \"Nu; dar seamănă cu el.\" Şi el însuşi zicea: \"Eu sunt.\" Deci i-au zis: \"Cum ţi s-au deschis ochii?\" El a răspuns: \"Omul acela, căruia I se zice Isus, a făcut tină, mi-a uns ochii şi mi-a zis: \"Du-te la scăldătoarea Siloamului şi spală-te.\" M-am dus, m-am spălat şi mi-am căpătat vederea.\" \"Unde este Omul acela?\", l-au întrebat ei. El a răspuns: \"Nu ştiu.\" Au adus la farisei pe cel ce fusese orb mai înainte. Şi era o zi de Sabat când făcuse Isus tină şi-i deschisese ochii.",
          en: "John 9:1-14: And as Jesus passed by, he saw a man which was blind from his birth. And his disciples asked him, saying, Master, who did sin, this man, or his parents, that he was born blind? Jesus answered, Neither hath this man sinned, nor his parents: but that the works of God should be made manifest in him. I must work the works of him that sent me, while it is day: the night cometh, when no man can work. As long as I am in the world, I am the light of the world. When he had thus spoken, he spat on the ground, and made clay of the spittle, and he anointed the eyes of the blind man with the clay, And said unto him, Go, wash in the pool of Siloam, (which is by interpretation, Sent.) He went his way therefore, and washed, and came seeing. The neighbours therefore, and they which before had seen him that he was blind, said, Is not this he that sat and begged? Some said, This is he: others said, He is like him: but he said, I am he. Therefore said they unto him, How were thine eyes opened? He answered and said, A man that is called Jesus made clay, and anointed mine eyes, and said unto me, Go to the pool of Siloam, and wash: and I went and washed, and I received sight. Then said they unto him, Where is he? He said, I know not.  They brought to the Pharisees him that aforetime was blind. And it was the sabbath day when Jesus made the clay, and opened his eyes."
        }
      },
      {
        id: 28,
        img: '28.png',
        done: 100,
        title: {
          ro: "Vindecarea femeii gârbove",
          en: "Healing the woman with a bent back"
        },
        text: {
          ro: "Luca 13:10-13: Isus învăţa pe norod într-o sinagogă în ziua Sabatului. Şi acolo era o femeie stăpânită de optsprezece ani de un duh de neputinţă; era gârbovă şi nu putea nicidecum să-şi îndrepte spatele. Când a văzut-o Isus, a chemat-o şi i-a zis: \"Femeie, eşti dezlegată de neputinţa ta.\" Şi-a întins mâinile peste ea: îndată s-a îndreptat şi slăvea pe Dumnezeu.",
          en: "Luke 13:10-13: And he was teaching in one of the synagogues on the sabbath. And, behold, there was a woman which had a spirit of infirmity eighteen years, and was bowed together, and could in no wise lift up herself. And when Jesus saw her, he called her to him, and said unto her, Woman, thou art loosed from thine infirmity. And he laid his hands on her: and immediately she was made straight, and glorified God."
        }
      },
      {
        id: 29,
        img: '29.png',
        done: 100,
        title: {
          ro: "Vindecarea unui bolnav de dropică",
          en: "Healing a man with dropsy"
        },
        text: {
          ro: "Luca 14:1-4: Într-o zi de Sabat, Isus a intrat în casa unuia din fruntaşii fariseilor, ca să prânzească. Fariseii Îl pândeau de aproape. Şi înaintea Lui era un om bolnav de dropică. Isus a luat cuvântul şi a zis învăţătorilor Legii şi fariseilor: \"Oare este îngăduit a vindeca în ziua Sabatului sau nu?\" Ei tăceau. Atunci Isus a luat de mână pe omul acela, l-a vindecat şi i-a dat drumul.",
          en: "Luke 14:1-4: And it came to pass, as he went into the house of one of the chief Pharisees to eat bread on the sabbath day, that they watched him. And, behold, there was a certain man before him which had the dropsy. And Jesus answering spake unto the lawyers and Pharisees, saying, Is it lawful to heal on the sabbath day? And they held their peace. And he took him, and healed him, and let him go;"
        }
      },
      {
        id: 30,
        img: '30.png',
        done: 100,
        title: {
          ro: "Vindecarea celor zece leproși",
          en: "Cleansing ten lepers"
        },
        text: {
          ro: "Luca 17:11-19: Isus mergea spre Ierusalim şi a trecut printre Samaria şi Galileea. Pe când intra într-un sat, L-au întâmpinat zece leproşi. Ei au stat departe, şi-au ridicat glasul şi au zis: \"Isuse, Învăţătorule, ai milă de noi!\" Când i-a văzut Isus, le-a zis: \"Duceţi-vă şi arătaţi-vă preoţilor!\" Şi pe când se duceau, au fost curăţaţi. Unul din ei, când s-a văzut vindecat, s-a întors, slăvind pe Dumnezeu cu glas tare. S-a aruncat cu faţa la pământ la picioarele lui Isus şi I-a mulţumit. Era samaritean. Isus a luat cuvântul şi a zis: \"Oare n-au fost curăţaţi toţi cei zece? Dar ceilalţi nouă unde sunt? Nu s-a găsit decât străinul acesta să se întoarcă şi să dea slavă lui Dumnezeu?\" Apoi i-a zis: \"Scoală-te şi pleacă; credinţa ta te-a mântuit.\"",
          en: "Luke 17:11-19: And it came to pass, as he went to Jerusalem, that he passed through the midst of Samaria and Galilee. And as he entered into a certain village, there met him ten men that were lepers, which stood afar off: And they lifted up their voices, and said, Jesus, Master, have mercy on us. And when he saw them, he said unto them, Go shew yourselves unto the priests. And it came to pass, that, as they went, they were cleansed. And one of them, when he saw that he was healed, turned back, and with a loud voice glorified God, And fell down on his face at his feet, giving him thanks: and he was a Samaritan. And Jesus answering said, Were there not ten cleansed? but where are the nine? There are not found that returned to give glory to God, save this stranger. And he said unto him, Arise, go thy way: thy faith hath made thee whole."
        }
      },
      {
        id: 31,
        img: '31.png',
        done: 100,
        title: {
          ro: "Învierea lui Lazar",
          en: "The resurrection of Lazarus"
        },
        text: {
          ro: "Ioan 11:35-46: Isus plângea. Atunci iudeii au zis: \"Iată cât îl iubea de mult!\" Şi unii din ei au zis: \"El, care a deschis ochii orbului, nu putea face ca nici omul acesta să nu moară?\" Isus S-a înfiorat din nou în Sine şi S-a dus la mormânt. Mormântul era o peşteră la intrarea căreia era aşezată o piatră. \"Daţi piatra la o parte\", a zis Isus. Marta, sora mortului, I-a zis: \"Doamne, miroase greu, căci este mort de patru zile.\" Isus i-a zis: \"Nu ţi-am spus că, dacă vei crede, vei vedea slava lui Dumnezeu?\" Au luat, dar, piatra din locul unde zăcea mortul. Şi Isus a ridicat ochii în sus şi a zis: \"Tată, Îţi mulţumesc că M-ai ascultat. Ştiam că totdeauna Mă asculţi; dar vorbesc astfel pentru norodul care stă împrejur, ca să creadă că Tu M-ai trimis.\" După ce a zis aceste vorbe, a strigat cu glas tare: \"Lazăre, vino afară!\" Şi mortul a ieşit cu mâinile şi picioarele legate cu fâşii de pânză şi cu faţa înfăşurată cu un ştergar. Isus le-a zis: \"Dezlegaţi-l şi lăsaţi-l să meargă.\" Mulţi din iudeii care veniseră la Maria, când au văzut ce a făcut Isus, au crezut în El. Dar unii din ei s-au dus la farisei şi le-au spus ce făcuse Isus.",
          en: "John 11:35-46: 35 Jesus wept. Then said the Jews, Behold how he loved him! And some of them said, Could not this man, which opened the eyes of the blind, have caused that even this man should not have died? Jesus therefore again groaning in himself cometh to the grave. It was a cave, and a stone lay upon it. Jesus said, Take ye away the stone. Martha, the sister of him that was dead, saith unto him, Lord, by this time he stinketh: for he hath been dead four days. Jesus saith unto her, Said I not unto thee, that, if thou wouldest believe, thou shouldest see the glory of God? Then they took away the stone from the place where the dead was laid. And Jesus lifted up his eyes, and said, Father, I thank thee that thou hast heard me. And I knew that thou hearest me always: but because of the people which stand by I said it, that they may believe that thou hast sent me. And when he thus had spoken, he cried with a loud voice, Lazarus, come forth. And he that was dead came forth, bound hand and foot with graveclothes: and his face was bound about with a napkin. Jesus saith unto them, Loose him, and let him go. Then many of the Jews which came to Mary, and had seen the things which Jesus did, believed on him. But some of them went their ways to the Pharisees, and told them what things Jesus had done."
        }
      },
      {
        id: 32,
        img: '32.png',
        done: 100,
        title: {
          ro: "Vindecarea celor doi orbi cerșetori",
          en: "Two blind beggars restored to sight"
        },
        text: {
          ro: "Marcu 10:46-52: Au ajuns la Ierihon. Şi pe când ieşea Isus din Ierihon cu ucenicii Săi şi cu o mare mulţime de oameni, fiul lui Timeu, Bartimeu, un cerşetor orb, şedea jos lângă drum şi cerea de milă. El a auzit că trece Isus din Nazaret şi a început să strige: \"Isuse, Fiul lui David, ai milă de mine!\" Mulţi îl certau să tacă; dar el şi mai tare striga: \"Fiul lui David, ai milă de mine!\" Isus S-a oprit şi a zis: \"Chemaţi-l!\" Au chemat pe orb şi i-au zis: \"Îndrăzneşte, scoală-te, căci te cheamă.\" Orbul şi-a aruncat haina; a sărit şi a venit la Isus. Isus a luat cuvântul şi i-a zis: \"Ce vrei să-ţi fac?\" \"Rabuni\", I-a răspuns orbul, \"să capăt vederea.\" Şi Isus i-a zis: \"Du-te, credinţa ta te-a mântuit.\" Îndată orbul şi-a căpătat vederea şi a mers pe drum după Isus.",
          en: "Mark 10:46-52: 46 And they came to Jericho: and as he went out of Jericho with his disciples and a great number of people, blind Bartimaeus, the son of Timaeus, sat by the highway side begging. And when he heard that it was Jesus of Nazareth, he began to cry out, and say, Jesus, thou Son of David, have mercy on me. And many charged him that he should hold his peace: but he cried the more a great deal, Thou Son of David, have mercy on me. And Jesus stood still, and commanded him to be called. And they call the blind man, saying unto him, Be of good comfort, rise; he calleth thee. And he, casting away his garment, rose, and came to Jesus. And Jesus answered and said unto him, What wilt thou that I should do unto thee? The blind man said unto him, Lord, that I might receive my sight. And Jesus said unto him, Go thy way; thy faith hath made thee whole. And immediately he received his sight, and followed Jesus in the way."
        }
      },
      {
        id: 33,
        img: '33.png',
        done: 100,
        title: {
          ro: "Blestemarea smochinului",
          en: "Jesus curses the fig tree with no fruit"
        },
        text: {
          ro: "Matei 21:18-22: Dimineaţa, pe când Se întorcea în cetate, I-a fost foame. A văzut un smochin lângă drum şi S-a apropiat de el; dar n-a găsit decât frunze, şi i-a zis: \"De acum încolo, în veac să nu mai dea rod din tine!\" Şi îndată smochinul s-a uscat. Ucenicii, când au văzut acest lucru, s-au mirat şi au zis: \"Cum de s-a uscat smochinul acesta într-o clipă?\" Drept răspuns, Isus le-a zis: \"Adevărat vă spun că, dacă veţi avea credinţă şi nu vă veţi îndoi, veţi face nu numai ce s-a făcut smochinului acestuia; ci chiar dacă aţi zice muntelui acestuia: \"Ridică-te de aici şi aruncă-te în mare\", se va face. Tot ce veţi cere cu credinţă, prin rugăciune, veţi primi.\"",
          en: "Matthew 21:18-22: Now in the morning as he returned into the city, he hungered. And when he saw a fig tree in the way, he came to it, and found nothing thereon, but leaves only, and said unto it, Let no fruit grow on thee henceforward for ever. And presently the fig tree withered away. And when the disciples saw it, they marvelled, saying, How soon is the fig tree withered away! Jesus answered and said unto them, Verily I say unto you, If ye have faith, and doubt not, ye shall not only do this which is done to the fig tree, but also if ye shall say unto this mountain, Be thou removed, and be thou cast into the sea; it shall be done."
        }
      },
      {
        id: 34,
        img: '34.png',
        done: 100,
        title: {
          ro: "Vindecarea urechii lui Malhu",
          en: "Restoring the ear of Malhu"
        },
        text: {
          ro: "Luca 22:47-51: Pe când grăia El încă, iată că a venit o gloată. Şi cel ce se chema Iuda, unul din cei doisprezece, mergea în fruntea lor. El s-a apropiat de Isus, ca să-L sărute. Şi Isus i-a zis: \"Iudo, cu o sărutare vinzi tu pe Fiul omului?\" Cei ce erau cu Isus, au văzut ce avea să se întâmple şi au zis: \"Doamne, să lovim cu sabia?\" Şi unul din ei a lovit pe robul marelui preot şi i-a tăiat urechea dreaptă. Dar Isus a luat cuvântul şi a zis: \"Lăsaţi-i! Până aici!\" Şi S-a atins de urechea omului aceluia şi l-a vindecat.",
          en: "Luke 22:47-51: And while he yet spake, behold a multitude, and he that was called Judas, one of the twelve, went before them, and drew near unto Jesus to kiss him. But Jesus said unto him, Judas, betrayest thou the Son of man with a kiss? When they which were about him saw what would follow, they said unto him, Lord, shall we smite with the sword? And one of them smote the servant of the high priest, and cut off his right ear. And Jesus answered and said, Suffer ye thus far. And he touched his ear, and healed him."
        }
      },
      {
        id: 35,
        img: '35.png',
        done: 100,
        title: {
          ro: "A doua pescuire minunată",
          en: "Second miraculous catch of fish"
        },
        text: {
          ro: "Ioan 21:1-13: După aceea Isus S-a mai arătat ucenicilor Săi la Marea Tiberiadei. Iată cum S-a arătat: Simon Petru, Toma, zis Geamăn, Natanael din Cana Galileii, fiii lui Zebedei şi alţi doi din ucenicii lui Isus erau împreună. Simon Petru le-a zis: \"Mă duc să prind peşte.\" \"Mergem şi noi cu tine\", i-au zis ei. Au ieşit şi au intrat într-o corabie; şi n-au prins nimic în noaptea aceea. Dimineaţa, Isus stătea pe ţărm; dar ucenicii nu ştiau că este Isus. \"Copii\", le-a zis Isus, \"aveţi ceva de mâncare?\" Ei I-au răspuns: \"Nu\". El le-a zis: \"Aruncaţi mreaja în partea dreaptă a corăbiei şi veţi găsi.\" Au aruncat-o deci şi n-o mai puteau trage de mulţimea peştilor. Atunci ucenicul pe care-l iubea Isus a zis lui Petru: \"Este Domnul!\" Când a auzit Simon Petru că este Domnul, şi-a pus haina pe el şi s-a încins, căci era dezbrăcat, şi s-a aruncat în mare. Ceilalţi ucenici au venit cu corăbioara, trăgând mreaja cu peşti, pentru că nu erau departe de ţărm decât cam la două sute de coţi. Când s-au coborât pe ţărm, au văzut acolo jăratic de cărbuni, peşte pus deasupra şi pâine. Isus le-a zis: \"Aduceţi din peştii pe care i-aţi prins acum.\" Simon Petru s-a suit în corăbioară şi a tras mreaja la ţărm, plină cu o sută cincizeci şi trei de peşti mari; şi, măcar că erau atâţia, nu s-a rupt mreaja. \"Veniţi de prânziţi\", le-a zis Isus. Şi niciunul din ucenici nu cuteza să-L întrebe: \"Cine eşti?\", căci ştiau că este Domnul. Isus S-a apropiat, a luat pâinea şi le-a dat; tot aşa a făcut şi cu peştele.",
          en: "John 21:1-13: After these things Jesus shewed himself again to the disciples at the sea of Tiberias; and on this wise shewed he himself. There were together Simon Peter, and Thomas called Didymus, and Nathanael of Cana in Galilee, and the sons of Zebedee, and two other of his disciples. Simon Peter saith unto them, I go a fishing. They say unto him, We also go with thee. They went forth, and entered into a ship immediately; and that night they caught nothing. But when the morning was now come, Jesus stood on the shore: but the disciples knew not that it was Jesus. Then Jesus saith unto them, Children, have ye any meat? They answered him, No. And he said unto them, Cast the net on the right side of the ship, and ye shall find. They cast therefore, and now they were not able to draw it for the multitude of fishes. Therefore that disciple whom Jesus loved saith unto Peter, It is the Lord. Now when Simon Peter heard that it was the Lord, he girt his fisher's coat unto him, (for he was naked,) and did cast himself into the sea. And the other disciples came in a little ship; (for they were not far from land, but as it were two hundred cubits,) dragging the net with fishes. As soon then as they were come to land, they saw a fire of coals there, and fish laid thereon, and bread. Jesus saith unto them, Bring of the fish which ye have now caught. Simon Peter went up, and drew the net to land full of great fishes, an hundred and fifty and three: and for all there were so many, yet was not the net broken. Jesus saith unto them, Come and dine. And none of the disciples durst ask him, Who art thou? knowing that it was the Lord. Jesus then cometh, and taketh bread, and giveth them, and fish likewise."
        }
      }
    ];
  });

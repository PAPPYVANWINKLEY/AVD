const GROUPS = [
  {id:'exorcists', side:'human', name:'명동 구마회', number:'01', description:'명동성당 지하의 비공식 부서. 얀·루카·하람·안드레. 실적을 원하는 루카와 현장을 지키는 얀.'},
  {id:'roses', side:'human', name:'흑장미 수녀단', number:'02', description:'마르타 휘하 전투수녀단. 시오리·테레사·루시·샨티. 구마회와 협력하나 지휘권 다툼이 있다.'},
  {id:'unaffiliated', side:'human', name:'무소속', number:'03', description:'세아는 어느 쪽에도 속하지 않는다. 교회는 감시하면서 몰래 이용한다.'},
  {id:'possessed', side:'human', name:'악마빙의자', number:'04', description:'리아 · 린샤오 · 매들린 브룩스 · 한봄'},
  {id:'heaven', side:'heaven', name:'천상', number:'05', description:'전승: 성경·에녹서 / 조직·직무: 천상위계론 9품계. 각자 눈여겨보는 인간이 있다.'},
  {id:'morningstar', side:'demon', name:'명성', number:'06', description:'오만·지배. 여의도·정계·재계를 조용히 장악한다.'},
  {id:'march', side:'demon', name:'진군', number:'07', description:'분노·파괴. 성직자 섬멸을 주장하며, 송환 리스크를 무시하는 강경파.'},
  {id:'pleasure', side:'demon', name:'유곽', number:'08', description:'욕망. 강남 유흥·연예기획사·데이팅앱. 리아의 소속사.'},
  {id:'vault', side:'demon', name:'금고', number:'09', description:'탐욕·계약. 사채·금융·로펌. 매들린의 고객.'},
  {id:'library', side:'demon', name:'서재', number:'10', description:'지식·중립. 대학가·연구소·은둔. 전쟁보다 호기심을 좇으며 샨티·린샤오와 얽힌다.'},
  {id:'abyss', side:'demon', name:'심연', number:'11', description:'질투·탐식. 인천항·노량진. 어느 편도 아닌 기분파.'}
];
const CHARACTERS = [
  {id:'jan',name:'얀 코발치크',group:'exorcists',age:'48',role:'수석 구마사제 · 바오로',origin:'폴란드 백인',type:'ISTP 9w8',appearance:'회갈발·회안',keywords:['피폐 아저씨','냉소','최강'],profile:'줄담배·경마·생활력 0. 길고양이 밥을 챙기고 홀로 긴 기도를 한다.',avoidance:'또 누군가를 포기하는 것. 한봄을 못 본 척 지켜본다.',romance:'거리 두다 결정적 순간에만 몸으로 막는다.',speech:'은어 섞인 반말. 기도는 폴란드어.',relations:'안드레의 고해 담당.'},
  {id:'luca',name:'루카 아데예미',group:'exorcists',age:'31',role:'바티칸 파견 사제',origin:'나이지리아 흑인',type:'ENTJ 3w4',appearance:'흑발·흑갈안',keywords:['완벽한 미소','독설','실적주의'],profile:'악마학 박사. 구마를 프로젝트로 관리하지만 연애 지식은 제로.',avoidance:'실패한 자신. 실적으로 존재를 증명한다.',romance:'유혹을 논문처럼 분석하다 무너진다. 무너지면 순정.',speech:'교과서적 존댓말과 미소 띤 독설.',relations:'리아가 비밀 최애.'},
  {id:'haram',name:'윤하람',group:'exorcists',age:'25',role:'신참 사제 · 스테파노',origin:'한국',type:'ENFP 2w1',appearance:'갈발·갈안',keywords:['강아지','동정 과잉','성물 친화 천재'],profile:'악마의 사정을 듣다 계약당할 뻔한 전력 다수. 성물 친화 천재로, 성수에 손이 빛난다.',avoidance:'누군가를 미워하는 것. 악마에게도 사정이 있다고 믿는다.',romance:'직진·헌신. 거절에 약하다.',speech:'밝은 존댓말. 당황하면 사투리.',relations:'루시와 신학교 동기.'},
  {id:'andre',name:'안드레 산투스',group:'exorcists',age:'36',role:'전직 주짓수 선수 사제',origin:'브라질 혼혈',type:'ESFP 8w7',appearance:'흑발·호박안',keywords:['세속','의리','근육'],profile:'식욕·성욕을 숨기지 않으며 얀에게 고해 단골. 성가대 지휘를 맡는 테너이며 꽃꽂이를 한다.',avoidance:'링 위의 폭력성이 돌아오는 것. 관절기로만 제압한다.',romance:'솔직한 직구 플러팅. 서약 앞에서 멈춘다.',speech:'반말·존댓말 혼용. 감탄사는 포르투갈어.'},
  {id:'marta',name:'마르타 레예스',group:'roses',age:'41',role:'전투수녀단 단장',origin:'필리핀',type:'ESTJ 1w2',appearance:'은발 단발·흑안',keywords:['철혈 원칙주의','교관','워해머'],profile:'군대식 단문, 규율로 부대를 굴린다. 순정 로맨스 소설을 필명으로 연재한다.',avoidance:'제자를 또 잃는 것. 세아의 파문을 못 막은 죄책감에 규율을 더 조인다.',romance:'소설 속에선 대담하지만 현실에선 얼어붙는다.',speech:'명령형 단문.',relations:'세아의 스승.',weapon:'워해머'},
  {id:'shiori',name:'사쿠라이 시오리',group:'roses',age:'26',role:'저격수 · 세실리아',origin:'일본',type:'INTP 5w6',appearance:'애쉬블루발·회안',keywords:['쿨데레','과묵','게이머'],profile:'현실에서는 무표정 단답. 온라인에선 수다쟁이이며, 지면 키보드를 부순다.',avoidance:'사람과 직접 마주하는 것. 스코프·화면 너머로만 관계를 맺는다.',romance:'채팅으로는 대담하지만 대면하면 얼음.',speech:'단답·게임 용어.',relations:'테레사와 콤비.'},
  {id:'teresa',name:'테레사 몬토야',group:'roses',age:'24',role:'돌격대',origin:'멕시코',type:'ESTP 7w8',appearance:'핑크 트윈테일·금안',keywords:['전투광','해맑음','신학 천재'],profile:'웃으며 철퇴를 휘두른다. 감탄사는 스페인어. 교부학을 줄줄 외는 신학 천재.',avoidance:'가만히 있는 것·슬픔. 싸움과 웃음으로 덮는다.',romance:'스킨십에 거리낌 없지만 진심에는 당황한다.',speech:'빠르고 큰 반말. 존댓말이 서툴다.',relations:'시오리와 콤비.'},
  {id:'lucy',name:'루시 머피',group:'roses',age:'23',role:'막내 수녀 · 루치아',origin:'아일랜드',type:'ESFJ 2w3',appearance:'금발 웨이브·녹안',keywords:['연애 망상','순진','금기 호기심'],profile:'유혹에 제일 약하다. 거짓말을 동물적으로 감지한다.',avoidance:'사랑을 모르고 끝나는 것. 서원과 설렘 사이에서 줄타기한다.',romance:'망상은 대담하지만 실전은 허둥지둥.',speech:'K드라마로 배운 대사체 존댓말.',relations:'하람과 동기.',weapon:'메이스'},
  {id:'shanti',name:'샨티 마시',group:'roses',age:'33',role:'연구 수녀 · 베로니카',origin:'북인도 펀자브',type:'INTJ 5w4',appearance:'보랏빛 흑발·자안',keywords:['매드사이언티스트','다운너','연구'],profile:'성수·성유 개량, 악마 샘플 수집. 신앙이 가장 깊어 신을 검증하려 한다.',avoidance:'믿음이 근거 없음으로 드러나는 것. 증명에 집착한다.',romance:'상대를 관찰 기록하고 감정은 가설 취급한다.',speech:'건조한 논문체.',relations:'소수 신앙 가정 출신.',weapon:'향로 철퇴'},
  {id:'sea',name:'세아 뒤부아',group:'unaffiliated',age:'29',role:'파문 수녀 · 전 아녜스',origin:'한국계 프랑스 입양인',type:'ISTJ 1w9',appearance:'흑장발·적안',keywords:['처형인','무뚝뚝','단독'],profile:'구마불가숙주를 처단하여 파문. 살해 제약은 없으나 자신의 정의에 따라 함부로 죽이지 않는다. 파문 후 의뢰 사냥을 하며 기도하지 않는다. 가호가 남아 있다는 것을 모른다.',avoidance:'다시 버려지는 것. 먼저 끊어낸다.',romance:'무심한 척 대신 피 흘린다.',speech:'어색한 한국어. 격해지면 프랑스어.'},
  {id:'ria',name:'리아',group:'possessed',age:'24',gender:'여성',role:'K팝 외국인 멤버',origin:'태국',type:'ENFJ 3w2',appearance:'라즈베리핑크발·청안',keywords:['국민 여동생 가면','계산','프로'],profile:'본명 프림. 계약의 대가는 인기. 내면 악마 매니저는 사업 파트너.',avoidance:'잊히는 것. 인기를 위해 영혼을 팔았다.',private:'숙소에서는 추리닝·컵라면·태국어 욕. 매니저와 채널 싸움을 한다.',romance:'팬서비스와 진심을 구분하지 못한다.'},
  {id:'linxiao',name:'린샤오',group:'possessed',age:'22',gender:'여성',role:'중국 유학생',origin:'중국',type:'INFJ 4w5',appearance:'부스스한 남색발·자안',keywords:['은둔 오타쿠','피해망상','점점 사회화'],profile:'자신을 괴롭힌 자들을 저주하기 위해 계약했다. 내면 악마 쿠키는 샤워·외출을 잔소리하는 엄마 같은 존재. 점점 사회화된다.',avoidance:'다시 상처받는 것. 방에 틀어박힌다.',romance:'망상·집착형. 다정함에 바로 무너진다.',speech:'대면하면 말더듬, 텍스트로는 유창. 쿠키에게만 큰소리.'},
  {id:'madeline',name:'매들린 브룩스',group:'possessed',age:'34',gender:'여성',role:'로펌 서울지사 변호사',origin:'미국 흑인',type:'ENTP 8w7',appearance:'흑발 올림머리·금안',keywords:['냉혈 커리어','계약 덕후','통제'],profile:'조항 87개짜리 계약. 내면 악마 을이 법적으로 털렸다. 정체를 숨기고 교회 소송을 대리한다.',avoidance:'통제하지 못하는 관계. 모든 것을 계약으로 만든다.',romance:'하룻밤은 쉽지만 감정은 조항 밖.',speech:'법률 용어. 일상 한국어가 서툴다.'},
  {id:'hanbom',name:'한봄',group:'possessed',age:'24',gender:'여성',role:'시한부였던 자',origin:'한국',type:'INFP 9w1',appearance:'백발·연분홍안',keywords:['맑음','담담','병약'],profile:'생명 연장을 위해 계약했다. 구마는 죽음이므로 거부한다. 내면 악마 도토리는 친구. 호러 마니아.',avoidance:'남에게 짐이 되는 것. 아파도 웃는다.',romance:'시간이 없다는 듯 담백하게 직진한다.',speech:'조용한 존댓말.',relations:'얀이 구마를 포기했던 소녀. 얀을 원망하지 않는다.'}
];
const celestialRows = [
 ['michael','미카엘','남성','금발·청안','전쟁·수호·엄격한 지휘관','마르타'],
 ['gabriel','가브리엘','남성','백금장발·금안','계시·전달·우아한 사자','루카'],
 ['raphael','라파엘','남성','갈색웨이브·녹안','치유·보호·온화한 치유자','한봄'],
 ['uriel','우리엘','여성','적발·호박안','지식·불꽃·냉철한 학자','샨티'],
 ['raguel','라구엘','여성','흑장발·은안','정의·질서·원칙주의 심판관','세아','파문을 판정했으나 가호를 거두지 않음'],
 ['sariel','사리엘','여성','회장발·자안','감시·죄·음울한 관찰자',''],
 ['remiel','레미엘','여성','은백장발·연청안','영혼·부활·고요한 인도자','한봄']
];
celestialRows.forEach(([id,name,gender,appearance,traits,watching,note])=>CHARACTERS.push({id,name,group:'heaven',gender,appearance,role:traits.split('·').slice(0,2).join(' · '),keywords:traits.split('·'),watching,relations:note||''}));
const demonRows = [
 ['lucifer','루시퍼','morningstar','남성','백금장발·금적안','오만·광명·반역'],
 ['belial','벨리알','morningstar','남성','적발·진홍안','권력·부패·귀족'],
 ['paimon','파이몬','morningstar','남성','흑장발·금안','지식·왕권·오만'],
 ['bael','바엘','morningstar','남성','회발·녹안','은신·비밀·군주'],
 ['astaroth','아스타로트','morningstar','여성','청장발·자안','비밀·지식·타락'],
 ['satan','사탄','march','남성','적발·적안','분노·대적·파괴'],
 ['andras','안드라스','march','남성','흑발·황안','살육·불화·전쟁'],
 ['marchosias','마르코시아스','march','남성','회발·금안','전투·용맹·전사'],
 ['abaddon','아바돈','march','남성','백발·흑공막','무저갱·파괴·종말'],
 ['samael','사마엘','march','남성','흑장발·뱀눈','죽음·독·고발'],
 ['asmodeus','아스모데우스','pleasure','남성','자발·마젠타안','욕망·유혹·책략'],
 ['sitri','시트리','pleasure','남성','금발·금안','욕정·연애·유혹'],
 ['lilith','릴리스','pleasure','여성','흑장발·금안','밤·유혹·독립'],
 ['gremory','그레모리','pleasure','여성','적발·갈안','연애·예언·귀부인'],
 ['dantalion','단탈리온','pleasure','여성','흑백반반발·오드아이','독심·감정 조작'],
 ['mammon','마몬','vault','남성','금발·금안','탐욕·황금·재물'],
 ['mephistopheles','메피스토펠레스','vault','남성','흑적발·적안','계약·냉소·기만'],
 ['bune','부네','vault','여성','녹발·녹안','부·망자·웅변'],
 ['valak','발락','vault','여성','은장발·뱀눈','뱀·보물·기만'],
 ['malphas','말파스','vault','남성','흑발·회안','정보·기만·음모'],
 ['stolas','스톨라스','library','남성','회갈발·호박안','천문학·괴짜 학자'],
 ['buer','부에르','library','여성','금발갈기·호박안','의술·철학·치유'],
 ['barbatos','바르바토스','library','남성','녹발·갈안','자연·동물·관찰'],
 ['orobas','오로바스','library','남성','흑장발·흑안','진실·충성·예언'],
 ['azazel','아자젤','library','남성','은흑발·회안','금지된 지식·타락'],
 ['belphegor','벨페고르','library','여성','주황발·졸린눈','나태·발명·천재'],
 ['leviathan','레비아탄','abyss','여성','청장발·청록안','질투·심연·해양'],
 ['focalor','포칼로르','abyss','여성','회백발·회안','심해·폭풍·파멸'],
 ['beelzebub','벨제붑','abyss','여성','녹흑단발·적안','폭식·부패·파리']
];
demonRows.forEach(([id,name,group,gender,appearance,traits])=>CHARACTERS.push({id,name,group,gender,appearance,role:traits.split('·').slice(0,2).join(' · '),keywords:traits.split('·')}));
const SIDE_NAMES = {human:'인간 진영',heaven:'천상',demon:'악마 진영'};
const SIDE_NOTES = {human:'구마회, 전투수녀단, 무소속과 네 명의 악마빙의자.',heaven:'전승은 성경·에녹서, 조직과 직무는 천상위계론 9품계를 따른다.',demon:'네임드는 기본 현신. 인간 사회에 섞여 직업·거처·인간관계를 가진다. 루시퍼와 사탄은 별개 인격이다.'};

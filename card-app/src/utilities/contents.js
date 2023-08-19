import { createStore } from "redux";

// 카드 개별 항목에 대한 내용을 담은 배열
// detail: 상세 페이지에 담고 싶은 내용을 객체 리터럴로 표현한 키

const contents = [
  {
    path: "/wind",
    imagePath: "/img/wind.jpg",
    title: "바람",
    detail: {
      subCards: [
        {
          path: "/wind/jin", // 서브카드1의 경로
          imagePath: "/img/character/wind/jin.jpg",
          title: "진",
          detailText: {
            type: "한손검",
            world: "몬드",
            imagePath: "/img/character/wind/jin.jpg",
            name: "민들레 기사 · 진",
            sub: "그녀는 언제나 자신이 아직 멀었다고 생각한다. 최종 승리를 거머쥐기 전까지는",
            description:
              "별도의 원소 반응 없이 적의 캐릭터를 강제로 다음 캐릭터로 넘길 수 있는 원소전투 스킬을 통해 적의 운영을 방해하고, 무난한 수준의 자체 딜링 능력과 원소폭발의 힐을 통해 원본 캐릭터처럼 하이브리드로 활용할 수 있다. 설탕이 이전 캐릭터로 교체시킨다면 진은 다음 캐릭터로 교체시킨다는 차이점이 있다.[72] \n   \n  특성상 확산 반응을 쓰지 않으면 설탕과 마찬가지로 딜 고점이 아쉬운 캐릭터가 되기 때문에 원소 부여를 잘 해줄 수 있는 캐릭터와의 조합이 필수적이다. 확산시킨 뒤에는 원소가 지워지기 때문에, 다시 원소를 발라줄 수 있는 캐릭터(행추, 향릉, 피슬) 등이 어울린다. 현재 시점에서 바람 법구 캐릭터인 설탕에 비해 일반 공격으로 바람 부여가 안 된다는 단점 때문에 단독으로 들어가는 경우는 잘 없고, 설탕과 타 원소 캐릭터를 넣어 확산 광역딜에 유지력까지 챙긴 덱에서 사용된다. 바람 공명을 통한 빠른 교체를 통해 적의 출전 캐릭터를 내 입맛대로 움직일 수 있는 방식. 힐 능력도 나쁘지 않은 수준이지만 그것만 보고 채용하기에는 좀 아쉽기에, 여러모로 원본 캐릭터의 장단점을 답습하는 느낌의 캐릭터 카드이다. \n   \n  민들레 영역이 소환물 취급이기 때문에 호두에 맞으면 너무 쉽게 카운터 당할 수 있다는 점이 치명적이다.",
          },
        },
        {
          path: "/wind/benti", // 서브카드1의 경로
          imagePath: "/img/character/wind/benti.jpg",
          title: "벤티",
          detailText: {
            type: "활",
            world: "몬드",
            imagePath: "/img/character/wind/benti.jpg",
            name: "바람의 시인 · 벤티",
            sub: "「사계절이 지나도 서풍은 절대 그치지 않아」 \n  「뭐, 당연하게도 이 노래의 주역은 그들이 아니라 나야」 \n  「음유시인이 없다면 누가 이걸 노래하겠어?」",
            description:
              "3.7 업데이트로 추가된 캐릭터 카드. 원소 스킬을 사용시 이벤트 카드인 근무 교대 시간을 2회 사용할 수 있으며[75], 원소 폭발로 소환물을 소환해서 턴 종료시에 상대를 타격하면 강제로 자신이 마주보는 캐릭터로 끌려오도록 하는 하드 CC기를 보유하고 있다. 원소 폭발로 끌려오는 효과는 벤티가 쓰러져도 무관하게 앞으로 끌려오게 된다. \n   \n  전용 장비를 착용하면 근무 교대 시간에 더해서 북극 훈제 닭을 추가로 부여한다. \n   \n  첫 턴에 바람 공명과 벤티의 전용 장비를 모두 발동했을 때, 상대하는 입장에서는 황당한 초동이 가능한데, 아무 캐릭터가 원소를 묻힘 -> 바람 공명 -> 벤티가 전용 장비를 착용하여 확산 -> 다시 원래 캐릭터로 평타를 치는 것이 가능하다. 궁 게이지 요구 캐릭터라면 단순히 그냥 2번 때리는 것과 동일하게 게이지를 풀로 채웠는데 상대는 대기 캐릭터까지 피해를 입은 데다가 벤티도 궁 게이지를 1개 채웠고 교대 주사위 감소 -1까지 남았으니 다음 턴에 압도적인 리턴을 챙길 수 있는 셈. \n   \n  약점으로는 역시나 단기 폭딜 덱이다. 벤티가 궁을 쓰기 전에 쓰러지면 플랜이 다소 어그러질 수 있다.",
          },
        },
        {
          path: "/wind/kazuha", // 서브카드1의 경로
          imagePath: "/img/character/wind/kazuha.jpg",
          title: "카즈하",
          detailText: {
            type: "한손검",
            world: "이나즈마",
            imagePath: "/img/character/wind/kazuha.jpg",
            name: "파도를 쫓는 단풍·카에데하라 카즈하",
            sub: "꽃과 새를 주우며, 달빛 비치는 바람의 먼 길을 간다",
            description:
              "[폭풍_베기] 상태 \n  부착 캐릭터가 낙하 공격 발동 시: 가하는 원신 물리 아이콘물리 피해가 원신 바람원소 유색바람 원소 피해로 전환 및 가하는 피해+1pt \n  캐릭터 스킬 사용 후: 해당 효과가 제거된다.",
          },
        },
        {
          path: "/wind/xiao", // 서브카드1의 경로
          imagePath: "/img/character/wind/xiao.jpg",
          title: "소",
          detailText: {
            type: "장병기",
            world: "리월",
            imagePath: "/img/character/wind/xiao.jpg",
            name: "호법야차 · 소",
            sub: "호법야차, 정요항마",
            description:
              "[야차의_가면] 출전 상태 \n  부착 캐릭터가 가하는 원신 물리 아이콘물리 피해가 원신 바람원소 유색바람 원소 피해로 전환되며, 캐릭터가 가하는 원신 바람원소 유색바람 원소 피해가 1pt 증가한다. \n  부착 캐릭터가 낙하 공격 시: 피해 추가+2pt \n  부착 캐릭터가 출전 캐릭터일 때 아군이 「캐릭터 교체」 행동 시: 원소 주사위 소모 개수-1 (턴당 1회) \n  지속 턴: 2 \n   \n  [낙하_공격] \n  캐릭터가 「출전 캐릭터」로 교체된 후, 이번 턴 내의 다음 전투 행동이 「일반 공격」일 경우 「낙하 공격」으로 간주된다.",
          },
        },
      ],
    },
  },
  {
    path: "/stone",
    imagePath: "/img/stone.jpg",
    title: "바위",
    detail: {
      subCards: [
        {
          path: "/stone/eto", // 서브카드1의 경로
          imagePath: "/img/character/stone/eto.jpg",
          title: "이토",
          detailText: {
            type: "양손검",
            world: "이나즈마",
            imagePath: "/img/character/stone/eto.jpg",
            name: "하나미자카 쾌걸 · 아라타키 이토",
            sub: "「아라타키 카드게임 왕중왕 이토」",
            description:
              "[난신의_괴력] 상태 \n  부착 캐릭터가 강공격 시: 가하는 피해+1pt. 만약 사용 가능 횟수가 2 이상일 경우 해당 스킬 발동 시 소모하는 원소 주사위 임의무색 원소가 1개 감소한다. \n   \n  사용 가능 횟수: 1 (중첩 가능, 최대 중첩수: 3회) \n  [분노의_귀왕] 상태 \n  부착 캐릭터의 일반 공격으로 가하는 피해+2pt, 가하는 원신 물리 아이콘물리 피해가 원신 바위원소 유색바위 원소 피해로 전환된다. \n   \n  지속 턴: 2 \n  부착 캐릭터가 일반 공격 후: 부착 캐릭터에게 난신의 괴력을 부착한다. (턴당 1회)",
          },
        },
        {
          path: "/stone/jongli", // 서브카드1의 경로
          imagePath: "/img/character/stone/zongli.jpg",
          title: "종려",
          detailText: {
            type: "장병기",
            world: "리월",
            imagePath: "/img/character/stone/zongli.jpg",
            name: "속세 한유 · 종려",
            sub: "감춰진 옥은 온 세상을 밝히고, 하늘의 찬란한 별은 자유롭기 그지없다",
            description:
              "3.7 업데이트로 추가된 캐릭터 카드. 원소 전투 스킬은 바위 소환물을 기본으로 깔아주고 주사위 코스트를 더 지불하면 데미지 증가와 실드 효과가 추가로 적용되며, 원소 폭발은 적당한 데미지에 단독으로 상대를 석화시키는 고성능으로 무장했다. \n   \n  종려를 주력으로 쓴다면 같이 등장한 관홍의 창과 견고한 천암 착용을 목표로 하며, 최소 2턴/가능하면 3턴 이상 동안 바위 원소와 반응하는 소환물이 필요하다. \n  빌드가 끝난 종려는 난공불락이라고 볼 수 있는데, 기본적으로 관홍의 창과 실드 유지로 상시 +2의 데미지가 추가되면서 기본 평타만 해도 4가 되는데다가 실드 효율 증가에 바위 결정과 옥홀 방패와 바위 공명 카드로 끊임없이 실드를 생성하다가 천성으로 사이클을 망가뜨리기까지 한다. \n   \n  종려는 실드로 눌러앉는 스타일이지만 장기전으로는 부적합한데, 즉발 실드를 얻는데 5코스트나 들고 CC기는 3게이지가 필요한 천성뿐이라 종려 단독으로는 억제력이 떨어지므로 5~6턴 안에 주사위를 펌핑해서 빠르게 승부를 보는 전략을 권장한다. \n   \n  하이퍼캐리 카드들이 그렇듯이 맨몸으로는 약하고 주사위 소모가 극심하므로, 소환물을 깔아주는 캐릭터가 버틸 동안 최대한 빠르게 빌드를 할 줄 알면서 주사위 관리도 능숙한 중상급자 지향 캐릭터 카드로 평가할 수 있다.",
          },
        },
        // 추가적인 서브카드도 이렇게 계속 추가 가능
      ],
    },
  },
  {
    path: "/spark",
    imagePath: "/img/spark.jpg",
    title: "번개",
    detail: {
      subCards: [
        {
          path: "/spark/saino", // 서브카드1의 경로
          imagePath: "/img/character/spark/saino.jpg",
          title: "사이노",
          detailText: {
            type: "장병기",
            world: "수메르",
            imagePath: "/img/character/spark/saino.jpg",
            name: "비밀 심판 · 사이노",
            sub: "카드에는 뜨거운 사막의 태양과도 같은 대풍기관의 열정이 간직되어 있다",
            description:
              "패시브의 빙의 스택을 활용한 빌드업으로 자신을 강화시키는 캐릭터. 빙의는 2스택시 평타에 번개부여, 4스택 이후 추뎀 2라는 꽤 걸출한 버프지만 스택 적립 조건이 턴 종료시 1스택 추가 혹은 원소 폭발 사용시 2스택 추가라는 그다지 간단한 조건은 아니다보니 실전운용이 다소 난해하고 상대 조합에 따라 플레이가 꼬이기 쉽다.",
          },
        },
        {
          path: "/spark/raiden", // 서브카드1의 경로
          imagePath: "/img/character/spark/raiden.jpg",
          title: "라이덴",
          detailText: {
            type: "장병기",
            world: "이나즈마",
            imagePath: "/img/character/spark/raiden.jpg",
            name: "일심정토·라이덴 쇼군",
            sub: "뇌명 적멸, 부세의 포영",
            description:
              "3.7 업데이트로 등장한 카드. 원소폭발 발동시 나머지 캐릭터 카드가 원소 에너지를 2pt 획득한다. 라이덴을 쓴다면 백안지륜도 필드에 있을테니 효과로 원소폭발의 피해를 1 높일 수 있는것도 큰 이점. \n   \n  다만 행추와 같은 이유로 상대가 1턴에 한 명 자르고 시작할 수 있는 조합이라면 사용시 주의가 필요하다. 또한 첫 2턴을 내줘야 한다는 점[66]도 큰데, 상대가 그동안 배째고 빌드업을 해버릴 수 있기 때문. \n   \n  원소폭발의 미친 성능에 묻혀지는 감이 있으나, 원소스킬 자체의 부착력도 좋은 편이라 템포가 느린 덱이라면 피슬 대신 써도 무방하다.",
          },
        },
        {
          path: "/spark/miko", // 서브카드1의 경로
          imagePath: "/img/character/spark/miko.jpg",
          title: "미코",
          detailText: {
            type: "법구",
            world: "이나즈마",
            imagePath: "/img/character/spark/miko.jpg",
            name: "속세를 비웃는 백 가지 자태·야에 미코",
            sub: "「지혜와 미모를 겸비한 야에 미코 님」",
            description: "[천호_뇌정] 상태 \n  아군이 행동하기 전: 원신 번개원소 유색번개 원소 피해를 3pt 가한다. \n  사용 가능 횟수: 1",
          },
        },
      ],
    },
  },
  {
    path: "/green",
    imagePath: "/img/green.jpg",
    title: "풀",
    detail: {
      subCards: [
        {
          path: "/green/tainari", // 서브카드1의 경로
          imagePath: "/img/character/green/tainari.jpg",
          title: "타이나리",
          detailText: {
            type: "활",
            world: "수메르",
            imagePath: "/img/character/green/tainari.jpg",
            name: "신록의 발걸음 · 타이나리",
            sub: "어떤 면에서 경험은 지혜와 같지 않다",
            description:
              "[식(識)의_통찰자] 상태 \n  부착 캐릭터가 강공격 발동 시: 가하는 원신 물리 아이콘물리 피해가 원신 풀원소 유색풀 원소 피해로 전환되고 스킬 결산 후 꽃을 품은 화살을 소환한다. \n  사용 가능 횟수: 2",
          },
        },
        {
          path: "/green/nahida", // 서브카드1의 경로
          imagePath: "/img/character/green/nahida.jpg",
          title: "나히다",
          detailText: {
            type: "법구",
            world: "수메르",
            imagePath: "/img/character/green/nahida.jpg",
            name: "정화의 하얀 풀 · 나히다",
            sub: "깊은 궁전에서 깨어난 정화의 하얀 풀",
            description:
              "[스칸다_씨앗] 상태 \n  「스칸다 씨앗」이 부착된 소속 진영의 임의의 캐릭터가 원소 반응 피해를 받은 후: 부착 캐릭터에게 관통 피해를 1pt 가한다. \n  사용 가능 횟수: 2 \n   \n  [마야의_전당] 출전 상태 \n  아군이 원소 반응 발동 시: 피해 추가+1pt \n  지속 턴: 2",
          },
        },
        // 추가적인 서브카드도 이렇게 계속 추가 가능
      ],
    },
  },
  {
    path: "/water",
    imagePath: "/img/water.jpg",
    title: "물",
    detail: {
      subCards: [
        {
          path: "/water/mona", // 서브카드1의 경로
          imagePath: "/img/character/water/mona.jpg",
          title: "모나",
          detailText: {
            type: "법구",
            world: "몬드",
            imagePath: "/img/character/water/mona.jpg",
            name: "별하늘의 물거울 · 모나",
            sub: "승리와 패배는 모두 운명으로 정해진 것",
            description:
              "물 원소 반응을 필요로 하는 덱이라면 1순위 채용을 고려해볼만한 우수한 서포터 카드. 뛰어난 유틸성을 가지고 있다 \n   \n  캐릭터가 가진 원소 스킬과 빠른 교체 능력이 특히 돋보이는데, 원소 스킬의 피해경감 능력과 캐릭터가 가진 빠른 교체 능력이 맞물려서 평상시에 탱킹용으로 내보내기에 부담이 없다. 일반적으로 빠른 교체능력이 이벤트, 서포트 카드만 가지고 있어서 이 점이 더욱 부각된다. 그리고 코코미나 검귀와 달리 원소스킬 발동시에도 물 원소를 부착할 수 있고 턴 종료시에도 물원소를 다시 재부착시키므로 원소 부착능력이 중요한 일곱 성인의 소환에서 상당한 메리트를 지닌 카드이다. \n   \n  소환수 제거 카드를 당한다 해도 피슬과 달리 지속턴이 하나 짜리라서 운용에 큰 타격이 없으며 어차피 모나덱 특성상 모나로 교체할 일이 잦기에 오히려 쓰는 쪽이 손해를 보게 된다. \n   \n  궁극기의 데미지 증폭 능력은 확실히 뛰어난 편이지만 원소 게이지를 세 칸이나 요구하고 대인전에선 활용하기가 다소 까다로운 편이라 보통 모나를 채용할 때 따라오는 덤과 같은 능력으로 쓰는 편이다. 그래도 여러 힐, 쉴드 카드를 병행하여 농성하는 덱 상대로는 후반부 운용에선 확실히 도움이 되는 궁극기다. \n   \n  그러나 궁극기가 없는 평시 상태에서는 자체 데미지는 매우 떨어진다. 모나는 뛰어난 유틸 능력을 바탕으로 원소반응을 보조해주는 캐릭터인데 그 원소반응을 일으켜줄 아군 캐릭터가 죽고 모나만 남은 경우에는 매우 무력해진다.",
          },
        },
        {
          path: "/water/kokomi", // 서브카드1의 경로
          imagePath: "/img/character/water/kokomi.jpg",
          title: "코코미",
          detailText: {
            type: "법구",
            world: "이나즈마",
            imagePath: "/img/character/water/kokomi.jpg",
            name: "진주의 지혜 · 산고노미야 코코미",
            sub: "미리 준비해둬야 위험이 다가와도 흐트러지지 않는다",
            description:
              "3.5 업데이트에 추가된 신규 캐릭터 카드로 물 원소 부착과 힐, 메인딜링까지 가능한 올라운더이다. \n   \n  평타는 피해 1pt로 약한 편이고 서포터로써 가장 중요한 것은 원소전투 스킬인 해파리의 서약인데 코코미에 물 원소 부착을 시키고 환영 해파리를 소환시킨다.[19] \n   \n  원소폭발 스킬로는 상대한테 +3 피해를 입히고 의식의 날개옷을 부착하여 일반 공격 피해가 +2로 늘어나고 공격을 하면 모든 아군 캐릭터의 체력을 회복시켜준다. 원소폭발을 기반으로 메인딜러로 사용할 때 천공의 두루마리를 장착시켜주면 괜찮은 딜링을 할 수 있다. \n   \n  스킬 효과 카드로는 원소폭발 스킬을 사용하면 환영 해파리의 사용 가능 횟수가 갱신된다. \n   \n  원소전투 스킬의 치명적인 단점으로 게임 시작 중에 본인의 캐릭터에 물 원소 부착되기 때문에 전투에 힘들어지고 성능도 그렇게 좋은 편은 아니기 때문에 전체적으로 애매한 편이다. 그래도 가장 쓸만한 것은 아무래도 원소폭발 스킬인데 해파리를 소환시키고 날개옷으로 공격하면 체력을 이용한 탱킹이 가능하고 전체 아군의 캐릭터를 회복시켜준다는 점이 좋은 편이다.",
          },
        },
        {
          path: "/water/ayato", // 서브카드1의 경로
          imagePath: "/img/character/water/ayato.jpg",
          title: "아야토",
          detailText: {
            type: "한손검",
            world: "이나즈마",
            imagePath: "/img/character/water/ayato.jpg",
            name: "잎을 수호하는 반석 · 카미사토 아야토",
            sub: "신을 수호하는 떡갈나무에 새로운 가지가 자라났구나",
            description:
              "[선회하는_거울꽃] 상태 \n  부착 캐릭터의 일반 공격으로 가하는 피해+1pt 및 원신 물리 아이콘물리 피해가 원신 물원소 유색물 원소 피해로 전환된다. \n  사용 가능 횟수: 2",
          },
        },
        {
          path: "/water/tartalia", // 서브카드1의 경로
          imagePath: "/img/character/water/tartalia.jpg",
          title: "타르탈리아",
          detailText: {
            type: "활",
            world: "리월",
            imagePath: "/img/character/water/tartalia.jpg",
            name: "	「귀공자」 · 타르탈리아",
            sub: "카드 대전은 전장과도 같아서, 능력 있는 자가 앞설 수 있다",
            description:
              "[근접_상태]  출전 상태 \n  캐릭터가 가하는 원신 물리 아이콘물리 피해가 원신 물원소 유색물 원소 피해로 전환되며, 단류가 부착된 캐릭터에게 가하는 피해+1pt \n  부착 캐릭터가 강공격 발동 후: 대상 캐릭터에게 단류를 부착한다. \n  단류가 부착된 캐릭터에게 스킬 사용 후: 다음 상대 대기 캐릭터에게 1pt의 관통 피해를 가한다. (턴당 최대 2회) \n   \n  지속 턴: 2, 소진 후 원거리 상태로 전환된다. \n   \n  [단류]  출전 상태 \n  부착 캐릭터가 처치된 후: 소속 진영의 출전 캐릭터에게 「단류」를 부착한다. \n  지속 턴: 2 \n   \n   [원거리_상태] 출전 상태 \n  부착 캐릭터가 강공격 발동 후: 대상 캐릭터에게 단류를 부착한다.",
          },
        },
        // 추가적인 서브카드도 이렇게 계속 추가 가능
      ],
    },
  },
  {
    path: "/fire",
    imagePath: "/img/fire.jpg",
    title: "불",
    detail: {
      subCards: [
        {
          path: "/fire/darluk", // 서브카드1의 경로
          imagePath: "/img/character/fire/darluk.jpg",
          title: "다이루크",
          detailText: {
            type: "양손검",
            world: "몬드",
            imagePath: "/img/character/fire/darluk.jpg",
            name: "새벽의 어둠 · 다이루크",
            sub: "그의 가장 강력한 적은 바로 자신의 마음이다",
            description:
              "단일딜에 특화된 캐릭터로 스킬은 3회 연속사용시 뎀증폭이 되는데 통상적인 3코스트로는 주사위 8개가 싹 불로떠도 불가능하니 본인의 특성카드, 엘린같은 반복시 할인카드와 불성유물 카드같은걸 이용해야 조건 달성이 가능하다. 궁극기는 단일대상에 무려 8뎀을 박으며 원소반응과 조합이 될경우 원콤도 가능할정도로 강력하다. 다만 통상의 3대3에선 오버킬이 자주나는게 약점으로 강력한적 한명을 상대하는 술집대전에서 더 위력적이다. \n   \n  [불_원소_부여] 상태 \n  부착 캐릭터가 가하는 원신 물리 아이콘물리 피해가 원신 불원소 유색불 원소 피해로 전환 된다. \n  지속 턴: 2",
          },
        },
        {
          path: "/fire/yoimiya", // 서브카드1의 경로
          imagePath: "/img/character/fire/yoimiya.jpg",
          title: "요이미야",
          detailText: {
            type: "활",
            world: "이나즈마",
            imagePath: "/img/character/fire/yoimiya.jpg",
            name: "유염화무 · 요이미야",
            sub: "제11회 하나미자카 대회의 「나가노하라 팀」 팀장이자 선봉장이다",
            description:
              "원소 스킬로 1턴을 사용한다는 단점이 있으나 일반공격이 타 캐릭터의 원소 전투 스킬에 준하게 강화된다는 특징이 있다. 일반 공격으로 원소 피해를 줄 수 있어 불 원소 주사위 소모가 적으며 주사위 말림을 억제해 준다. 일반 공격을 주력으로 사용하는 경우 행추의 원소폭발이나 천공의 활 등 강화 효과를 받은 요이미야가 높은 한방 데미지를 가하는 덱을 짤 수 있다. \n   \n  원본 캐릭터와는 다르게 원소 폭발의 성능이 매우 우수하다. 일곱 성인의 소환에서 원소 반응은 교체 플레이가 필요한 대신 소모한 주사위에 비해 높은 대미지를 낼 수 있는 수단이다. 그러나 행추나 요이미야 등 일부 캐릭터는 공격에 반응해 원소 피해를 주며 원소 반응의 장점만 취하게 해 준다. 특히 요이미야의 원소폭발은 스킬의 종류를 가리지 않고 공격을 하기만 하면 반응하며, 횟수제가 아닌 턴제라 고점이 매우 높다. 원소 폭발을 주력으로 사용하는 경우 주로 아야카나 각청과 조합되어 반복적인 원소 반응을 지원하는 역할을 한다. 이 점이 너무 좋아서 요구 에너지가 2에서 3으로 늘어나버려 예전처럼 궁을 빠르게 채워서 3턴만에 승부를 보는 어그로덱으로서의 운용은 거의 불가능해진 상태. \n   \n  원소전투스킬의 비용이 주사위 1개 밖에 먹지 않는 점은 은근히 활용도가 높다. 행운아의 은관[38]을 끼면 어떤 캐릭터보다 저렴하게 자힐이 가능하며 베넷의 원소폭발[39]이 깔린 상태로 이 방법을 사용하면 주사위 하나로 체력이 4pt가 채워지거나 체력 회복과 동시에 평타에 추뎀 3 + 불속성 부여까지 얻을 수 있으니 굉장한 가성비인 셈. 위의 시너지가 없어도 상대방에게 일부러 턴을 넘기는 용도로도 유용하다.",
          },
        },
        {
          path: "/fire/klee", // 서브카드1의 경로
          imagePath: "/img/character/fire/klee.jpg",
          title: "클레",
          detailText: {
            type: "법구",
            world: "몬드",
            imagePath: "/img/character/fire/klee.jpg",
            name: "도망치는 태양 · 클레",
            sub: "모든 카드 뽑기에는 「폭발적인 서프라이즈」가 숨어 있다",
            description:
              "3.4 업데이트에 추가된 신규 캐릭터 카드. 자신이 아닌 상대가 공격 행동을 하면 발동되는 방식의 원소폭발은 대놓고 빙결덱을 저격하고 있다. \n   \n  상술했듯 법구 불딜러라는 점과 더불어 자체적으로 평타의 원소 주사위 소모개수를 줄일 수 있다보니 지속딜 능력은 물론 순간 폭딜 능력도 상당히 좋다. 모나 행추와 함께 사용하는 클레-행추-모나 조합의 경우 체력회복 계열 카드와 달연꽃파이를 투입하여 지속력을 높이고 끝없는 증발딜로 승부를 보는데, 장기전용 덱 구축임에도 상대가 배짱을 부릴 경우 캐릭터 하나를 첫 턴에 보내버릴 수 있는 딜 포텐셜 역시 지니고 있어 좋은 평가를 받는다. \n   \n  특히 클레의 궁은 노엘과 상극인데, 호심경을 무력화시킬 뿐만 아니라 바위 공명 카드를 봉쇄해버린다. 바위 공명 카드의 방어막 +3 효과는 행동에서 마지막 순서로 발동되는데, 클레의 궁 폭발 효과는 호심경으로 생성되는 방어막을 모두 찢어버리기 때문에 증가할 방어막이 없어지기 때문.",
          },
        },
        {
          path: "/fire/hutao", // 서브카드1의 경로
          imagePath: "/img/character/fire/hutao.jpg",
          title: "호두",
          detailText: {
            type: "장병기",
            world: "리월",
            imagePath: "/img/character/fire/hutao.jpg",
            name: "눈 그친 뒤의 매화향·호두",
            sub: "「전부 보내줄게」",
            description:
              "원본처럼 폭발적인 화력을 내뿜는 딜러이다. 나비의 서는 2코스트에 피안접무 버프를 부여, 평타에 불원소 인챈트를 부여하고 불 원소 데미지 +1을 올려주며 강공격 발동시 턴 종료때 +1 불 원소 데미지를 주는 혈매향을 효과를 주는 고성능 버프기로 나왔다. 요이미야의 염초 정화의 춤과 비교하면 1코스트 더 높아진 대신 원소 게이지가 차고, 평타 데미지 뿐만 아니라 화속성 데미지 자체를 증가시켜줘 궁극기 화력에도 보탬이 되며 결정적으로 횟수제한 없이 2턴동안 지속되는 버프라는 차이점이 있다. \n  궁극기 평안의 서 또한 호두가 한턴싸움을 하는데 굉장한 이점이 되어준다. 상술했듯이 나비의 서만 사용해도 원소 게이지를 한칸 채울 수 있어 사용하기도 편하면서, 피안접무가 2턴동안 지속되기 때문에 왠만하면 불 원소 피해증가 +1의 효과를 받을 수 있다. 게다가 체력이 6이하가 되면 데미지가 1 더 상승한다. 전용 스킬카드까지 쓴다는 가정 하에 체력 6 이하시 한번에 7데미지까지 딜이 상승한다. 게다가 체력을 2~3까지 회복하는 효과까지 있어 서로 체력이 위험한 대치상황에서도 단번에 역전이 가능하다. \n  이런 시너지들 덕분에 전통의 증발요원 행추와 조합되어 원턴킬 딜러로 활약하는게 보통이다. 고기말이, 도박꾼와 함께 한턴만에 평타딜은 딜대로 넣으면서 평안의 서로 체력회복까지 해버리는 호두의 스윕 능력은 최상급이다. 설령 한턴만에 승부를 보지 못해 행추궁이 꺼졌다고 해도 궁극기의 뒷심과 피안접무의 추뎀 적분에 힘 빠지는 것도 덜하다. \n   \n  다만 이런 조합이 으레 그렇듯 빙결이나 강제 자리이동같은 견제 효과에 취약하며, 행추가 거의 강제되다시피 하고 행추 이외의 조합될 파트너가 애매하다는 단점이 있다. 회복에 특화된 물공명 파트너는 단시간 외줄타기 화력으로 승부를 봐야하는 호두와 궁합이 잘 맞지 않으며 다른 불원소 캐릭터들도 어딘가 나사빠진 점이 존재한다.",
          },
        },
        // 추가적인 서브카드도 이렇게 계속 추가 가능
      ],
    },
  },
  {
    path: "/ice",
    imagePath: "/img/ice.jpg",
    title: "얼음",
    detail: {
      subCards: [
        {
          path: "/ice/kamwu", // 서브카드1의 경로
          imagePath: "/img/character/ice/kamwu.jpg",
          title: "감우",
          detailText: {
            type: "활",
            world: "리월",
            imagePath: "/img/character/ice/kamwu.jpg",
            name: "리월의 수호자 · 감우",
            sub: "「내일 아침까지 필요한 거라면 밤을 새워서 완성하면 되겠네요」",
            description:
              "강공격과 원소폭발을 주력으로 상대방 전체에게 큰 피해를 가하는 캐릭터. 특히 감우의 전용 장비 카드인 단 하나의 마음 을 장착한다면 강공격 한번으로 각 캐릭터에게 3pt, 총 8pt의 데미지를 입힌다. 안그래도 무서운 강공격이 더욱 강력해져 상대방의 대기 캐릭터가 출전되기도 전에 빈사상태가 되어있는 마법을 볼 수 있다. \n   \n  궁극기로 소환되는 빙령주 역시 무시할 수 없는데, 매 턴이 끝날 때마다 적 전체에게 총 3pt의 데미지를 입히며, 필드에 나온 캐릭터한테는 얼음 원소 피해를 입히기 때문에 전략적으로 사용하기 좋은 편이다. 예를 들어, 피슬의 번개 소환수 오즈와 함께 사용시 초전도 효과로 관통 피해를 한번 더 입힌다. \n   \n  단점으로는 역시 코스트. 강공격 한번에 얼음 원소의 주사위 5개, 앞서 언급했던 전용 장비카드의 경우 성능을 발휘하기 위해선 얼음 원소의 주사위 10개 이상 필요하다. 따라서 만능 원소를 생성 및 전환하여 주사위의 유동성을 늘리거나, 주사위 변환을 위해 손패의 카드를 많이 확보해놔야 하는 등 코스트 관리에 매우 신경을 써야 하는 플레이가 필요하다. 이마저도 주사위 운이 따라주지 않는다면 꼬이기 십상이므로 운용이 어려운 편. \n   \n  3.5 버전 기준으로는 초전도검귀 덱과 각피콜 활성 덱, 요이미야 원펀 덱 등 강력한 입지를 자랑하던 덱의 코어 카드들이 너프를 당하면서 감우덱의 티어가 상당히 올라 pvp 대전에서도 상당한 위력을 보여주고 있다. \n   \n  결국 3.7 버전에서 원소폭발에 필요한 게이지가 하나 늘어나는 너프를 받았으나, 서리꽃 화살 위주의 구성에서는 큰 너프는 아니다. \n   \n  pve대전에선 잡몹이 많이나오고 복잡한 운영을 필요로 하지 않는 환경으로 인해 얼음 주사위가 모이는대로 바로 강공을 박아 빠르게 판을 끝낼 수 있어 쓰기 매우 좋다. 주사위 추가 리롤을 가능하게 해주는 도서관 카드, 응광 카드나 만능 원소를 제공해주거나 변환해주는 페이몬 카드 등을 최대한 넣고 돌리면 리롤 부담도 없어지며 대충 선두로 나와서 감우가 죽더라도 강공 2-3발만 꽂아주면 남은 적들의 피가 충분히 빠져서 다른 두 캐릭터로 적당히 마무리가 가능해지기 때문에 컴까로는 최고 효율의 캐릭터. 적당히 컨텐츠 보상만 타먹는게 목적이라면 감우부터 얻어서 밀어버리는 것을 추천한다. 단, 술집 대전이나 몇몇 NPC 대전에서 나오는 고체력형 단일 보스한테는 효과가 격감하니 이런 보스에게는 사용을 비추천한다. \n   \n  참고로 일곱 성인의 소환에서는 강공격이 일반 공격으로 취급되어서 원작과는 다르게 행추의 궁극기가 반응을 하고 일반 공격 피해 증가 효과를 받을 수 있다.",
          },
        },
        {
          path: "/ice/ayaka", // 서브카드1의 경로
          imagePath: "/img/character/ice/ayaka.jpg",
          title: "아야카",
          detailText: {
            type: "한손검",
            world: "이나즈마",
            imagePath: "/img/character/ice/ayaka.jpg",
            name: "눈꽃의 백로 · 카미사토 아야카",
            sub: "1%의 승화된 서리처럼, 정원의 백로처럼",
            description:
              "패시브를 통한 빠른 얼음 원소 부여를 통해 교체 플레이로 적극적인 원소반응을 유도하고, 유리한 상황을 만든 뒤 일반공격 혹은 원소폭발로 마무리하는 딜러 캐릭터 카드. \n   \n  얼음 원소 피해를 입히는 캐릭터는 여럿 있지만 아야카가 그 중에서 가장 고평가받는 이유는, 현재 시점에서 얼음 법구 캐릭터는 원 게임에도 존재하지 않기 때문에 패시브를 통해 교체 비용 1코스트와 일반공격 코스트만으로 얼음 원소를 공급하는 유일한 캐릭터이기 때문이다. 아야카는 설계부터가 메인 딜러이고, 추가 피해가 붙어있는 전용 장비카드인 한천선명 축사와 무기, 성유물, 빙결 반응 자체의 추가피해의 시너지 효과를 통해 상대는 아무것도 못 하게 빙결시키면서 일반 공격만으로 위협적인 지속 딜링을 할 수 있다. 여기에 소환물을 남기는 원소 폭발까지 활용할 수 있어 우수한 딜 포텐셜을 가졌다.",
          },
        },
        {
          path: "/ice/yura", // 서브카드1의 경로
          imagePath: "/img/character/ice/yura.jpg",
          title: "유라",
          detailText: {
            type: "양손검",
            world: "몬드",
            imagePath: "/img/character/ice/yura.jpg",
            name: "물보라의 춤 · 유라",
            sub: "그저 게임일 뿐이다. 이기든 지든 원한을 살 일은 없다",
            description:
              "3.5 업데이트에 추가된 신규 캐릭터 카드로 초반에는 적당히 데미지를 입히고 후반에 큰 데미지를 입히는 설계로 이루어져 있다. 원소전투 스킬로 피해+2를 입히고 다음 번에 사용하면 피해+4를 입히게 된다. 이는 도중에 캐릭터를 교체해도 남기 때문에 중간에 불 원소 캐릭터로 교체해서 불 원소 피해를 입힌 뒤 유라로 다시 교체해서 원소 전투 스킬로 공격하면 매우 큰 데미지를 입힐 수 있다. \n   \n  원소폭발 스킬은 피해를 입힌 뒤 빛의 검을 소환시킨다. 이 빛의 검에는 처음에 에너지 스택 2pt부터 시작해서 유라가 일반 공격 또는 원소전투 스킬을 사용하면 빛의 검에는 2pt씩 누적된다. 즉, 원소폭발 스킬을 사용하고 원소전투 스킬을 두 번 쓰면 총 6pt의 에너지 스택이 쌓이게 되고 턴이 끝나면 누적된 에너지만큼 상대한테 피해를 준다. \n   \n  카드의 효과로는 원소 전투 스킬을 사용시 3pt씩 누적되기 때문에 더 높게 스택을 쌓을 수 있다. \n   \n  추천하는 조합으로는 물 원소 캐릭터와 페이몬 서포트 카드다. 물과 얼음 원소의 반응으로 빙결을 시킨 뒤 원소폭발로 만들어진 빛의 검으로 타격시키면 큰 피해를 줄 수 있다. 그리고 페이몬 서포트 카드로 총 10개의 원소 주사위를 얻으면 3~4번 공격이 가능하기 때문에 8pt부터 시작해서 카드까지 사용하면 최대 12pt를 채울 수 있다. \n   \n  이 카드의 단점으로는 초반에는 약하고 후반에 강해지는 캐릭터 카드라서 상대의 카드가 딜찍누 방식이라면 오히려 힘들어지는 카드로 후반 설계가 중요한 카드 입장에서는 빛을 보기도 전에 녹아버릴 수 있다. 그리고 빙결을 이용한 물리 피해를 입힐려면 상대방이 교체를 하지 말아야 하는데 보통 빙결당한 캐릭터는 교체될 가능성이 매우 높아서 빙결을 이용한 물리 피해를 입히기 까다로운 편이다.",
          },
        },
        {
          path: "/ice/shinhak", // 서브카드1의 경로
          imagePath: "/img/character/ice/shinhak.jpg",
          title: "신학",
          detailText: {
            type: "장병기",
            world: "리월",
            imagePath: "/img/character/ice/shinhak.jpg",
            name: "고독한 액신 · 신학",
            sub: "아득히 멀어진 속세, 연기처럼 사라진 인과",
            description:
              "3.7에 새로이 추가된 캐릭터 카드. 원판의 신학과 마찬가지로 얼음 속성 지원에 특화된 딜 증폭 서포터이지만 얼음 속성 확산 피해량까지 증가시켜서 대부분 바람속성 캐릭터와 조합한다. \n   \n  [얼음의_깃] 출전 상태 \n  아군 캐릭터가 가하는 원신 얼음원소 유색얼음 원소 피해+1pt \n  사용 가능 횟수: 3",
          },
        },
        {
          path: "/ice/chichi", // 서브카드1의 경로
          imagePath: "/img/character/ice/chichi.jpg",
          title: "치치",
          detailText: {
            type: "한손검",
            world: "리월",
            imagePath: "/img/character/ice/chichi.jpg",
            name: "차가운 환혼의 밤 · 치치",
            sub: "끝없는 순환, 끝없는 번성",
            description:
              "[도액_부적] 출전 상태 \n  아군 캐릭터가 스킬 사용 후: 해당 캐릭터의 HP가 최대치가 아니면 해당 캐릭터의 HP를 2pt 치유한다. \n  사용 가능 횟수: 3",
          },
        },
        // 추가적인 서브카드도 이렇게 계속 추가 가능
      ],
    },
  },
];

// 이 앱에서는 상태에 대한 변경(수정 및 삭제)을 진행하지 않는다.
function reducer(state, action) {
  return { contents };
}

// 리듀서 : 상태 관리를 담당하는 함수
// 리듀서를 전달받아서 저장소를 생성하는 함수가 바로 createstore

export const store = createStore(reducer);
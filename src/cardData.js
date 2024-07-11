import React from ".";

const flashcards = [
    { id: 1, front: <h1>able</h1>, back: <p>능력 있는</p> },
    { id: 2, front: <h1>accident</h1>, back: <p>사고</p> },
    { id: 3, front: <h1>advice</h1>, back: <p>조언</p> },
    { id: 4, front: <h1>advantage</h1>, back: <p>이점</p> },
    { id: 5, front: <h1>adventure</h1>, back: <p>모험</p> },
    { id: 6, front: <h1>advise</h1>, back: <p>조언하다</p> },
    { id: 7, front: <h1>agent</h1>, back: <p>대리인</p> },
    { id: 8, front: <h1>airline</h1>, back: <p>항공사</p> },
    { id: 9, front: <h1>airport</h1>, back: <p>공항</p> },
    { id: 10, front: <h1>alarm</h1>, back: <p>경보</p> },
    { id: 11, front: <h1>alcohol</h1>, back: <p>알코올</p> },
    { id: 12, front: <h1>alive</h1>, back: <p>살아 있는</p> },
    { id: 13, front: <h1>aloud</h1>, back: <p>소리 내어</p> },
    { id: 14, front: <h1>although</h1>, back: <p>비록 ~이지만</p> },
    { id: 15, front: <h1>altogether</h1>, back: <p>완전히</p> },
    { id: 16, front: <h1>ambulance</h1>, back: <p>구급차</p> },
    { id: 17, front: <h1>among</h1>, back: <p>~ 사이에</p> },
    { id: 18, front: <h1>angel</h1>, back: <p>천사</p> },
    { id: 19, front: <h1>anger</h1>, back: <p>분노</p> },
    { id: 20, front: <h1>apart</h1>, back: <p>떨어져</p> },
    { id: 21, front: <h1>appear</h1>, back: <p>나타나다</p> },
    { id: 22, front: <h1>arrest</h1>, back: <p>체포하다</p> },
    { id: 23, front: <h1>article</h1>, back: <p>기사</p> },
    { id: 24, front: <h1>aside</h1>, back: <p>한쪽으로</p> },
    { id: 25, front: <h1>asleep</h1>, back: <p>자고 있는</p> },
    { id: 26, front: <h1>assist</h1>, back: <p>돕다</p> },
    { id: 27, front: <h1>attack</h1>, back: <p>공격</p> },
    { id: 28, front: <h1>attempt</h1>, back: <p>시도</p> },
    { id: 29, front: <h1>attention</h1>, back: <p>주의</p> },
    { id: 30, front: <h1>attitude</h1>, back: <p>태도</p> },
    { id: 31, front: <h1>attract</h1>, back: <p>끌다</p> },
    { id: 32, front: <h1>audience</h1>, back: <p>청중</p> },
    { id: 33, front: <h1>automatic</h1>, back: <p>자동의</p> },
    { id: 34, front: <h1>average</h1>, back: <p>평균의</p> },
    { id: 35, front: <h1>awake</h1>, back: <p>깨어 있는</p> },
    { id: 36, front: <h1>background</h1>, back: <p>배경</p> },
    { id: 37, front: <h1>bacon</h1>, back: <p>베이컨</p> },
    { id: 38, front: <h1>balance</h1>, back: <p>균형</p> },
    { id: 39, front: <h1>balloon</h1>, back: <p>풍선</p> },
    { id: 40, front: <h1>battery</h1>, back: <p>배터리</p> },
    { id: 41, front: <h1>battle</h1>, back: <p>전투</p> },
    { id: 42, front: <h1>belief</h1>, back: <p>믿음</p> },
    { id: 43, front: <h1>beyond</h1>, back: <p>저편</p> },
    { id: 44, front: <h1>billion</h1>, back: <p>십억</p> },
    { id: 45, front: <h1>blanket</h1>, back: <p>담요</p> },
    { id: 46, front: <h1>blonde</h1>, back: <p>금발의</p> },
    { id: 47, front: <h1>brain</h1>, back: <p>뇌</p> },
    { id: 48, front: <h1>brake</h1>, back: <p>브레이크</p> },
    { id: 49, front: <h1>breast</h1>, back: <p>가슴</p> },
    { id: 50, front: <h1>brief</h1>, back: <p>간단한</p> },
    { id: 51, front: <h1>broad</h1>, back: <p>넓은</p> },
    { id: 52, front: <h1>bubble</h1>, back: <p>거품</p> },
    { id: 53, front: <h1>cable</h1>, back: <p>케이블</p> },
    { id: 54, front: <h1>calendar</h1>, back: <p>달력</p> },
    { id: 55, front: <h1>captain</h1>, back: <p>선장</p> },
    { id: 56, front: <h1>carpet</h1>, back: <p>카펫, 양탄자</p> },
    { id: 57, front: <h1>castle</h1>, back: <p>성</p> },
    { id: 58, front: <h1>category</h1>, back: <p>범주, 카테고리</p> },
    { id: 59, front: <h1>cause</h1>, back: <p>원인</p> },
    { id: 60, front: <h1>ceiling</h1>, back: <p>천장</p> },
    { id: 61, front: <h1>chain</h1>, back: <p>사슬</p> },
    { id: 62, front: <h1>chairman</h1>, back: <p>회장</p> },
    { id: 63, front: <h1>challenge</h1>, back: <p>도전</p> },
    { id: 64, front: <h1>champion</h1>, back: <p>우승자, 챔피언</p> },
    { id: 65, front: <h1>character</h1>, back: <p>캐릭터, 인격</p> },
    { id: 66, front: <h1>characteristic</h1>, back: <p>특성, 특징</p> },
    { id: 67, front: <h1>cheek</h1>, back: <p>볼, 뺨</p> },
    { id: 68, front: <h1>cheer</h1>, back: <p>환호, 격려</p> },
    { id: 69, front: <h1>choice</h1>, back: <p>선택</p> },
    { id: 70, front: <h1>cigarette</h1>, back: <p>담배</p> },
    { id: 71, front: <h1>cinema</h1>, back: <p>영화관</p> },
    { id: 72, front: <h1>citizen</h1>, back: <p>시민</p> },
    { id: 73, front: <h1>coach</h1>, back: <p>코치, 감독</p> },
    { id: 74, front: <h1>coast</h1>, back: <p>해안</p> },
    { id: 75, front: <h1>comedy</h1>, back: <p>코미디</p> },
    { id: 76, front: <h1>comment</h1>, back: <p>댓글, 의견</p> },
    { id: 77, front: <h1>common</h1>, back: <p>공통의, 보통의</p> },
    { id: 78, front: <h1>communicate</h1>, back: <p>소통하다</p> },
    { id: 79, front: <h1>community</h1>, back: <p>공동체, 지역사회</p> },
    { id: 80, front: <h1>complex</h1>, back: <p>복합적인, 복잡한</p> },
    { id: 81, front: <h1>concert</h1>, back: <p>콘서트, 연주회</p> },
    { id: 82, front: <h1>connect</h1>, back: <p>연결하다</p> },
    { id: 83, front: <h1>consider</h1>, back: <p>고려하다</p> },
    { id: 84, front: <h1>contest</h1>, back: <p>대회</p> },
    { id: 85, front: <h1>continue</h1>, back: <p>계속하다</p> },
    { id: 86, front: <h1>correct</h1>, back: <p>올바른, 정확한</p> },
    { id: 87, front: <h1>cottage</h1>, back: <p>별장, 오두막</p> },
    { id: 88, front: <h1>cotton</h1>, back: <p>면, 솜</p> },
    { id: 89, front: <h1>cough</h1>, back: <p>기침</p> },
    { id: 90, front: <h1>count</h1>, back: <p>세다</p> },
    { id: 91, front: <h1>countryside</h1>, back: <p>시골, 농촌</p> },
    { id: 92, front: <h1>create</h1>, back: <p>창조하다</p> },
    { id: 93, front: <h1>credit</h1>, back: <p>신용, 인정</p> },
    { id: 94, front: <h1>crime</h1>, back: <p>범죄</p> },
    { id: 95, front: <h1>crisis</h1>, back: <p>위기</p> },
    { id: 96, front: <h1>curious</h1>, back: <p>호기심 많은, 궁금한</p> },
    { id: 97, front: <h1>damage</h1>, back: <p>손상, 피해</p> },
    { id: 98, front: <h1>darling</h1>, back: <p>사랑하는 사람, 애정하는</p> },
    { id: 99, front: <h1>degree</h1>, back: <p>정도, 학위</p> },
    { id: 100, front: <h1>delight</h1>, back: <p>기쁨, 즐거움</p> },
    { id: 101, front: <h1>dentist</h1>, back: <p>치과의사</p> },
    { id: 102, front: <h1>desert</h1>, back: <p>사막, 버리다</p> },
    { id: 103, front: <h1>desire</h1>, back: <p>욕망, 바라다</p> },
    { id: 104, front: <h1>destroy</h1>, back: <p>파괴하다</p> },
    { id: 105, front: <h1>detail</h1>, back: <p>세부 사항, 상세</p> },
    { id: 106, front: <h1>develop</h1>, back: <p>발전시키다, 개발하다</p> },
    { id: 107, front: <h1>diary</h1>, back: <p>일기</p> },
    { id: 108, front: <h1>dictionary</h1>, back: <p>사전</p> },
    { id: 109, front: <h1>direct</h1>, back: <p>직접적인, 지시하다</p> },
    { id: 110, front: <h1>display</h1>, back: <p>전시하다, 디스플레이</p> },
    { id: 111, front: <h1>distance</h1>, back: <p>거리</p> },
    { id: 112, front: <h1>divide</h1>, back: <p>나누다, 분할하다</p> },
    { id: 113, front: <h1>divorce</h1>, back: <p>이혼</p> },
    { id: 114, front: <h1>dolphin</h1>, back: <p>돌고래</p> },
    { id: 115, front: <h1>doubt</h1>, back: <p>의심, 불확실성</p> },
    { id: 116, front: <h1>dozen</h1>, back: <p>12, 한 다스</p> },
    { id: 117, front: <h1>drama</h1>, back: <p>드라마, 연극</p> },
    { id: 118, front: <h1>economy</h1>, back: <p>경제</p> },
    { id: 119, front: <h1>educate</h1>, back: <p>교육하다</p> },
    { id: 120, front: <h1>either</h1>, back: <p>(둘 중) 어느 하나, 아니면</p> },
    { id: 121, front: <h1>electric</h1>, back: <p>전기의</p> },
    { id: 122, front: <h1>element</h1>, back: <p>요소, 원소</p> },
    { id: 123, front: <h1>emotion</h1>, back: <p>감정</p> },
    { id: 124, front: <h1>empire</h1>, back: <p>제국</p> },
    { id: 125, front: <h1>enemy</h1>, back: <p>적</p> },
    { id: 126, front: <h1>engine</h1>, back: <p>엔진, 기관</p> },
    { id: 127, front: <h1>engineer</h1>, back: <p>엔지니어, 기술자</p> },
    { id: 128, front: <h1>entertain</h1>, back: <p>즐겁게 하다, 대접하다</p> },
    { id: 129, front: <h1>entire</h1>, back: <p>전체의, 완전한</p> },
    { id: 130, front: <h1>envelope</h1>, back: <p>봉투</p> },
    { id: 131, front: <h1>equal</h1>, back: <p>동등한, 같은</p> },
    { id: 132, front: <h1>escape</h1>, back: <p>탈출하다, 도망가다</p> },
    { id: 133, front: <h1>essay</h1>, back: <p>수필, 글</p> },
    { id: 134, front: <h1>event</h1>, back: <p>사건, 행사</p> },
    { id: 135, front: <h1>exact</h1>, back: <p>정확한, 정밀한</p> },
    { id: 136, front: <h1>examine</h1>, back: <p>조사하다, 검사하다</p> },
    { id: 137, front: <h1>exchange</h1>, back: <p>교환하다, 거래</p> },
    { id: 138, front: <h1>excite</h1>, back: <p>흥분시키다, 흥미를 끌다</p> },
    { id: 139, front: <h1>excuse</h1>, back: <p>변명, 사과</p> },
    { id: 140, front: <h1>exist</h1>, back: <p>존재하다</p> },
    { id: 141, front: <h1>expect</h1>, back: <p>기대하다, 예상하다</p> },
    { id: 142, front: <h1>experience</h1>, back: <p>경험</p> },
    { id: 143, front: <h1>explain</h1>, back: <p>설명하다</p> },
    { id: 144, front: <h1>express</h1>, back: <p>표현하다, 급행의</p> },
    { id: 145, front: <h1>extra</h1>, back: <p>추가의, 여분의</p> },
    { id: 146, front: <h1>factor</h1>, back: <p>요소</p> },
    { id: 147, front: <h1>faith</h1>, back: <p>신념, 믿음</p> },
    { id: 148, front: <h1>familiar</h1>, back: <p>친숙한, 익숙한</p> },
    { id: 149, front: <h1>fantastic</h1>, back: <p>환상적인, 멋진</p> },
    { id: 150, front: <h1>fashion</h1>, back: <p>유행, 패션</p> },
    { id: 151, front: <h1>fault</h1>, back: <p>결점, 잘못</p> },
    { id: 152, front: <h1>fellow</h1>, back: <p>동료, 사람</p> },
    { id: 153, front: <h1>female</h1>, back: <p>여성의</p> },
    { id: 154, front: <h1>fence</h1>, back: <p>울타리</p> },
    { id: 155, front: <h1>figure</h1>, back: <p>형상, 인물</p> },
    { id: 156, front: <h1>final</h1>, back: <p>마지막의, 결승전</p> },
    { id: 157, front: <h1>follow</h1>, back: <p>따르다, 이해하다</p> },
    { id: 158, front: <h1>force</h1>, back: <p>힘, 강요하다</p> },
    { id: 159, front: <h1>foreign</h1>, back: <p>외국의, 외국인</p> },
    { id: 160, front: <h1>forever</h1>, back: <p>영원히</p> },
    { id: 161, front: <h1>forward</h1>, back: <p>앞으로, 미래를 향해</p> },
    { id: 162, front: <h1>found</h1>, back: <p>설립하다, ~에 기반을 두다</p> },
    { id: 163, front: <h1>frame</h1>, back: <p>틀, 틀에 넣다</p> },
    { id: 164, front: <h1>furniture</h1>, back: <p>가구</p> },
    { id: 165, front: <h1>garage</h1>, back: <p>차고</p> },
    { id: 166, front: <h1>gather</h1>, back: <p>모으다</p> },
    { id: 167, front: <h1>general</h1>, back: <p>일반적인, 장군</p> },
    { id: 168, front: <h1>gentle</h1>, back: <p>온순한, 부드러운</p> },
    { id: 169, front: <h1>gesture</h1>, back: <p>몸짓, 신호</p> },
    { id: 170, front: <h1>giant</h1>, back: <p>거인, 거대한</p> },
    { id: 171, front: <h1>giraffe</h1>, back: <p>기린</p> },
    { id: 172, front: <h1>glove</h1>, back: <p>장갑</p> },
    { id: 173, front: <h1>grade</h1>, back: <p>학년, 등급</p> },
    { id: 174, front: <h1>grocery</h1>, back: <p>식료품</p> },
    { id: 175, front: <h1>guard</h1>, back: <p>경비원, 지키다</p> },
    { id: 176, front: <h1>guest</h1>, back: <p>손님, 방문자</p> },
    { id: 177, front: <h1>guide</h1>, back: <p>길잡이, 안내하다</p> },
    { id: 178, front: <h1>handle</h1>, back: <p>다루다, 손잡이</p> },
    { id: 179, front: <h1>handsome</h1>, back: <p>잘생긴, 미남</p> },
    { id: 180, front: <h1>happen</h1>, back: <p>일어나다, 발생하다</p> },
    { id: 181, front: <h1>health</h1>, back: <p>건강</p> },
    { id: 182, front: <h1>heaven</h1>, back: <p>천국, 낙원</p> },
    { id: 183, front: <h1>height</h1>, back: <p>높이, 키</p> },
    { id: 184, front: <h1>helicopter</h1>, back: <p>헬리콥터</p> },
    { id: 185, front: <h1>highway</h1>, back: <p>고속도로</p> },
    { id: 186, front: <h1>honey</h1>, back: <p>꿀, 사랑</p> },
    { id: 187, front: <h1>hotel</h1>, back: <p>호텔</p> },
    { id: 188, front: <h1>hunger</h1>, back: <p>굶주림, 배고픔</p> },
    { id: 189, front: <h1>imagine</h1>, back: <p>상상하다</p> },
    { id: 190, front: <h1>increase</h1>, back: <p>증가하다</p> },
    { id: 191, front: <h1>industry</h1>, back: <p>산업</p> },
    { id: 192, front: <h1>interest</h1>, back: <p>관심, 이자</p> },
    { id: 193, front: <h1>invent</h1>, back: <p>발명하다</p> },
    { id: 194, front: <h1>island</h1>, back: <p>섬</p> },
    { id: 195, front: <h1>jeans</h1>, back: <p>청바지</p> },
    { id: 196, front: <h1>journey</h1>, back: <p>여행, 여정</p> },
    { id: 197, front: <h1>judge</h1>, back: <p>판사, 심판하다</p> },
    { id: 198, front: <h1>junior</h1>, back: <p>청소년, 후배, 하급의</p> },
    { id: 199, front: <h1>knowledge</h1>, back: <p>지식, 알고 있는 것</p> },
    { id: 200, front: <h1>label</h1>, back: <p>상표, 표지</p> },
    { id: 201, front: <h1>language</h1>, back: <p>언어</p> },
    { id: 202, front: <h1>laugh</h1>, back: <p>(소리 내어) 웃다, 웃음</p> },
    { id: 203, front: <h1>lawyer</h1>, back: <p>변호사</p> },
    { id: 204, front: <h1>leave</h1>, back: <p>떠나다, 남기다</p> },
    { id: 205, front: <h1>lemon</h1>, back: <p>레몬</p> },
    { id: 206, front: <h1>level</h1>, back: <p>수준, 평평한</p> },
    { id: 207, front: <h1>limit</h1>, back: <p>한계, 제한</p> },
    { id: 208, front: <h1>livingroom</h1>, back: <p>거실</p> },
    { id: 209, front: <h1>machine</h1>, back: <p>기계</p> },
    { id: 210, front: <h1>magic</h1>, back: <p>마법</p> },
    { id: 211, front: <h1>major</h1>, back: <p>주요한, 전공</p> },
    { id: 212, front: <h1>manage</h1>, back: <p>관리하다, 처리하다</p> },
    { id: 213, front: <h1>manner</h1>, back: <p>방식, 태도</p> },
    { id: 214, front: <h1>master</h1>, back: <p>주인, 스승</p> },
    { id: 215, front: <h1>matter</h1>, back: <p>문제, 물질</p> },
    { id: 216, front: <h1>maybe</h1>, back: <p>아마도, 어쩌면</p> },
    { id: 217, front: <h1>medical</h1>, back: <p>의료의, 의학의</p> },
    { id: 218, front: <h1>medicine</h1>, back: <p>약, 의학</p> },
    { id: 219, front: <h1>melon</h1>, back: <p>멜론</p> },
    { id: 220, front: <h1>mental</h1>, back: <p>정신의, 마음의</p> },
    { id: 221, front: <h1>message</h1>, back: <p>메시지, 메시지를 전하다</p> },
    { id: 222, front: <h1>metal</h1>, back: <p>금속</p> },
    { id: 223, front: <h1>method</h1>, back: <p>방법, 방식</p> },
    { id: 224, front: <h1>military</h1>, back: <p>군대의, 군사적인</p> },
    { id: 225, front: <h1>minute</h1>, back: <p>분, 아주 작은</p> },
    { id: 226, front: <h1>mirror</h1>, back: <p>거울</p> },
    { id: 227, front: <h1>modern</h1>, back: <p>현대의, 최신의</p> },
    { id: 228, front: <h1>moment</h1>, back: <p>순간, 때</p> },
    { id: 229, front: <h1>monitor</h1>, back: <p>화면, 감시하다</p> },
    { id: 230, front: <h1>motion</h1>, back: <p>움직임, 동작</p> },
    { id: 231, front: <h1>motor</h1>, back: <p>전동기, 자동차의</p> },
    { id: 232, front: <h1>muscle</h1>, back: <p>근육</p> },
    { id: 233, front: <h1>museum</h1>, back: <p>박물관</p> },
    { id: 234, front: <h1>mushroom</h1>, back: <p>버섯</p> },
    { id: 235, front: <h1>narrow</h1>, back: <p>좁은</p> },
    { id: 236, front: <h1>native</h1>, back: <p>원주민, 토착의</p> },
    { id: 237, front: <h1>noise</h1>, back: <p>소음, 소란</p> },
    { id: 238, front: <h1>nowadays</h1>, back: <p>요즘, 현재</p> },
    { id: 239, front: <h1>object</h1>, back: <p>물건, 대상</p> },
    { id: 240, front: <h1>ocean</h1>, back: <p>대양, 바다</p> },
    { id: 241, front: <h1>officer</h1>, back: <p>경찰관, 장교</p> },
    { id: 242, front: <h1>opera</h1>, back: <p>오페라, 공연</p> },
    { id: 243, front: <h1>operate</h1>, back: <p>작동하다, 운영하다</p> },
    { id: 244, front: <h1>order</h1>, back: <p>명령, 주문</p> },
    { id: 245, front: <h1>ordinary</h1>, back: <p>보통의, 평범한</p> },
    { id: 246, front: <h1>other</h1>, back: <p>다른, 다른 사람 혹은 것</p> },
    { id: 247, front: <h1>palace</h1>, back: <p>궁전</p> },
    { id: 248, front: <h1>parade</h1>, back: <p>퍼레이드, 행진</p> },
    { id: 249, front: <h1>patient</h1>, back: <p>환자, 인내심 있는</p> },
    { id: 250, front: <h1>pattern</h1>, back: <p>무늬, 패턴</p> },
    { id: 251, front: <h1>peace</h1>, back: <p>평화</p> },
    { id: 252, front: <h1>pepper</h1>, back: <p>후추, 고추</p> },
    { id: 253, front: <h1>perfect</h1>, back: <p>완벽한</p> },
    { id: 254, front: <h1>perhaps</h1>, back: <p>아마도, 어쩌면</p> },
    { id: 255, front: <h1>period</h1>, back: <p>기간, 시기</p> },
    { id: 256, front: <h1>physical</h1>, back: <p>신체의, 물질적인</p> },
    { id: 257, front: <h1>picnic</h1>, back: <p>소풍</p> },
    { id: 258, front: <h1>piece</h1>, back: <p>조각, 한 조각</p> },
    { id: 259, front: <h1>planet</h1>, back: <p>행성</p> },
    { id: 260, front: <h1>pocket</h1>, back: <p>주머니</p> },
    { id: 261, front: <h1>popular</h1>, back: <p>인기 있는, 대중적인</p> },
    { id: 262, front: <h1>possible</h1>, back: <p>가능한</p> },
    { id: 263, front: <h1>powder</h1>, back: <p>가루, 분말</p> },
    { id: 264, front: <h1>prepare</h1>, back: <p>준비하다</p> },
    { id: 265, front: <h1>price</h1>, back: <p>가격, 값</p> },
    { id: 266, front: <h1>pride</h1>, back: <p>자랑, 자부심</p> },
    { id: 267, front: <h1>prime</h1>, back: <p>최고의, 주요한</p> },
    { id: 268, front: <h1>prison</h1>, back: <p>감옥</p> },
    { id: 269, front: <h1>private</h1>, back: <p>사적인, 개인의</p> },
    { id: 270, front: <h1>prize</h1>, back: <p>상, 상품</p> },
    { id: 271, front: <h1>produce</h1>, back: <p>생산하다, 생산품</p> },
    { id: 272, front: <h1>profit</h1>, back: <p>이익</p> },
    { id: 273, front: <h1>promise</h1>, back: <p>약속하다, 약속</p> },
    { id: 274, front: <h1>propose</h1>, back: <p>제안하다, 청혼하다</p> },
    { id: 275, front: <h1>proud</h1>, back: <p>자랑스러운, 건장한</p> },
    { id: 276, front: <h1>prove</h1>, back: <p>증명하다</p> },
    { id: 277, front: <h1>public</h1>, back: <p>공공의, 대중의</p> },
    { id: 278, front: <h1>purple</h1>, back: <p>보라색</p> },
    { id: 279, front: <h1>puzzle</h1>, back: <p>퍼즐, 수수께끼</p> },
    { id: 280, front: <h1>quality</h1>, back: <p>품질</p> },
    { id: 281, front: <h1>quarter</h1>, back: <p>4분의 1, 분기</p> },
    { id: 282, front: <h1>quite</h1>, back: <p>꽤, 매우</p> },
    { id: 283, front: <h1>rainbow</h1>, back: <p>무지개</p> },
    { id: 284, front: <h1>raise</h1>, back: <p>올리다, 인상하다</p> },
    { id: 285, front: <h1>range</h1>, back: <p>범위, 영역</p> },
    { id: 286, front: <h1>rapid</h1>, back: <p>급속한, 신속한</p> },
    { id: 287, front: <h1>reach</h1>, back: <p>도달하다, 이르다</p> },
    { id: 288, front: <h1>real</h1>, back: <p>진짜의, 실제의</p> },
    { id: 289, front: <h1>reason</h1>, back: <p>이유, 이성</p> },
    { id: 290, front: <h1>receive</h1>, back: <p>받다, 수령하다</p> },
    { id: 291, front: <h1>recipe</h1>, back: <p>조리법, 요리법</p> },
    { id: 292, front: <h1>record</h1>, back: <p>기록, 녹음하다</p> },
    { id: 293, front: <h1>region</h1>, back: <p>지역, 지방</p> },
    { id: 294, front: <h1>regular</h1>, back: <p>정규의, 규칙적인</p> },
    { id: 295, front: <h1>relax</h1>, back: <p>편안해지다, 느긋해지다</p> },
    { id: 296, front: <h1>remain</h1>, back: <p>남다, 유지되다</p> },
    { id: 297, front: <h1>remind</h1>, back: <p>상기시키다, 생각나게 하다</p> },
    { id: 298, front: <h1>repeat</h1>, back: <p>반복하다</p> },
    { id: 299, front: <h1>report</h1>, back: <p>보고서, 보도하다</p> },
    { id: 300, front: <h1>research</h1>, back: <p>연구, 조사</p> },
    { id: 301, front: <h1>respect</h1>, back: <p>존경, 존중</p> },
    { id: 302, front: <h1>responsible</h1>, back: <p>책임이 있는</p> },
    { id: 303, front: <h1>result</h1>, back: <p>결과, 결과로 이루어지다</p> },
    { id: 304, front: <h1>rocket</h1>, back: <p>로켓</p> },
    { id: 305, front: <h1>rough</h1>, back: <p>거친, 험한</p> },
    { id: 306, front: <h1>round</h1>, back: <p>둥근, 라운드</p> },
    { id: 307, front: <h1>route</h1>, back: <p>길, 경로</p> },
    { id: 308, front: <h1>royal</h1>, back: <p>왕의, 왕실의</p> },
    { id: 309, front: <h1>salary</h1>, back: <p>월급, 급여</p> },
    { id: 310, front: <h1>sample</h1>, back: <p>표본, 견본</p> },
    { id: 311, front: <h1>satisfy</h1>, back: <p>만족시키다</p> },
    { id: 312, front: <h1>sauce</h1>, back: <p>소스</p> },
    { id: 313, front: <h1>scale</h1>, back: <p>규모, 척도</p> },
    { id: 314, front: <h1>scene</h1>, back: <p>장면, 현장</p> },
    { id: 315, front: <h1>schedule</h1>, back: <p>일정, 계획</p> },
    { id: 316, front: <h1>scream</h1>, back: <p>비명을 지르다, 소리치다</p> },
    { id: 317, front: <h1>screen</h1>, back: <p>화면, 칸막이</p> },
    { id: 318, front: <h1>search</h1>, back: <p>찾다, 수색하다</p> },
    { id: 319, front: <h1>secret</h1>, back: <p>비밀, 비밀의</p> },
    { id: 320, front: <h1>select</h1>, back: <p>선택하다</p> },
    { id: 321, front: <h1>sense</h1>, back: <p>감각, 의미</p> },
    { id: 322, front: <h1>sentence</h1>, back: <p>문장</p> },
    { id: 323, front: <h1>series</h1>, back: <p>연속, 시리즈</p> },
    { id: 324, front: <h1>several</h1>, back: <p>여러, 몇몇</p> },
    { id: 325, front: <h1>shadow</h1>, back: <p>그림자, 그늘</p> },
    { id: 326, front: <h1>shape</h1>, back: <p>모양, 형태</p> },
    { id: 327, front: <h1>share</h1>, back: <p>공유하다, 몫</p> },
    { id: 328, front: <h1>shave</h1>, back: <p>깎다, 면도하다</p> },
    { id: 329, front: <h1>sheep</h1>, back: <p>양</p> },
    { id: 330, front: <h1>sheet</h1>, back: <p>(침대의) 시트, 종이</p> },
    { id: 331, front: <h1>shine</h1>, back: <p>빛나다</p> },
    { id: 332, front: <h1>shoot</h1>, back: <p>쏘다, 촬영하다</p> },
    { id: 333, front: <h1>shore</h1>, back: <p>해변</p> },
    { id: 334, front: <h1>shoulder</h1>, back: <p>어깨</p> },
    { id: 335, front: <h1>shout</h1>, back: <p>소리치다, 외치다</p> },
    { id: 336, front: <h1>shower</h1>, back: <p>샤워, 소나기</p> },
    { id: 337, front: <h1>silver</h1>, back: <p>은, 은색</p> },
    { id: 338, front: <h1>simple</h1>, back: <p>단순한, 간단한</p> },
    { id: 339, front: <h1>single</h1>, back: <p>단일의, 하나의</p> },
    { id: 340, front: <h1>slave</h1>, back: <p>노예</p> },
    { id: 341, front: <h1>slide</h1>, back: <p>미끄러지다, 슬라이드</p> },
    { id: 342, front: <h1>smoke</h1>, back: <p>연기, 흡연하다</p> },
    { id: 343, front: <h1>smooth</h1>, back: <p>부드러운, 매끄러운</p> },
    { id: 344, front: <h1>snake</h1>, back: <p>뱀</p> },
    { id: 345, front: <h1>social</h1>, back: <p>사회적인, 사교적인</p> },
    { id: 346, front: <h1>society</h1>, back: <p>사회, 협회</p> },
    { id: 347, front: <h1>soldier</h1>, back: <p>군인, 병사</p> },
    { id: 348, front: <h1>solve</h1>, back: <p>해결하다</p> },
    { id: 349, front: <h1>source</h1>, back: <p>원천, 출처</p> },
    { id: 350, front: <h1>speech</h1>, back: <p>연설, 말</p> },
    { id: 351, front: <h1>spirit</h1>, back: <p>정신, 영혼</p> },
    { id: 352, front: <h1>sponsor</h1>, back: <p>후원자, 후원하다</p> },
    { id: 353, front: <h1>spread</h1>, back: <p>퍼지다, 확산되다</p> },
    { id: 354, front: <h1>square</h1>, back: <p>정사각형, 제곱</p> },
    { id: 355, front: <h1>stage</h1>, back: <p>단계, 무대</p> },
    { id: 356, front: <h1>stairs</h1>, back: <p>계단</p> },
    { id: 357, front: <h1>station</h1>, back: <p>역, 기지</p> },
    { id: 358, front: <h1>steal</h1>, back: <p>훔치다</p> },
    { id: 359, front: <h1>steam</h1>, back: <p>증기</p> },
    { id: 360, front: <h1>steel</h1>, back: <p>강철</p> },
    { id: 361, front: <h1>stomach</h1>, back: <p>위, 복부</p> },
    { id: 362, front: <h1>straight</h1>, back: <p>곧은, 직선의</p> },
    { id: 363, front: <h1>strange</h1>, back: <p>이상한, 낯선</p> },
    { id: 364, front: <h1>strawberry</h1>, back: <p>딸기</p> },
    { id: 365, front: <h1>stream</h1>, back: <p>개울, 흐름</p> },
    { id: 366, front: <h1>strike</h1>, back: <p>치다, 파업</p> },
    { id: 367, front: <h1>struggle</h1>, back: <p>투쟁하다, 고군분투하다</p> },
    { id: 368, front: <h1>studio</h1>, back: <p>방송국, 방송실</p> },
    { id: 369, front: <h1>subject</h1>, back: <p>주제, 과목</p> },
    { id: 370, front: <h1>succeed</h1>, back: <p>성공하다</p> },
    { id: 371, front: <h1>success</h1>, back: <p>성공, 성취</p> },
    { id: 372, front: <h1>sudden</h1>, back: <p>갑작스러운</p> },
    { id: 373, front: <h1>suffer</h1>, back: <p>고통받다, 겪다</p> },
    { id: 374, front: <h1>suggest</h1>, back: <p>제안하다, 암시하다</p> },
    { id: 375, front: <h1>super</h1>, back: <p>슈퍼, 훌륭한</p> },
    { id: 376, front: <h1>supper</h1>, back: <p>저녁식사</p> },
    { id: 377, front: <h1>support</h1>, back: <p>지원하다, 지지하다</p> },
    { id: 378, front: <h1>surface</h1>, back: <p>표면, 겉보기</p> },
    { id: 379, front: <h1>surprise</h1>, back: <p>놀라게 하다, 놀라움</p> },
    { id: 380, front: <h1>survive</h1>, back: <p>살아남다</p> },
    { id: 381, front: <h1>swallow</h1>, back: <p>삼키다, 제비</p> },
    { id: 382, front: <h1>sweater</h1>, back: <p>스웨터, 니트</p> },
    { id: 383, front: <h1>sweet</h1>, back: <p>달콤한, 사탕</p> },
    { id: 384, front: <h1>target</h1>, back: <p>목표, 대상</p> },
    { id: 385, front: <h1>technology</h1>, back: <p>기술</p> },
    { id: 386, front: <h1>teenage</h1>, back: <p>10대, 십 대의</p> },
    { id: 387, front: <h1>terrible</h1>, back: <p>끔찍한, 지독한</p> },
    { id: 388, front: <h1>thief</h1>, back: <p>도둑</p> },
    { id: 389, front: <h1>though</h1>, back: <p>비록, 그러나</p> },
    { id: 390, front: <h1>thousand</h1>, back: <p>천(1,000), 수많은</p> },
    { id: 391, front: <h1>tide</h1>, back: <p>조류, 파도</p> },
    { id: 392, front: <h1>title</h1>, back: <p>제목, 표제</p> },
    { id: 393, front: <h1>toast</h1>, back: <p>토스트, 건배</p> },
    { id: 394, front: <h1>toilet</h1>, back: <p>화장실, 변소</p> },
    { id: 395, front: <h1>tongue</h1>, back: <p>혀, 언어</p> },
    { id: 396, front: <h1>topic</h1>, back: <p>주제, 이야깃거리</p> },
    { id: 397, front: <h1>total</h1>, back: <p>총, 전체의</p> },
    { id: 398, front: <h1>towel</h1>, back: <p>수건</p> },
    { id: 399, front: <h1>tower</h1>, back: <p>탑, 기둥</p> },
    { id: 400, front: <h1>triangle</h1>, back: <p>삼각형</p> },
    { id: 401, front: <h1>trouble</h1>, back: <p>문제, 곤경</p> },
    { id: 402, front: <h1>uniform</h1>, back: <p>제복, 균일한</p> },
    { id: 403, front: <h1>university</h1>, back: <p>대학교, 대학</p> },
    { id: 404, front: <h1>upper</h1>, back: <p>상단의, 윗부분의</p> },
    { id: 405, front: <h1>valley</h1>, back: <p>계곡</p> },
    { id: 406, front: <h1>value</h1>, back: <p>가치</p> },
    { id: 407, front: <h1>view</h1>, back: <p>전망, 경치</p> },
    { id: 408, front: <h1>villa</h1>, back: <p>별장, 저택</p> },
    { id: 409, front: <h1>village</h1>, back: <p>마을</p> },
    { id: 410, front: <h1>vision</h1>, back: <p>시력, 시야</p> },
    { id: 411, front: <h1>volume</h1>, back: <p>부피, 양</p> },
    { id: 412, front: <h1>weapon</h1>, back: <p>무기</p> },
    { id: 413, front: <h1>whale</h1>, back: <p>고래</p> },
    { id: 414, front: <h1>wheel</h1>, back: <p>바퀴</p> },
    { id: 415, front: <h1>whisper</h1>, back: <p>속삭임</p> },
    { id: 416, front: <h1>whistle</h1>, back: <p>호루라기</p> },
    { id: 417, front: <h1>would</h1>, back: <p>~일 것이다 (will의 과거형)</p> },
    { id: 418, front: <h1>zebra</h1>, back: <p> 얼룩말</p> }
];

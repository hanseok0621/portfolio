export const projects = [
  {
    title: "데이터 전처리 도구",
    subtitle: "Data Processing Tool",
    description:
      "C# WinForms 기반 데이터 전처리 GUI 툴입니다. 결측치 처리, 이상치 제거, 스케일링, 인코딩, 데이터 분할 기능을 포함하여 복잡한 데이터 작업을 단순화했습니다.",
    tech: ["C#", "WinForms"],
    image: "/image/DataProcessingTool.jpg?height=400&width=600",
    codeUrl: "https://github.com/hanseok0621/DataPreprocessingTool",
    readme: `
# 데이터 전처리 도구 (C# WinForms)

데이터 분석 및 머신러닝을 위한 전처리 과정을 직관적 UI로 쉽게 처리할 수 있도록 제작된 Windows Forms 기반의 데스크톱 애플리케이션입니다.

---
## 🛠 개발 기간
- 2025년 5월 / 총 2주일

## 🧑개발 인원
- 1명

---
## ⚙️ 개발환경 및 사용 패키지

- **개발 언어**: C#
- **플랫폼**: .NET Framework (Windows Forms)
- **IDE**: Visual Studio

- **CsvHelper**  
  CSV 파일 로딩 및 저장  
  👉 https://www.nuget.org/packages/CsvHelper

- **EPPlus**  
  Excel(.xlsx) 파일 읽기/쓰기  
  👉 https://www.nuget.org/packages/EPPlus

- **MathNet.Numerics**  
  평균, 표준편차, IQR 등 통계 계산  
  👉 https://www.nuget.org/packages/MathNet.Numerics
  
---
## ▶️ 실행 방법
📦 [다운로드](https://github.com/user-attachments/files/20218098/Release.zip) (압축 해제 후  DataPreprocessingTool.exe 파일 실행) 또는
1. Visual Studio에서 \`DataPreprocessingTool.sln\` 열기
2. \`F5\` 또는 \`디버깅 없이 시작(Ctrl+F5)\`로 실행
3. 상단 버튼을 통해 기능 사용

---
## 🔧 주요 기능
| 기능 | 설명 |
|------|------|
|  파일 불러오기 | Excel(.xlsx), CSV(.csv) 파일을 DataGridView에 로드 |
|  기본 정보 요약 | 컬럼 수, 결측치 수, 데이터 타입 등 자동 요약 |
|  열 제거 | 선택한 컬럼 제거 |
|  결측치 처리 | 평균, 중앙값, 최빈값 대체 또는 삭제 방식 선택 |
|  이상치 처리 | IQR 방식으로 이상치 탐지 및 제거 |
|  인코딩 | Label Encoding, One-Hot Encoding |
|  스케일링 | Min-Max, Z-Score 방식 선택 |
|  데이터 분할 | 학습/검증/테스트 비율 설정 후 분할 |
|  저장하기 | 전처리된 데이터를 저장 가능 (CSV/Excel) |
---
## 🖼️ 화면 예시
![데이터 전처리 툴 화면](https://github.com/hanseok0621/DataPreprocessingTool/blob/master/screenshot.png?raw=true)
---
## 📂 프로젝트 구조
\`\`\`
/DataPreprocessingTool
├── Forms
│   ├── MainForm.cs
│   ├── ColumnRemoveForm.cs
│   ├── MissingValueForm.cs
│   ├── OutlierForm.cs
│   ├── EncodingForm.cs
│   ├── ScalingForm.cs
│   ├── SplitForm.cs
│   └── InfoForm.cs
│
├── FileLoader
│   ├── DataSaver.cs
│   ├── CsvFileLoader.cs
│   └── ExcelFileLoader.cs
│
├── Program.cs
└── DataPreprocessingTool.csproj
\`\`\`

    `
  },
  {
    title: "웹 기반 갤러그 게임",
    subtitle: "Canvas Game Development",
    description:
      "Canvas와 JavaScript를 활용한 잠수함 테마의 슈팅 게임입니다. 다양한 적, 보스전, 사운드, UI 구성을 통해 클래식한 게임을 웹 기술로 재현했습니다.",
    tech: ["JavaScript", "HTML5", "Canvas"],
    image: "/image/DeepSeaInvaders.jpg?height=400&width=600",
    projectUrl: "https://hanseok0621.github.io/DeepSeaInvaders/",
    codeUrl: "https://github.com/hanseok0621/DeepSeaInvaders",
    readme: `
# 🌊 Deep Sea Invaders

잠수함을 조종하여 바닷속 적들을 무찌르는 HTML5 Canvas 기반 슈팅 게임입니다. 다양한 패턴의 적들과 보스가 등장하며, 점점 어려워지는 레벨을 클리어하는 것이 목표입니다.

## 🛠 개발 기간
- 2025년 4월 / 총 1주일

## 🧑개발 인원
- 1명

## 🕹️ 게임 소개

- 플레이어는 잠수함을 좌우로 이동하며 공격할 수 있습니다.
- 해파리, 전기 해파리, 갑옷 게 등 다양한 적이 등장합니다.
- 일정 웨이브를 클리어하면 강력한 꽃게 보스가 나타납니다.
- 레벨이 올라갈수록 적의 속도와 난이도가 증가합니다.
- 목숨이 모두 소진되면 게임 오버입니다.

## 🛠 사용 기술

- HTML5, canvas API
- CSS
- JavaScript 

## 🎮 조작법

| 키 | 동작 |
|----|------|
| ←  | 왼쪽으로 이동 |
| →  | 오른쪽으로 이동 |
| Space | 총알 발사 |

## 📸 게임 화면

### 시작 화면
![startImage.png](https://github.com/hanseok0621/DeepSeaInvaders/raw/main/readme/startImage.png)

### 게임 오버
![overImage.png](https://github.com/hanseok0621/DeepSeaInvaders/raw/main/readme/overImage.png)

### 게임 클리어
![clearImage.png](https://github.com/hanseok0621/DeepSeaInvaders/raw/main/readme/clearImage.png)

## 📁 파일 구조

\`\`\`
Deep-Sea-Invaders/
│
├── index.html       # 게임 화면 및 오디오 요소 포함
├── style.css        # 배경, UI, 버튼 등 시각 스타일 정의
├── script.js        # 게임 로직 및 적/보스/충돌 처리 등
├── images/          # 게임 이미지 리소스 (배경, 잠수함, 적, 보스 등등)
└── sounds/          # 게임 사운드 리소스 (총알, 폭발)
\`\`\`

    `
  },
  {
    title: "영화 정보 웹사이트",
    subtitle: "Web Application",
    description:
      "TMDb API를 연동한 영화 정보 웹사이트입니다. 검색, 카테고리 필터, 페이지네이션을 지원하며, 사용자가 쉽게 영화 정보를 탐색할 수 있도록 구현했습니다.",
    tech: ["jQuery", "JavaScript", "REST API", "HTML", "CSS"],
    image: "/image/CineBox.jpg?height=400&width=600",
    projectUrl: "https://hanseok0621.github.io/CINEBOX/",
    codeUrl: "https://github.com/hanseok0621/CINEBOX",
    readme: `
# 🎬 CineBox — 지금, 영화의 세계로!

CineBox는 최신 영화 정보를 한눈에 확인할 수 있는 직관적이고 감각적인 영화 정보 웹앱입니다.

## 🛠 개발 기간
- 2025년 4월 / 총 1주일

## 🧑개발 인원
- 1명

## 🛠 사용 기술

- HTML + CSS + JavaScript
- jQuery for Ajax & 이벤트 처리
- [TMDB API](https://www.themoviedb.org/documentation/api)로 데이터 제공

## 🖼 인터페이스 구성

- 🎬 **카테고리 버튼**: 원하는 장르의 영화 리스트로 즉시 이동  
- 🔎 **검색 창**: 제목을 입력해 원하는 영화 검색  
- 🎥 **영화 카드**: 포스터, 제목, 개봉일, 평점 등 핵심 정보 표시  
- 📑 **모달 팝업**: 상세 설명과 감독, 배우 리스트  
- ⏪⏩ **페이지 이동**: 좌우 버튼 및 페이지 번호로 빠른 탐색  

## 🌟 주요 기능

| 기능 | 설명 |
|------|------|
| 🎞 카테고리별 영화 조회 | 현재 상영작 / 개봉 예정작 / 평점 높은 작품으로 분류하여 확인 가능 |
| 🔍 영화 검색 | 제목으로 빠르게 원하는 영화 검색 |
| 🧾 상세 정보 모달 | 감독, 출연진, 줄거리까지 한 번에 확인 |
| 📄 페이지네이션 | 5개 단위의 깔끔한 페이지 구성 |

## 🖼️ 스크린샷
![image](https://github.com/user-attachments/assets/25636b2e-9082-4a37-b1a9-5df70746ca92)
![image](https://github.com/user-attachments/assets/202bac6c-381c-4308-9276-a46bbf552265)

## 📁 프로젝트 구조

\`\`\`
cinebox/
├── index.html        // 메인 HTML
├── style.css         // 스타일 정의
├── script.js         // 주요 기능 스크립트
└── config.js         // TMDB API Key
\`\`\`

## 🧩 핵심 코드 스니펫

### 🔸 영화 정보 불러오기

\`\`\`javascript
function fetchMovies(category, page = 1) {
  const url = isSearchMode 
    ? \`https://api.themoviedb.org/3/search/movie?query=\${searchQuery}\`
    : \`https://api.themoviedb.org/3/movie/\${category}\`;
  
  $.ajax({ url, method: 'GET', success: renderMovies });
}
\`\`\`

### 🔸 영화 상세 정보 모달

\`\`\`javascript
function fetchMovieDetail(id) {
  const detailUrl = \`https://api.themoviedb.org/3/movie/\${id}\`;
  const creditsUrl = \`https://api.themoviedb.org/3/movie/\${id}/credits\`;

  $.when($.get(detailUrl), $.get(creditsUrl)).done(function(detail, credits) {
    // 감독, 배우 정보 포함한 모달 생성
  });
}
\`\`\`
    `
  },
  {
    title: "가상회사 HANSUNG 웹페이지",
    subtitle: "Static Website",
    description:
      "HTML과 CSS를 기반으로 제작한 가상회사 소개 웹페이지입니다. 깔끔한 디자인과 반응형 레이아웃을 통해 회사의 브랜드 이미지를 효과적으로 전달합니다.",
    tech: ["HTML", "CSS"],
    image: "/image/HANSUNG.jpg?height=400&width=600",
    projectUrl: "https://hanseok0621.github.io/HANSUNG/",
    codeUrl: "https://github.com/hanseok0621/HANSUNG",
    readme: `
# HANSUNG
가상회사 HANSUNG 을 소개하는 정적 웹페이지

## 개발기간
- 2025/03 1주일

## 개발인원
- 1명

## 페이지 구성
1. HOME
- HANSUNG 페이지의 첫 화면
2. INTRODUCTION
- HANSUNG이 어떤 회사인지 소개하는 페이지
3. MODEL
- HANSUNG을 대표하는 제품들 소개
4. SKILL
- HANSUNG이 보유하고 있는 기술 소개

1. HOME
![image](https://github.com/user-attachments/assets/b2df712e-8d98-48e3-acac-4cd29fd46e78)
2. INTRODUCTION
![image](https://github.com/user-attachments/assets/4c340583-a932-4f52-b615-f92445da7b6b)
3. MODEL
![image](https://github.com/user-attachments/assets/7d63037a-215a-40d5-9346-34d831c66904)
4. SKILL
![image](https://github.com/user-attachments/assets/f3952168-df3e-45a2-a64c-d99e004e7c6f)
    `
  },
  {
    title: "두더지 게임 애플리케이션",
    subtitle: "Mobile Game Development",
    description:
      "App Inventor를 활용하여 제작한 안드로이드 게임입니다. 게임플레이와 사용자 경험에 중점을 두어 개발했습니다.",
    tech: ["App Inventor"],
    image: "/image/MoleGame.jpg?height=400&width=600",
    projectUrl: "https://drive.google.com/file/d/1op5BIuE5MJT-_fJEFNyU7bdXSz4Ky6-p/view?usp=drive_link",
    codeUrl: "https://encouraging-helium-af7.notion.site/Mole-Game-1a076763e8c6805faeb0df658b474804?pvs=74",
    readme: `
# 두더지게임(Mole Game)

(2025.02.14~21)

## 1️⃣게임설명

- 시작을 누르면 9개의 구멍에서 무작위로 두더지가 나왔다가 사라짐.
- 두더지가 사라지기 전에 터치하면 점수를 1점 얻음.
- 제한시간은 60초, 만약 최고 점수를 찍으면 점수가 저장이 됨.
- 게임을 다시 시작하려면 초기화를 누르고 시작 버튼 터치.

## 2️⃣실행화면
![image](https://encouraging-helium-af7.notion.site/image/attachment%3A17e9dd00-c111-488d-be39-bc614b212aeb%3Aimage.png?table=block&id=1a076763-e8c6-8005-bbc4-d11be8cb5362&spaceId=e894d246-c86c-4297-a3be-10211c8a8b71&width=580&userId=&cache=v2)
    `
  },
  {
    title: "파이썬 데이터 시각화",
    subtitle: "Data Visualization",
    description:
      "Python을 활용한 제조 시스템 데이터 시각화 프로젝트입니다. 데이터를 직관적인 차트와 그래프로 변환하여 인사이트를 도출할 수 있도록 구현했습니다.",
    tech: ["Python", "Data Analysis"],
    image: "/image/Python.jpg?height=400&width=600",
    codeUrl: "https://github.com/hanseok0621/Python-Data-Visualization",
    readme: `
# Hybrid Manufacturing Systems (HMS) Dataset README

## 🛠 프로젝트 기간
- 2025년 4월 / 총 1주일

## 📂 Dataset Overview
본 프로젝트에서 사용된 데이터셋은 Kaggle에서 제공하는 "Manufacturing Production Data"입니다.

🔗 [https://www.kaggle.com/datasets/ziya07/manufacturing-production-data](https://www.kaggle.com/datasets/ziya07/manufacturing-production-data)

이 데이터셋은 하이브리드 제조 시스템(HMS)에서 수집된 생산 계획 및 최적화 데이터를 포함하고 있으며, 작업 스케줄링, 자원 할당, 효율성 최적화에 중점을 두고 있습니다.

본 데이터셋은 생산 공정의 효율성 향상을 위한 자원 배분 및 의사결정을 지원하기 위해 설계되었습니다.

## 📅 Features (Key Columns)
| Column Name | Description | Data Type |
|:---|:---|:---|
| Operation_Type | 작업 종류 (Grinding, Additive, Lathe 등) | object (string) |
| Processing_Time | 가공 시간 (분 단위 추정) | int64 |
| Energy_Consumption | 에너지 소비량 | float64 |
| Machine_Availability | 기계 가용성 (%) | int64 |
| Optimization_Category | 생산 효율 범주 (Low, Moderate, High, Optimal) | object (string) |

## 📑 Data Description

- **Operation_Type**: 수행된 제조 작업의 종류를 나타냅니다. 주요 값으로는 Grinding, Additive, Lathe, Milling, Drilling 이 있습니다.
- **Processing_Time**: 한 작업을 완료하는 데 걸린 시간입니다. 단위는 분(minute)이며, 대략 10~120분 범위에 분포합니다.
- **Energy_Consumption**: 작업 과정에서 소비된 에너지량입니다. 단위는 kWh로 추정되며, 에너지 효율성과 관련된 주요 지표입니다.
- **Machine_Availability**: 특정 기간 동안 기계가 사용 가능했던 비율을 나타냅니다. 0~100%로 표현되며, 높은 수치는 생산 효율이 좋음을 의미할 수 있습니다.
- **Optimization_Category**: 생산 최적화 수준을 분류한 범주형 변수입니다. Low, Moderate, High, Optimal 네 단계로 구분됩니다.

## 📊 Target Variable: Optimization_Category
Optimization_Category는 각 작업의 최적화 수준을 4개 범주로 구분합니다:
- **Low Efficiency (0-40점)**: 높은 지연, 실패율
- **Moderate Efficiency (41-70점)**: 수용 가능하지만 최적은 아님
- **High Efficiency (71-90점)**: 약간의 비효율성은 있으나 잘 최적화됨
- **Optimal Efficiency (91-100점)**: 거의 이상적인 상태, 최소한의 지연

※ 내부적으로 점수(0~100)가 존재하지만, 공개된 데이터에는 점수가 아닌 "범주(label)"만 제공됩니다.

## 💡 Hypothesis Testing Summary
본 프로젝트는 HMS 데이터를 활용하여 기초적인 데이터 분석 연습을 위한 가설 설정과 시각화를 수행하였습니다.

### ① 기계 가용성과 최적화 수준
![Machine Availability](https://github.com/hanseok0621/Python-Data-Visualization/raw/main/images/machine_availability.png)
- **가설**: 기계 가용성이 높을수록 최적화 수준준도 높을 것이다.
- **결과**: 박스플롯 해석 결과, 범주 간 중앙값 차이가 작고 IQR 겹침이 커서 **경향이 뚜렷하지 않음**

### ② 에너지 소비량과 최적화 수준
![Energy Consumption](https://github.com/hanseok0621/Python-Data-Visualization/raw/main/images/energy_consumption.png)
- **가설**: 에너지 소비량이 많을수록 최적화 수준이 낮을 것이다.
- **결과**: 박스플롯 상에서 Low Efficiency는 소비량이 많고 Optimal은 적은 경향이 뚜렷하여 **지지됨**

### ③ 가공 시간과 최적화 수준
![Processing Time](https://github.com/hanseok0621/Python-Data-Visualization/raw/main/images/processing_time.png)
- **가설**: 가공 시간이 길수록 최적화 수준이 낮을 것이다.
- **결과**: Optimal Efficiency가 오히려 더 긴 경우도 있어 **가설은 반박됨**

### ④ 작업 종류와 최적화 수준
![Operation Type](https://github.com/hanseok0621/Python-Data-Visualization/raw/main/images/operation_type.png)
- **가설**: 작업 종류에 따라 최적화 수준에 차이가 있을 것이다.
- **결과**: 건수 기준 카운트플롯에서는 차이가 있어 보였지만, 비율 기준으로 보면 큰 차이가 없어 **가설은 약하게 지지됨**

## 🔍 Insights
- 단일 수치나 시각화만으로 결론을 내리기보다는, **여러 시각적 요소와 분포 특성들을 함께 종합적으로 고려해야** 신뢰도 높은 분석 결과를 도출할 수 있습니다.
- 데이터 분석에서는 가설이 맞지 않더라도 **그 과정 자체가 의미 있는 통찰을 제공합니다.**
- 본 프로젝트는 시각화 해석 능력, 데이터 기반 사고력 향상에 중점을 둔 연습이었습니다.

    `
  },
  {
    title: "포트폴리오",
    subtitle: "React Portfolio",
    description:
      "React와 TypeScript 기반으로 제작한 개인 포트폴리오입니다. 모던한 디자인과 반응형 레이아웃을 통해 개발 역량과 프로젝트를 소개합니다.",
    tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    image: "/image/Portfolio.jpg?height=400&width=600",
    codeUrl: "https://github.com/hanseok0621/portfolio",
    readme: `Ing..`
  },
]
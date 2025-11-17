

# Vibe Finance Hub

"데이터로 회계를 단순하게, 재무를 자동으로."

---

## 프로젝트 개요
Vibe Finance Hub는 매출, 비용, 영수증, 세금계산서, 정산 내역을 한 곳에서 관리할 수 있는 회계·재무 자동화 웹앱입니다.

## 프리미엄 UI/UX 리뉴얼 (완성 ✅)

### 디자인 시스템
- 프리미엄 컴러 팔레트 (그라디언트, 상태별 색상)
- Inter/Poppins 프리미엄 폰트 적용
- 다크모드/라이트모드 완벽 지원

### 고급 애니메이션
- 마이크로 인터랙션 (hover, focus, active)
- 페이지 진입 애니리이션 (fade-in, slide-up)
- 부드러운 트랜지션 효과

### 인터랙티브 컴포넌트
- Heroicons/Lucide 아이콘 시스템
- 프리미엄 Toast 알림
- 테마 토글 (라이트/다크/시스템)
- 커스텀 차트 툴팁

### 완벽한 반응형
- 모바일/태블릿/데스크탑 최적화
- 터치 친화적 인터페이스 (44px 최소 터치 영역)
- 모바일 햄버거 네비게이션
- 적응형 그리드 레이아웃

### 접근성 준수
- ARIA 속성 완벽 적용
- 키보드 네비게이션 지원
- 스크린 리더 지원
- 색상 대비 최적화

## 주요 기능
- 대시보드: 월별/분기별 매출·비용·순이익 시각화
- 거래 등록/관리: 매출/비용 폼, 거래내역 테이블, 검색/필터
- 보고서: 월간 재무요약 PDF 생성
- 반응형 UI: 프리미엄 스타일, TailwindCSS 기반 기업형 레이아웃
- 차트: Recharts 기반 매출/비용/순이익 그래프
- 권한/인증: 관리자/사용자 권한 분리(추후)
- OCR/문서처리: 영수증 이미지 OCR, 세금계산서 PDF 업로드
- 알림/리마인더: 마감 일정 등록/관리 및 알림 내역 표시

## 폴더 구조
```
/src/components   # 주요 UI 컴포넌트
/src/app          # 페이지 라우팅
/public           # 정적 파일 및 이미지
```

## 개발/실행 방법
```
npm install
npm run dev
```

## 기술 스택
- **Frontend**: Next.js 16.x (TypeScript)
- **Styling**: TailwindCSS 3.x (프리미엄 스타일 가이드)
- **Icons**: Heroicons, Lucide React
- **Charts**: Recharts (커스텀 애니메이션)
- **PDF**: jsPDF (보고서 생성)
- **State**: React Context API (테마 관리)

## 향후 추가 예정
- Firebase 연동 (Auth, Firestore, Storage, Functions)
- 관리자 승인/알림 기능
- 실데이터 연동 및 배포

## 데모 링크
- **Live Demo**: https://gen-project-02-c4dhxt3uw-dongyeol-jungs-projects.vercel.app 🚀
- **Local Dev**: http://localhost:3000
- **GitHub**: https://github.com/mxten777/gen_project_02
- **Vercel Dashboard**: https://vercel.com/dongyeol-jungs-projects/gen-project-02/4Ghpz17G2Qdw89ywTEEvAVutccWJ

---
문의: vibe@company.com

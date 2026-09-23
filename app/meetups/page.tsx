'use client'

import Link from 'next/link'
import { ArrowUpRight, ChevronDown, Filter, MapPin, Search, SlidersHorizontal, UserRound } from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.png-uwI5A8ZNvAMkMsETNQ1r3EmSiqyoOq.webp'

const meetups = [
  { title: '퇴근 후 한강 러닝', category: '운동', place: '반포 한강공원', time: '오늘 19:30', people: '4 / 8명', color: 'from-[#c7ecff] to-[#6eb4f8]' },
  { title: '성수 카페에서 책 읽기', category: '취미', place: '성수동', time: '토요일 14:00', people: '2 / 5명', color: 'from-[#e4d8ff] to-[#9b8bf1]' },
  { title: '주말 사진 산책', category: '문화', place: '서울숲', time: '일요일 11:00', people: '6 / 10명', color: 'from-[#d6e3ff] to-[#7898ed]' },
  { title: '초보자를 위한 클라이밍', category: '운동', place: '잠실 클라이밍장', time: '일요일 15:00', people: '3 / 6명', color: 'from-[#d4f3eb] to-[#70c9c0]' },
]

export default function MeetupsPage() {
  return (
    <main className="min-h-screen bg-[#f8fbff] text-[#17243f]">
      <header className="mx-auto flex h-[82px] max-w-[1320px] items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5" aria-label="이루 홈"><img src={logoUrl} alt="이루 로고" className="h-9 w-9 object-contain" /><span className="text-[22px] font-bold tracking-[-0.08em]">이루</span></Link>
        <nav className="hidden items-center gap-9 text-[14px] font-medium text-[#74809a] md:flex"><Link href="/introduction" className="transition hover:text-[#478bea]">이루 소개</Link><Link href="/meetups" className="font-bold text-[#579cf0]">모임 찾기</Link><span>이용 안내</span></nav>
        <button className="flex items-center gap-2 rounded-full border border-[#e4eaf5] bg-white px-4 py-2.5 text-sm font-semibold shadow-[0_4px_16px_rgba(59,91,140,0.06)]"><UserRound size={16} className="text-[#6a9df2]" /> 로그인</button>
      </header>

      <section className="mx-auto max-w-[1320px] px-6 pb-12 pt-10 lg:px-10 lg:pt-14">
        <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#6b9cf1]">DISCOVER MEETUPS</p><h1 className="text-[38px] font-bold tracking-[-0.065em] sm:text-[50px]">어떤 모임을 <span className="gradient-text">이루어볼까요?</span></h1><p className="mt-3 text-[15px] text-[#8b97ac]">내 주변의 모임을 둘러보고, 마음에 드는 활동을 찾아보세요.</p></div><button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#579cf0] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_22px_rgba(87,156,240,0.2)]"><Filter size={16} /> 모임 만들기</button></div>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <section className="rounded-[28px] border border-[#e9eff8] bg-white p-5 shadow-[0_12px_35px_rgba(71,112,170,0.07)] sm:p-7"><div className="mb-5 flex items-center justify-between"><div><h2 className="text-[21px] font-bold tracking-[-0.04em]">모임 목록</h2><p className="mt-1 text-sm text-[#96a1b6]">서울 지역 · 24개의 모임</p></div><button className="rounded-xl border border-[#edf1f7] p-2.5 text-[#7d8aa4]" aria-label="상세 필터"><SlidersHorizontal size={18} /></button></div><div className="mb-4 flex items-center gap-2 rounded-2xl bg-[#f5f8fc] px-4 py-3.5 text-[#8e9ab0]"><Search size={18} /><span className="text-sm">관심 있는 모임을 검색해보세요</span></div><div className="mb-6 flex gap-2 overflow-x-auto pb-1 text-sm"><button className="shrink-0 rounded-full bg-[#e8f3ff] px-4 py-2 font-semibold text-[#438de9]">전체</button>{['운동','취미','문화','스터디','맛집'].map((category) => <button key={category} className="shrink-0 rounded-full border border-[#edf1f7] px-4 py-2 text-[#8290a8]">{category}</button>)}</div><div className="space-y-3">{meetups.map((meetup) => <article key={meetup.title} className="group flex items-center gap-4 rounded-2xl border border-[#eef2f7] p-3.5 transition hover:-translate-y-0.5 hover:border-[#c9e1fb] hover:shadow-sm"><div className={`h-[62px] w-[62px] shrink-0 rounded-[18px] bg-gradient-to-br ${meetup.color}`} /><div className="min-w-0 flex-1"><div className="mb-1 flex items-center gap-2"><h3 className="truncate text-[15px] font-bold">{meetup.title}</h3><span className="hidden rounded-full bg-[#f3f6fb] px-2 py-0.5 text-[10px] font-semibold text-[#8793a9] sm:inline">{meetup.category}</span></div><p className="mb-1 text-xs text-[#8d9ab1]"><MapPin size={12} className="mr-1 inline text-[#76aaf2]" />{meetup.place} · {meetup.time}</p><p className="text-xs font-medium text-[#6c9bea]">{meetup.people}</p></div><ArrowUpRight size={17} className="text-[#c1cada] transition group-hover:text-[#6ba6f3]" /></article>)}</div><button className="mt-5 flex w-full items-center justify-center gap-1 rounded-2xl py-3 text-sm font-semibold text-[#6c9bea] hover:bg-[#f5f9ff]">더 많은 모임 보기 <ChevronDown size={16} /></button></section>
          <section className="relative min-h-[620px] overflow-hidden rounded-[28px] border border-[#e3edf8] bg-[#eaf4fb] shadow-[0_12px_35px_rgba(71,112,170,0.07)]" aria-label="모임 지도"><div className="map-grid absolute inset-0 opacity-70" /><div className="road road-one" /><div className="road road-two" /><div className="road road-three" /><div className="absolute left-5 top-5 flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm sm:left-7 sm:top-7"><MapPin size={15} className="text-[#68a7ee]" /><div><p className="text-[11px] font-semibold text-[#94a0b5]">현재 위치</p><p className="mt-0.5 text-sm font-bold">서울특별시</p></div></div>{[['30%','25%','sky','12명'],['39%','69%','violet','8명'],['62%','44%','indigo','16명'],['75%','77%','sky','5명'],['78%','21%','violet','7명']].map(([top,left,color,count], index) => <button key={index} className="map-pin absolute" style={{ top, left }} aria-label={`${count} 참여 모임 위치`}><span className={`pin-dot ${color}`} /><span className="pin-label">{count}</span></button>)}<div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-7"><div className="flex items-center gap-2 text-sm font-semibold"><span className="h-2.5 w-2.5 rounded-full bg-[#62abf5]" /> 지도에서 24개 모임 발견</div><button className="text-xs font-bold text-[#6199ed]">내 위치로 이동</button></div></section>
        </div>
      </section>
    </main>
  )
}

// This page is a visual shell; search, filters, authentication, and map data are intentionally non-functional.
export const dynamic = 'force-static'

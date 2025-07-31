import type { Metadata } from "next"
import JiroInspireLP from "../jiro-inspire-lp"

export const metadata: Metadata = {
  metadataBase: new URL("https://buta.aizubrandhall-lp2.com"),
  title: {
    default: "【公式】パーフェクトラーメンBUTA【S】｜自宅で本格二郎系インスパイアラーメン通販・お取り寄せ",
    template: "%s | 会津ブランド館",
  },
  description:
    "ご自宅で人気の二郎系インスパイアラーメンを！日清製粉オーション麺と濃厚豚骨スープ、極厚チャーシューで再現。マニアも納得の本格派。2食セット1,250円から全国送料無料でお届け。",
  keywords:
    "二郎系ラーメン,二郎インスパイア,極太麺,ワシワシ麺,濃厚スープ,チャーシュー,通販,お取り寄せ,送料無料,会津ブランド館,本格ラーメン,豚骨スープ,ニンニク,背脂",
  authors: [{ name: "会津ブランド館" }],
  creator: "会津ブランド館",
  publisher: "会津ブランド館",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "パーフェクトラーメンBUTA【S】｜自宅で味わう本格二郎系インスパイアラーメン",
    description:
      "ご自宅で人気の二郎系インスパイアラーメンを！日清製粉オーション麺と濃厚豚骨スープ、極厚チャーシューで再現。マニアも納得の本格派。2食セット1,250円から全国送料無料でお届け。",
    url: "https://buta.aizubrandhall-lp2.com",
    siteName: "会津ブランド館",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%93%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-8i9tNF8oJTudOoVsRSz5ZkgXYTle7r.jpeg",
        width: 1200,
        height: 630,
        alt: "パーフェクトラーメンBUTA【S】- 二郎インスパイア系ラーメン",
        type: "image/jpeg",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aizu_brand_kan",
    creator: "@aizu_brand_kan",
    title: "パーフェクトラーメンBUTA【S】｜自宅で味わう本格二郎系インスパイアラーメン",
    description:
      "ご自宅で人気の二郎系インスパイアラーメンを！日清製粉オーション麺と濃厚豚骨スープ、極厚チャーシューで再現。マニアも納得の本格派。2食セット1,250円から全国送料無料でお届け。",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%93%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-8i9tNF8oJTudOoVsRSz5ZkgXYTle7r.jpeg",
        alt: "パーフェクトラーメンBUTA【S】- 二郎インスパイア系ラーメン",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "G-2EJ6JCB9N2",
  },
  alternates: {
    canonical: "https://buta.aizubrandhall-lp2.com",
  },
  category: "food",
  classification: "ラーメン通販",
  other: {
    "product:price:amount": "1250",
    "product:price:currency": "JPY",
    "product:availability": "in stock",
    "product:condition": "new",
    "product:retailer_item_id": "jiro-inspire-ramen-2set",
    "product:brand": "会津ブランド館",
    "product:category": "食品・グルメ > ラーメン",
  },
}

export default function Page() {
  return <JiroInspireLP />
}

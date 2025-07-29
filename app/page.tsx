import type { Metadata } from "next"
import JiroRamenLP from "./jiro-ramen-lp"

export const metadata: Metadata = {
  title: "パーフェクトラーメン二郎インスパイア｜本格二郎系ラーメン通販【会津ブランド館】送料無料",
  description:
    "人気の二郎インスパイアをご家庭で！豚ベースの濃厚スープと日清製粉オーション100%の極太ワシワシ麺。エキス不使用の本物素材で作る中毒性の高い一杯。楽天★4.56点、Yahoo★4.46点の高評価。",
  keywords:
    "二郎系ラーメン,二郎インスパイア,極太麺,濃厚スープ,通販,お取り寄せ,送料無料,会津ブランド館,日清製粉オーション,低加水麺,ワシワシ麺,チャーシュー,マシマシ,本格ラーメン",
  authors: [{ name: "会津ブランド館" }],
  creator: "会津ブランド館",
  publisher: "会津ブランド館",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "パーフェクトラーメン二郎インスパイア｜人気の二郎系をご家庭で",
    description:
      "豚ベースの濃厚スープと極太ワシワシ麺で再現する本格二郎インスパイア。エキス不使用の本物素材、職人手作りの限定製造。楽天★4.56点の高評価。",
    url: "https://your-domain.com/jiro-ramen",
    siteName: "会津ブランド館",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "パーフェクトラーメン二郎インスパイア - 濃厚豚骨スープに極太麺、分厚いチャーシュー、山盛り野菜をトッピング",
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
    title: "パーフェクトラーメン二郎インスパイア｜本格二郎系ラーメン通販",
    description:
      "人気の二郎インスパイアをご家庭で！豚ベースの濃厚スープと極太ワシワシ麺。エキス不使用の本物素材で作る中毒性の高い一杯。",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        alt: "パーフェクトラーメン二郎インスパイア - 本格二郎系ラーメン",
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
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://your-domain.com/jiro-ramen",
  },
  category: "food",
  classification: "ラーメン通販",
  other: {
    "product:price:amount": "1580",
    "product:price:currency": "JPY",
    "product:availability": "in stock",
    "product:condition": "new",
    "product:retailer_item_id": "jiro-ramen-3set",
    "product:brand": "会津ブランド館",
    "product:category": "食品・グルメ > ラーメン",
  },
}

export default function Page() {
  return <JiroRamenLP />
}

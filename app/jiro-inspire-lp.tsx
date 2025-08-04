"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Star } from "lucide-react"
import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export default function JiroInspireLP() {
  const [currentReviews, setCurrentReviews] = useState<any[]>([])

  const reviews = [
    {
      source: "Yahoo",
      comment:
        "早いもので、二郎歴40年を超えた今でも、夜な夜なインスパイアぽい品を見つけては取り寄せているメタボ一歩手前の者だが、本品は多少麺がツルッとしており、なんと言ってもスープが作り込んでありとても美味かった。個人的にはパサついてある方が好みだが、これはこれで中々の逸品だ。",
      rating: 4,
      name: "お客様",
      category: "ラーメンフリークの皆様",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E5%AE%A2%E6%A7%98%E3%81%AE%E5%A3%B0%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-3xflOgFdlK83CkQ8uDn5oNxc4rsVLN.jpeg", // 男性イラスト
    },
    {
      source: "楽天",
      comment:
        "うまい！二郎系インスパイアのラーメンはたくさん売っていますが、高価な冷凍ものを除けば上位の美味さ。しかも常温で長期保存できるのもよい。",
      rating: 4,
      name: "お客様",
      category: "ラーメンフリークの皆様",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E5%AE%A2%E6%A7%98%E3%81%AE%E5%A3%B0%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-3xflOgFdlK83CkQ8uDn5oNxc4rsVLN.jpeg", // 男性イラスト
    },
    {
      source: "Yahoo",
      comment:
        "このボリュームでこのお値段はお得でした。ベースにはニンニクがしっかり効いているのですが、とてもおいしくいただけました。二郎系は茹でるのに10分近くかかりますが、このパーフェクトラーメンは5分以内。早く食べられるし、味もしっかりしているのでリピートしたいと思います。もやしとチャーシューがあったらかなりの再現性です。",
      rating: 5,
      name: "お客様",
      category: "ラーメンフリークの皆様",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E5%AE%A2%E6%A7%98%E3%81%AE%E5%A3%B0%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-3xflOgFdlK83CkQ8uDn5oNxc4rsVLN.jpeg", // 男性イラスト
    },
    {
      source: "Yahoo",
      comment:
        "店だと周りの目を気にしながら食べないといけないが、家だとゆっくりと食べれるしトッピングも自由。子供達にも分け与える事も出来る。良い商品だと思います。",
      rating: 5,
      name: "お客様",
      category: "お家族でご購入の皆様",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E5%AE%A2%E6%A7%98%E3%81%AE%E5%A3%B0%E5%AE%B6%E6%97%8F%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%29-x2gVegn9nceBY4aftT9fgFc1AgrGc1.png", // 家族イラスト
    },
    {
      source: "楽天",
      comment:
        "売り切れ期間があったので、販売開始を楽しみ待っていました。受け取って早速作ったのですが、待ってたから美味さ倍増 やっぱりコレ美味しいと息子が絶賛してました。またリピートします。",
      rating: 5,
      name: "お客様",
      category: "お家族でご購入の皆様",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E5%AE%A2%E6%A7%98%E3%81%AE%E5%AE%B6%E6%97%8F%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%29-x2gVegn9nceBY4aftT9fgFc1AgrGc1.png", // 家族イラスト
    },
    {
      source: "Yahoo",
      comment:
        "ラーメン好きの父と一緒に食べました。ニンニクのガツンとくる感じと味の濃い感じがすごく気に入ったようで、スープもご飯と一緒に全て平らげていました。私も父も太麺好きなので、もう少し太麺だったら尚よかったなあと思います。",
      rating: 4,
      name: "お客様",
      category: "お家族でご購入の皆様",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E5%AE%A2%E6%A7%98%E3%81%AE%E5%AE%B6%E6%97%8F%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%29-x2gVegn9nceBY4aftT9fgFc1AgrGc1.png", // 家族イラスト
    },
    {
      source: "楽天",
      comment:
        "お世話になっています。今回は危うく手持ちなしで、息子からクレームがつくところでしたが、迅速に対応して下さり、助かりました。で、食べた息子本人は、美味しい。何度食べても美味しい。と言っていました。またお願いします。",
      rating: 5,
      name: "お客様",
      category: "お家族でご購入の皆様",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E5%AE%A2%E6%A7%98%E3%81%AE%E5%AE%B6%E6%97%8F%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%29-x2gVegn9nceBY4aftT9fgFc1AgrGc1.png", // 家族イラスト
    },
    {
      source: "Yahoo",
      comment:
        "つるつるごわごわワシワシて感じの太麺で、スープもしょっぱめでにんにくが効いてて美味しかったです！写真につられてスープの袋にチャーシューが入ってるものかと勘違い。そこだけちょっと残念な気持ちになりましたが、またリピートしたいと思うくらい美味しかったです！モヤキャベ、刻みニンニクをのせ食べました。普段店舗でも食べる主人も文句なしでした！",
      rating: 5,
      name: "お客様",
      category: "女性でご購入頂いた皆様",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E5%AE%A2%E6%A7%98%E3%81%AE%E5%A3%B0%E5%A5%B3%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-kX8gayTcYk0YRJKZxnpHUyaXvgKLLX.jpeg", // 女性イラスト
    },
    {
      source: "楽天",
      comment:
        "二郎系ワシワシ太麺がとても美味しい！ チャーシューもビックリするくらい美味い！写真の通りデカくて厚みも1センチ以上あり、程よい柔らかさ！クオリティ高過ぎ！！又、買います☆某有名二郎系より美味かった！^ ^",
      rating: 5,
      name: "お客様",
      category: "女性でご購入頂いた皆様",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E5%AE%A2%E6%A7%98%E3%81%AE%E5%A3%B0%E5%A5%B3%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-kX8gayTcYk0YRJKZxnpHUyaXvgKLLX.jpeg", // 女性イラスト
    },
  ]

  useEffect(() => {
    setCurrentReviews(reviews)
  }, [])

  const products = [
    {
      id: "2set",
      title: "ご自宅二郎インスパイア",
      subtitle: "パーフェクトラーメンBUTA【S】2食セット",
      description: "麺とスープ×2食",
      note: "先ずお試しにどうぞ",
      price: "1,250円（税・送料込）",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E4%BA%8C%E9%83%8E2%E9%A3%9F.jpg-sg93moNHyCMeUpegel7V2yMSZqbtlK.jpeg",
    },
    {
      id: "6set",
      title: "ご自宅二郎インスパイア",
      subtitle: "パーフェクトラーメンBUTA【S】6食セット",
      description: "麺とスープ×6食",
      note: "リピーターの皆さまへ",
      price: "3,300円（税・送料込）",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E4%BA%8C%E9%83%8E6%E9%A3%9F.jpg-rg1Zdem79PGi5yuTMghXvOlrdqMsCm.jpeg",
    },
    {
      id: "chashu",
      title: "ちょっとリッチなチャーシュー付き",
      subtitle: "パーフェクトラーメンBUTA【S】1食チャーシュー付き",
      description: "麺とスープとチャーシュー×1食",
      note: "極厚チャーシュー付きで満足度大",
      price: "740円（税込）送料別途",
      extraNote: "2個まで全国一律300円",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E4%BB%98%E3%81%8D%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E4%BA%8C%E9%83%8E1%E9%A3%9F.jpg-TIhdOGXtEimStFFngGozhhRurtHKAw.jpeg",
    },
  ]

  const relatedProducts = [
    {
      title: "スープのみ",
      description: "135ccの大容量スープ5食セット",
      price: "1,500円（税・送料込）",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E4%BA%8C%E9%83%8E%E3%82%B9%E3%83%BC%E3%83%97%E3%81%AE%E3%81%BF5%E9%A3%9F.jpg-w4rU6X14o5Dyr1EAUawfuBBLCJIXcz.jpeg",
    },
    {
      title: "オーション麺のみ",
      description: "200g×4食",
      price: "1,045円（税・送料込）",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E4%BA%8C%E9%83%8E%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E9%BA%BA%E3%81%AE%E3%81%BF4%E9%A3%9F.jpg-Z5BTD6r8yhW8dMuxe9q6fjPMXcVaXD.jpeg",
    },
    {
      title: "国産背脂",
      description: "80ｇ×8個",
      price: "1,250円（税・送料込）",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E4%BA%8C%E9%83%8E%E8%83%8C%E8%84%82%E3%81%AE%E3%81%BF8%E9%A3%9F.jpg-vp5kH46cZFPJPBgH9pVs4YPERFE34o.jpeg",
    },
  ]

  const reviewsByCategory = {
    ラーメンフリークの皆様: reviews.filter((r) => r.category === "ラーメンフリークの皆様"),
    お家族でご購入の皆様: reviews.filter((r) => r.category === "お家族でご購入の皆様"),
    女性のお客様からのお声: reviews.filter((r) => r.category === "女性でご購入頂いた皆様"),
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ヘッダー */}
      <header className="bg-white py-6">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%80%90%E9%AB%98%E8%A7%A3%E5%83%8F%E5%BA%A6%E3%80%91%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E9%A4%A8%E6%96%B0%E3%83%AD%E3%82%B4%E3%80%90%E9%BB%92%E3%80%91.jpg-jGJwCa3HfNXU3pXG4DdPG8tGgUUWid.jpeg"
            alt="AIZU BRAND HALL"
            width={200}
            height={200}
            className="h-20 w-auto"
            priority
          />
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-grow">
        {/* メインビジュアル */}
        <section className="relative">
          <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%87%AA%E7%A4%BE%E6%92%AE%E5%BD%B1%E3%83%A1%E3%82%A4%E3%83%B3%EF%BC%88%E5%B0%8F%EF%BC%89.jpg-0ueWbdkPealWIl2KsItYU9z0zGW91X.jpeg"
                alt="パーフェクトラーメンBUTA【S】- 二郎インスパイア系ラーメン"
                fill
                className="object-contain md:object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* メインコピー */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                人気の"二郎インスパイア"をご家庭で！
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6">マニアは勿論、女性やファミリーにも</p>
              <div className="text-lg leading-relaxed text-gray-700 space-y-6 text-left">
                <p>
                  ラーメンフリークの間で絶大な人気を誇る「ラーメン二郎」。豚ベースの濃厚で旨味抜群のスープ。特殊な小麦粉（日清製粉オーション）を使用したワシワシ食感の低加水極太麺。分厚く柔らかな存在感抜群のチャーシュー。そして「マシマシ」でおなじみの山盛りの野菜など非常に個性的で中毒性の高いラーメンです。
                </p>
                <p>
                  熱狂的なファンも多く、お店はいつも沢山のお客様で賑わっています。ただ「二郎を食べたい」と思っていても実店は女性や家族連れでは少々入りにくい雰囲気もあり「気になっているけど食べたことがない」という方も多いと思います。
                </p>
                <p>
                  今回の商品はそんな皆様にご自宅で「二郎的なラーメン」を味わってもらいたいという想いで開発をいたしました。自宅だからこそゆっくりと安心してお楽しみ頂ける"二郎インスパイア"を是非お楽しみください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 信頼指標バー */}
        <section className="bg-pink-50 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center mb-4">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold">楽天レビュー</span>
                <div className="flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" style={{ clipPath: "inset(0 40% 0 0)" }} />
                </div>
                <span className="text-base font-bold">平均4.56点</span>
              </div>
              <span className="text-gray-400 text-xl hidden md:block">／</span>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold">Yahooショッピングレビュー</span>
                <div className="flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" style={{ clipPath: "inset(0 50% 0 0)" }} />
                </div>
                <span className="text-base font-bold">平均4.46点</span>
              </div>
            </div>
            <div className="text-center mb-8">
              <p className="text-lg font-bold text-red-600">
                ご好評頂いております。二郎系チャーシューで圧倒的評価を頂いている会津ブランド館が作りました。
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%EF%BC%91%E4%BD%8D.jpg-QWSOBDSb48aW2Nf6mgSvpE4RFSNpfT.jpeg"
                alt="楽天ランキング1位獲得"
                width={400}
                height={132}
                className="w-96 h-auto"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yahoo%EF%BC%91%E4%BD%8D.jpg-RRp1ZXluFZvl9jCtzbAJOzWSyG1sLn.jpeg"
                alt="Yahoo!ショッピングカテゴリランキング1位獲得"
                width={400}
                height={132}
                className="w-96 h-auto"
              />
            </div>
          </div>
        </section>

        {/* 美味しさの魅力セクション - スープ */}
        <section className="py-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">美味しさの魅力をご紹介</h2>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%83%BC%E3%83%97-01.jpg-IioZe7CtKJYYNkHsAZejCmJrZXGGSb.jpeg"
                    alt="エキス不使用の本物素材が奏でる旨味"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">エキス不使用の本物素材が奏でる旨味</h2>
                  <div className="text-lg text-gray-700 space-y-4">
                    <p>
                      スープは「鶏ガラ・丸鶏」に加え、「豚骨・ラード・チャーシュー煮汁・背脂」――この4つの"豚要素"で、濃厚かつ奥深い旨味を実現。
                      さらに、ガツンと効いたニンニクが、あの"二郎らしさ"を演出します。
                    </p>
                    <p>
                      注目すべきは、製法と原料のこだわり。 科学的に抽出された
                      <strong>「エキス類」を極力排除し、"本物素材だけ"</strong>でお店と同じ手間をかけて仕込んでいます。
                    </p>
                    <p>135gの大容量スープは、決してインスタントでは出せない本格の証。</p>
                    <p className="text-sm text-gray-600">※味が濃いと感じたら、お好みでお湯を加えて調整してください。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 美味しさの魅力セクション - 麺 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 md:order-2">
                  <h2 className="text-3xl font-bold text-gray-900">噛むほどに快感、極太ワシワシ麺</h2>
                  <div className="text-lg text-gray-700 space-y-4">
                    <p>麺は日清製粉「オーション」100％使用。 このラーメンのために一から設計し直した専用極太麺です。</p>
                    <p>
                      実店舗のような低加水率感を再現しつつ、家庭調理に配慮して茹で時間は約4分半（実店舗では10分前後が一般的）に調整。
                      それでも、通常の麺とは比べ物にならないゴワゴワ・ワシワシの噛みごたえが味わえます。
                    </p>
                    <p>
                      内容量は200g。通常ラーメンの約2倍のボリュームです。
                      女性やお子様なら1袋で2人前としてもお楽しみいただけます。
                    </p>
                    <p className="font-semibold text-blue-800">
                      二郎は、麺も主役。ぜひその存在感を存分に体感してください。
                    </p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] w-full md:order-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%BA%BA-01.jpg-YYrbAxESAKEw4P6pdi3c3bSDkRTd3D.jpeg"
                    alt="噛むほどに快感、極太ワシワシ麺"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 美味しさの魅力セクション - 限定生産 */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%80%E6%97%A5%E3%81%AB%E4%BD%9C%E3%82%8C%E3%82%8B%E6%95%B0%E3%81%AB%E3%80%81%E9%99%90%E3%82%8A%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99.jpg-CyEh9oq2ZyzL0zDxrKThrjUsBmqsp4.jpeg"
                    alt="一日に作れる数に、限りがあります"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">一日に作れる数に、限りがあります</h2>
                  <div className="text-lg text-gray-700 space-y-4">
                    <p>
                      このラーメンは、工場の大量生産品ではありません。
                      ラーメン店と同じ製法で、職人が一つひとつ丁寧に手作りしています。
                    </p>
                    <p>
                      そのため、製造は1日約400食が限界。
                      ご注文が集中した際には、お届けまでお時間をいただく場合もございます。
                    </p>
                    <p>
                      お待たせしてしまうことがあり、大変申し訳ありません。
                      ですが、それでも「待って良かった」と思っていただける一杯を、真心こめてお作りしています。
                    </p>
                    <p className="font-semibold text-red-800">
                      これからも、<strong>妥協のない"本物"</strong>をあなたにお届けすることを、お約束します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 送料無料・即日配送セクション */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[3/1] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%80%81%E6%96%99%E7%84%A1%E6%96%99-01.jpg-7w5x12TQMEU3igAn9Jw8vNhpX1R7VT.jpeg"
                    alt="送料無料"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative aspect-[3/1] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8D%B3%E6%97%A5%E7%99%BA%E9%80%81-01.jpg-gvsHqMx1KYEAFJpKHnRUGkVqb2MckI.jpeg"
                    alt="即日配送"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 商品紹介セクション */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">商品ラインナップ</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative aspect-square w-full bg-gray-100">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">{product.title}</CardTitle>
                    <CardDescription className="text-base font-semibold text-gray-800">
                      {product.subtitle}
                    </CardDescription>
                    <CardDescription className="text-sm text-gray-600">{product.description}</CardDescription>
                    <CardDescription className="text-sm font-medium text-blue-600">{product.note}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-red-600 mb-2">{product.price}</p>
                    {product.extraNote && <p className="text-sm text-gray-500">{product.extraNote}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 関連商品 */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">関連商品</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {relatedProducts.map((product, index) => (
                  <Card key={index} className="overflow-hidden shadow-lg">
                    <div className="relative aspect-square w-full bg-gray-100">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{product.title}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                      <p className="text-lg font-bold text-red-600">{product.price}</p>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* お客様の声セクション */}
        <section id="reviews" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">お客様の声</h2>
            <p className="text-center text-gray-600 mb-12">
              これらは実際のECサイトに投稿されているものを抜粋させて頂きました。
              <br />
              ご購入の際のご参考にどうぞ
            </p>

            {Object.entries(reviewsByCategory).map(([category, categoryReviews]) => (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-bold text-center mb-8 text-blue-800">{category}</h3>
                <div className="space-y-6 max-w-4xl mx-auto">
                  {categoryReviews.map((review, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-4">
                          <div className="relative w-12 h-12">
                            <Image
                              src={review.avatar || "/placeholder.svg"}
                              alt={`${review.name} のアバター`}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <span>{review.name}</span>
                          <span className="text-sm text-gray-500">({review.source})</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center mb-2">
                          {[...Array(review.rating)].map((_, index) => (
                            <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="italic">&quot;{review.comment}&quot;</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 商品に関する注意点セクション */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8 text-white">商品に関する注意点</h2>
              <div className="space-y-4 text-lg text-white">
                {" "}
                {/* text-whiteを明示的に指定 */}
                <p>
                  •
                  二郎系ラーメンは、非常に味の濃いラーメンです。塩辛さを感じる場合は、お湯や野菜を追加して調整してください。
                </p>
                <p>• 脂やニンニクの風味が強めの商品です。苦手な方はご購入をお控えください。</p>
                <p>• チャーシュー付き・チャーシューなしの2種類があります。ご購入前に商品内容をご確認ください。</p>
                <p>
                  • もやしなどのトッピング具材は付属しておりません。<strong>お好みでご用意ください。</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ご購入セクション */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">ご購入はこちらから</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Yahoo!ショッピング */}
              <div className="bg-[#ffdddd] p-6 rounded-lg">
                <Link
                  href="https://store.shopping.yahoo.co.jp/aizubrandhall/15aaaebc295.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yahoo%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-MEP8aX6vdnhkm0MalTPsgcj8jbQqA0.png"
                      alt="Yahoo!ショッピング"
                      width={200}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                  <h4 className="font-bold mb-2 text-center">Yahoo!ショッピング</h4>
                  <p className="text-sm text-center mb-4">PayPayポイントが貯まる使えるショッピングモールはこちら</p>
                  <p className="text-sm text-center text-red-600 font-bold">
                    初めて当店をご利用のお客様に300円クーポン進呈中！
                  </p>
                </Link>
              </div>

              {/* 楽天市場 */}
              <div className="bg-[#deeeff] p-6 rounded-lg">
                <Link
                  href="https://item.rakuten.co.jp/aizubrandhall/c/0000000028/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-991Pc669KycdDKQBzO5S93EuS2I3kg.png"
                      alt="楽天市場"
                      width={200}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                  <h4 className="font-bold mb-2 text-center">楽天市場</h4>
                  <p className="text-sm text-center mb-4">楽天ポイントが使える国内最大級のショッピングモールはこちら</p>
                  <p className="text-sm text-center text-red-600 font-bold">
                    初めて当店をご利用のお客様に300円クーポン進呈中！
                  </p>
                </Link>
              </div>

              {/* Amazon */}
              <div className="bg-[#e8ffdd] p-6 rounded-lg">
                <Link
                  href="https://www.amazon.co.jp/stores/page/5CB4BEF8-6B7E-4574-AA5A-CD874F82A3BE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-mAXYlXivqE7kA5DfbJhHMDX5hkPVNJ.png"
                      alt="Amazon"
                      width={200}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                </Link>
                <h4 className="font-bold mb-2 text-center">Amazon</h4>
                <p className="text-sm text-center mb-4">世界最大のショッピングモールでのお買い物はこちら</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 店舗情報セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-2 md:px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8 px-4">
            この商品は「会津ブランド館」が製造・販売・発送を行っています。
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BC%9A%E6%B4%A5%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E9%A4%A8%E5%A4%96%E8%A6%B3.jpg-hdBx2FWtl4J7SGIDg4UzsDTfZJ0HVP.jpeg"
                alt="会津ブランド館 店舗外観"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-2">店舗案内</h3>
              <div className="space-y-2">
                <p className="font-bold">会津ブランド館</p>
                <p>〒965-0044</p>
                <p>福島県会津若松市七日町6−15</p>
                <p>TEL: 0242-25-4141</p>
                <p>営業時間: 11時〜16時</p>
                <p>定休日: 12月31日・1月1日</p>
                <p className="text-sm text-gray-600">（発送もお休みさせて頂きます）</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-8 max-w-5xl mx-auto">
            <div className="aspect-[16/9] w-[70%] mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.744914857655!2d139.9291543!3d37.4977777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8aaa5961ea738b%3A0x4a6c5d39e7d27eb!2z44CSOTYzLTAwNDQg56aP5bO255yM5Lya5rSl6IyF5p2-5biC5LiD5pel55S677yW4oiS77yR77yV!5e0!3m2!1sja!2sjp!4v1709697431099!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* SNSリンク */}
          <div className="flex justify-center space-x-6 mt-8">
            <Link
              href="https://www.facebook.com/aizubrandkan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <Facebook size={32} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://x.com/Aizu_Brand_Kan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
              <span className="sr-only">X (formerly Twitter)</span>
            </Link>
            <Link
              href="https://www.instagram.com/aizubrandhall/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600"
            >
              <Instagram size={32} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCpusPn2NlWyrgkIMbacH4-w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600"
            >
              <Youtube size={32} />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 AIZU BRAND HALL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

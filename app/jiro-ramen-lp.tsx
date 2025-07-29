"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import Link from "next/link"

export default function JiroRamenLP() {
  const [currentReviews, setCurrentReviews] = useState<any[]>([])

  const reviews = [
    {
      source: "Yahoo",
      comment:
        "早いもので、二郎歴40年を超えた今でも、夜な夜なインスパイアぽい品を見つけては取り寄せているメタボ一歩手前の者だが、本品は多少麺がツルッとしており、なんと言ってもスープが作り込んでありとても美味かった。個人的にはパサついてある方が好みだが、これはこれで中々の逸品だ。",
      rating: 4,
      name: "ラーメンフリーク",
    },
    {
      source: "楽天",
      comment:
        "うまい！二郎系インスパイアのラーメンはたくさん売っていますが、高価な冷凍ものを除けば上位の美味さ。しかも常温で長期保存できるのもよい。",
      rating: 4,
      name: "お客様",
    },
    {
      source: "Yahoo",
      comment:
        "このボリュームでこのお値段はお得でした。ベースにはニンニクがしっかり効いているのですが、とてもおいしくいただけました。二郎系は茹でるのに10分近くかかりますが、このパーフェクトラーメンは5分以内。早く食べられるし、味もしっかりしているのでリピートしたいと思います。もやしとチャーシューがあったらかなりの再現性です。",
      rating: 5,
      name: "お客様",
    },
    {
      source: "Yahoo",
      comment:
        "店だと周りの目を気にしながら食べないといけないが、家だとゆっくりと食べれるしトッピングも自由。子供達にも分け与える事も出来る。良い商品だと思います。",
      rating: 5,
      name: "ファミリー購入",
    },
    {
      source: "楽天",
      comment:
        "売り切れ期間があったので、販売開始を楽しみ待っていました。受け取って早速作ったのですが、待ってたから美味さ倍増。やっぱりコレ美味しいと息子が絶賛してました。またリピートします。",
      rating: 5,
      name: "お客様",
    },
    {
      source: "Yahoo",
      comment:
        "ラーメン好きの父と一緒に食べました。ニンニクのガツンとくる感じと味の濃い感じがすごく気に入ったようで、スープもご飯と一緒に全て平らげていました。私も父も太麺好きなので、もう少し太麺だったら尚よかったなあと思います。",
      rating: 4,
      name: "お客様",
    },
    {
      source: "楽天",
      comment:
        "お世話になっています。今回は危うく手持ちなしで、息子からクレームがつくところでしたが、迅速に対応して下さり、助かりました。で、食べた息子本人は、美味しい。何度食べても美味しい。と言っていました。またお願いします。",
      rating: 5,
      name: "お客様",
    },
    {
      source: "Yahoo",
      comment:
        "つるつるごわごわワシワシて感じの太麺で、スープもしょっぱめでにんにくが効いてて美味しかったです！写真につられてスープの袋にチャーシューが入ってるものかと勘違い。そこだけちょっと残念な気持ちになりましたが、またリピートしたいと思うくらい美味しかったです！モヤキャベ、刻みニンニクをのせ食べました。普段店舗でも食べる主人も文句なしでした！",
      rating: 5,
      name: "女性購入者",
    },
    {
      source: "楽天",
      comment:
        "二郎系ワシワシ太麺がとても美味しい！チャーシューもビックリするくらい美味い！写真の通りデカくて厚みも1センチ以上あり、程よい柔らかさ！クオリティ高過ぎ！！又、買います☆某有名二郎系より美味かった！",
      rating: 5,
      name: "女性購入者",
    },
  ]

  useEffect(() => {
    // ランダムに9件のレビューを選択
    const shuffled = [...reviews].sort(() => 0.5 - Math.random())
    setCurrentReviews(shuffled.slice(0, 9))
  }, [])

  return (
    <>
      {/* 信頼指標バー */}
      <section className="bg-red-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-bold">楽天レビュー★平均4.56点</span>
            </div>
            <div className="hidden md:block text-white/70">／</div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-bold">Yahooショッピングレビュー★平均4.46点</span>
            </div>
            <div className="text-sm">ご好評頂いております。</div>
          </div>
          <div className="text-center mt-2 text-sm">
            二郎系チャーシューで圧倒的評価を頂いている会津ブランド館が作りました。
          </div>
        </div>
      </section>

      {/* ランキング1位画像 */}
      <section className="py-8 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <div className="relative w-full max-w-md aspect-[4/3]">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="ランキング1位 - パーフェクトラーメン二郎インスパイア"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-full max-w-md aspect-[4/3]">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="売上ランキング1位 - 二郎系ラーメン部門"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* メインビジュアル */}
      <section className="relative">
        <div className="relative h-[70vh] md:h-[80vh]">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="パーフェクトラーメン二郎インスパイア - 濃厚豚骨スープと極太麺"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                人気の"二郎インスパイア"を
                <br />
                ご家庭で！
              </h1>
              <p className="text-xl md:text-3xl drop-shadow-lg">マニアは勿論、女性やファミリーにも</p>
            </div>
          </div>
        </div>
      </section>

      {/* メインコピーセクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-lg leading-relaxed text-gray-700 space-y-6">
              <p>
                ラーメンフリークの間で絶大な人気を誇る「ラーメン二郎」。豚ベースの濃厚で旨味抜群のスープ。特殊な小麦粉（日清製粉オーション）を使用したワシワシ食感の低加水極太麺。分厚く柔らかな存在感抜群のチャーシュー。そして「マシマシ」でおなじみの山盛りの野菜など非常に個性的で中毒性の高いラーメンです。
              </p>
              <p>
                熱狂的なファンも多く、お店はいつも沢山のお客様で賑わっています。ただ「二郎を食べたい」と思っていても実店は女性や家族連れでは少々入りにくい雰囲気もあり「気になっているけど食べたことがない」という方も多いと思います。
              </p>
              <p className="text-xl font-semibold text-red-600">
                今回の商品はそんな皆様にご自宅で「二郎的なラーメン」を味わってもらいたいという想いで開発をいたしました。自宅だからこそゆっくりと安心してお楽しみ頂ける"二郎インスパイア"を是非お楽しみください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 美味しさの魅力セクション - スープ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">美味しさの魅力</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="エキス不使用の本物素材が奏でる旨味 - 鶏ガラ・豚骨・ラード・チャーシュー煮汁・背脂"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">エキス不使用の本物素材が奏でる旨味</h3>
                <div className="text-lg text-gray-700 space-y-4">
                  <p>
                    スープは「鶏ガラ・丸鶏」に加え、「豚骨・ラード・チャーシュー煮汁・背脂」――この4つの"豚要素"で、濃厚かつ奥深い旨味を実現。さらに、ガツンと効いたニンニクが、あの"二郎らしさ"を演出します。
                  </p>
                  <p>
                    注目すべきは、製法と原料のこだわり。科学的に抽出された
                    <strong>「エキス類」を極力排除し、"本物素材だけ"</strong>でお店と同じ手間をかけて仕込んでいます。
                  </p>
                  <p className="font-semibold text-red-600">
                    135gの大容量スープは、決してインスタントでは出せない本格の証。
                    <br />
                    <span className="text-sm">※味が濃いと感じたら、お好みでお湯を加えて調整してください。</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 極太ワシワシ麺セクション */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6 md:order-2">
                <h3 className="text-2xl font-bold text-gray-900">噛むほどに快感、極太ワシワシ麺</h3>
                <div className="text-lg text-gray-700 space-y-4">
                  <p>麺は日清製粉「オーション」100％使用。このラーメンのために一から設計し直した専用極太麺です。</p>
                  <p>
                    実店舗のような低加水率感を再現しつつ、家庭調理に配慮して茹で時間は約4分半（実店舗では10分前後が一般的）に調整。それでも、通常の麺とは比べ物にならないゴワゴワ・ワシワシの噛みごたえが味わえます。
                  </p>
                  <p>
                    内容量は200g。通常ラーメンの約2倍のボリュームです。女性やお子様なら1袋で2人前としてもお楽しみいただけます。
                  </p>
                  <p className="font-semibold text-blue-600">
                    二郎は、麺も主役。ぜひその存在感を存分に体感してください。
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] w-full md:order-1">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="噛むほどに快感、極太ワシワシ麺 - 日清製粉オーション100%使用"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* 限定製造セクション */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="一日に作れる数に、限りがあります - 職人による手作り製造"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">一日に作れる数に、限りがあります</h3>
                <div className="text-lg text-gray-700 space-y-4">
                  <p>
                    このラーメンは、工場の大量生産品ではありません。ラーメン店と同じ製法で、職人が一つひとつ丁寧に手作りしています。
                  </p>
                  <p>
                    そのため、製造は1日約400食が限界。ご注文が集中した際には、お届けまでお時間をいただく場合もございます。
                  </p>
                  <p>
                    お待たせしてしまうことがあり、大変申し訳ありません。ですが、それでも「待って良かった」と思っていただける一杯を、真心こめてお作りしています。
                  </p>
                  <p className="font-semibold text-amber-800">
                    これからも、<strong>妥協のない"本物"</strong>をあなたにお届けすることを、お約束します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">お客様の声</h2>
          <p className="text-center text-gray-600 mb-12">
            これらは実際のECサイトに投稿されているものを抜粋させて頂きました。
            <br />
            ご購入の際のご参考にどうぞ
          </p>

          {/* ラーメンフリークの皆様 */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-center text-blue-600">ラーメンフリークの皆様</h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              {currentReviews.slice(0, 3).map((review, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt={`お客様 ${i + 1} のアバター`}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <span>お客様（{review.source}）</span>
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

          {/* お家族でご購入の皆様 */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-center text-green-600">お家族でご購入の皆様</h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              {currentReviews.slice(3, 6).map((review, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt={`お客様 ${i + 4} のアバター`}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <span>お客様（{review.source}）</span>
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

          {/* 女性でご購入頂いた皆様 */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-center text-pink-600">女性でご購入頂いた皆様</h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              {currentReviews.slice(6, 9).map((review, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt={`お客様 ${i + 7} のアバター`}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <span>お客様（{review.source}）</span>
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
        </div>
      </section>

      {/* 商品に関する注意点セクション */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-600">商品に関する注意点</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-red-700">
                <strong>二郎系ラーメンは、非常に味の濃いラーメンです。</strong>
                塩辛さを感じる場合は、お湯や野菜を追加して調整してください。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-red-700">
                <strong>脂やニンニクの風味が強めの商品です。</strong>
                苦手な方はご購入をお控えください。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-blue-700">
                <strong>チャーシュー付き・チャーシューなしの2種類があります。</strong>
                ご購入前に商品内容をご確認ください。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">
                <strong>*もやしなどのトッピング具材は付属しておりません。</strong>
                **お好みでご用意ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 送料無料・即日発送セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[3/1] w-full">
                <Image src="/placeholder.svg?height=200&width=600" alt="送料無料" fill className="object-contain" />
              </div>
              <div className="relative aspect-[3/1] w-full">
                <Image src="/placeholder.svg?height=200&width=600" alt="即日発送" fill className="object-contain" />
              </div>
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
                href="https://store.shopping.yahoo.co.jp/aizubrandhall/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Yahoo!ショッピング"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mb-2 text-center">Yahoo!ショッピング</h4>
              <p className="text-sm text-center mb-4">PayPayポイントが貯まる使えるショッピングモールはこちら</p>
            </div>

            {/* 楽天市場 */}
            <div className="bg-[#deeeff] p-6 rounded-lg">
              <Link
                href="https://item.rakuten.co.jp/aizubrandhall/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="楽天市場"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mb-2 text-center">楽天市場</h4>
              <p className="text-sm text-center mb-4">楽天ポイントが使える国内最大級のショッピングモールはこちら</p>
            </div>

            {/* Amazon */}
            <div className="bg-[#e8ffdd] p-6 rounded-lg">
              <Link
                href="https://www.amazon.co.jp/stores/page/D61FAF32-CC56-40AE-A974-E47FB38E0F1E"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
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

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">会津ブランド館</h3>
            <p className="text-gray-300 mb-6">
              福島県会津の特産品・グルメを全国にお届け。
              <br />
              本格二郎系ラーメンをはじめとした会津の味をお楽しみください。
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/privacy" className="text-gray-300 hover:text-white">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white">
                利用規約
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                お問い合わせ
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm">© 2024 会津ブランド館. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

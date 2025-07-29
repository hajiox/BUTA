"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
    const shuffled = [...reviews].sort(() => 0.5 - Math.random())
    setCurrentReviews(shuffled.slice(0, 9))
  }, [])

  return (
    <>
      {/* 信頼指標バー */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-lg">楽天★4.56点</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-lg">Yahoo★4.46点</span>
            </div>
            <div className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
              <Award className="w-5 h-5" />
              <span>高評価獲得中</span>
            </div>
          </div>
          <div className="text-center mt-3 text-yellow-100 font-medium">
            二郎系チャーシューで圧倒的評価を頂いている会津ブランド館が作りました
          </div>
        </div>
      </section>

      {/* ランキング1位画像 */}
      <section className="py-12 bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">🏆 売上ランキング1位獲得 🏆</h2>
            <p className="text-gray-600">二郎系ラーメン部門で圧倒的支持</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center max-w-4xl mx-auto">
            <div className="relative w-full max-w-sm">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="ランキング1位 - パーフェクトラーメン二郎インスパイア"
                width={400}
                height={300}
                className="object-contain rounded-2xl shadow-xl"
              />
            </div>
            <div className="relative w-full max-w-sm">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="売上ランキング1位 - 二郎系ラーメン部門"
                width={400}
                height={300}
                className="object-contain rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* メインビジュアル */}
      <section className="relative">
        <div className="relative h-[70vh] md:h-[90vh]">
          <Image
            src="/images/jiro-ramen-main-visual.jpg"
            alt="パーフェクトラーメン二郎インスパイア - 濃厚豚骨スープと極太麺、分厚いチャーシュー、山盛り野菜"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-end justify-center pb-16 md:pb-24">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-8xl font-black mb-6 text-shadow-lg">
                人気の"二郎インスパイア"を
                <br />
                ご家庭で！
              </h1>
              <p className="text-2xl md:text-4xl font-bold text-yellow-200 text-shadow">
                マニアは勿論、女性やファミリーにも
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* メインコピーセクション */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">なぜ、こんなにも愛されるのか？</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">🍜</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">本格的な味</h3>
                <p className="text-gray-600">豚ベースの濃厚スープと極太ワシワシ麺</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">家族で楽しめる</h3>
                <p className="text-gray-600">自宅だからゆっくり安心して味わえる</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">簡単調理</h3>
                <p className="text-gray-600">わずか5分で本格二郎系が完成</p>
              </div>
            </div>

            <div className="text-lg leading-relaxed text-gray-700 space-y-6 bg-white p-8 rounded-2xl shadow-lg">
              <p>
                ラーメンフリークの間で絶大な人気を誇る「ラーメン二郎」。豚ベースの濃厚で旨味抜群のスープ。特殊な小麦粉（日清製粉オーション）を使用したワシワシ食感の低加水極太麺。分厚く柔らかな存在感抜群のチャーシュー。そして「マシマシ」でおなじみの山盛りの野菜など非常に個性的で中毒性の高いラーメンです。
              </p>
              <p>
                熱狂的なファンも多く、お店はいつも沢山のお客様で賑わっています。ただ「二郎を食べたい」と思っていても実店は女性や家族連れでは少々入りにくい雰囲気もあり「気になっているけど食べたことがない」という方も多いと思います。
              </p>
              <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-6 rounded-xl border-l-4 border-red-500">
                <p className="text-xl font-semibold text-red-800">
                  今回の商品はそんな皆様にご自宅で「二郎的なラーメン」を味わってもらいたいという想いで開発をいたしました。自宅だからこそゆっくりと安心してお楽しみ頂ける"二郎インスパイア"を是非お楽しみください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 美味しさの魅力セクション */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">美味しさの魅力</h2>
            <p className="text-xl text-gray-600">職人のこだわりが生み出す本格の味</p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="max-w-7xl mx-auto space-y-20">
            {/* スープセクション */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="エキス不使用の本物素材が奏でる旨味"
                  fill
                  className="object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">エキス不使用の本物素材が奏でる旨味</h3>
                <div className="text-lg text-gray-700 space-y-4">
                  <p>
                    スープは「鶏ガラ・丸鶏」に加え、「豚骨・ラード・チャーシュー煮汁・背脂」――この4つの"豚要素"で、濃厚かつ奥深い旨味を実現。さらに、ガツンと効いたニンニクが、あの"二郎らしさ"を演出します。
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-xl border-l-4 border-yellow-500">
                    <p className="font-semibold">
                      注目すべきは、製法と原料のこだわり。科学的に抽出された
                      <strong className="text-red-600">「エキス類」を極力排除し、"本物素材だけ"</strong>
                      でお店と同じ手間をかけて仕込んでいます。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 麺セクション */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 md:order-2">
                <h3 className="text-3xl font-bold text-gray-900">噛むほどに快感、極太ワシワシ麺</h3>
                <div className="text-lg text-gray-700 space-y-4">
                  <p>麺は日清製粉「オーション」100％使用。このラーメンのために一から設計し直した専用極太麺です。</p>
                  <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <p>
                      実店舗のような低加水率感を再現しつつ、家庭調理に配慮して茹で時間は約4分半に調整。それでも、通常の麺とは比べ物にならないゴワゴワ・ワシワシの噛みごたえが味わえます。
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] w-full md:order-1">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="噛むほどに快感、極太ワシワシ麺"
                  fill
                  className="object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* 限定製造セクション */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="一日に作れる数に、限りがあります"
                  fill
                  className="object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">一日に作れる数に、限りがあります</h3>
                <div className="text-lg text-gray-700 space-y-4">
                  <p>
                    このラーメンは、工場の大量生産品ではありません。ラーメン店と同じ製法で、職人が一つひとつ丁寧に手作りしています。
                  </p>
                  <div className="bg-orange-50 p-4 rounded-xl border-l-4 border-orange-500">
                    <p>
                      そのため、製造は1日約400食が限界。ご注文が集中した際には、お届けまでお時間をいただく場合もございます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 商品カードセクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* メイン商品カード */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">パーフェクトラーメン二郎インスパイア</h2>
            <Card className="overflow-hidden shadow-2xl border-2 border-gray-100">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square">
                  <Image
                    src="/images/jiro-ramen-main-visual.jpg"
                    alt="パーフェクトラーメン二郎インスパイア"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">ご自宅で、あの味を。</h3>
                  <p className="text-gray-600 mb-6">
                    豚ベースの濃厚スープと日清製粉オーション100%の極太ワシワシ麺。エキス不使用の本物素材で作る中毒性の高い一杯をご家庭で。
                  </p>
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      <Star className="w-6 h-6 fill-current" />
                      <Star className="w-6 h-6 fill-current" />
                      <Star className="w-6 h-6 fill-current" />
                      <Star className="w-6 h-6 fill-current" />
                      <Star className="w-6 h-6 fill-current" />
                    </div>
                    <span className="ml-2 text-gray-600 font-semibold">高評価レビュー多数</span>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-red-600">3,980円</span>
                    <span className="ml-2 text-gray-500">(税込・送料無料)</span>
                  </div>
                  <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-lg font-bold py-6">
                    今すぐ購入する
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* 関連商品 */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">関連商品</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg mb-4">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="関連商品1：特製チャーシュー"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-center text-gray-800">特製チャーシュー</h4>
              </div>
              <div className="group">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg mb-4">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="関連商品2：特製辛味スパイス"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-center text-gray-800">特製辛味スパイス</h4>
              </div>
              <div className="group">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg mb-4">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="関連商品3：極太メンマ"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-center text-gray-800">極太メンマ</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">お客様の声</h2>
            <p className="text-xl text-gray-600 mb-4">実際のECサイトに投稿されているレビューを抜粋</p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
          </div>

          {/* ラーメンフリークの皆様 */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-red-700 mb-2">🍜 ラーメンフリークの皆様</h3>
              <p className="text-gray-600">二郎を愛する方々からの熱いメッセージ</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {currentReviews.slice(0, 3).map((review, i) => (
                <Card key={i} className="hover:shadow-xl transition-shadow border-0 shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt={`お客様 ${i + 1} のアバター`}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">お客様</div>
                        <div className="text-sm text-gray-500">({review.source})</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-3">
                      {[...Array(review.rating)].map((_, index) => (
                        <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 font-bold text-yellow-600">{review.rating}.0</span>
                    </div>
                    <p className="italic text-gray-700 leading-relaxed">&quot;{review.comment}&quot;</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* お家族でご購入の皆様 */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-green-700 mb-2">👨‍👩‍👧‍👦 お家族でご購入の皆様</h3>
              <p className="text-gray-600">ファミリーで楽しまれている方々の声</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {currentReviews.slice(3, 6).map((review, i) => (
                <Card key={i} className="hover:shadow-xl transition-shadow border-0 shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt={`お客様 ${i + 4} のアバター`}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">お客様</div>
                        <div className="text-sm text-gray-500">({review.source})</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-3">
                      {[...Array(review.rating)].map((_, index) => (
                        <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 font-bold text-yellow-600">{review.rating}.0</span>
                    </div>
                    <p className="italic text-gray-700 leading-relaxed">&quot;{review.comment}&quot;</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 女性でご購入頂いた皆様 */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-pink-700 mb-2">👩 女性でご購入頂いた皆様</h3>
              <p className="text-gray-600">女性の方からも高評価をいただいています</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {currentReviews.slice(6, 9).map((review, i) => (
                <Card key={i} className="hover:shadow-xl transition-shadow border-0 shadow-lg">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt={`お客様 ${i + 7} のアバター`}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">お客様</div>
                        <div className="text-sm text-gray-500">({review.source})</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-3">
                      {[...Array(review.rating)].map((_, index) => (
                        <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 font-bold text-yellow-600">{review.rating}.0</span>
                    </div>
                    <p className="italic text-gray-700 leading-relaxed">&quot;{review.comment}&quot;</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 商品に関する注意点セクション */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-800 mb-4">⚠️ 商品に関する注意点</h2>
            <p className="text-xl text-gray-600">ご購入前に必ずお読みください</p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full mt-4"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-red-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl">
                    <span className="text-red-600 font-bold text-xl">⚠️</span>
                    <div>
                      <h4 className="font-bold text-red-800 mb-1">味の濃さについて</h4>
                      <p className="text-gray-700 text-sm">
                        二郎系ラーメンは非常に味の濃いラーメンです。塩辛さを感じる場合は、お湯や野菜を追加して調整してください。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
                    <span className="text-orange-600 font-bold text-xl">🧄</span>
                    <div>
                      <h4 className="font-bold text-orange-800 mb-1">風味の強さについて</h4>
                      <p className="text-gray-700 text-sm">
                        脂やニンニクの風味が強めの商品です。苦手な方はご購入をお控えください。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                    <span className="text-blue-600 font-bold text-xl">🥩</span>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-1">商品バリエーション</h4>
                      <p className="text-gray-700 text-sm">
                        チャーシュー付き・チャーシューなしの2種類があります。ご購入前に商品内容をご確認ください。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                    <span className="text-green-600 font-bold text-xl">🥬</span>
                    <div>
                      <h4 className="font-bold text-green-800 mb-1">トッピングについて</h4>
                      <p className="text-gray-700 text-sm">
                        もやしなどのトッピング具材は付属しておりません。お好みでご用意ください。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 送料無料・即日発送セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[2/1] w-full">
                <Image src="/placeholder.svg?height=300&width=600" alt="送料無料" fill className="object-contain" />
              </div>
              <div className="relative aspect-[2/1] w-full">
                <Image src="/placeholder.svg?height=300&width=600" alt="即日発送" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ご購入セクション */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🛒 ご購入はこちらから</h2>
            <p className="text-xl text-gray-600">お好みのショッピングサイトでお買い求めください</p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Yahoo!ショッピング */}
            <Link
              href="https://store.shopping.yahoo.co.jp/aizubrandhall/"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border-2 border-transparent hover:border-red-400">
                <div className="relative w-full h-24 mb-4">
                  <Image
                    src="/placeholder.svg?height=96&width=240"
                    alt="Yahoo!ショッピング"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2 text-center text-gray-800">Yahoo!ショッピング</h4>
                <p className="text-sm text-center text-gray-600 mb-4">PayPayポイントが貯まる・使える</p>
                <div className="bg-red-500 text-white text-center px-6 py-3 rounded-full font-bold group-hover:bg-red-600 transition-colors">
                  購入する →
                </div>
              </div>
            </Link>

            {/* 楽天市場 */}
            <Link
              href="https://item.rakuten.co.jp/aizubrandhall/"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border-2 border-transparent hover:border-red-400">
                <div className="relative w-full h-24 mb-4">
                  <Image src="/placeholder.svg?height=96&width=240" alt="楽天市場" fill className="object-contain" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-center text-gray-800">楽天市場</h4>
                <p className="text-sm text-center text-gray-600 mb-4">楽天ポイントが使える・貯まる</p>
                <div className="bg-red-500 text-white text-center px-6 py-3 rounded-full font-bold group-hover:bg-red-600 transition-colors">
                  購入する →
                </div>
              </div>
            </Link>

            {/* Amazon */}
            <Link
              href="https://www.amazon.co.jp/stores/page/D61FAF32-CC56-40AE-A974-E47FB38E0F1E"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border-2 border-transparent hover:border-orange-400">
                <div className="relative w-full h-24 mb-4">
                  <Image src="/placeholder.svg?height=96&width=240" alt="Amazon" fill className="object-contain" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-center text-gray-800">Amazon</h4>
                <p className="text-sm text-center text-gray-600 mb-4">世界最大のショッピングモール</p>
                <div className="bg-orange-500 text-white text-center px-6 py-3 rounded-full font-bold group-hover:bg-orange-600 transition-colors">
                  購入する →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

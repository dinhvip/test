import LineChart from '../../components/charts/LineChart/LineChart';
import RecommendedColumn from '../../components/RecommendedColumn';
import ArticleCard from '../../components/ArticleCard';
import { useChartData } from '../../hooks/chart/useChartData';
import styles from './ColumnPage.module.scss';

export default function ColumnPage() {
  // Multiple charts với mock data
  const revenue = useChartData('/api/charts/revenue', { period: 'monthly' });

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* 4 Recommended Cards */}
        <div className={styles.cardsContainer}>
          <RecommendedColumn category="COLUMN" subtitle="オススメ" />
          <RecommendedColumn category="DIET" subtitle="ダイエット" />
          <RecommendedColumn category="BEAUTY" subtitle="美容" />
          <RecommendedColumn category="HEALTH" subtitle="健康" />
        </div>

        {/* Articles Grid */}
        <div className={styles.articlesGrid}>
          <ArticleCard
            image="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop"
            date="2021.05.17"
            time="23:25"
            title="魚を食べて頭も力ラダも元気に！知っておきたい魚を食べるメリ..."
            description="魚には良質なタンパク質やDHA、EPAなどの栄養素が豊富に含まれています。"
            tags={["魚料理", "和食", "DHA"]}
          />
          <ArticleCard
            image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop"
            date="2021.05.17"
            time="23:25"
            title="ダイエット中でも安心！ヘルシーなおやつの選び方"
            description="カロリーを抑えながら満足感を得られるおやつの選び方をご紹介します。"
            tags={["ダイエット", "おやつ", "健康"]}
          />
          <ArticleCard
            image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
            date="2021.05.17"
            time="23:25"
            title="野菜たっぷり！栄養バランスの良い食事のコツ"
            description="毎日の食事に野菜を取り入れて、健康的な生活を送りましょう。"
            tags={["野菜", "栄養", "健康"]}
          />
          <ArticleCard
            image="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop"
            date="2021.05.17"
            time="23:25"
            title="朝食の重要性と簡単に作れる朝ごはんレシピ"
            description="忙しい朝でも簡単に作れる栄養満点の朝食レシピをご紹介します。"
            tags={["朝食", "レシピ", "時短"]}
          />
          <ArticleCard
            image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
            date="2021.05.17"
            time="23:25"
            title="美肌効果抜群！ビタミンCたっぷりの食材"
            description="ビタミンCが豊富な食材を取り入れて、内側から美しくなりましょう。"
            tags={["美容", "ビタミンC", "美肌"]}
          />
          <ArticleCard
            image="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=400&h=300&fit=crop"
            date="2021.05.17"
            time="23:25"
            title="運動後の栄養補給に最適な食事とは"
            description="運動後の体に必要な栄養素を効率よく摂取する方法を解説します。"
            tags={["運動", "栄養", "筋肉"]}
          />
          <ArticleCard
            image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"
            date="2021.05.17"
            time="23:25"
            title="腸内環境を整える発酵食品の効果"
            description="発酵食品を取り入れて、腸内環境を改善し健康的な体を作りましょう。"
            tags={["発酵食品", "腸活", "健康"]}
          />
          <ArticleCard
            image="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop"
            date="2021.05.17"
            time="23:25"
            title="季節の食材を使った簡単レシピ集"
            description="旬の食材を使って、栄養価の高い美味しい料理を作りましょう。"
            tags={["レシピ", "旬", "料理"]}
          />
        </div>
      </div>
    </div>
  );
}
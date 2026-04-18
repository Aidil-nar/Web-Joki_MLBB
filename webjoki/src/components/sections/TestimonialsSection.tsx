import React from 'react';
import Image from 'next/image';
import styles from './TestimonialsSection.module.css';

const DUMMY_TESTIMONIALS = [
  { 
    id: 1, 
    name: 'Rizky', 
    rank: 'Mythic Glory', 
    avatar: 'R', 
    text: 'Mantap banget bang! Pengerjaan cepat, admin ramah. Akun aman dari ban, winrate naik drastis. Recommended parah buat yang stuck tier. Fix langganan!', 
    stars: 5, 
    time: '2 hari lalu', 
    gradient: 'linear-gradient(135deg, #FF6B6B, #C0392B)' 
  },
  { 
    id: 2, 
    name: 'Budi', 
    rank: 'Legend', 
    avatar: 'B', 
    text: 'Awalnya ragu, tapi ternyata beneran amanah. Request hero juga diturutin, gila sih ini joki paling the best!', 
    stars: 5, 
    time: '3 hari lalu', 
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' 
  },
  { 
    id: 3, 
    name: 'Siti', 
    rank: 'Epic', 
    avatar: 'S', 
    text: 'Sering lose streak sampai capek, akhirnya nyoba joki disini. Cuma butuh 1 hari langsung tembus tier yang aku mau. Makasih min!', 
    stars: 5, 
    time: '4 hari lalu', 
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' 
  },
  { 
    id: 4, 
    name: 'Andi', 
    rank: 'Mythic Immortal', 
    avatar: 'A', 
    text: 'Joki terpercaya, cepet banget selesai nya. Walaupun harga lumayan, tapi kualitas permainan jokinya emang pro player level.', 
    stars: 4, 
    time: '1 minggu lalu', 
    gradient: 'linear-gradient(135deg, #fa709a, #fee140)' 
  },
  { 
    id: 5, 
    name: 'Dewi', 
    rank: 'Grandmaster', 
    avatar: 'D', 
    text: 'Senang banget akun aku udah keluar dari tier neraka wkwk. Respon CS cepat dan ramah, aku sampai order 2x.', 
    stars: 5, 
    time: '1 minggu lalu', 
    gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)' 
  },
  { 
    id: 6, 
    name: 'Fajar', 
    rank: 'Mythic', 
    avatar: 'F', 
    text: 'Gila win streak 15x! Parah sih rapi banget mainnya. Gak pake tawar menawar The best JokiMLBB.', 
    stars: 5, 
    time: '2 minggu lalu', 
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' 
  },
  { 
    id: 7, 
    name: 'Tono', 
    rank: 'Elite', 
    avatar: 'T', 
    text: 'Mantap buat yang baru main kaya aku, dibantu sampai rank stabil. Proses order juga ga pake ribet.', 
    stars: 4, 
    time: '2 minggu lalu', 
    gradient: 'linear-gradient(135deg, #84fab0, #8fd3f4)' 
  },
  { 
    id: 8, 
    name: 'Hendrik', 
    rank: 'Mythic Honor', 
    avatar: 'H', 
    text: 'Langganan terus disini tiap season. Kualitas nggak pernah turun, garansi keamanan akun bikin tenang banget.', 
    stars: 5, 
    time: '3 minggu lalu', 
    gradient: 'linear-gradient(135deg, #a6c0fe, #f68084)' 
  },
  { 
    id: 9, 
    name: 'Kevin', 
    rank: 'Legend', 
    avatar: 'K', 
    text: 'Baru pertama kali ngejoki ternyata luar biasa hasilnya. Hero fav dipakai, winrate aman, overall sangat puas dan bakal balik lagi!', 
    stars: 5, 
    time: '3 minggu lalu', 
    gradient: 'linear-gradient(135deg, #84fab0, #8fd3f4)' 
  },
];

const rankIconMap: Record<string, string> = {
  'Elite': '/ranks/elite.png',
  'Grandmaster': '/ranks/grandmaster.png',
  'Epic': '/ranks/epic.png',
  'Legend': '/ranks/legend.png',
  'Mythic': '/ranks/mythic.png',
  'Mythic Honor': '/ranks/mythic-honor.png',
  'Mythic Glory': '/ranks/mythic-glory.png',
  'Mythic Immortal': '/ranks/mythic-immortal.png',
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className={`section ${styles.section}`}>
      <div className={styles.bgAccent} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header">
          <span className="section-label">Testimoni</span>
          <h2 className="section-title">Kata Mereka Yang Sudah Order</h2>
          <p className="section-subtitle">
            Ribuan player puas dengan layanan kami. Baca pengalaman mereka di bawah.
          </p>
          <div className="glow-separator" />
        </div>

        <div className={styles.masonry}>
          {DUMMY_TESTIMONIALS.map((t) => (
            <div key={t.id} className={styles.card}>
              {/* User Info Header */}
              <div className={styles.header}>
                <div 
                  className={styles.avatar} 
                  style={{ background: t.gradient }}
                >
                  {t.avatar}
                </div>
                <div className={styles.userInfo}>
                  <span className={styles.username}>{t.name}</span>
                  <div className={styles.rankBadge}>
                    <Image 
                      src={rankIconMap[t.rank] || '/ranks/epic.png'} 
                      alt={t.rank} 
                      width={16} 
                      height={16} 
                      className={styles.rankIcon}
                    />
                    {t.rank}
                  </div>
                  <div className={styles.stars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} style={{ opacity: i < t.stars ? 1 : 0.3 }}>★</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Chat Bubble Layout */}
              <div className={styles.bubbleContainer}>
                <div className={styles.bubble}>
                  {t.text}
                  <div className={styles.timestamp}>
                    {t.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

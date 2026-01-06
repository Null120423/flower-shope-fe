import Image from 'next/image';
import './about.css';
const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="label-tag">BEYOND THE ORDINARY</div>
          <h1 className="hero-title">
            Từ một nhành hoa nhỏ
            <br />
            đến giấc mơ bền vững
          </h1>
          <p className="hero-subtitle">
            Những bông hoa khô không chỉ tươi đẹp trong khoảnh khắc,
            <br />
            mà còn lưu giữ cảm xúc suốt cả hành trình
          </p>
          <button className="cta-button">Khám phá bộ sưu tập</button>
        </div>
        <div className="hero-image-collage">
          <div className="torn-edge"></div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="about-section origin-section">
        <div className="section-layout">
          <div className="text-block">
            <div className="label-highlight">Khởi nguồn đam mê</div>
            <h2>Khi hoa trở thành ngôn ngữ của cảm xúc</h2>
            <p className="story-text">
              Có những kỷ niệm mà chúng ta muốn giữ mãi. Một bó hoa sinh nhật từ người thân, 
              cánh hoa cưới từ ngày trọng đại, hay đơn giản là một nhành cỏ dại bên vệ đường 
              khiến ta mỉm cười. Từ những khoảnh khắc đó, chúng tôi bắt đầu hành trình tìm cách 
              lưu giữ – không chỉ hình ảnh, mà cả cảm xúc.
            </p>
            <p className="story-text">
              Hoa tươi đẹp, nhưng chỉ trong giây phút. Còn hoa khô, là dấu ấn của thời gian, 
              là nghệ thuật của sự kiên nhẫn.
            </p>
          </div>
          <div className="image-frame">
            <div className="torn-paper-effect">
              <div className="placeholder-image">
                <Image src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/5/28/1050009/Treo-Nguoc-Hoa-02.jpg" alt="Origin Story" width={600} height={500} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="about-section journey-section">
        <div className="section-layout reverse">
          <div className="image-frame">
            <div className="torn-paper-effect">
              <div className="placeholder-image">
                <Image src="https://product.hstatic.net/1000360579/product/8a58b151d3f611a848e7_a88ceacabb6648b5881d5c8de7f57608_master.jpg" alt="Journey" width={600} height={500} />
              </div>
            </div>
          </div>
          <div className="text-block">
            <div className="label-highlight">Hành trình bắt đầu</div>
            <h2>Từ những bó hoa đầu tiên</h2>
            <p className="story-text">
              Mọi thứ bắt đầu từ một góc nhỏ trong phòng, với những bó hoa làm bằng tay 
              và vô số lần thử nghiệm. Hoa khô đến khi nào, phơi thế nào, bảo quản ra sao 
              để giữ được màu sắc và hình dáng đẹp nhất – tất cả đều là bài học.
            </p>
            <div className="stats-box">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">lần thử nghiệm</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">365 ngày</span>
                <span className="stat-label">kiên nhẫn chờ đợi</span>
              </div>
            </div>
            <p className="story-text">
              Chậm, nhưng đầy cảm xúc. Mỗi bó hoa là một câu chuyện chúng tôi kể bằng đôi tay.
            </p>
          </div>
        </div>
      </section>

      {/* Why Dried Flowers */}
      <section className="about-section why-section">
        <div className="center-content">
          <div className="label-tag">TẠI SAO HOA KHÔ?</div>
          <h2 className="section-title">Bền vững hơn một khoảnh khắc</h2>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">♻️</div>
              <div className="stat-number">40%</div>
              <p className="stat-description">
                rác thải từ đóng gói hoa tươi
                <br />
                <em>Chúng tôi chọn tái sử dụng & tối giản</em>
              </p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">🌱</div>
              <div className="stat-big-number">12+ tháng</div>
              <p className="stat-description">
                thay vì 7 ngày với hoa tươi
                <br />
                <em>Hoa khô – lưu giữ dài lâu</em>
              </p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">💚</div>
              <div className="stat-number">100%</div>
              <p className="stat-description">
                tự nhiên phân hủy
                <br />
                <em>Không hóa chất, không thuốc nhuộm độc hại</em>
              </p>
            </div>
          </div>

          <div className="story-text centered">
            <p>
              Chúng tôi không chỉ bán hoa. Chúng tôi tạo ra những sản phẩm có "đời sống" – 
              sống trong không gian của bạn, sống trong ký ức, và khi hết đời, trở về với đất.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

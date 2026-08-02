# 🏍️ Mô-tôPro SaaS - Landing Page Quản Lý Showroom Motor PKL

Dự án Landing Page giới thiệu phần mềm quản lý và kinh doanh Showroom Xe Phân Khối Lớn (Motor PKL), được xây dựng theo tiêu chuẩn Web hiện đại, tối ưu Accessibility (WCAG) và cấu hình Design Tokens với Tailwind CSS v4.

---

## 👤 Thông Tin Sinh Viên
* **Họ và tên:** Nguyễn Lâm Nhựt Nam
* **Mã số sinh viên:** 2551050146
* **Lớp / Khóa:** K25 - Khoa Công nghệ Thông tin
* **Trường:** Đại học Mở TP.HCM (HCMOU)

---

## 🎨 Design Tokens (Cấu Hình Màu Sắc)

Dự án khai báo đầy đủ các Design Tokens trong `src/input.css` bằng directive `@theme`:

### 1. Màu Nhấn (Accent - Vàng sáp):
* `--color-accent-300`: `#f7d27a`
* `--color-accent-400`: `#f0b429`
* `--color-accent-500`: `#d99a15`

### 2. Màu Chữ & Nền (Ink / Surface / Muted):
* `--color-ink`: `#12211d`
* `--color-ink-invert`: `#eaf2ee`
* `--color-muted`: `#5c6f69`
* `--color-muted-invert`: `#93a8a1`

---

## 🛠️ Công Nghệ & Công Cụ Sử Dụng

| Công nghệ / Công cụ | Vai trò trong dự án |
| :--- | :--- |
| **HTML5 Semantic** | Xây dựng cấu trúc trang web chuẩn SEO & Accessibility (WCAG) |
| **Tailwind CSS v4** | Framework CSS biên dịch qua CLI (`@tailwindcss/cli`), sử dụng CSS-first configuration với `@theme` |
| **JavaScript / Node.js** | Môi trường quản lý gói phụ thuộc và chạy script build dev |
| **Git & GitHub** | Quản lý phiên bản mã nguồn (VCS) và lưu trữ dự án |
| **VS Code & Live Server** | Công cụ lập trình và chạy thử nghiệm thời gian thực |

---

## 🚀 Các Bước Đã Thực Hiện (Implementation Steps)

### 1. Khởi Tạo Dự Án & Cấu Hình Tailwind CSS v4
* Khởi tạo dự án Node.js với `package.json`.
* Cài đặt **Tailwind CSS v4** và cấu hình các **Custom Design Tokens** trong `src/input.css` bằng directive `@theme`:
  * **Brand Colors:** Brand main, Accent (Vàng sáp), Ink/Muted (Chữ & nền)...
  * **Typography:** Font family `Inter` chuẩn sans-serif.
  * **Custom Variables:** Radius, Muted colors, Line colors.
* Thiết lập lệnh biên dịch tự động trong `package.json`:
  ```json
  "scripts": {
    "dev": "npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch"
  }

```

### 2. Xây Dựng Khung Semantic HTML (10 Sections)

* Dựng cấu trúc trang hoàn toàn bằng thẻ Semantic HTML5, đáp ứng tiêu chuẩn Accessibility:
1. **Navbar Section:** Thanh điều hướng sticky với logo và các liên kết chính.
2. **Hero Section:** Tiêu đề chính `<h1>` duy nhất, mô tả giải pháp và nút Call-to-Action (CTA).
3. **Partners / Client Logos:** Danh sách thương hiệu tin dùng (`DUCATI`, `KAWASAKI`, `BMW MOTORRAD`...).
4. **Features Section:** 3 tính năng cốt lõi (Quản lý số khung VIN, Hợp đồng tự động, Lịch bảo dưỡng).
5. **Statistics Section:** Con số ấn tượng chứng minh hiệu quả vận hành.
6. **Testimonials Section:** Đánh giá từ khách hàng thực tế (`<blockquote>` & `<cite>`).
7. **Pricing Section:** Bảng giá 3 gói dịch vụ (Khởi Nghiệp, Chuyên Nghiệp, Chuỗi Showroom).
8. **FAQ Section:** Các câu hỏi thường gặp về dùng thử và bảo mật.
9. **CTA Section:** Banner kêu gọi hành động chuyển đổi cuối trang.
10. **Footer Section:** Thông tin bản quyền, liên kết phụ và thông tin tác giả.



### 3. Tối Ưu Hóa Accessibility (a11y)

* Tích hợp liên kết **"Skip to main content"** (`.sr-only`) hỗ trợ phím `Tab` và Screen Reader.
* Mỗi `<section>` đều được gán `aria-labelledby` nối trực tiếp với ID của Heading tương ứng.
* Thứ bậc Heading nhảy chuẩn từ `<h1>` -> `<h2>` -> `<h3>`, không bỏ tầng.

### 4. Styling & Hoàn Thiện Giao Diện

* Áp dụng toàn bộ class Tailwind v4 để dựng Layout Responsive (Grid & Flexbox).
* Thiết kế giao diện hiện đại, chuẩn SaaS với hiệu ứng Hover, Shadow, Gradient và Backdrop Blur.

---

## 📂 Cấu Trúc Thư Mục Dự Án

```text
tkw_2551050146_Nam/
├── dist/
│   └── output.css        # File CSS đã được Tailwind biên dịch
├── src/
│   └── input.css         # File CSS gốc chứa @import "tailwindcss" và @theme tokens
├── index.html            # Trang HTML Semantic chính
├── package.json          # Quản lý script và dependencies
├── README.md             # Tài liệu hướng dẫn dự án
└── .gitignore            # Khai báo bỏ qua node_modules/

```

---

## 💻 Hướng Dẫn Chạy Dự Án Cục Bộ (Local Setup)

1. **Clone repository về máy:**
```bash
git clone [https://github.com/2551050146nam-sudo/tkw_2551050146_Nam.git](https://github.com/2551050146nam-sudo/tkw_2551050146_Nam.git)
cd tkw_2551050146_Nam

```


2. **Cài đặt phụ thuộc:**
```bash
npm install

```


3. **Biên dịch CSS & Chạy chế độ Dev:**
```bash
npm run dev

```


4. Mở `index.html` bằng **Live Server** trên VS Code để xem giao diện trực tiếp trên trình duyệt.

```

---

### 📤 Đẩy file cập nhật lên GitHub:

Nam dán đè vào `README.md`, nhấn **`Ctrl + S`** rồi gõ 3 dòng lệnh quen thuộc này dưới Terminal:

```bash
git add README.md
git commit -m "docs: bo sung bang design tokens mau sac vao README.md"
git push origin main

```
# Starter Mô-tôPro — Phần mềm quản lý Showroom Motor PKL

Môn **Thực hành Thiết kế Web** · Trường Đại Học Mở TPHCM, Khoa CNTT

Đây là **kết quả dự án xuyên suốt các buổi học**, theo dõi tiến độ qua các tag `buoi-1`, `buoi-2` và các Pull Requests[cite: 1, 2, 5].  
Dự án: **Mô-tôPro** — Phần mềm quản lý Showroom Motor PKL.

---

## 1. Chạy dự án

```bash
npm install
npm run dev
```

Mở `index.html` bằng **Live Server** của VS Code. Đừng nháy đúp vào file: từ buổi 5 trở đi trang cần đọc dữ liệu qua HTTP.

**Để nguyên terminal đang chạy `npm run dev` suốt buổi.** Đây là lỗi số một: tắt terminal, sửa HTML, thấy không đổi gì, rồi kết luận Tailwind hỏng.

Kiểm tra nhanh xem đã chạy đúng chưa: mở `src/input.css`, đổi `--color-brand-600` sang màu bất kỳ, lưu lại. Navbar và các nút phải đổi màu ngay[cite: 2].

---

## 2. Trong này đã có sẵn gì

| Phần | Trạng thái |
|---|---|
| Cấu hình Tailwind v4, script `dev` / `build` | Xong[cite: 2] |
| `src/input.css` — Design token, lớp base, component | Xong[cite: 2] |
| Khung HTML semantic đầy đủ | Xong[cite: 2] |
| Navbar, Hero, Dải logo, Tính năng, Số liệu, Cảm nhận, Bảng giá, FAQ, CTA, Footer | **Hoàn thiện Layout Buổi 2**[cite: 2, 5] |
| `data/records.json` — Dữ liệu mẫu | Có sẵn, buổi 5 dùng[cite: 2] |
| Thư mục `js/` | Trống, buổi 4 dùng[cite: 2] |

---

## 3. Cấu trúc thư mục
index.html          Trang chính
src/input.css       Design token + component
dist/output.css     File Tailwind build ra
js/                 Thư mục JS (Buổi 4)
data/records.json   Dữ liệu mẫu (Buổi 5)
assets/             Ảnh và Icon SVG

---

4. Tiến độ hoàn thành   
[x] Buổi 1: Trích xuất Design Tokens, dựng khung HTML Semantic 10 section, style Navbar & Hero (tag: buoi-1)

[x] Buổi 2: Hệ thống Layout với Flexbox & Grid cho toàn bộ 10 section, responsive 1280px (tag: buoi-2)

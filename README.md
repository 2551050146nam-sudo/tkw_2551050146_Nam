# Starter Buổi 1 — Mô-tôPro

Môn **Thực hành Thiết kế Web** · Trường Đại Học Mở TPHCM, Khoa CNTT[cite: 4]

Đây là **kết quả của Buổi 1**, dùng làm điểm xuất phát cho Buổi 2[cite: 4].  
Dự án: **Mô-tôPro** — Phần mềm quản lý Showroom Motor PKL.

---

## 1. Chạy dự án

```bash
npm install
npm run dev
```[cite: 4]

Mở `index.html` bằng **Live Server** của VS Code[cite: 4]. Đừng nháy đúp vào file: từ buổi 5 trở đi trang cần đọc dữ liệu qua HTTP[cite: 4].

**Để nguyên terminal đang chạy `npm run dev` suốt buổi.** Đây là lỗi số một: tắt terminal, sửa HTML, thấy không đổi gì, rồi kết luận Tailwind hỏng[cite: 4].

---

## 2. Trong này đã có sẵn gì

| Phần | Trạng thái |
|---|---|
| Cấu hình Tailwind v4, script `dev` / `build` | Xong[cite: 4] |
| `src/input.css` — 20 design token, lớp base, component | Xong[cite: 4] |
| Khung HTML semantic đầy đủ | Xong[cite: 4] |
| Navbar, kể cả markup menu mobile | Xong, đã style[cite: 4] |
| Hero + khối đặc trưng "Phiếu đặt cọc xe" | Xong, đã style[cite: 4] |
| 8 section còn lại | Khung semantic thô, chưa style layout[cite: 4] |

---

## 3. Checklist Buổi 1

- [x] `npm run dev` chạy được; sửa HTML là CSS cập nhật[cite: 4]
- [x] `src/input.css` khai báo ít nhất 8 token màu và 2 phông chữ[cite: 4]
- [x] `index.html` có đủ khung 10 section, đúng một `<h1>`, thứ bậc heading không nhảy cóc[cite: 4]
- [x] Mỗi section có heading nối bằng `aria-labelledby`[cite: 4]
- [x] Navbar và hero khớp thiết kế ở 1440px[cite: 4]
- [x] Có commit rõ ràng và đã gắn tag `buoi-1`[cite: 4]
# Starter Buổi 2 — Mô-tôPro

Môn **Thực hành Thiết kế Web** · Trường Đại Học Mở TPHCM, Khoa CNTT[cite: 5]

Đây là **kết quả của Buổi 2**, hoàn thiện hệ thống Layout cho toàn trang[cite: 5].  
Dự án: **Mô-tôPro** — Phần mềm quản lý Showroom Motor PKL.

---

## 1. Chạy dự án

```bash
npm install
npm run dev
```[cite: 5]

---

## 2. Trong này đã có sẵn gì

| Phần | Trạng thái |
|---|---|
| Cấu hình Tailwind v4, script `dev` / `build` | Xong[cite: 5] |
| `src/input.css` — Design token, base, component nút/card/ticket | Xong[cite: 5] |
| Khung HTML semantic đầy đủ | Xong[cite: 5] |
| Navbar, Hero, Dải logo, Tính năng, Số liệu, Cảm nhận, Bảng giá, FAQ, CTA, Footer | **Đã hoàn thiện layout Flexbox & Grid**[cite: 5] |

---

## 3. Checklist Buổi 2

- [x] Đủ 10 section có bố cục, khớp thiết kế ở màn hình từ 1280px[cite: 5]
- [x] Không dùng `absolute` để xếp bố cục chính[cite: 5]
- [x] Không có giá trị spacing tùy ý ngoài scale[cite: 5]
- [x] Khoảng cách dùng `gap`, không dùng `margin` trên từng phần tử con[cite: 5]
- [x] Ba thẻ bảng giá cao bằng nhau, ba nút thẳng hàng[cite: 5]
- [x] Cảm nhận giữ `<figure>` / `<blockquote>` / `<cite>`; số liệu giữ `<dl>`[cite: 5]
- [x] Mọi SVG trang trí có `aria-hidden="true"`[cite: 5]
- [x] Đã gắn tag `buoi-2` và tạo Pull Request[cite: 1, 5]
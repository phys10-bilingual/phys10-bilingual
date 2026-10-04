# Phys10 Bilingual – Vật lí 10 song ngữ Việt – Anh

Học liệu số song ngữ Việt – Anh môn Vật lí 10 (SGK *Kết nối tri thức với cuộc sống*), học kì II: Chương IV–VII, Bài 23–34.
Tác giả: Mai Thị Trinh – Trường THPT Bùi Hữu Nghĩa, Cần Thơ. Có sử dụng công cụ AI hỗ trợ soạn bản nháp nội dung và viết mã; nội dung do tác giả rà soát theo SGK.

## Đưa lên GitHub Pages (làm một lần)

1. Đăng nhập GitHub bằng tài khoản của cô (chưa có thì đăng kí tại github.com).
2. Bấm **+** (góc trên phải) → **New repository**. Đặt tên, ví dụ `phys10-bilingual`; chọn **Public**; bấm **Create repository**.
3. Trong kho vừa tạo, bấm **uploading an existing file**. Mở thư mục đã giải nén trên máy, chọn **tất cả tệp và thư mục bên trong** (không chọn thư mục ngoài cùng), kéo thả vào trang. Chờ tải xong, bấm **Commit changes**.
4. Vào **Settings → Pages**. Ở mục *Branch* chọn `main` và `/ (root)`, bấm **Save**.
5. Chờ 1–2 phút, tải lại trang Settings → Pages: đường dẫn trang web hiện ở đầu, dạng `https://<tên-tài-khoản>.github.io/phys10-bilingual/`.

Kiểm tra: mở đường dẫn trên điện thoại, chọn một bài, đổi 3 mức ngôn ngữ, bấm vào thuật ngữ tô vàng.

## Các tệp

| Tệp | Nội dung |
|---|---|
| `index.html` | Trang chủ |
| `baihoc.html`, `bai.html?n=23` | Danh sách bài; trang một bài |
| `thuatngu.html` | Kho thuật ngữ: danh sách, thẻ ghi nhớ, kiểm tra 10 câu |
| `luyentap.html?c=4` | Đề luyện tập chương (trắc nghiệm, đúng – sai, trả lời ngắn) |
| `trochoi.html` | Trò chơi Ghép cặp, Nhanh tay (có chế độ Trình chiếu) |
| `gioithieu.html` | Giới thiệu, nguồn, cách dùng trên lớp |
| `data/ch4.js` … `data/ch7.js` | **Toàn bộ nội dung** của từng chương: bài học, thuật ngữ, đề luyện tập |
| `assets/app.css`, `assets/app.js` | Giao diện và mã dùng chung |
| `assets/img/` | Ảnh minh hoạ 4 chương (Wikimedia Commons, giấy phép CC; nguồn ghi ở trang Giới thiệu) |
| `sw.js`, `manifest.webmanifest` | Dùng ngoại tuyến, cài lên màn hình điện thoại |
| `HUONG-DAN-DU-LIEU.md` | Quy ước viết nội dung (khi sửa hoặc thêm bài) |

## Sửa nội dung

Mở tệp `data/chN.js` trên GitHub → bấm biểu tượng bút chì → dùng Ctrl+F tìm đoạn cần sửa → sửa chữ **bên trong dấu ngoặc kép**, không xoá dấu `"` `,` `{ }` `[ ]` → **Commit changes**. Sau 1–2 phút trang web cập nhật (tải lại trang bằng Ctrl+F5).

Khi thêm hoặc đổi tên tệp: thêm tên tệp vào danh sách `SHELL` trong `sw.js` và tăng số phiên bản (ví dụ `phys10-v3` → `phys10-v4`).

Tiến độ, điểm của học sinh chỉ lưu trên trình duyệt của từng máy; trang không thu thập thông tin cá nhân.

# Phys10 Bilingual — quy ước viết nội dung

Trang web học liệu song ngữ Việt – Anh môn Vật lí 10, SGK **Kết nối tri thức với cuộc sống** (KNTT), của giáo viên Mai Thị Trinh (THPT Bùi Hữu Nghĩa, Cần Thơ). Đợt đầu: các chương học kì II (Chương IV–VII, Bài 23–34).

## Nguyên tắc nội dung (bắt buộc)

1. **Kiến thức bám SGK KNTT**: tên bài, định nghĩa, định luật, công thức, kí hiệu, đơn vị đúng như sách. Viết lại bằng lời của mình (tóm tắt), **không chép nguyên văn đoạn dài** của sách (bản quyền). Câu định luật/định nghĩa ngắn được phép giữ sát lời sách.
2. Điều gì không có trong SGK mà vẫn muốn đưa vào: đánh dấu `"ngoaiSGK": true` trên khối đó (giao diện sẽ hiện nhãn "Ngoài SGK").
3. Kí hiệu như SGK: dấu nhân là dấu chấm (`F.s.cosα`, `m.g.h`); tốc độ là `υ` (upsilon), vectơ vận tốc `v⃗`; công suất là `𝒫` (P viết hoa kiểu script, khác trọng lượng P); động năng `W_{đ}` (chữ đ), thế năng `W_{t}`, cơ năng `W_{c}`; hiệu suất `H = W_{ci}/W_{tp}.100%`; lực đàn hồi `F_{đh} = k|Δℓ|` (chữ ℓ); khối lượng riêng `ρ`; áp lực `F_{N}`; áp suất khí quyển `p_{a}`; gia tốc hướng tâm `a_{ht}`, lực hướng tâm `F_{ht}`; độ dịch chuyển góc `θ`.
4. Tên đơn vị tiếng Việt như SGK: jun (J), oát (W), niutơn (N), rađian (rad), héc (Hz), paxcan (Pa) (SGK tr.132; bảng SI tr.5 in "pascan" — dùng "paxcan"), kilôoát giờ viết `kW.h`.
5. Số: tiếng Việt dùng dấu phẩy thập phân (`9,8 m/s²`), tiếng Anh dùng dấu chấm (`9.8 m/s²`). Công thức (trường `f`) không chứa số thập phân nếu có thể.
6. **Tiếng Anh**: chuẩn thuật ngữ Vật lí quốc tế (theo cách dùng của chương trình Cambridge International AS & A Level Physics 9702 và IGCSE), chính tả Anh – Anh (metre, vaporise...). Ví dụ: work done, power, kinetic energy, gravitational potential energy, mechanical energy, principle of conservation of mechanical energy, efficiency, useful energy, wasted energy, momentum, impulse, closed (isolated) system, principle of conservation of momentum, elastic collision, perfectly inelastic collision (va chạm mềm), radian, angular displacement, angular speed, period, frequency, centripetal force, centripetal acceleration, deformation, elastic deformation, elastic limit, tensile deformation, compressive deformation, spring constant, Hooke's law, density, pressure, normal force, atmospheric pressure, free surface, fluid.
   Câu tiếng Anh ngắn, rõ, trình độ B1–B2 (học sinh lớp 10 Việt Nam đọc được).
7. **IPA** theo giọng Anh – Anh (Oxford Learner's Dictionaries), có dấu trọng âm `ˈ ˌ`, đặt trong `/.../`. Cụm từ: ghi IPA cho cả cụm. Chỉ ghi IPA khi chắc chắn; nếu không chắc để `""`.
8. Mọi câu hỏi phải có đáp án đúng duy nhất, đã tự giải lại; số liệu tính lại cẩn thận (ghi g = 9,8 hay 10 m/s² rõ trong đề).
9. Không bịa số liệu thực tế (kỉ lục, hiệu suất...) ngoài những gì SGK in; nếu thêm phải `ngoaiSGK`.

## Định dạng tệp

Mỗi chương một tệp `data/chN.js` (N = 4, 5, 6, 7), JavaScript thuần, mã hoá UTF-8:

```js
P10.addChapter({
  chapter: { n: 4, vi: "Năng lượng, công, công suất", en: "Energy, work and power", page: 90 },
  lessons: [ /* các bài, xem dưới */ ],
  terms:   [ /* thuật ngữ */ ],
  quiz:    { /* đề luyện tập chương */ }
});
```

### Bài học

```js
{
  n: 23, vi: "Năng lượng. Công cơ học", en: "Energy. Mechanical work",
  pages: "91–95",            // trang SGK
  practical: false,          // true cho bài thực hành (Bài 30)
  intro: { vi: "...", en: "..." },        // 1–2 câu dẫn vào bài (tình huống mở đầu, viết lại)
  goals: [ { vi: "...", en: "..." } ],    // 2–3 mục tiêu (dựa vào khung "Em có thể"/"Em đã học")
  blocks: [ /* nội dung, theo thứ tự các mục của SGK */ ],
  summary: [ { vi: "...", en: "..." } ],  // 3–5 ý "Em đã học"
  check: [ /* đúng 5 câu tự kiểm tra trắc nghiệm */ ]
}
```

Các loại khối (`t`):

| t | Trường | Ý nghĩa |
|---|---|---|
| `h` | `vi`, `en` | Tiêu đề mục (ví dụ "I. Năng lượng") |
| `p` | `vi`, `en` | Đoạn văn (2–5 câu). Có thể đánh dấu thuật ngữ |
| `law` | `vi`, `en`, `name:{vi,en}` | Định nghĩa/định luật/kết luận quan trọng (khung nổi bật) |
| `f` | `f`, `vi`, `en`, `sym:[{s, vi, en, u}]`, `no` | Công thức. `f` là chuỗi công thức (nếu trong công thức có chữ, ví dụ "hằng số", thì viết `f: { vi: "...", en: "..." }`); `vi/en` là 1 câu nói công thức dùng khi nào; `sym` giải thích kí hiệu và đơn vị; `no` là số hiệu SGK, ví dụ `"23.1"` (bỏ trống nếu SGK không đánh số) |
| `note` | `vi`, `en` | Lưu ý (khung "!" của SGK hoặc lỗi hay gặp) |
| `table` | `head:[{vi,en}]`, `rows:[[{vi,en}]]` | Bảng |
| `ex` | `vi:{q,a}`, `en:{q,a}` | Bài tập ví dụ có lời giải (`q` đề, `a` lời giải ngắn, các bước cách nhau bằng `\n`) |

Mọi khối có thể thêm `ngoaiSGK: true`.

**Cú pháp trong chuỗi công thức và văn bản**: chỉ số dưới `_{...}`, chỉ số trên `^{...}`, vectơ `vec{F}`, căn `√(...)`, phân số viết `A/t`. Ví dụ: `W_{đ} = ½m.υ^{2}`, `vec{p} = m.vec{v}`.

**Đánh dấu thuật ngữ trong đoạn văn**: `[[id|chữ hiển thị]]`, ví dụ tiếng Việt `[[work|công]]`, tiếng Anh `[[work|work done]]`. `id` phải có trong danh sách `terms` (của bất kì chương nào). Mỗi đoạn chỉ đánh dấu lần xuất hiện đầu tiên của một thuật ngữ, tối đa 3–4 thuật ngữ/đoạn.

### Câu tự kiểm tra (5 câu/bài)

```js
{ q: {vi, en}, o: [{vi,en},{vi,en},{vi,en},{vi,en}], a: 0, why: {vi, en} }
```
`a` là chỉ số đáp án đúng (0–3). Trộn vị trí đáp án đúng giữa các câu. Mức độ: 2 nhận biết, 2 thông hiểu, 1 vận dụng (có tính toán). Ít nhất 1 câu hỏi về **thuật ngữ tiếng Anh** (ví dụ "Thuật ngữ tiếng Anh của 'động năng' là gì?").

### Thuật ngữ

```js
{ id: "kinetic-energy", l: 25, vi: "Động năng", en: "kinetic energy", ipa: "/kɪˌnetɪk ˈenədʒi/",
  pos: "n",            // n (danh từ/cụm danh từ), v, adj
  sym: "W_{đ}", unit: "J",
  defVi: "Năng lượng mà vật có được do chuyển động.",
  defEn: "The energy an object has because it is moving.",
  exEn: "A moving car has kinetic energy.", exVi: "Ô tô đang chạy có động năng." }
```
8–12 thuật ngữ mỗi bài lí thuyết (bài thực hành 4–6), chọn đúng thuật ngữ trọng tâm của bài. `id` viết thường, gạch nối, không dấu, duy nhất toàn trang (nếu trùng với chương khác thì chỉ khai báo ở chương xuất hiện trước, các chương sau vẫn được dùng `[[id|...]]`).

### Đề luyện tập chương

```js
quiz: {
  minutes: 25,
  mcq:   [ { l: 23, q:{vi,en}, o:[4×{vi,en}], a: 2, why:{vi,en} } ],               // 10 câu
  tf:    [ { l: 25, stem:{vi,en}, items:[ { s:{vi,en}, a:true, why:{vi,en} } ×4 ] } ], // 2 câu, mỗi câu 4 ý a–d
  short: [ { l: 26, q:{vi,en}, ans: "1,26", tol: 0.01, unit: "m/s", why:{vi,en} } ]     // 2 câu trả lời ngắn (đáp số là số, VI dấu phẩy; tol = sai số tuyệt đối cho phép)
}
```
Cấu trúc theo dạng đề kiểm tra hiện hành: trắc nghiệm nhiều lựa chọn, đúng – sai, trả lời ngắn. `l` = số bài liên quan (để dẫn về bài khi làm sai).
